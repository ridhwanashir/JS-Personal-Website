'use client';

import Image from "next/image";
import ridhwanlogo from "../../public/ridhwan-logo.png"
import { useState } from 'react';

export default function Home() {
  const [currentCard, setCurrentCard] = useState(0);
  const experiences = [
    { title: "Experience 1", description: "Description 1" },
    { title: "Experience 2", description: "Description 2" },
    { title: "Experience 3", description: "Description 3" },
    { title: "Experience 4", description: "Description 4" },
    { title: "Experience 5", description: "Description 5" },
  ];

  const nextCard = () => setCurrentCard((prev) => (prev + 1) % experiences.length);
  const prevCard = () => setCurrentCard((prev) => (prev - 1 + experiences.length) % experiences.length);

  return (
    <main className="flex flex-col items-center">
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: "url('/background_1.png')" }}>
        <div className="flex flex-col items-center justify-center space-y-8">
          <Image
            src={ridhwanlogo}
            alt="Logo of Ridhwan Nashir"
            width={200}
            height={200}
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
            }}
          />
          <div className="h-8"></div>
          <h1 className="text-4xl font-extralight mt-8">Ridhwan Nashir</h1>
          <h2 className="text-2xl font-light">
            Software Engineer <span className="mx-2">•</span> Solution Architect <span className="mx-2">•</span> Explorer
          </h2>
          <div className="h-40"></div>
        </div>
      </div>

      <div className="w-full bg-white relative">
        <div className="max-w-screen-xl mx-auto h-screen flex flex-col justify-center w-full bg-white relative">
          <Image
            src={ridhwanlogo}
            alt="Small logo"
            width={50}
            height={50}
            className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="flex h-full">
            <div className="w-1/3 relative">
              <Image
                src="/background_2.png"
                alt="Ridhwan Nashir"
                width={400}
                height={500}
                objectFit="cover"
                className="absolute bottom-0"
              />
            </div>
            <div className="w-2/3 p-8 flex items-center justify-end">
              <div className="pr-12">
                <p className="text-4xl font-sans leading-tight">
                  <span className="text-black">Data-driven Software Engineer</span><br />
                  <span className="text-black">with a passion for machine learning,</span><br />
                  <span className="text-gray-700">always seeking new challenges to apply</span><br />
                  <span className="text-gray-700">skills and knowledge to solve real-world</span><br />
                  <span className="text-gray-700">problems.</span>
                </p>
                <button className="mt-8 px-6 py-2 bg-black text-white font-sans font-light rounded-full hover:bg-gray-800 transition-colors duration-300">
                  See Curriculum Vitae
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white relative">
        <div className="max-w-screen-xl mx-auto h-screen flex flex-col justify-center w-full bg-white relative">
          <Image
            src={ridhwanlogo}
            alt="Small logo"
            width={50}
            height={50}
            className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <h2 className="text-4xl font-extralight text-center mb-12 font-poppins absolute top-24 left-1/2 transform -translate-x-1/2">Experiences</h2>
          <div className="flex h-full items-center">
            <div className="flex justify-center items-center w-full">
              <button onClick={prevCard} className="mx-4 p-2 bg-gray-200 rounded-full">
                &lt;
              </button>
              
              <div className="flex space-x-4 overflow-hidden">
                {[0, 1, 2].map((offset) => {
                  const index = (currentCard + offset) % experiences.length;
                  return (
                    <div key={index} className="w-64 p-4 bg-gray-100 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">{experiences[index].title}</h3>
                      <p>{experiences[index].description}</p>
                    </div>
                  );
                })}
              </div>
              
              <button onClick={nextCard} className="mx-4 p-2 bg-gray-200 rounded-full">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
