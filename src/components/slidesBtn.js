import React from 'react';
import PRESENTATION from '../assets/presentation.png';

const SlidesButton = (props) => {
    const { src, presentSlides, btnClassName } = props;

    return (
        <div className={btnClassName}>
            <img
                className="slides-btn"
                src={src || PRESENTATION}
                onClick={presentSlides} />
        </div>
    );
};

export default SlidesButton;
