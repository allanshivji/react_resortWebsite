import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../pages/Hero';
import Banner from '../pages/Banner';
import RoomsContainer from '../pages/RoomsContainer';

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                    <Link to="/" className="btn-primary">
                        return home
                </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )
}

export default Rooms;