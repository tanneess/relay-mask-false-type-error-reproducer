/**
 * @flow
 * @relayHash cb7b2647691c02c216516e7728db2117
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type Repro_createFriendMutationVariables = {|
  input: {
    clientMutationId: string;
    ownerId: string;
  };
|};
export type Repro_createFriendMutationResponse = {|
  +createFriendRelay: ?{|
    +friendEdge: {| |};
  |};
|};
*/


/*
mutation Repro_createFriendMutation(
  $input: CreateFriendInput!
) {
  createFriendRelay(input: $input) {
    friendEdge {
      ...Repro_FriendListItemFragment
    }
  }
}

fragment Repro_FriendListItemFragment on FriendEdge {
  node {
    id
    owner {
      name
      id
    }
  }
  cursor
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateFriendInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "Repro_createFriendMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateFriendInput!"
          }
        ],
        "concreteType": "CreateFriendOutput",
        "name": "createFriendRelay",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "FriendEdge",
            "name": "friendEdge",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Repro_FriendListItemFragment",
                "args": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "Repro_createFriendMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateFriendInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "Repro_createFriendMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateFriendInput!"
          }
        ],
        "concreteType": "CreateFriendOutput",
        "name": "createFriendRelay",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "FriendEdge",
            "name": "friendEdge",
            "plural": false,
            "selections": [
              {
                "kind": "InlineFragment",
                "type": "FriendEdge",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Friend",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "name": "owner",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "cursor",
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation Repro_createFriendMutation(\n  $input: CreateFriendInput!\n) {\n  createFriendRelay(input: $input) {\n    friendEdge {\n      ...Repro_FriendListItemFragment\n    }\n  }\n}\n\nfragment Repro_FriendListItemFragment on FriendEdge {\n  node {\n    id\n    owner {\n      name\n      id\n    }\n  }\n  cursor\n}\n"
};

module.exports = batch;
