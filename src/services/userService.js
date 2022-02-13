

import { CognitoUserPool } from "amazon-cognito-identity-js"

export const poolData = {
  UserPoolId: 'us-east-1_JX0YQWJMw',
  ClientId: '5b2oj6sj4i8jor0i6lcf6hno2v'
}

export const Pool = new CognitoUserPool(poolData)

