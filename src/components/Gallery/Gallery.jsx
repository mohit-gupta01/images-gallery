import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <section className="gallery">
            <div className="container">
                <h1 className='gallery-heading'>Gallery</h1>
                <div className="grid">
                    <div className="column-xs-12 column-md-4">
                        <figure className="img-container">
                            <img src="https://source.unsplash.com/8b1cWDyvT7Y" alt='' />
                            <figcaption className="img-content">
                                <h2 className="img-title">Smart Watch</h2>
                                <h3 className="category">Showcase</h3>
                            </figcaption>
                            <span className="img-content-hover">
                                <h2 className="img-title">Smart Watch</h2>
                                <h3 className="category">Showcase</h3>
                            </span>
                        </figure>
                    </div>
                    <div className="column-xs-12 column-md-4">
                        <figure className="img-container">
                            <img src="https://source.unsplash.com/5VXH4RG88gc" alt='' />
                            <figcaption className="img-content">
                                <h2 className="img-title">Camera Film</h2>
                                <h3 className="category">Showcase</h3>
                            </figcaption>
                            <span className="img-content-hover">
                                <h2 className="img-title">Camera Film</h2>
                                <h3 className="category">Showcase</h3>
                            </span>
                        </figure>
                    </div>
                    <div className="column-xs-12 column-md-4">
                        <figure className="img-container">
                            <img src="https://source.unsplash.com/XtUd5SiX464" alt='' />
                            <figcaption className="img-content">
                                <h2 className="img-title">Coffee</h2>
                                <h3 className="category">Showcase</h3>
                            </figcaption>
                            <span className="img-content-hover">
                                <h2 className="img-title">Coffee</h2>
                                <h3 className="category">Showcase</h3>
                            </span>
                        </figure>
                    </div>
                    <div className="column-xs-12 column-md-6">
                        <figure className="img-container">
                            <img src="https://source.unsplash.com/JYGnB9gTCls" alt='' />
                            <figcaption className="img-content">
                                <h2 className="img-title">Phone</h2>
                                <h3 className="category">Showcase</h3>
                            </figcaption>
                            <span className="img-content-hover">
                                <h2 className="img-title">Phone</h2>
                                <h3 className="category">Showcase</h3>
                            </span>
                        </figure>
                    </div>
                    <div className="column-xs-12 column-md-6">
                        <figure className="img-container">
                            <img src="https://source.unsplash.com/-RBuQ2PK_L8" alt='' />
                            <figcaption className="img-content">
                                <h2 className="img-title">Keyboard</h2>
                                <h3 className="category">Showcase</h3>
                            </figcaption>
                            <span className="img-content-hover">
                                <h2 className="img-title">Keyboard</h2>
                                <h3 className="category">Showcase</h3>
                            </span>
                        </figure>
                    </div>
                    <div className="column-xs-12">
                        <figure className="img-container">
                            <img src="https://source.unsplash.com/P44RIGl9V54" alt='' />
                            <figcaption className="img-content">
                                <h2 className="img-title">Wrist Watch</h2>
                                <h3 className="category">Showcase</h3>
                            </figcaption>
                            <span className="img-content-hover">
                                <h2 className="img-title">Wrist Watch</h2>
                                <h3 className="category">Showcase</h3>
                            </span>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;