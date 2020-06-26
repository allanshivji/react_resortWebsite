import React, { Component } from 'react';
import { RoomContext } from '../context';

import Loading from '../pages/Loading';
import Room from '../pages/Room';
import Title from '../pages/Title';

class FeaturedRooms extends Component {

    static contextType = RoomContext

    render() {
        let { loading, featuredRooms: rooms } = this.context;

        rooms = rooms.map(room => {
            return <Room
                key={rooms.id}
                room={room}
            />
        })


        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        );
    }
}

export default FeaturedRooms;