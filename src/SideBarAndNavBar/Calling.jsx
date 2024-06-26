import { useState } from 'react';
import Sidebar from './Sidebar';
import OpenSiderBar from './OpenSideBar';
import { useSearchParams } from 'react-router-dom';
// import bg from '../assets/background1.jpg';

export default function Calling() {
  const [clicked, setclicked] = useState(false);
  const [detail, setdetail] = useState(false);
  const [sidebarToggle, setsidebarToggle] = useState(false);
  const [video, setvideo] = useState(false);
  const [assignment, setassignment] = useState(false);
  const [ppt, setppt] = useState(false);
  const [ quiz, setquiz] = useState(false);
  const[progressbar,setprogressbar] = useState(0);


  const [searchParam] = useSearchParams();
  const courseid = searchParam.get("courseId")
  console.log(courseid);

  const styles = {
    backgroundImage: ``, // Use `url()` to specify the path to the image
    backgroundSize: '964px', // Adjust the background size
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    position: 'relative',
  };

  const backgroundOverlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  };

  return (
    <>
      <div style={styles}>
        <div style={backgroundOverlay}></div>
        <div className='flex' style={{ position: 'relative', zIndex: 0 }}>

          <Sidebar
            sidebarToggle={sidebarToggle}
            clicked={clicked} setclicked={setclicked}
            detail={detail}
            setdetail={setdetail}
            video={video}
            setvideo={setvideo}
            assignment={assignment}
            setassignment={setassignment} 
            ppt={ppt}
            setppt={setppt}
            quiz={quiz}
            setquiz={setquiz}
            progressbar={progressbar}
            setprogressbar={setprogressbar}/>

          <OpenSiderBar
            sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle}
            clicked={clicked}
            detail={detail}
            setdetail={setdetail}
            video={video}
            setvideo={setvideo}
            assignment={assignment}
            setassignment={setassignment}
            ppt={ppt}
            setppt={setppt}
            quiz={quiz}
            setquiz={setquiz}
            progressbar={progressbar}
            setprogressbar={setprogressbar}
            courseid={courseid}
          />

        </div>

      </div>
      <div>

      </div>




    </>
  );
}
