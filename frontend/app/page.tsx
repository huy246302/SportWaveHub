"use client"
import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [news, setNews] = useState<string[]>([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('/api/article');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Assuming your API response is an array of strings
        setNews(data.map((article: { title: string }) => article.title));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Sports News Landing Page</h1>
      <div>
        <h2 className="text-2xl font-bold mb-2">Latest News</h2>
        <ul>
          {news.map((item, index) => (
            <li key={index} className="mb-1 p-2 border border-gray-300 rounded">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
