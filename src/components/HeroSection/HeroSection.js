import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import './HeroSection.css'

const HeroSection = ({ height = "70", video = false, content }) => {
    let contentHeight = Number(height) - 10

    return (
        <>
            <header style={{ height: `${height}vh` }} className='header_section'>
                <Navbar />
                <section className="main_container header_content">
                    <div style={{ height: `${contentHeight}vh` }} className="upper_content">
                        <div className="right_content">
                            <h1>{content.title}</h1>
                            {/* <p>{content.description}</p> */}
                            <p>NetronSoft ​looks forward to creating an unparalleled impact in the modern world by developing software. We believe in creativity and that is the art of tech. Highly skilled intellectual personnel, most having substantial work experience to drive meaningful innovation in communication through multi-country presence. Our management ensures that each individual excels in their specific assigned tasks by working closely with them. You can define us as a business problem solver through complete, integrated, and intelligent industry-specific business solutions</p>
                            <a href="#" className="global_button">GET STARTED</a>
                        </div>
                        {video ?
                            <div className="left_content">
                                <div className="">
                                    <a class="play-btn" href=""></a>
                                </div>
                            </div> : ''
                        }
                    </div>

                    {/* <div className="lower_content"></div>
                    <div className="right">
                       <div className="slide_dot"></div>
                       <div className="slide_dot"></div>
                       <div className="slide_dot"></div>
                       gfgfgf
                    </div>
                    <div className="left"></div> */}
                </section>
            </header>
        </>
    );
};

export default HeroSection;