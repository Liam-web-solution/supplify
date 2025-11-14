import React from 'react';

function Services() {
  const services = [
    { title: 'Building Construction', desc: 'Quality structural work with experienced engineers.' },
    { title: 'Interior Design', desc: 'Modern and aesthetic interior finishes.' },
    { title: 'Architecture', desc: 'Creative, functional building designs.' },
  ];

  return (
    <section id="services" className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-yellow-600">{s.title}</h3>
            <p className="text-gray-700 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
