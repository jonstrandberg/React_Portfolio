import React from "react";
import styled from 'styled-components';
import pokemonTracker from './images/PokemonTracker.png'
import GithHub from './images/GitHub.png'
import ArchetypalRecords from './images/ArchetypalRecords.png'
import './Projects.css'


const Projects = () => {

    const Title = styled.h1`
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    `

    const Margin = styled.div`
        margin-left: 5%;
    `


    return (
        <Margin> 
        <div className="header-container">
        <Title className="projects-header">PROJECTS</Title>
        </div>
        <div className="projects-container">
            <div className="project-item">
                <h2 className="project-item-header">
                    Archaetypal Records Stock Management App
                </h2>
            </div>
        <div className="project-image-container">
            <img className="Archetypal-image" src={ArchetypalRecords} alt="Pokemon Tracker" />
        </div>
        <div className="github-logo">
        <a className="gitHub-link" href="https://github.com/jonstrandberg/Python_project_Week5"><img className="Github-button" src={GithHub} alt="GitHub" /></a> 
        </div>
        <article>
        <h4>Project Features</h4>
        <h5>JavaScript, React, HTML, CSS</h5>
        <p>The Archaetypal Records stock management app was my first full stack application</p>
        </article>
        </div>
        <div className="projects-container">
            <div className="project-item">
                <h2 className="project-item-header">
                    PokemonTracker
                </h2>
            </div>
        <div className="project-image-container">
            <img className="PokeTracker-image" src={pokemonTracker} alt="Pokemon Tracker" />
        </div>
        <div className="github-logo">
        <a className="gitHub-link" href="https://github.com/jonstrandberg/Pokemon_Tracker_hw_week_7"><img className="Github-button" src={GithHub} alt="GitHub" /></a> 
        </div>
        <div className="project-description" >
        <article>
        <h4>Project Features</h4>
        <h5>JavaScript, React, HTML, CSS</h5>
        <p>A simple app developed using a Pokemon API. This was developed as part of a homework assignment on CodeClan course </p>
        </article>
        </div>
        </div>

        {/* Need to replace this image after group project */}

        <div className="github-logo">
        <a className="gitHub-link" href="https://github.com/jonstrandberg/Pokemon_Tracker_hw_week_7"><img className="Github-button" src={GithHub} alt="GitHub" /></a> 
        </div>
        <div className="project-description" >
        <article>
        <h4>Group Project - Coming Soon</h4>
        <h5>JavaScript, React, HTML, CSS</h5>
        <p>A simple app developed using a Pokemon API. This was developed as part of a homework assignment on CodeClan course </p>
        </article>
        </div>
        <br></br>
        <br></br>
        <br></br>
        </Margin>

    )

}

export default Projects