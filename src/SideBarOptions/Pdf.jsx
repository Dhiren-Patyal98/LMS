import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from '../css/pdf.module.css';
import PropTypes from 'prop-types';
import axios from 'axios';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDF_URL = "https://firebasestorage.googleapis.com/v0/b/codeedu-7fc91.appspot.com/o/pdf%20react2.pdf?alt=media&token=9b2f73e0-b4d9-4f4c-9bd4-f708297f1a4b";

export default function Pdf({setprogressbar ,progressbar,courseid}) {

  const [link, setlink] = useState("");

  const id = courseid;
   console.log(link);

  const getBackend = async (id)=>
    {
      console.log(id);
      try{
          const response = await axios.get(`http://localhost:4000/api/data/${id}`)
          console.log(response);
          setlink(response.data.pdfLink)
      }
      catch(error)
      {
        console.log(error);
      }
      
    
    }
    useEffect(()=>{
      getBackend(id);
    },[id])
  
  
  
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    backgroundColor: 'purple',
    color: 'white',
    borderColor: 'white',
    width: '12vh',
    transition: 'background-color 0.3s, border-color 0.3s'
  };

  const [totalPages, setTotalPages] = useState(null);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  function handleDocumentLoadSuccess({ numPages }) {
    setTotalPages(numPages);
  }

  function navigateToPreviousPage() {
    if (currentPageNumber > 1) {
      setCurrentPageNumber(currentPageNumber - 1);
    }
  }

  function navigateToNextPage() {
    if (currentPageNumber < totalPages) {
      setCurrentPageNumber(currentPageNumber + 1);
    }
  }

  const [buttonClicked, setButtonClicked] = useState(false);
  

  const handleClick = () => {
    if (!buttonClicked) {
      setButtonClicked(true);
      setprogressbar(prevProgressbar => prevProgressbar + 1);
      console.log(progressbar)
    }
  };

  return (
    <>
    <div>

   
      <h1 className={styles.heading}>Real Python</h1>
      <div className={styles.pdf}>
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          <Document
            file={link} // Use the URL of your PDF file
            onLoadSuccess={handleDocumentLoadSuccess}
          >
            <Page pageNumber={currentPageNumber} />
          </Document>
        </div>
        <div className={styles.pagination}>
          <button className={styles.button} onClick={navigateToPreviousPage}>
            <FaArrowLeft />
          </button>
          <span style={{ marginLeft: "10px", marginRight: "10px" }}>
            Page {currentPageNumber} of {totalPages}
          </span>
          <button className={styles.button} onClick={navigateToNextPage}>
            <FaArrowRight />
          </button>
         
        </div>
       
      </div>
      </div>
      <button type='submit' size="lg"

          style={{
            ...buttonStyle,
            backgroundColor: isHovered ? '#6f42c1' : '#581c87',
            borderColor: isHovered ? '#6f42c1' : 'white',
            marginLeft:"90%",
            marginTop:"3%",
            marginBottom:"3%"
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          className="btn"

          onClick={handleClick}
        // disabled={buttonStatus}

        >Done</button>
    </>
  );
}
Pdf.propTypes = {
  progressbar:PropTypes.func.isRequired,
  setprogressbar:PropTypes.func.isRequired,
};