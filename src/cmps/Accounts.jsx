

import React, { createContext, useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js"
import { Pool } from '../services/userService'

export const AccountContext = createContext();

export function Accounts(props) {



    const getSession = async () => {
        await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        reject()
                    } else {
                        resolve(session)
                    }
                })
            } else {
                reject()
            }
        })
    }

    const logout = () => {
        const user = Pool.getCurrentUser();
        if (user) {
            user.signOut();
        }
    }

    const authenticate = async (Username, Password) => {
        await new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool })
            const authDetails = new AuthenticationDetails({ Username, Password })

            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log('onSuccess:', data);
                    resolve(data);
                    window.location.replace('/todo')
                },
                onFailure: err => {
                    console.error('onFailure: ', err)
                    reject(err)
                },
                newPasswordRequired: data => {
                    console.log('newPasswordRequired', data);
                    resolve(data)
                }
            })
        })
    }

    return <AccountContext.Provider value={{ authenticate, getSession, logout }}>
        {props.children}
    </AccountContext.Provider>


}