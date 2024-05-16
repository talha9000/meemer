import React, { useState } from 'react';

const WriteSomething = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleUpload = () => {
    console.log('Title:', title);
    console.log('Description:', description);
    setTitle('');
    setDescription('');
    closeModal();
  };

  return (
    <>
      <span className="text-blue-500 cursor-pointer" onClick={openModal}>
        {/* Pen icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-pen"
          viewBox="0 0 16 16"
        >
          <path d="M3.336 12.248L1.463 15.58c-.086.142-.235.22-.382.22a.506.506 0 0 1-.383-.165L.12 15.675c-.19-.19-.19-.504 0-.694L3.336 12.248zm10.2-10.2a1.007 1.007 0 0 1 1.414 0l.822.823a1.007 1.007 0 0 1 0 1.414l-2.55 2.55-2.236-2.236 2.55-2.55zM0 16l4-1 11-11-3-3-11 11-1 4z" />
        </svg>
      </span>
      {/* Modal */}
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Pen icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 2l2 2H7a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V11m-4-8h5a2 2 0 012 2v11a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2z"
                      ></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Write Something
                    </h3>
                    <div className="mt-2">
                      <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                          Title:
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="title"
                            id="title"
                            className=" textarea textarea-bordered shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                          Description:
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="description"
                            name="description"
                            rows="3"
                            className=" textarea textarea-bordered shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleUpload}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Upload
                </button>
                <button
                  onClick={closeModal}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WriteSomething;
