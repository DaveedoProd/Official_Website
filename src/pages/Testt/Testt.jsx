// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './Testt.css';
// import a from '../../assets/WorkPage/11.mp4';
// import aa from '../../assets/WorkPage/11.jpg';
// import b from '../../assets/WorkPage/22.mp4';
// import bb from '../../assets/WorkPage/22.jpg';
// import c from '../../assets/WorkPage/33.mp4';
// import cc from '../../assets/WorkPage/33.jpg';
// import d from '../../assets/WorkPage/44.mp4';
// import dd from '../../assets/WorkPage/44.jpg';
// import e from '../../assets/WorkPage/55.mp4';
// import ee from '../../assets/WorkPage/55.jpg';
// import f from '../../assets/WorkPage/66.mp4';
// import ff from '../../assets/WorkPage/66.jpg';
// import g from '../../assets/WorkPage/77.mp4';
// import gg from '../../assets/WorkPage/77.png';
// import h from '../../assets/WorkPage/88.mp4';
// import hh from '../../assets/WorkPage/88.png';
// import i from '../../assets/WorkPage/99.mp4';
// import ii from '../../assets/WorkPage/99.png';

// const data = [
//     {
//         name: 'Paris',
//         img: aa,
//         video: a,
//         description: 'Experience the beauty of Paris.',
//         link:'https://www.instagram.com/reel/DB32rS8NhsB/?igsh=MWFodWM3Nnh5cGRocg=='
//     },
//     {
//         name: 'Warsaw',
//         img: bb,
//         video: b,
//         description: 'Explore the vibrant streets of Warsaw.',
//         link:'https://www.instagram.com/reel/DB32rS8NhsB/?igsh=MWFodWM3Nnh5cGRocg=='
//     },
//     {
//         name: 'Madrid',
//         img: cc,
//         video: c,
//         description: 'Feel the charm of Madrid.',
//         link:'https://www.instagram.com/reel/DB32rS8NhsB/?igsh=MWFodWM3Nnh5cGRocg=='
//     },
//     {
//         name: 'Paris',
//         img: dd,
//         video: d,
//         description: 'Experience the beauty of Paris.',
//         link:'https://www.instagram.com/reel/DB32rS8NhsB/?igsh=MWFodWM3Nnh5cGRocg=='
//     },
//     {
//         name: 'Warsaw',
//         img: ee,
//         video: e,
//         description: 'Explore the vibrant streets of Warsaw.',
//         link:'https://www.instagram.com/reel/DB32rS8NhsB/?igsh=MWFodWM3Nnh5cGRocg=='
//     },
//     {
//         name: 'Madrid',
//         img: ff,
//         video: f,
//         description: 'Feel the charm of Madrid.',
//         link:'https://www.instagram.com/reel/DB32rS8NhsB/?igsh=MWFodWM3Nnh5cGRocg=='
//     },
//     {
//         name: 'Paris',
//         img: gg,
//         video: g,
//         description: 'Experience the beauty of Paris.',
//         link:'https://www.instagram.com/reel/DB32rS8NhsB/?igsh=MWFodWM3Nnh5cGRocg=='
//     },
//     {
//         name: 'Warsaw',
//         img: hh,
//         video: h,
//         description: 'Explore the vibrant streets of Warsaw.',
//         link:'https://www.instagram.com/reel/DB32rS8NhsB/?igsh=MWFodWM3Nnh5cGRocg=='
//     },
//     {
//         name: 'Madrid',
//         img: ii,
//         video: i,
//         description: 'Feel the charm of Madrid.',
//         link: 'https://www.instagram.com/reel/C9zyi_PPz3z/?igsh=MXJnOGF1ZnY4ZHViaQ=='
//     },
// ];

// const Testt = () => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//     };

//     return (
//         <div className='carousel-container2'>
//             <h1 className="work-head4">OUR TOP WORKS!</h1>
//             <div className='w-5/6 m-auto'>
//                 <div className='mt-20'>
//                     <Slider {...settings}>
//                         {data.map((d, index) => (

//                             <div
//                                 key={d.name}
//                                 className='card bg-white h-[450px] text-black rounded-xl overflow-hidden'
//                                 onMouseEnter={() => setHoveredIndex(index)}
//                                 onMouseLeave={() => setHoveredIndex(null)}
//                             >
//                                 <img
//                                     src={d.img}
//                                     alt={d.name}
//                                     className='w-full h-56 object-cover rounded-t-xl'
//                                 />

