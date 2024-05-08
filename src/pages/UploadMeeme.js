import React, { useState } from 'react';
import { postCall } from '../App/api_method';
const UploadMeeme = () => {
  const [numFiles, setNumFiles] = useState(0);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formData, setFormData] = useState([]);

  const closeModal = () => {
    document.getElementById('my_modal_1').close();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    setNumFiles(imageFiles.length);
    setSelectedFiles(imageFiles);
    // Initialize form data for each image file
    const formDataArray = imageFiles.map(file => ({ file, title: '', description: '' }));
    console.log('FormData array:', formDataArray); // Log formData here
    setFormData(formDataArray);
  };
  
  
  const handleTitleChange = (index, event) => {
    const updatedFormData = [...formData];
    updatedFormData[index].title = event.target.value;
    setFormData(updatedFormData);
  };

  const handleDescriptionChange = (index, event) => {
    const updatedFormData = [...formData];
    updatedFormData[index].description = event.target.value;
    setFormData(updatedFormData);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);

    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

 
const handleUpload = async () => {
  if (selectedFiles.length > 0) {
    try {
      // Prepare form data to send
      const formDataToSend = new FormData();
      formData.forEach(data => {
        formDataToSend.append('files', data.file);
        formDataToSend.append('titles', data.title);
        formDataToSend.append('descriptions', data.description);
      });
 
      // Send POST request to FastAPI endpoint
      const response = await postCall('/upload_file', formDataToSend);

      // Check if request was successful
      if (response.status === 200) {
        // Reset form data and selected files after successful upload
        setFormData([]);
        setSelectedFiles([]);
        setNumFiles(0);

        // Close modal or provide feedback to the user
        closeModal();
      } else {
        // Log unexpected response status
        console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      // Log and handle any errors that occur during the upload process
      console.error('Error uploading files:', error);
    }
  } else {
    // No files selected, provide feedback
    console.log('No files selected');
  }
};
 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-center mb-4">{numFiles > 0 ? `Number of files uploaded: ${numFiles}` : ''}</p>
      <button className="btn btn-outline btn-info mt-4 sm:mt-0" onClick={() => document.getElementById('my_modal_1').showModal()}>Upload Meeme</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 sm:p-8 modal_color">
          <button className="absolute top-0 right-0 m-4" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h3 className="font-bold text-lg sm:text-xl">Upload Meeme</h3>
         
            <label htmlFor="file-upload" className="btn btn-outline btn-info mt-4 sm:mt-0 mt-6">Upload File</label>
            <input id="file-upload" type="file" multiple onChange={handleFileChange} style={{ display: 'none' }} />
            {formData.map((data, index) => (
              <div key={index} className="mb-4">
                <div>{`File ${index + 1}: ${data.file.name}`}</div>
                <input type="text" value={data.title} onChange={(e) => handleTitleChange(index, e)} className="input input-bordered w-full max-w-xs mt-2" placeholder="Title" />
                <input type="text" value={data.description} onChange={(e) => handleDescriptionChange(index, e)} className="input input-bordered w-full max-w-xs mt-2" placeholder="Description" />
                <button type="button" onClick={() => handleRemoveFile(index)} className="btn btn-danger mt-2">Remove</button>
              </div>
            ))}
            <div className="modal-action">
              <button className="btn btn-outline btn-info mt-4 sm:mt-0" onClick={handleUpload}>Upload</button>
            </div>
        
        </div>
      </dialog>
    </div>
  );
};

export default UploadMeeme;
