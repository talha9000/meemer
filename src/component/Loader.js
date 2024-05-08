import React, { useEffect } from 'react';
import { dotSpinner } from 'ldrs';

const Loader = () => {
  useEffect(() => {
    // Register the dotSpinner component as a custom element
    dotSpinner.register();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      {/* Overlay */}
      <div className="text-white">
        <l-dot-spinner size="99" speed="0.5" color="#FF9900"></l-dot-spinner>
      </div> {/* Loader */}
    </div>
  );
};

export default Loader;
