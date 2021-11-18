import React from "react";
import { About } from "../About/About";
import { AllServices } from "../AllServices/AllServices";
// import { Blogs } from "../Blogs/Blogs";
import { HappyClientCard } from "../Home/HappyClientCard/HappyClientCard";
import Header from '../Home/Header/Header';
import {LatestProject} from '../Home/LatestProject/LatestProject';
import Footer from '../shared/Footer/Footer';
import { Services } from "../Services/Services";
import { Subscribe } from "../Subscribe/Subscribe";
import { Team } from "../Team/Team";

const Homepage = () => {

    return (
        <div>
            <Header />
            <HappyClientCard />
            <Services />
            <LatestProject />
            <Team />
            <Subscribe />
            {/* <Blogs /> */}
            <Footer />
        </div>
    );

}

export default Homepage;

