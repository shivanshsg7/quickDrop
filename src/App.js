import { useRef, useState, useEffect } from "react"
import { uploadFile } from "./services/apicall";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faUpload, faDownload, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { QRCodeSVG } from 'qrcode.react';

import './App.css';

function App() {

  const [file, setFile] = useState('');
  const [result, setResult] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  
  const fileInput = useRef();
  
  const handleChange = () => {
    fileInput.current.click();
  }

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const copyToClipboard = async () => {
    if (result) {
      try {
        await navigator.clipboard.writeText(result);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        setIsUploading(true);
        setError('');
        
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        
        let response = await uploadFile(data);
        
        console.log("Upload response:", response);
        
        if (response && response.path) {
          setResult(response.path);
        } else if (response && response.error) {
          console.error("Upload error:", response.error);
          setError(response.error);
          setResult(null);
        } else {
          console.log("No response or invalid response");
          setError("Upload failed. Please try again.");
          setResult(null);
        }
        
        setIsUploading(false);
      }
    }

    getImage();
  }, [file])

  return (
    <div className="App">
      <div className="main-container">
        <div className="file--container">
          <div className="heading">
            <h1>QuickDrop</h1>
            <p>Upload and share your files instantly with QR codes</p>
          </div>
          
          <FontAwesomeIcon icon={faFile} className="file-icon" />
          
          <div 
            className={`upload-section ${dragActive ? 'drag-active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <button 
              className="upload-button" 
              onClick={handleChange}
              disabled={isUploading}
            >
              {isUploading ? (
                <>
                  <span className="loading"></span>
                  Uploading...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faUpload} style={{ marginRight: '8px' }} />
                  Choose File or Drag & Drop
                </>
              )}
            </button>
            <input 
              className="inputtag" 
              ref={fileInput} 
              onChange={(e) => setFile(e.target.files[0])} 
              type="file" 
              accept=".jpg,.jpeg,.png,.svg,.pdf"
            />
            <p style={{ marginTop: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              Supports: JPG, PNG, SVG, PDF
            </p>
          </div>
          
          {error && (
            <div className="error-message">
              <strong>Error:</strong> {error}
            </div>
          )}
          
          {result && (
            <div className="qr-container">
              <h3 className="success-message">File uploaded successfully!</h3>
              
              <div className="qr-code-wrapper">
                <QRCodeSVG value={result} size={200} />
              </div>
              
              <div className="download-section">
                <p>Download Link:</p>
                <div className="download-link">
                  <a href={result} target="_blank" rel="noopener noreferrer">
                    {result}
                  </a>
                  <button 
                    onClick={copyToClipboard}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: copied ? '#10b981' : '#667eea',
                      cursor: 'pointer',
                      marginLeft: '10px',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease'
                    }}
                    title="Copy link"
                  >
                    <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                  </button>
                </div>
                {copied && (
                  <p style={{ 
                    color: '#10b981', 
                    fontSize: '0.9rem', 
                    marginTop: '5px',
                    animation: 'fadeIn 0.3s ease'
                  }}>
                    Link copied to clipboard!
                  </p>
                )}
              </div>
              
              <button className="download-button">
                <FontAwesomeIcon icon={faDownload} style={{ marginRight: '8px' }} />
                <a href={result} download>Download File</a>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
