// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <div>My Next.js App</div>
        </Link>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" passHref>
                <div>Home</div>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <div>About</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
