import React from 'react';

const Home: React.FC = () => {
  const news = [
    'Exciting Match Results!',
    'Player Transfers and Rumors',
    'Upcoming Tournaments',
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Sports News Landing Page</h1>
      <div>
        <h2 className="text-2xl font-bold mb-2">Latest News</h2>
        <ul>
          {news.map((item, index) => (
            <li
              key={index}
              className="mb-1 p-2 border border-gray-300 rounded"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
