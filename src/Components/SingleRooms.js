import React from 'react';

import defaultBcg from '../images/room-1.jpeg';
import Hero from '../pages/Hero';
import Banner from '../pages/Banner';
import { Link } from 'react-router-dom';
import {RoomContext} from '../context';

class SingleRooms extends React.Component {

    constructor(props) {
        super(props);
        // console.log(props);

        this.state = {
            slug: this.props.match.params.actualRoom,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    componentDidMount() {

    }

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);
        
        return (
            <div>
                Hello from Single rrom;
            </div>
        )
    }
}

export default SingleRooms;