import React from "react"
import { Link } from "react-router-dom"

export function Header() {
    return <section className="header-container">

        <Link to='/' className="logo">doApp</Link>
        <nav>
        <Link to='/'>home</Link>
        <Link to='/todo'>todos</Link>
        </nav>
    </section>
}