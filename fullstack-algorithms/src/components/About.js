
import { Link } from 'react-router-dom';

function About() {


    return (
        <div className="about-container">
          <header>
            <h1 className="about-header">Exploring the Cosmos of Algorithms</h1>
            <img src="/images/cat.png" alt="Cosmic Journey" className="header-image" width={600} height={400} />
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/functions">Functions</Link>
            <Link to="/splash">Splash</Link>
          </nav>
          </header>
          <section className="about-content">
            <h2>What We Learned</h2>
            <p>
              This week, we dove deep into the world of algorithms and their applications in real-world scenarios. We focused on sorting algorithms, particularly the Insertion Sort, and explored how these algorithms can efficiently handle and process data.
            </p>
            <p>
              Through practical exercises, we learned how to implement algorithms, fetch data from servers, and sort that data to enhance user experience. By visualizing data in an organized manner, we not only improved our coding skills but also gained insights into data manipulation and presentation.
            </p>
            <p>
              Our project has allowed us to combine theoretical knowledge with practical skills, creating a dynamic and interactive web application that showcases our understanding of algorithms and data processing.
            </p>
          </section>
        </div>
      );
    }
    export default About;