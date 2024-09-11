import React from 'react';

const lessons = [
  { name: "ボーカル教室", description: "個々のニーズに合わせた丁寧な指導を行います。初心者から上級者まで対応しています。", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { name: "ギター教室", description: "個々のニーズに合わせた丁寧な指導を行います。初心者から上級者まで対応しています。", image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { name: "ドラム教室", description: "個々のニーズに合わせた丁寧な指導を行います。初心者から上級者まで対応しています。", image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { name: "ピアノ教室", description: "個々のニーズに合わせた丁寧な指導を行います。初心者から上級者まで対応しています。", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { name: "ベース教室", description: "個々のニーズに合わせた丁寧な指導を行います。初心者から上級者まで対応しています。", image: "https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { name: "オンラインレッスン", description: "個々のニーズに合わせた丁寧な指導を行います。初心者から上級者まで対応しています。", image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
];

const LessonSection = () => (
  <section className="py-24">
    <div className="container mx-auto">
      <h3 className="text-3xl font-semibold mb-12 text-center text-pink-600">レッスン内容</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {lessons.map((lesson, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img src={lesson.image} alt={lesson.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-pink-600">{lesson.name}</h4>
              <p className="text-gray-600">{lesson.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LessonSection;