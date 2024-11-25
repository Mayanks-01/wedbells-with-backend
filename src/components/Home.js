// Home.js
import React from 'react';
import wedding from '../assets/Weddings.jpg';
import birthday from '../assets/Birthdays.jpg';
import corporate from '../assets/Corporate Events.jpg';
import '../CSS/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to WedBells</h1>
          <p>Your perfect event planning partner. From weddings to corporate events, we make every occasion special.</p>
          <button className="hero-button">Explore Events</button>
        </div>
      </section>

      <section className="about-us">
        <h2>Why Choose Us?</h2>
        <p>With years of experience in organizing memorable events, we guarantee an event you will never forget. Our team is dedicated to crafting unique experiences tailored to your preferences and budget.</p>
      </section>

      <section className="featured-events">
        <div className="featured-title">Our Featured Events</div>
        <div className="events-grid">
          <div className="event-card">
            <img src={wedding} alt="Wedding Event" />
            <h3>Weddings</h3>
            <p>Plan your dream wedding with us for an unforgettable experience.</p>
          </div>
          <div className="event-card">
            <img src={birthday} alt="Birthday Event" />
            <h3>Birthdays</h3>
            <p>Celebrate your special day with friends and family in style.</p>
          </div>
          <div className="event-card">
            <img src={corporate} alt="Corporate Event" />
            <h3>Corporate Events</h3>
            <p>Professional and elegant setups for your corporate needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
