
import style from '../css/ppt.module.css'
import ReactIframe from 'react-iframe';

const GoogleSlides = () => {
    return (
        <div>
            <h1 className={style.heading}>Learn Python</h1>
            <ReactIframe
                url="https://docs.google.com/presentation/d/1SuLq6RClo80dmQP-iXw9W12OzJJCXSln/embed?start=false&loop=false&delayms=3000"
                width="100%"
                height="600px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
            />
        </div>
    );
};

export default GoogleSlides;
