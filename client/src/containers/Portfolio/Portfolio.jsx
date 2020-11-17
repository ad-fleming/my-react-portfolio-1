import React from "react";
import "./portfolio.css"
import ProjectCard from "../../components/Project-Card/ProjectCard";
import passwordGen from "../../images/password-gen.png"
import scheduler from "../../images/scheduler.png"
import weatherApp from "../../images/weatherapp.png"
import project1 from "../../images/project-1.png"
import burgerApp from "../../images/burger-start.png"
import employee from "../../images/employee.png"
import cogs from "../../images/cogs.png"
import onlydungeons from "../../images/onlydungeons.png"



export default function Portfolio() {
  return (
    <main>
      <article className="container col-12 ml-2 mb-5">
      <div class="row d-flex justify-content-center">
                <div class="col-sm-9">
                  <div class="jumbotron">
                    <h1 class="display-4">Under Construction!</h1>
                    <p class="lead">I'm on the grind! This portfolio page is under construction while I attend the <a href="https://bootcamp.pe.gatech.edu/coding/">Georgia Tech Coding BootCamp</a>!</p>
                    <hr class="my-4" />
                    <p>It's a work in progress and I'm loving it! Check out the link to my Git Hub Repository below to see my progress.</p>
                    <a class="btn jumbotronBtn btn-outline-dark btn-md" href="https://github.com/ad-fleming" role="button">My GitHub</a>
                  </div>
                </div>
              </div>
      </article>

      <div className="row mt-3 d-flex justify-content-around">
            <ProjectCard
            projectName="OnlyDungeons"
            projectDescription="OnlyDungeons helps connect tabletop gaming community to find and join games with ease."
            projectLink="https://github.com/ad-fleming/OnlyDungeons2"
            projectImage={onlydungeons}
            />
            <ProjectCard
            projectName="COGS Inventory Managment"
            projectDescription="COGS is an inventory management solution designed for small-business owners."
            projectLink="https://github.com/ad-fleming/COGS-Inventory-Management"
            projectImage={cogs}
            />
        </div>
        

        <div className="row mt-3 d-flex justify-content-around">
            <ProjectCard
            projectName="Play't Safe"
            projectDescription="This app helps prevent your date from dying of either allergies or boredom! Get dinner and movie ideas in one stop."
            projectLink="https://github.com/ad-fleming/Project-1"
            projectImage={project1}
            />
            <ProjectCard
            projectName="Full Stack Burger Tracker"
            projectDescription="This app is a fullstack application that allows users to track burgers they'd like to eat and tracks them in a SQL Database."
            projectLink="https://github.com/ad-fleming/burger-devourer-app"
            projectImage={burgerApp}
            />
            <ProjectCard
            projectName="Employee Management CLI"
            projectDescription="This CLI app was developed to let users track company employee information via their terminal."
            projectLink="https://github.com/ad-fleming/Employee-Management-System"
            projectImage={employee}
            />
        </div>

        <div className="row d-flex justify-content-around">
            <ProjectCard
            projectName="Password Generator"
            projectDescription="This basic application generates randomized passwords based on user inputs."
            projectLink="https://github.com/ad-fleming/javaScript-password-generator"
            projectImage={passwordGen}
            />
            <ProjectCard
            projectName="Workday Scheduler"
            projectDescription="This basic day planner utilizes local storage and Moment js to save and display tasks throughout your day!"
            projectLink="https://github.com/ad-fleming/calendar-application"
            projectImage={scheduler}
            />
            <ProjectCard
            projectName="Weather Dashboard"
            projectDescription="Search by city name to get current and 5-day forecasts around the world!"
            projectLink="https://github.com/ad-fleming/weather-dashboard-app"
            projectImage={weatherApp}
            />
        </div>

        
    </main>
  );
}
