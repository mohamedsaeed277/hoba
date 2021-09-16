import React from 'react';
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo';
import Navbar from '../components/navbar/Navbar';
import WidgetLg from '../components/widgetLg/WidgetLg';

const Home = () => {
    return (
        <div>
           <Navbar /> 
           <FeaturedInfo />
           <WidgetLg />
        </div>
    )
}

export default Home
