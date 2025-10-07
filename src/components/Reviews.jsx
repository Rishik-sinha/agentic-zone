import React from 'react';
import Marquee from "react-fast-marquee";

const reviews = [
  {
    name: 'Sarah L.',
    handle: '@sarah_dev',
    review: "This workshop was a game-changer. I went from basic Python scripts to building a real AI agent in just a few days. Highly recommend!"
  },
  {
    name: 'Michael B.',
    handle: '@mike_builds',
    review: "The hands-on projects were the best part. I now have a portfolio piece that actually gets recruiters' attention. The concepts were explained clearly and concisely."
  },
  {
    name: 'Jessica T.',
    handle: '@jess_codes',
    review: "I was new to AI concepts, but the instructors made it so accessible. Connecting Python to no-code tools opened up a world of possibilities for my own projects."
  },
  {
    name: 'David R.',
    handle: '@d_rodriguez',
    review: "Incredible value. The pace was perfect, and I learned skills that are directly applicable to my job. The deployment day was crucial for understanding the full workflow."
  }
];

const Reviews = () => {
  return (
    <section className="bg-black text-white py-20 px-6 overflow-hidden">
      {/* The max-width class here has been changed to max-w-7xl */}
      <div className="container mx-auto max-w-8xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          What Our Alumni Say
        </h2>

        <Marquee
          speed={40}
          gradient={true}
          gradientColor={[0, 0, 0]}
          gradientWidth={150}
          pauseOnHover={true}
        >
          {reviews.map((review, index) => (
            <div key={index} className="w-[30rem] mx-8 flex-shrink-0">
              <div className="bg-neutral-900/80 border border-neutral-700 rounded-2xl p-8 text-left h-full">
                <p className="text-gray-300 mb-6">"{review.review}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center font-bold text-black mr-4">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-gray-500">{review.handle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Reviews;