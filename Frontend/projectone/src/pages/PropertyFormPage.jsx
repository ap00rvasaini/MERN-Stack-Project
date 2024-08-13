import React, { useState, useEffect } from 'react';
import PropertyForm from './PropertyForm';

const PropertyFormPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ffffff]">
      {isLoading ? (
        <img 
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2kwZmpudTFxaThwYzdibnQ5bWpiaTVlYm5xcWZ1ZDBrZXVyamNtbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xhEEmPOI8yPJGSz5hN/giphy.gif" 
          alt="Loading..." 
          className="loading-gif" 
        />
      ) : (
        <PropertyForm />
      )}
    </div>
  );
};

export default PropertyFormPage;