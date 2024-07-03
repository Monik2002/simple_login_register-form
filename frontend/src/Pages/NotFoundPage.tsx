// import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
       {/* Add image here */}
       <div>
        <img src="/src/assets/Scarecrow.png" alt="image" height={500} width={500}/>
       </div>
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
      {/* <Link to="/" className="text-blue-500 underline">Go back to the homepage</Link> */}
        <Link to="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go back to the homepage
            </button>
        </Link>
    </div>
  );
};

export default NotFound;
