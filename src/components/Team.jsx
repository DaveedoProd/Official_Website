import './Team.css';
import AnimatedTitle from "./AnimatedTitle";
import aa from '../assets/Team/11.jpg';
import bb from '../assets/Team/22.jpg';
import cc from '../assets/Team/33.jpg';
import dd from '../assets/Team/44.jpg';
import ee from '../assets/Team/55.jpg';
import ff from '../assets/Team/66.jpg';
import gg from '../assets/Team/77.jpg';
import hh from '../assets/Team/88.jpeg';

const Team = () => {

    return (
        <div id="team" className="min-h-dvh w-screen bg-black text-blue-50">
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <div className="relative size-full">
                    <AnimatedTitle
                        title="Team"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />
                    <div className="team-grid">

                        <div className="team-grid-one">

                            <div className="team-member">
                                <img className="team-img" src={ff} alt="yoo" />
                                <h2 className="team-name">Krish Pandey</h2>
                            </div>

                            <div className="team-member">
                                <img className="team-img" src={aa} alt="yoo" />
                                <h2 className="team-name font-circular-web">Anshuman Kashish</h2>
                            </div>

                            <div className="team-member">
                                <img className="team-img" src={gg} alt="yoo" />
                                <h2 className="team-name">Ankur Prasad</h2>
                            </div>

                            <div className="team-member">
                                <img className="team-img" src={hh} alt="yoo" />
                                <h2 className="team-name">Ankush Singh</h2>
                            </div>
                        </div>


                        <div className="team-grid-two">
                            <div className="team-member">
                                <img className="team-img" src={dd} alt="yoo" />
                                <h2 className="team-name">Samaksh Gour</h2>
                            </div>
                            <div className="team-member">
                                <img className="team-img" src={bb} alt="yoo" />
                                <h2 className="team-name">Tejsawa Mahajan</h2>
                            </div>
                            <div className="team-member">
                                <img className="team-img" src={ee} alt="yoo" />
                                <h2 className="team-name">Aditya Soni</h2>
                            </div>
                            <div className="team-member">
                                <img className="team-img" src={cc} alt="yoo" />
                                <h2 className="team-name">Sunil Gupta</h2>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
