import React from 'react';
import { ExternalLink } from "lucide-react";

const Header = () => (
  <header className="container mx-auto py-6 flex justify-between items-center">
    <div className="flex items-center">
      <h1 className="text-2xl font-bold text-pink-600">ウィンズ音楽教室</h1>
    </div>
    <nav className="flex items-center">
      <ul className="hidden md:flex space-x-6 mr-6">
        <li><a href="https://wins-music.com/contact/" className="hover:text-pink-600 transition-colors">お問い合わせ</a></li>
      </ul>
      <a href="https://wins-music.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-600 hover:text-pink-700 transition-colors">
        メインサイト <ExternalLink className="ml-1 h-4 w-4" />
      </a>
    </nav>
  </header>
);

export default Header;