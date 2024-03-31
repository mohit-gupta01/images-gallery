import React from 'react';
import './ShopByArtist.css';
import { Link } from 'react-router-dom';

const imagesByArtist = [
    {
        name: "Roberto",
        url: "https://images.unsplash.com/photo-1592160884144-921e26cb84e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    }, {
        name: "Roberto",
        url: "https://images.unsplash.com/photo-1619218533116-f050e7d91d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    }, {
        name: "Roberto",
        url: "https://images.unsplash.com/photo-1657293023658-9fe18b59bf86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    }, {
        name: "Roberto",
        url: "https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    }, {
        name: "Roberto",
        url: "https://images.unsplash.com/photo-1711580299304-b7ebf7ff20d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    }, {
        name: "Roberto",
        url: "https://images.unsplash.com/photo-1710425809234-bfa55cba864a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    }, {
        name: "Roberto",
        url: "https://images.unsplash.com/photo-1711313559408-4ed9d3255dfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    }, {
        name: "Roberto",
        url: "https://images.unsplash.com/photo-1592160884144-921e26cb84e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    }, {
        name: "Roberto",
        url: "https://images.unsplash.com/photo-1599566276129-97d70dfdda11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    }, {
        name: "Roberto",
        url: "https://images.unsplash.com/photo-1601988404913-608c4e512ad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    },

]



const ShopByArtist = () => {
    return (
        <div>
            <div className='artist-section'>
                <h1>Shop By Artist</h1>
                <div className='artists-works'>
                    {
                        imagesByArtist.map((image, index) => {
                            return (
                                <div className="card" style={{ backgroundImage: `url(${image.url})`, backgroundSize: "cover" }}>
                                    <div className="content">
                                        <h2 className="title">{image.name}</h2>
                                        <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of</p>
                                        <button className="btn">View Image</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Link to={"#"} className='view-more'>View More</Link>
            </div>
        </div>
    )
}

export default ShopByArtist;