import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../pages/Hero';
import Banner from '../pages/Banner';
import Services from '../pages/Services';
import FeaturedRooms from '../pages/FeaturedRooms';

const Home = () => {
    return (
        <React.Fragment>
            <Hero>
                <Banner title="Luxurious Room" subtitle="Delux room starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </React.Fragment>
    )
}

Hero.defaultProps={
                hero:"defaultHero"
}

export default Home;