
import React from 'react';
import img1 from './image-1.jpg';
import img2 from './image-2.jpg';
import img3 from './image-3.jpg';
import img4 from './image-4.jpg';
import rating from './rating4.5.png'
import rating5 from './rating5.png'


function SuppliersSay () {
  const testimonials = [
    {
      name: "Camila Vargus",
      rating: `${rating5} `,
      text: "Your platform made sale for our industrial goods so easy. Highly recommended!",
      img: `${img1}`
    },
    {
      name: "Lota Mongeskar",
      rating: `${rating5}`,
      text: "Your demand is actually higher than our supply. Our warehouse is really empty i can't believe😂. Thanks!",
      img: `${img2}`,
    },
    {
      name: "Ishika Diya.",
      rating: `${rating5}`,
      text: "Votre confiance compte beaucoup pour nous. Nous sommes ravis de continuer à travailler avec vous !",
      img: `${img3}`,
    },
     {
      name: "Christiano Dickens.",
      rating: `${rating}`,
      text: "We no longer worried of market for our product. Thanks we appreciate your services",
      img: `${img4}`,
    },
  ];

  return (
    <section id='SuppliersSay' className="bg-gray-50 dark:bg-gray-900 py-4 px-4 sm:px-6 lg:px-10 xl:px-20">
      <div className="max-sm:max-w-3xl  max-md-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            What Our <span className="text-pink-500">Suppliers</span> Say?
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Hear genuine stories from our satisfied customers about their exceptional experiences with us.
          </p>
        </header>

        <main className="space-y-8 md:flex wrap md:gap-6 max-sm:gap-3 lg:text-l">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md text-center relative"
            >
              <img
                src={testimonial.img}
                alt={`Profile of ${testimonial.name}`}
                className="w-20 h-20 rounded-full mx-auto -mt-12 mb-4 border-4 border-gray-50 dark:border-gray-900 object-cover"
              />
              <blockquote className="text-gray-600 dark:text-gray-300 italic text-sm sm:text-base">
                <p>"{testimonial.text}"</p>
              </blockquote>
              <div className="flex items-center justify-center mt-4 space-x-2">
                
                <img
        src={
          testimonial.rating     // empty star
        }
        alt="rating"
        className=" w-6/10 cursor-pointer"
      
      />
              </div>
              <cite className="block mt-2 font-bold text-gray-800 dark:text-white not-italic">{testimonial.name}</cite>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default SuppliersSay;