//                                 <video
//                                     src={d.video}
//                                     autoPlay
//                                     loop
//                                     muted
//                                     className="absolute top-0 left-0 w-full h-full object-cover"
//                                 />

//                                 {/* Heading and Description */}
//                                 {/* <div className='card-content flex flex-col items-center justify-center gap-4 pt-48'>
//                                     <p className='text-xl font-semibold'>{d.name}</p>
//                                     <p className='text-center'>{d.description}</p>
//                                 </div> */}
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Testt;



import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testt.css';
import a from '../../assets/WorkPage/11.mp4';
import aa from '../../assets/WorkPage/11.jpg';
import b from '../../assets/WorkPage/22.mp4';
import bb from '../../assets/WorkPage/22.jpg';
import c from '../../assets/WorkPage/33.mp4';
import cc from '../../assets/WorkPage/33.jpg';
import d from '../../assets/WorkPage/44.mp4';
import dd from '../../assets/WorkPage/44.jpg';
import e from '../../assets/WorkPage/55.mp4';
import ee from '../../assets/WorkPage/55.jpg';
import f from '../../assets/WorkPage/66.mp4';
import ff from '../../assets/WorkPage/66.jpg';
import g from '../../assets/WorkPage/77.mp4';
import gg from '../../assets/WorkPage/77.png';
import h from '../../assets/WorkPage/88.mp4';
import hh from '../../assets/WorkPage/88.png';
import i from '../../assets/WorkPage/99.mp4';
import ii from '../../assets/WorkPage/99.png';

const data = [
    {
        name: 'Paris',
        img: aa,
        video: a,
        description: 'Experience the beauty of Paris.',
        link: 'https://youtu.be/7Py8AxG68lw?si=h6Z8YSFyiR0oyJXD',
    },
    {
        name: 'Warsaw',
        img: bb,
        video: b,
        description: 'Explore the vibrant streets of Warsaw.',
        link: 'https://youtu.be/K9c0x9EE310?si=KMX_hmkNofG6G4rb',
    },
    {
        name: 'Madrid',
        img: cc,
        video: c,
        description: 'Feel the charm of Madrid.',
        link: 'https://youtu.be/GqboCByDiA0?si=m3fqT32HUjWPbCYD',
    },
    {
        name: 'Paris',
        img: dd,
        video: d,
        description: 'Experience the beauty of Paris.',
        link: 'https://youtu.be/JKChkNslxZI?si=c-7zX7vCJUkZ6vWYg',
    },
    {
        name: 'Warsaw',
        img: ee,
        video: e,
        description: 'Explore the vibrant streets of Warsaw.',
        link: 'https://youtu.be/W57ov1DyKR0?si=3MesK58qAuPdlcyL',
    },
    {
        name: 'Madrid',
        img: ff,
        video: f,
        description: 'Feel the charm of Madrid.',
        link: 'https://youtu.be/POGtvUEjiqA?si=Q9du0d3vvt1wySuj',
    },
    {
        name: 'Paris',
        img: gg,
        video: g,
        description: 'Experience the beauty of Paris.',
        link: 'https://www.instagram.com/reel/DDmgTiuyv2U/?igsh=MXVhNXVsdzJpeTVqNg==',
    },
    {
        name: 'Warsaw',
        img: hh,
        video: h,
        description: 'Explore the vibrant streets of Warsaw.',
        link: 'https://www.instagram.com/reel/DB32rS8NhsB/?igsh=MWFodWM3Nnh5cGRocg==',
    },
    {
        name: 'Madrid',
        img: ii,
        video: i,
        description: 'Feel the charm of Madrid.',
        link: 'https://www.instagram.com/reel/C9zyi_PPz3z/?igsh=MXJnOGF1ZnY4ZHViaQ==',
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
            <h1 className="work-head4">OUR TOP WORKS!</h1>
            <div className='w-5/6 m-auto'>
                <div className='mt-20'>
                    <Slider {...settings}>
                        {data.map((d, index) => (
                            <a
                                key={d.name}
                                href={d.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='card bg-white h-[450px] text-black rounded-xl overflow-hidden'
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <img
                                    src={d.img}
                                    alt={d.name}
                                    className='w-full h-56 object-cover rounded-t-xl'
                                />
                                {hoveredIndex === index && (
                                    <video
                                        src={d.video}
                                        autoPlay
                                        loop
                                        muted
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                    />
                                )}
                            </a>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testt;
