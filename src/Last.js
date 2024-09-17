import React from 'react';
import './Last.css';

function Last() {
  return (
    <div className="container">
     <header className="header">
      <p className="pr">3/3</p>
      <h2 className="head">Great, so what kind of work are you here to do?</h2>
      <hr className="hline"></hr>
     </header>
     <main className="main">
      <div className="bx1">
        <p className="px1">Select 1 category</p>
        <div className="bx1c">
          <p className="k">Artificial Intelligence</p>
          <p className="k">App Developement</p>
          <p className="k">Cyber Security</p>
          <p className="k">Data Science</p>
          <p className="k">Design & Creactive</p>
          <p className="k">Web Developement</p>
        </div>
      </div>
      <div className="vline"></div>
      <p className="war">Select 1 to 3 specialities</p>
     </main>

     <footer className="foot">
      <button>ADD YOUR SKILLS</button>
     </footer>
    </div>
  );
}

export default Last;
