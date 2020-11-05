import React from "react";
import "./about.css"
import AboutPic from "../../images/about.jpg"


export default function About() {
  return (
    <main className="ml-3">
      <br />
      <br />
      <br />
      <article className="container mt-auto mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-11 col-sm-7 card">
            <div className="card-body">
              <h1 id="contentTitle">About Me</h1>
              <hr />
              <p>
                <img
                  className="img-thumbnail about-me-img float-left mr-3"
                  id="about-me-img"
                  src={AboutPic}
                  alt="Alex Fleming"
                />
              </p>
              <p>
                I'm Alex. I live in Atlanta, GA with my wife, our two dogs,
                Gizmo and Milly, and our cat, Sox. I'm currently
                hard at study to become a full-stack web developer after
                deciding to mix it up after being on the other side of the
                recruiting desk. I have a background working across multiple
                industries including Insurance, Mortgage and Banking, as well as
                Staffing. I'm a mixed bag that likes a quiet space and a busy
                mind. 2020 has been pivotal in so many ways for so many people.
                After some hard knocks, I decided to seize an opportunity to
                explore the world of web development and I could not be happier.
              </p>
              <p>
                I'm rapidly acquiring skills in Front, and Back End Web
                Development, and hope to find myself on a new journey
                professionally. Please check out my portfolio page to take a
                look at what I've been up to, and if you'd like to get in touch,
                please contact me via my contact page!
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
