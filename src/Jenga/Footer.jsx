function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center px-6 py-10">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
          Home
        </a>
        <a href="#how" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
          About
        </a>
        <a href="#SuppliersSay" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
          Supplier
        </a>
      </div>
      <p className="text-gray-500 dark:text-gray-500 text-sm">
         &lt;&lt; © {new Date().getFullYear()} Supplify. All rights reserved.&gt;&gt;
      </p>
    </footer>
  );
};
export default Footer
