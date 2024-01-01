// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              {/* Add more quick links as needed */}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
            <ul>
              <li>
                <Link href="https://twitter.com">Twitter</Link>
              </li>
              <li>
                <Link href="https://facebook.com">Facebook</Link>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>

        <p className="mt-4">&copy; 2023 My Next.js App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
