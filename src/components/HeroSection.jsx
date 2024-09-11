import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <>
    <section className="bg-pink-100 py-8 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">オンラインレッスン特別キャンペーン！</h2>
        <p className="text-xl md:text-2xl text-gray-800">
          このページを見た方限定：1年間、1回3,500円（税抜）の特別価格！
        </p>
      </div>
    </section>
    <section className="relative h-[70vh] flex items-center justify-center text-white" style={{backgroundImage: "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-bold mb-8">音楽を楽しむ喜びを、あなたに</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">熟練講師によるマンツーマンレッスンで、基礎から実践まで丁寧に指導。様々な楽器に対応し、生徒の個性を尊重しながら楽しく音楽に取り組めるレッスンを提供します。</p>
        <Button size="lg" className="bg-pink-600 text-white hover:bg-pink-700" onClick={() => window.location.href = 'https://wins-music.com/contact/'}>
          無料体験レッスンを予約 <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  </>
);

export default HeroSection;