import cine from '../assets/Work/cine.mp4';
import './ShowReel.css';

const ShowReel = () => {

    return (
        <div id='showreel' className="showreel-container">
            <h1 className="showreel-head">
                SHOWREEL
            </h1>

            <video 
            src={cine}
            autoPlay 
            loop
            controls
            muted
            className="showreel-video"
            />
        </div>
    );
};

export default ShowReel;
