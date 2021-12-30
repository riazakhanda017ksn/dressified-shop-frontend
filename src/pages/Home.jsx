import React from 'react';
import Annoucement from '../components/Annoucement/Annoucement';
import Categories from '../components/Categories/Categories';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import NewsLater from '../components/NewsLater/NewsLater';
import Products from '../components/Products/Products';
import Slider from '../components/Slider/Slider'

const Home = () => {
    return (
        <div>
            <Annoucement/>
            <Navbar></Navbar>
            <Slider></Slider>
            <Categories/>
            <Products/>
            <NewsLater/>
            <Footer/>
        </div>
    );
};

export default Home;