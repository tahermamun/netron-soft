import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';

const HeaderContent = {
    title: 'NetronSoft is a Trusted Software Solution Village',
    description: ""
}

const Header = () => {
    return (
        <>
            <HeroSection height='100' video={true} content={HeaderContent} />
        </>
    );
};

export default Header;