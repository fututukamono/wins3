import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto text-center">
      <h3 className="text-3xl font-semibold mb-8 text-pink-600">お問い合わせ</h3>
      <p className="mb-12 text-gray-600 max-w-2xl mx-auto">レッスンに関するご質問や無料体験のお申し込みは、お気軽にお問い合わせください。</p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
        <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
          <Phone className="mr-2 h-4 w-4" /> 0120-379-258
        </Button>
        <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
          <Mail className="mr-2 h-4 w-4" /> info@wins-music.com
        </Button>
        <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
          <MapPin className="mr-2 h-4 w-4" /> 〒150-0002 東京都渋谷区渋谷3-6-7
        </Button>
      </div>
      <div className="mt-8">
        <Button size="lg" className="bg-pink-600 text-white hover:bg-pink-700" onClick={() => window.location.href = 'https://wins-music.com/contact/'}>
          お問い合わせ・無料体験レッスンの予約 <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </section>
);

export default ContactSection;