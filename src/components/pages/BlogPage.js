import React from 'react';
import { About } from '../About/About';
import { AllServices } from '../AllServices/AllServices';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../shared/Footer/Footer';

const HeaderContent = {
    title: 'About to Netron Soft',
    description: "The industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
const BlogPage = () => {
    return (
        <>
            <HeroSection content={HeaderContent} />
            <AllServices />
            <Footer />
        </>
    );
};

export default BlogPage;