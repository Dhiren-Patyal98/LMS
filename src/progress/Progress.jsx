
import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


// Import react-circular-progressbar module and styles

import "react-circular-progressbar/dist/styles.css";

// Animation


import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators


export default function Progress() {

   
  return (
    <div>
      
      <Example label="Custom animation speed">
      <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathTransitionDuration: 0.15
            })}
          />
        )}
      </ChangingProgressProvider>
    </Example>

    <div style={{ width: '100px', height: '100px',display:"flex", marginLeft:"320px" }}>
              <CircularProgressbar
             
                
                styles={buildStyles({
                  textColor: "#000",
                  pathColor: "black",
                  trailColor: "#d6d6d6",
                  
                })}
              />
                   </div>

    </div>
  )
}
function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <hr style={{ border: "2px solid #ddd" }} />
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "70%" }}>
          
        </div>
      </div>
    </div>
  );
}

