import React from 'react';
import './Footer.css'
import fbIcon from '../../../assets/image/fb_icon.png'
import twitterIcon from '../../../assets/image/twitter_icon.png'
import youtubeIcon from '../../../assets/image/youtube_icon.png'
import instagramIcon from '../../../assets/image/instagram_icon.png'
import emailIcon from '../../../assets/image/email_icon.png'
import locationIcon from '../../../assets/image/location_icon.png'
import mobileIcon from '../../../assets/image/mobile_icon.png'


const footerData = {
    socialData: [
        {
            icon: fbIcon,
            link: "#"
        },
        {
            icon: twitterIcon,
            link: "#"
        },
        {
            icon: youtubeIcon,
            link: "#"
        },
        {
            icon: instagramIcon,
            link: "#"
        }
    ],
    serviceData: [
        {
            title: "Enterprise Software",
            link: "#"
        },
        {
            title: "Web Application Development",
            link: "#"
        },
        {
            title: "Theme Customize Service",
            link: "#"
        },
        {
            title: "E-commerce solution",
            link: "#"
        },
        {
            title: "UI/UX Design",
            link: "#"
        },
        {
            title: "Custom Business Solution",
            link: "#"
        }
    ],
    quickLinks: [
        {
            title: "Home",
            link: "/home"
        },
        {
            title: "Contact Us",
            link: "/contact"
        },
        {
            title: "About Us",
            link: "/about"
        },
        {
            title: "Our Services",
            link: "/services"
        },
       
    ],
    reachData: [
        {
            icon: emailIcon,
            data: "info@gmail.com"
        },
        {
            icon: mobileIcon,
            data: "+8801xxxxxxxx"
        },
        {
            icon: locationIcon,
            data: "Dhaka, mirpur 3434 Bangladesh"
        },

    ]
}



const Footer = () => {
    return (
        <>
            <footer className='footer_section'>
                <div className="footer_area_box main_container">
                    <div className="left">
                        <h1>Netron<span>Soft</span></h1>
                        <p>Technology make Business Simple. Grow passive income by using modern technology. NetronSoft always will be with you.</p>
                        <div className="social_icons">
                            <ul>
                                {
                                    footerData.socialData.map(item =>
                                        <li>
                                            <a href="#">
                                                <img src={item.icon} alt="" />
                                            </a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="middle_1">
                        <h2 className="footer_col_title"> Services</h2>
                        <ul>
                            {footerData.serviceData.map(item =>
                                <li><a href="#">{item.title}</a></li>
                            )}
                        </ul>
                    </div>

                    <div className="middle_1">
                        <h2 className="footer_col_title"> Quick Links</h2>
                        <ul>
                            {footerData.quickLinks.map(item =>
                                <li><a href="#">{item.title}</a></li>
                            )}
                        </ul>
                    </div>

                    <div className="middle_1">
                        <h2 className="footer_col_title"> Reach Us</h2>
                        <ul>
                            {footerData.reachData.map(item =>
                                <li><img src={item.icon} alt="" />
                                    {item.data}
                                </li>
                            )}
                        </ul>

                    </div>


                </div>
                <div className="all_rights">
                <p>@2021 NetronSoft. All rights reserved</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;