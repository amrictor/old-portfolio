import React, { Component } from 'react';
import './FishTank.scss';

class FishTank extends Component {

    render() {
        return (
            <div className="tank">
                <div className="toplayer"/>
                <div className="layer1"/>
                <div className="layer2"/>
                <div className="layer3"/>
                <div className="layer4"/>
                <div className="layer5"/>
                <div className="layer6"/>
            </div>
        );
    }
} 
export default FishTank;