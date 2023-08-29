import { useRef, useState, useEffect } from "react"
import { uploadFile } from "./services/apicall";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import './App.css';
function App() {

  const [file, setFile] = useState('');
  const fileInput = useRef();
  const [result, setResult] = useState();
  const handleChage = () => {
    fileInput.current.click();
  }
  // console.log(file);

  useEffect(() => {
    const getImage = async () => {

      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile(data);
        setResult(response.path);
      }
    }

    getImage();
  }, [file])


  return (
    <div className="App">
      <div className="main-container">
        <div className="file--container">
          <div className="heading">
            <h1>Upload your files</h1>
            <p>File should be jpg,png,svg,pdf</p>
          </div>
          <FontAwesomeIcon icon={faFile} shake />
          <div style={{ display: 'flex' }}>

            <button onClick={handleChage}>Upload</button>
            <input className="inputtag" ref={fileInput} onChange={(e) => setFile(e.target.files[0])} type="file" />
            <button>
              <a href={result}>Download</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
