import React, { useEffect, useState, useRef } from 'react';

const Slides = (props) => {
    const { reveal, slides, slidesData } = props;

    return (
        <div className="reveal" id="reveal-node" ref={reveal} hidden>
            <div className="slides" ref={slides}>
                {
                    slidesData.length
                        ? slidesData.map((sDetail, i) =>
                            <section key={'slide' + i}
                                     dangerouslySetInnerHTML={{ __html : sDetail }}
                            />)
                        : null
                }
            </div>
        </div>
    );
};

export default Slides;
