'use client';

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: "url('/background_1.png')" }}>
      <header className="flex flex-col items-center justify-center space-y-8">
        <Image
          src="/ridhwan-logo.png"
          alt="Ridhwan Nashir's professional logo"
          width={200}
          height={200}
          priority
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
          }}
        />
        <h1 className="text-4xl font-extralight mt-8">Ridhwan Nashir</h1>
        <p className="text-2xl font-light text-center">
          Software Engineer <span className="mx-2" aria-hidden="true">•</span> 
          Solution Architect <span className="mx-2" aria-hidden="true">•</span> 
          Explorer
        </p>
      </header>
    </section>
  );
}