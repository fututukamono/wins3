import React from 'react';
import { ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto text-center">
      <p className="mb-4">&copy; 2024 ウィンズ音楽教室. All rights reserved.</p>
      <a href="https://wins-music.com/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors inline-flex items-center">
        メインサイトはこちら <ExternalLink className="ml-1 h-4 w-4" />
      </a>
    </div>
  </footer>
);

export default Footer;