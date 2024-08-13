import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import '../styles/Homepage.css';
import LoadingAnimation from './LoadingAnimation';

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a 2-second loading delay

    return () => clearTimeout(timer);
  }, []);

  const lobsterFontStyle = {
    fontFamily: 'Lobster, cursive',
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="homepage">
      <Carousel />
      <div className="intro-section text-center">
        <h1 className="intro-title" style={lobsterFontStyle}>
          Welcome to HouseHunt
        </h1>
        <p className="intro-text" style={lobsterFontStyle}>
          Discover your perfect home with HouseHunt. Our platform simplifies the house hunting and rental process, making it easy for you to find or list properties effortlessly.
        </p>
      </div>
      <div className="categories-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
              alt: 'Apartments',
              title: 'Explore Apartments',
              description: 'Find modern and comfortable apartments for your stay.',
            },
            {
              src: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
              alt: 'Villas',
              title: 'Luxurious Villas',
              description: 'Luxurious villas for a more private and spacious experience.',
            },
            {
              src: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg',
              alt: 'Cottages',
              title: 'Charming Cottages',
              description: 'Cozy and charming cottages for a unique getaway.',
            },
            {
              src: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg',
              alt: 'Townhouses',
              title: 'Spacious Townhouses',
              description: 'Experience luxury living in our townhouses.',
            },
            {
              src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
              alt: 'Cabins',
              title: 'Rustic Cabins',
              description: 'Enjoy a rustic retreat in our beautiful cabins.',
            },
            {
              src: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
              alt: 'Studios',
              title: 'Modern Studios',
              description: 'Find the perfect studio for modern living.',
            },
          ].map((card, index) => (
            <div key={index} className="category-card">
              <img src={card.src} alt={card.alt} className="category-image" />
              <div className="category-title">{card.title}</div>
              <div className="category-text">{card.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-dark text-white py-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl mb-6">About Us</h2>
            <p className="text-lg">
              HouseHunt is an innovative platform designed to simplify and enhance the house hunting and rental experience. Whether you are looking to find your perfect home or list your property for rent, HouseHunt is here to assist you every step of the way.
            </p>
          </div>
          <div className="lg:w-1/3 text-center">
            <h2 className="text-3xl mb-6">Contact Us</h2>
            <div className="space-y-4">
              <p><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
              <p><strong>Phone:</strong> (123) 456-7890</p>
              <p><strong>Email:</strong> contact@househunt.com</p>
            </div>
          </div>
          <div className="lg:w-1/3 text-center lg:text-right">
            <h2 className="text-3xl mb-6">Follow Us</h2>
            <div className="space-y-4">
              <p><strong>Facebook:</strong> @househunt</p>
              <p><strong>Twitter:</strong> @househunt</p>
              <p><strong>Instagram:</strong> @househunt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
