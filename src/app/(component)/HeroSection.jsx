'use client'
import React from 'react';
import Slider from './Slider';
import WeeklyDeal from './Weeklydeal';
import Monthlydeal from './Monthlydeal';
import WhoWeAre from './WoWeAre';
import Delivers from './Delivers';
import Footer from './Footer';

function HeroSection() {
    return (       
            <div>
                <Slider />
                <WeeklyDeal />
                <Monthlydeal />
                <WhoWeAre />
                <Delivers />
                <Footer />
            </div>       
    );
};

export default HeroSection