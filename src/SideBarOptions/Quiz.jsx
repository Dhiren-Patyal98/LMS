import { useState } from 'react';
import style from '../css/quiz.module.css'


export default function Quiz() {
    const [isHovered, setIsHovered] = useState(false)
    const [onclick1, setonclick1] = useState(false)
    const [onclick2, setonclick2] = useState(false)
    const [onclick3, setonclick3] = useState(false)
    const [onclick4, setonclick4] = useState(false)

    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const buttonStyle = {
      backgroundColor: 'purple',
      color: 'black',
      borderColor: 'white',
      width: '12vh',
      transition: 'background-color 0.3s, border-color 0.3s'
    };
  return (
    <div>
      <h1 className={style.heading}>Quiz</h1>
      <div className={`card ${style.mcq}`}>
        <div className='card-body'>
            <p className={style.p}> Which of the following is used to define a block of code in Python language? </p>
            <div className={style.button}>
        <button type='submit' size="lg"

          style={{
           
            backgroundColor: onclick1 ? '#6f42c1' : 'white',
            borderColor: 'black',
            width: '70vh',
          }}
          onClick={()=>
            {  
               setonclick1(true);
               setonclick2(false);
               setonclick3(false);
               setonclick4(false);
            }}
          
          className="btn"

          
        

        ><span> Indentation</span></button>





      </div>
      <div className={style.button}>
        <button type='submit' size="lg"

          style={{
           
            backgroundColor: onclick2 ? '#6f42c1' : 'white',
            borderColor: 'black',
            width: '70vh',
          }}
          onClick={()=>
            {  
               setonclick1(false);
               setonclick2(true);
               setonclick3(false);
               setonclick4(false);
            }}
          
          className="btn"

          
        

        ><span> Key</span></button>





      </div>
      <div className={style.button}>
        <button type='submit' size="lg"

          style={{
           
            backgroundColor: onclick3 ? '#6f42c1' : 'white',
            borderColor: 'black',
            width: '70vh',
          }}
          onClick={()=>
        {
            setonclick1(false);
            setonclick2(false);
            setonclick3(true);
            setonclick4(false);
        }}
          
          className="btn"

          
        

        ><span> Brackets </span></button>





      </div>
      <div className={style.button}>
        <button type='submit' size="lg"

          style={{
           
            backgroundColor: onclick4 ? '#6f42c1' : 'white',
            borderColor: 'black',
            width: '70vh',
          }}
          onClick={()=>
        {  
           setonclick1(false);
           setonclick2(false);
           setonclick3(false);
           setonclick4(true);
        }}
          
          className="btn"

          
        

        ><span>  All of the mentioned</span></button>





      </div>
        </div>
        <div className={style.button1}>
        <button type='submit' size="lg"

          style={{
            ...buttonStyle,
            backgroundColor: isHovered ? '#6f42c1' : '#581c87',
            borderColor: isHovered ? '#6f42c1' : 'white'
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          className="btn"

         
        // disabled={buttonStatus}

        >Submit</button>





      </div>

      </div>
    </div>
  )
}
