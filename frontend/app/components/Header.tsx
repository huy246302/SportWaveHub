// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <div className="text-2xl font-bold cursor-pointer">My Next.js App</div>
        </Link>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" passHref>
                <div className="cursor-pointer">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <div className="cursor-pointer">About</div>
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
