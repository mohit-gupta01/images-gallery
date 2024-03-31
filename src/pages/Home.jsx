import React from 'react';
import Hero from '../components/Hero/Hero';
import ShopByArtist from '../components/ShopByArtist/ShopByArtist';
import ShopByTheme from '../components/ShopByTheme/ShopByTheme';
import Gallery from '../components/Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Hero />
            <ShopByArtist />
            <ShopByTheme />
            <Gallery />
        </div>
    )
}

export default Home;