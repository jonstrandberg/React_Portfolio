import React from "react";
import Typewriter from "typewriter-effect";
import './Home.css'
import styled from "styled-components";

const Home = () => {

    const Name = styled.h1`
    font-family: 'Noto Sans', sans-serif;
    font-weight: bold;
    color: white;
    position: absolute;
    top: 35%;
    left: 40%;
    `


    return (
        <div className="Page">
        <Name>Hi everyone, I'm Jonathan</Name>
        <div className="Home">
        <Typewriter 
            onInit={(typewriter) => {
            typewriter.typeString("Junior Software Developer").start();
            typewriter.pauseFor(2000)
            typewriter.deleteAll()
            typewriter.typeString("Professional Software Development Graduate")
            typewriter.pauseFor(2000)
            typewriter.deleteAll()
            typewriter.typeString("CodeClan Graduate")
            typewriter.pauseFor(2000)
            typewriter.deleteAll()
            typewriter.typeString("Aspiring Front-End Developer")
            typewriter.pauseFor(2000)
            typewriter.deleteAll()
            typewriter.loop=(5)
            typewriter.typeString("Junior Software Developer").start();
        }}
        />
        </div>
        </div>
    )

}

export default Home