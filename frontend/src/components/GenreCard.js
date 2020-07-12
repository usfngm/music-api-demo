import React from 'react';

const GenreCard = (props) => {
    return (
        <div className="cardWrapper">
            <div onClick={() => {props.onClick(props.id)}} className="card">
                <div className="cardOverlayBg" style={{ backgroundImage: 'url( ' + props.picture + ')' }} />
                <div className="cardContent">
                    <span className="cardTitle">{props.title}</span>
                    <span className="cardTooltip">Show Artists</span>
                </div>
            </div>
        </div>
    )
}

export default GenreCard;