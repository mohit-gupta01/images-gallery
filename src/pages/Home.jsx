import React from 'react';
import Hero from '../components/Hero/Hero';
import ShopByArtist from '../components/ShopByArtist/ShopByArtist';
import ShopByTheme from '../components/ShopByTheme/ShopByTheme';

const Home = () => {
    return (
        <div>
            <Hero />
            <ShopByArtist />
            <ShopByTheme />
        </div>
    )
}

export default Home;