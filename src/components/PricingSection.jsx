import React from 'react';
import { CheckCircle } from "lucide-react";

const PricingSection = () => (
  <section className="py-24 bg-gray-50">
    <div className="container mx-auto">
      <h3 className="text-3xl font-semibold mb-12 text-center text-pink-600">料金</h3>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <p className="mb-6 text-gray-600">レッスン料金は、コースや回数によって異なります。詳細は以下の通りです：</p>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-center"><CheckCircle className="mr-3 h-6 w-6 text-pink-600 flex-shrink-0" /> 入会金：10,000円（税込）→<span className="text-pink-600 font-semibold">キャンペーン価格！</span></li>
          <li className="flex items-center"><CheckCircle className="mr-3 h-6 w-6 text-pink-600 flex-shrink-0" /> オンラインレッスン：3,500円〜1回（税抜）</li>
          <li className="flex items-center"><CheckCircle className="mr-3 h-6 w-6 text-pink-600 flex-shrink-0" /> 対面レッスン：9,000円〜（税抜）</li>
          <li className="flex items-center"><CheckCircle className="mr-3 h-6 w-6 text-pink-600 flex-shrink-0" /> 体験レッスン：1回無料</li>
        </ul>
        <p className="mt-6 text-gray-600">※具体的な料金はコースや頻度によって異なります。詳細はお問い合わせください。</p>
      </div>
    </div>
  </section>
);

export default PricingSection;