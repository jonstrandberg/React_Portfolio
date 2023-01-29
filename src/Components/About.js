import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './About.css'


const About = () => {

  return (
      <div>
          <h2 className='About container'>Hi I'm Jonathan</h2>
          <article>
          <p className=''>I'm a Junior Software Developer currently at CodeClan doing a Proffesseional Software Development course. Looking forward to embarking on an exciting career in Software Engineering.</p>
          <p>After years of working in Marketing in a range of different industries, I began working as an ICT Technician and it is here where I discovered a love for problem solving and analytical thinking</p>
          <p>This lead me to trial some online coding courses, which kick-started a passion for coding and a drive to continue develop and learn. </p>
          </article>
      </div>
  );
};

export default About