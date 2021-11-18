import React from 'react';
import { About } from '../About/About';
import { AllServices } from '../AllServices/AllServices';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../shared/Footer/Footer';

const HeaderContent = {
    title: ' Our Services',
    description: ""
}
const ServicePage = () => {
    return (
        <>
            <HeroSection content={HeaderContent} />
            <AllServices />
            <Footer />
        </>
    );
};

export default ServicePage;