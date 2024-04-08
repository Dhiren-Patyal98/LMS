import style from '../css/video.module.css'
import vid from '../assets/istockphoto-1226413184-640_adpp_is.mp4'
export default function CourseVideos() {
    return (
        <>

            <div className={style.vid}>
                <h1 className={style.heading}>Python</h1>
                <video style={{ borderRadius: "5%" }} width="80%" height="100vh" controls autoPlay="true">
                    <source src={vid} type="video/mp4" />
                </video>

            </div>
        </>
    )
}
