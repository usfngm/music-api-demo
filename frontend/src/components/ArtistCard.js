import React, { Component } from 'react';

class ArtistCard extends Component {
    render() {
        return (
            <div className="artistCardContainer">
                <div
                    className="artistCardImg"
                    style={{ backgroundImage: 'url(' + this.props.img + ')' }}
                />
                <div className="artistCardContent">
                    <h2 style={{ marginBottom: 0 }}>{this.props.name}</h2>
                    <p style={{ textAlign: 'justify' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui ligula, fermentum ut nulla eu, pellentesque dapibus turpis.
                    </p>
                </div>
            </div>
        )
    }
}

export default ArtistCard;