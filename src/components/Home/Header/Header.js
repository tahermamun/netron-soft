import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';

const HeaderContent = {
    title: 'NetronSoft is an Ttusted Soft Tech Service!',
    description: "The industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

const Header = () => {
    return (
        <>
            <HeroSection height='90' video={true} content={HeaderContent} />
        </>
    );
};

export default Header;