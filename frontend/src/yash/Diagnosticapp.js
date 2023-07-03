import React, { useState } from 'react';
import axios from 'axios';

const DiagnosticApp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [diagnosis, setDiagnosis] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios
      .post('/api/diagnose', formData)
      .then((response) => {
        setDiagnosis(response.data.diagnosis);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h1>AI-based Medical Diagnostics</h1>
      <div className="upload-section">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={!selectedFile || loading}>
          {loading ? 'Processing...' : 'Upload and Diagnose'}
        </button>
      </div>
      {diagnosis && (
        <div className="diagnosis-section">
          <h2>Diagnosis:</h2>
          <p>{diagnosis}</p>
        </div>
      )}
    </div>
  );
};

export default DiagnosticApp;
