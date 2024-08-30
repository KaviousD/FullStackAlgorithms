import React from 'react';
import { Link } from 'react-router-dom';

function Splash() {
  return (
    <div>
      <header>
        <h1>Kavious's Algorithm Workshop</h1>
        <div className="image-box">
          <img src="/images/cat.png" alt="pic of a cat" width={600} height={400} />
        </div>
      </header>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/functions">Functions</Link>
      </nav>
      <div className="bio-box">
        <h2>About Kavious's Space-Themed Algorithmic Exploration</h2>
        <p>
          Welcome to a journey through the cosmos of algorithms, where logic meets creativity, and solutions are crafted with the precision of a spacecraft navigating through the stars. In this space, your mind will expand as you explore the depths of computational problem-solving, guided by the light of Kavious's Algorithms Brain Fix.
        </p>
        <p>
          Whether you are calculating Fibonacci sequences or navigating the complexities of data structures, this environment will make you feel like a true explorer of the algorithmic universe. Psst check out the movie mentions in the about page thx :V .
        </p>
      </div>
    </div>
  );
}

export default Splash;
