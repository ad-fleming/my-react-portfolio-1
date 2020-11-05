import React from "react"
import { Link } from "react-router-dom"
import About from "../../containers/About/About"
import "./home.css"

export default function Home(){
    return (
        <main className=" d-flex align-items-center">
                <div className="container ml-2 col-md-4">
                    <h1 className="myName"><Link to="/about">I'm Alex</Link></h1>
                    <h4 className="myRole">Web Developer</h4>
                </div>
        </main>
    )
}