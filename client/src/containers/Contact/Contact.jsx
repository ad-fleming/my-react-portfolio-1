import React from "react"
import "./contact.css"

export default function Contact(){
    return (
        <main className="ml-3">
          <br />
          <br />
          <br />
            <article className="container row justify-content-between d-flex col-12 row mx-0">
              <div className="col-12 mb-5 col-md-6 contactCard card"> 
                <h1 id="contentTitle">Contact Me</h1>
                <hr />
                <div className="card-body">
                    <h2>Name: Alex Fleming</h2>
                    <br/>
                    <h2>Phone: 678-735-1137</h2>
                    <br />
                    <h2>Email: adfleming9@gmail.com</h2>
                </div>
                <br/>               
              </div>
              <div className="col-12 col-md-4 mr-5 d-flex justify-content-start align-items-center card followMeCard">
                <h3 className="mb-4 mt-4 text-center">Want to check in on my progress?</h3>
                <h4 className="mb-4 text-center">Add me on LinkedIn and GitHub!</h4>
                <br/>
                <br/>
                <h2 className="text-center"><a href="https://www.linkedin.com/in/alexanderfleming0919/">LinkedIn</a></h2>
                <h2 className="text-center"><a href="https://github.com/ad-fleming">GitHub</a></h2> 
                <h4 className="mb-4 text-center">Please find a link to my resume below</h4>
                <h2 className="mb-4 text-center"><a href="https://github.com/ad-fleming/updated-portfolio/raw/52ba77ca24f1fd8e36fc5d349cebf54fac89a17e/Alexander%20Fleming%20Resume%20Oct-2020.pdf" download="download">Resume</a></h2>
              </div>

            </article>
            

          </main>
    )
}