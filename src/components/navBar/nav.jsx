import React from 'react'
import "./nav.css"

export default function Nav() {

    const email = JSON.parse(localStorage.getItem("user"))

    return (
        <div>
            <nav id="navbar-exemplo2" className="navbar navbar-light bg-light mt-1">
                <a className="navbar-brand" href="/">
                    <i class="fa-solid fa-house"></i>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="/sobre">Sobre</a>
                    </li>
                    <li className="nav-item">
                        {!email ? <a className="nav-link" href="/form">Cadastre-se</a> : ""}
                    </li>
                    <li className="nav-item">
                        {!email ? <a className="nav-link" href="/login">Login</a> : ""}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/conta'>
                            <i class="fa-solid fa-gear text-primary"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
