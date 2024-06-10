import React from 'react';

function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Demo</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Log in</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1>The easiest CRM to manage your customers</h1>
          <p>
            Now is the time to stop the scavenger hunt! Vision Now by
            NowDigitalEasy CRM is a simple yet powerful tool for any small or
            micro-sized business.
          </p>
          <button>Sign Up For Free</button>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
