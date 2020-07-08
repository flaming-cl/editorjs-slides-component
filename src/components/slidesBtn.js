import React from 'react';
import PRESENTATION from '../assets/presentation.png';

const SlidesButton = (props) => {
    const { src, presentSlides, btnClassName } = props;

    return (
        <div className={btnClassName}>
            <img
                className="editorjs-compo-slides-btn-0933"
                src={src || PRESENTATION}
                onClick={presentSlides} />
        </div>
    );
};

export default SlidesButton;
