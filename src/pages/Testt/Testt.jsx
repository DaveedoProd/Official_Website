import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testt.css';
import about_picc from "../../assets/client_pic1.jpeg";
import graded from '../../assets/Work/graded.mp4';

const data = [
    {
        name: 'Paris',
        img: about_picc,
        video: graded,
        description: 'Experience the beauty of Paris.',
    },
    {
        name: 'Warsaw',
        img: about_picc,
        video: graded,
        description: 'Explore the vibrant streets of Warsaw.',
    },
    {
        name: 'Madrid',
        img: about_picc,
        video: graded,
        description: 'Feel the charm of Madrid.',
    },
];

const Testt = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div className='carousel-container2'>
            <h1 className="work-head4">Works</h1>
            <div className='w-5/6 m-auto'>
                <div className='mt-20'>
                    <Slider {...settings}>
                        {data.map((d, index) => (

                            <div
                                key={d.name}
                                className='card bg-white h-[450px] text-black rounded-xl overflow-hidden'
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Image */}
                                <img
                                    src={d.img}
                                    alt={d.name}
                                    className='w-full h-56 object-cover rounded-t-xl'
                                />

                                {/* Video */}
                                <video
                                    className='absolute top-0 left-0 w-full h-full object-cover'
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src={d.video} type="video/mp4" />
                                </video>

                                {/* Heading and Description */}
                                <div className='card-content flex flex-col items-center justify-center gap-4 pt-48'>
                                    <p className='text-xl font-semibold'>{d.name}</p>
                                    <p className='text-center'>{d.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testt;
