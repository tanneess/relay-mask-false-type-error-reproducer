// @flow
import React from 'react';
import * as devTools from 'relay-devtools';
import * as uuid from "uuid";
import type {Repro_user} from "./__generated__/Repro_user.graphql.js";
import {
    createPaginationContainer, graphql,
    QueryRenderer, ReadyState, RelayPaginationProp
} from 'react-relay';
import {
    ConnectionHandler,
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';
import {commitMutation} from 'react-relay/compat';
// Useful for debugging, but remember to remove for a production deploy.
devTools.installRelayDevTools();

const graphql_Repro_FriendListItemFragment=graphql`
    fragment Repro_FriendListItemFragment on FriendEdge
    {
        node {
            id
            owner {
                name
            }
        }
        cursor
    }
`;// To avoid warning

const creteFriendMutation=graphql`mutation Repro_createFriendMutation($input:CreateFriendInput!){
    createFriendRelay(input:$input){
        friendEdge{
            ...Repro_FriendListItemFragment
        }
    }
}`;

type Props = {
    user: Repro_user,
    relay:RelayPaginationProp,
}


class RenderPagination  extends React.Component<Props> {

    constructor(props,ctx){
        super(props,ctx);
    }

    sharedUpdate=(store)=>{
        const payload = store.getRootField('createFriendRelay');
        const newEdge = payload.getLinkedRecord('FriendEdge');
        const userProxy = store.get(this.props.user.id);
        const conn = ConnectionHandler.getConnection(
            userProxy,
            'Blabla_friends', // This is the connection identifier, defined here: https://github.com/relayjs/relay-examples/blob/master/todo/js/components/TodoList.js#L68
        );
        ConnectionHandler.insertEdgeAfter(conn, newEdge);
    }

    addOne=()=>{
        const input={
            clientMutationId:""+Math.random(),
            ownerId:"123",
        }
        const optimisticResponse={
            'createFriendRelay': {
                'FriendEdge': {
                    'node': {
                        'id': uuid.v4(),
                        'owner': this.props.user,
                    }, 'cursor': uuid.v4()
                }
            }
        }
        commitMutation(
            this.props.relay.environment,
            {
                mutation:creteFriendMutation,
                onCompleted:()=>{
                    console.log("Got the mutation done :)");
                },
                variables:{
                    input:input
                },
                optimisticResponse,
                optimisticUpdater:this.sharedUpdate,
                updater:this.sharedUpdate
            }
        )
    };

    render() {
        const props=this.props;
        if (props.relay.isLoading()) {
            return <h1>Loading</h1>
        }
        else if (props.user) {
            return (
                <div>
                    <ul>
                        {props.user.friends.edges.map(edge => {
                            return <li key={edge.cursor}>{edge.node.id}</li>
                        })}
                    </ul>
                    <button onClick={this.loadMore}>loadMore</button>
                    <button onClick={this.addOne}>Add</button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>Strange state where the data is no there but we are not loading...</h1>
                    <button onClick={this.loadMore}>Load more</button>
                </div>
            )
        }
    }
    loadMore=()=>{
        this.props.relay.loadMore(1,error =>{
            if(error)
                console.error(error);
            else {
                console.log("Got the result");
                this.forceUpdate();
            }
        });
    }
}

function renderRoot({error,props}){
    if(error){
        console.error(error);
        return <pre>Error: {error.message}</pre>
    }
    else {
        if (props) {

            return <PaginatedComponent {...props}/>
        }
        else
            return <h1>Loading</h1>
    }
}

const PaginatedComponent=createPaginationContainer
(
    // TODO name & email should be lower
    RenderPagination,
    {

        user:graphql`fragment Repro_user on User
        @argumentDefinitions(
            count: {type: "Int", defaultValue: 10}
            cursor: {type: "ID"}
        )
        {
            id
            name
            email
            friends(after:$cursor,first:$count) @connection(key:"Blabla_friends") {
                edges {
                    ...Repro_FriendListItemFragment @relay(mask:false)
                }
            }

        }`},
    {
        getVariables(props, pageInfo, fragmentVariables) {
            // TODO These are not used it would appear
            console.log("props HELLO"+props);
            return {
                count:pageInfo.count,
                cursor:pageInfo.cursor,
                ownerId: fragmentVariables.ownerId, // Needed for the fetch more query
            };
        },
        // Query for fetching next page
        query:graphql`query Repro_UserFriendsPaginationQuery($ownerId:ID!,$cursor:ID, $count:Int) {
            user:node(id:$ownerId){
                ...Repro_user @arguments(cursor:$cursor,ownerId:$ownerId,count:$count)
            }
        }`,
    }
);

export default function App(){
    return (
        <QueryRenderer
            environment={modernEnvironment}
            query={graphql`query Repro_query_Query($ownerId:ID!,$cursor:ID,$count:Int) {
                user:node(id:$ownerId){
                    ...Repro_user @arguments(cursor:$cursor,count:$count,ownerId:$ownerId)
                }
            }`}
            variables={{
                ownerId:"123",
                cursor:"0",
                count:2
            }}
            render={renderRoot}
        />
    )
}

/*
    BOILERPLATE
 */

function fetchQuery (
    operation,
    variables
) {
    return fetch('/backend/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json();
    });
}


const modernEnvironment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});