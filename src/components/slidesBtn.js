import React from 'react';
import PRESENTATION from '../assets/presentation.png';

const SlidesButton = (props) => {
    const { src, presentSlides } = props;

    return (
        <div>
            <img
                className="slides-btn"
                src={src || PRESENTATION}
                onClick={presentSlides} />
        </div>
    );
};

export default SlidesButton;
