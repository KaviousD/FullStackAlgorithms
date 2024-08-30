
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await fetch('/movie.json');
          const data = await response.json();
          const sortedMovies = insertionSort(data, 'title'); 
          setMovies(sortedMovies);
        } catch (error) {
          console.error('Failed to fetch movies:', error);
        }
      };
  
      fetchMovies();
    }, []);
  
    return (
      <div>
        <header>
          <h1>About Page For Cultured Movie Mentions</h1>
        </header>
        <nav>
          <Link to="/About">About</Link>
          <Link to="/functions">Functions</Link>
          <Link to="/splash">Splash</Link>
        </nav>
        <section>
          <ul className="movie-list">
            {movies.map((movie, index) => (
              <li key={index} className="movie-item">
                <img src={movie.image} alt={movie.title} className="movie-image" />
                <p>{movie.title} ({movie.year})</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
  
 
  function insertionSort(arr, key) {
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      while (j > 0 && arr[j - 1][key] > arr[j][key]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        j--;
      }
    }
    return arr;
  }

export default Home;
