
import React, { useState } from "react"
import { Login } from "../cmps/Login"
import { Signup } from "../cmps/Signup"
import { Accounts } from "../cmps/Accounts"
import { Status } from "../cmps/Status"

export function HomePage() {


    return <section className="home-page">
        <Accounts>
            <Status />
            {/* <Signup />
            <Login /> */}
        </Accounts>
    </section>
}