import { useState } from 'react';
import { SiCoursera } from "react-icons/si";
import { Link } from 'react-router-dom';
import { FaFilePdf } from "react-icons/fa6";
import { BiSolidVideos } from "react-icons/bi";
import { MdAssignment } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import PropTypes from 'prop-types';
import { RiFilePpt2Fill } from "react-icons/ri";
import { MdQuiz } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Sidebar = ({ sidebarToggle, setclicked, setdetail, setvideo, setassignment ,setppt,setquiz,progressbar}) => {
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (option) => {
    setActiveOption(option);
    // Set other states based on the clicked option
    if (option === "details") {
      setdetail(true);
      setvideo(false);
      setclicked(false);
      setassignment(false);
      setppt(false);
    } else if (option === "pdf") {
      setclicked(true);
      setdetail(false);
      setvideo(false);
      setassignment(false);
      setppt(false);
    } else if (option === "videos") {
      setvideo(true);
      setclicked(false);
      setdetail(false);
      setassignment(false);
      setppt(false);
    } else if (option === "ppt") {
      setassignment(false);
      setvideo(false);
      setclicked(false);
      setdetail(false);
      setppt(true);
    }
   else if (option === "assignment") {
    setassignment(true);
    setvideo(false);
    setclicked(false);
    setdetail(false);
    setppt(false);
  }
  else if (option === "quiz") {
    setquiz(true);
    setassignment(false);
    setvideo(false);
    setclicked(false);
    setdetail(false);
    setppt(false);
  }
  };

  return (
    <div className={`${sidebarToggle ? " hidden " : " block "}w-64 bg-purple-900 fixed h-full px-4 py-2`}>
      <div className='my-2 mb-4'>
        <h1 className='text-2x text-white font-bold' style={{ fontSize: "22px", marginTop: "12px" }}>Course Content</h1>
      </div>
      <hr style={{ borderColor: 'white', height: "10px" }} />
      <ul className='mt-3 text-white font-bold'>
        <Link to="/dash">
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-2 ${activeOption === "home" ? 'bg-purple-950' : ''}`}
            onClick={() => handleOptionClick("home")}
          >
            <AiFillHome className='inline-block w-6 h-6 mr-2 -mt-2'></AiFillHome>
            Home
          </li>
        </Link>
        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-2 ${activeOption === "details" ? 'bg-purple-950' : ''}`}
            onClick={() => handleOptionClick("details")}
          >
            <SiCoursera className='inline-block w-6 h-6 mr-2 -mt-2'></SiCoursera>
            Course Details
          </li>
        </Link>
        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-2 ${activeOption === "pdf" ? 'bg-purple-950' : ''}`}
            onClick={() => handleOptionClick("pdf")}
          >
            <FaFilePdf className='inline-block w-6 h-6 mr-2 -mt-2'></FaFilePdf>
            Course Pdf
          </li>
        </Link>
        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-2 ${activeOption === "videos" ? 'bg-purple-950' : ''}`}
            onClick={() => handleOptionClick("videos")}
          >
            <BiSolidVideos className='inline-block w-6 h-6 mr-2 -mt-2'></BiSolidVideos>
            Course Videos
          </li>
        </Link>
        
        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-2 ${activeOption === "ppt" ? 'bg-purple-950' : ''}`}
            onClick={() => handleOptionClick("ppt")}
          >
            <RiFilePpt2Fill className='inline-block w-6 h-6 mr-2 -mt-2'></RiFilePpt2Fill>
            Course Ppt
          </li>
        </Link>

        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-2 ${activeOption === "assignment" ? 'bg-purple-950' : ''}`}
            onClick={() => handleOptionClick("assignment")}
          >
            <MdAssignment className='inline-block w-6 h-6 mr-2 -mt-2'></MdAssignment>
            Assignment
          </li>
        </Link>
        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-2 ${activeOption === "quiz" ? 'bg-purple-950' : ''}`}
            onClick={() => handleOptionClick("quiz")}
          >
            <MdQuiz className='inline-block w-6 h-6 mr-2 -mt-2'></MdQuiz>
            Quiz
          
                  
          </li>
          

        </Link>
        <Link>
        <li className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-2 ${activeOption === "result" ? 'bg-purple-950' : ''}`}
            onClick={() => handleOptionClick("quiz")}>
        <FaBookReader className='inline-block w-6 h-6 mr-2 -mt-2' ></FaBookReader>
        Results
        </li>
        </Link>
        <li>
        <div style={{ width: '100px', height: '100px',display:"flex", marginLeft:"20px",marginTop:"20px" }}>
              <CircularProgressbar
                
                
                value={progressbar === 0 ? 0 : progressbar === 1 ? 20 : progressbar === 2 ? 40 : progressbar === 3 ? 60 : progressbar === 4 ? 80 : progressbar === 5 ? 100 : 100}
                text={`${progressbar === 0 ? 0 : progressbar === 1 ? 20 : progressbar === 2 ? 40 : progressbar === 3 ? 60 : progressbar === 4 ? 80 : progressbar === 5 ? 100 : 100}%`}
             

                styles={buildStyles({
                  textColor: "white",
                  pathColor: "#6f42c1",
                  trailColor: "#d6d6d6",
                  
                })}
              />
              </div>
        </li>
        
        
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  sidebarToggle: PropTypes.bool.isRequired,
  setclicked: PropTypes.func.isRequired,
  setdetail: PropTypes.func.isRequired,
  setvideo: PropTypes.func.isRequired,
  setassignment: PropTypes.func.isRequired,
  setppt: PropTypes.func.isRequired,
  setquiz: PropTypes.func.isRequired,
  progressbar:PropTypes.func.isRequired,
  
};

export default Sidebar;
