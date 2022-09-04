import React, { Component } from 'react'
import "../../assets/css/card.css"
import Tilt from 'react-parallax-tilt';
export class Card extends Component {
    render() {
        return (
<Tilt>

            <div class="card rgb">
                <div class="card-image"></div>
                <div class="card-text ">
                    <span class="date">1 week ago</span>
                    <h2>Post Two</h2>
                    <p>Adipisicing elit. Ducimus, repudiandae corrupti tialeno des ameto temporibus omnis provident illum maxime quod. Lorem ipsum dolor</p>
                </div>
            </div>
</Tilt>

        )
    }
}

export default Card