/**
 * @flow
 * @relayHash 79bbde8076595e632a4793e56a9b0d1d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type Repro_UserFriendsPaginationQueryResponse = {|
  +user: ?{| |};
|};
*/


/*
query Repro_UserFriendsPaginationQuery(
  $ownerId: ID!
  $cursor: ID
  $count: Int
) {
  user: node(id: $ownerId) {
    __typename
    ...Repro_user_5zmAh
    id
  }
}

fragment Repro_user_5zmAh on User {
  id
  name
  email
  friends(after: $cursor, first: $count) {
    edges {
      ... on FriendEdge {
        node {
          id
          owner {
            name
            id
          }
        }
        cursor
      }
    }
    ... on FriendConnection {
      edges {
        cursor
        node {
          __typename
          id
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "ownerId",
        "type": "ID!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cursor",
        "type": "ID",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "Repro_UserFriendsPaginationQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "user",
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "ownerId",
            "type": "ID!"
          }
        ],
        "concreteType": null,
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Repro_user",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "ownerId",
                "variableName": "ownerId",
                "type": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "Repro_UserFriendsPaginationQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "ownerId",
        "type": "ID!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cursor",
        "type": "ID",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "Repro_UserFriendsPaginationQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "user",
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "ownerId",
            "type": "ID!"
          }
        ],
        "concreteType": null,
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "User",
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
                "name": "email",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "ID"
                  },
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "count",
                    "type": "Int"
                  }
                ],
                "concreteType": "FriendConnection",
                "name": "friends",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "FriendEdge",
                    "name": "edges",
                    "plural": true,
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
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "FriendConnection",
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "FriendEdge",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "cursor",
                            "storageKey": null
                          },
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
                                "name": "__typename",
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
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "PageInfo",
                        "name": "pageInfo",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "endCursor",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "hasNextPage",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ]
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "ID"
                  },
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "count",
                    "type": "Int"
                  }
                ],
                "handle": "connection",
                "name": "friends",
                "key": "Blabla_friends",
                "filters": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query Repro_UserFriendsPaginationQuery(\n  $ownerId: ID!\n  $cursor: ID\n  $count: Int\n) {\n  user: node(id: $ownerId) {\n    __typename\n    ...Repro_user_5zmAh\n    id\n  }\n}\n\nfragment Repro_user_5zmAh on User {\n  id\n  name\n  email\n  friends(after: $cursor, first: $count) {\n    edges {\n      ... on FriendEdge {\n        node {\n          id\n          owner {\n            name\n            id\n          }\n        }\n        cursor\n      }\n    }\n    ... on FriendConnection {\n      edges {\n        cursor\n        node {\n          __typename\n          id\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
