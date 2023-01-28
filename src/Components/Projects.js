import React from "react";
import styled from 'styled-components';
import pokemonTracker from './images/PokemonTracker.png'

const Projects = () => {



    return (
        <div> 
        <div className="header-container">
        <h1 className="projects-header">PROJECTS</h1>
        </div>

        <div className="projects-container">
            <div className="project-item">
                <h2 className="project-item-header">
                    PokemonTracker
                </h2>
            </div>

        <div className="project-image-container">
            <img src={pokemonTracker} alt="Pokemon Tracker" />
        </div>

        </div>
        <a className="gitHub-link" href="https://github.com/jonstrandberg/Python_project_Week5">GitHub</a>
        <article>
        <h4>JavaScript, React, HTML, CSS</h4>
        <p>A simple app developed using a Pokemon API. This was developed as part of a homework assignment on CodeClan course </p>
        </article>



        <div className="projects-container">
            <div className="project-item">
                <h2 className="project-item-header">
                    Archaetypal Records Stock Management App
                </h2>
            </div>

        //image will go in here but it's now working

        </div>
        <a className="gitHub-link" href="https://github.com/jonstrandberg/Python_project_Week5">GitHub</a>
        <article>
        <h4>Python, Flak, SQL, HTML & CSS</h4>
        <p>The Archaetypal Records stock management app was my first full stack application</p>
        </article>
        </div>
        

    )

}

export default Projects