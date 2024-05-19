
import { useEffect, useState } from 'react';
import style from '../css/ppt.module.css'
import ReactIframe from 'react-iframe';
import PropTypes from 'prop-types';
import axios from 'axios';

const GoogleSlides = ({setprogressbar ,progressbar,courseid }) => {
    const [isHovered, setIsHovered] =useState(false);


    const [link, setlink] = useState("");

  const id = courseid;
   console.log(link);

  const getBackend = async (id)=>
    {
      console.log(id);
      try{
          const response = await axios.get(`http://localhost:4000/api/data/${id}`)
          console.log(response);
          setlink(response.data.pptLink)
      }
      catch(error)
      {
        console.log(error);
      }
      
    
    }
    useEffect(()=>{
      getBackend(id);
    },[id])
  

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
    const [buttonClicked, setButtonClicked] = useState(false);
  

  const handleClick = () => {
    if (!buttonClicked) {
      setButtonClicked(true);
      setprogressbar(prevProgressbar => prevProgressbar + 1);
      console.log(progressbar)
    }
  };
    return (
        <div>
            <h1 className={style.heading}>Course PPT</h1>
            <ReactIframe
                url={link}
                width="100%"
                height="600px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
            />
               <button type='submit' size="lg"

style={{
  ...buttonStyle,
  backgroundColor: isHovered ? '#6f42c1' : '#581c87',
  borderColor: isHovered ? '#6f42c1' : 'white',
  marginLeft:"90%",
  marginBottom:"3%",
  marginTop:"3%"
}}
onMouseEnter={handleHover}
onMouseLeave={handleMouseLeave}
className="btn"

onClick={handleClick}
// disabled={buttonStatus}

>Done</button>
        </div>
    );
};

export default GoogleSlides;
GoogleSlides.propTypes = {
  progressbar:PropTypes.func.isRequired,
  setprogressbar:PropTypes.func.isRequired,
};