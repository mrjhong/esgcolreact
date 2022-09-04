import React, { Component } from 'react'
import ocean from '../assets/media/Water3.mp4';
import ReactPlayer from 'react-player'
import "../assets/css/ocean.css"
import 'jquery.ripples';
import $ from 'jquery';

export class Ocean extends Component {
    componentDidMount() {
        //descomentar para efecto de ondas
        $('.header-overlay').ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.01,
        });
    }
    render() {

        return (
            <div>

                <div class="embed-responsive embed-responsive-16by9 header-video">
                    <video autoplay="true" loop="true" muted playsinline class="embed-responsive-item" src={ocean} type="video/mp4" allowfullscreen />
                </div>
                <div class="header-overlay">
                    <div class="Text-Head">
                        <h1 class="text-efect">Somos ESGCOL una compañia con vison futurista</h1>
                        <span class="text-efect">Officia labore aliqua enim tempor quis duis temp.</span>

                    </div>

                </div>

            </div>
        )
    }
}

export default Ocean