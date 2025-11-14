function HowItWorks() {
  const features = [

     {
      icon: "Mission",
      title: "Connect manufacturers, distributer, wholesalers and consumers.",
      text: "PurchaseS finished goods, distributes  them to  wholesalers, retailers and final consumers across the world.",
    },

    {
      icon: "Categories",
      title: "Finished Goods",
      text: "We purchase Electronics, Clothings, Home and Kitchen and Beauty & personal care.",
    },
    {
      icon: "Local shipping",
      title: "Fulfill Supply request",
      text: "Our transportation team ships products from the suppliers to our store.",
    },
   
  ];

  return (
    <section id="how" className="bg-gray-100 dark:bg-gray-800 px-6 py-16 text-center">
      <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
        About
      </h3>
      <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10">
        A simple, streamlined process to enable you send  supply request for your finished goods to <span className="text-blue-500"> Supplify</span> Procurement team.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition-all"
          >
            <div className="text-blue-600 mb-3">
              <span className="material-symbols-outlined text-4xl">{item.icon}</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HowItWorks