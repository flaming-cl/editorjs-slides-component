import React, { useEffect, useState, useRef } from 'react';
import SlidesButton from './components/slidesBtn';
import Slides from './components/slides';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/solarized.css';
import './index.css';

const EditorSlides = (props) => {
    const { src, btnClassName, slidesConfig, theme } = props;
    const [slidesData, setSlidesData] = useState([]);
    const reveal = useRef();
    const slides = useRef();

    useEffect(() => {
        const slidesNotInitiated = !reveal.current;
        if (slidesNotInitiated) return;
    }, []);

    const presentSlides = () => {
        const notInitYet = !slidesData.length;
        if (notInitYet) {
            initSlides();
        }
        fillSlidesData();
        reveal.current.hidden = false;
        enterFullscreen();
    }

    const fillSlidesData = () => {
        const blocks = document.getElementsByClassName('ce-block');
        const newSlideData = [];
        if (blocks.length) {
            for (var i = 0; i < blocks.length; i++) {
                const singleBlock = blocks[i];
                const hasContent = singleBlock.innerText.length;
                if (hasContent) newSlideData.push(singleBlock.innerHTML);
            }
        }
        setSlidesData(newSlideData);
    };

    const initSlides = () => {
        const revealNode = reveal.current;
        if (revealNode) {
            initSlideInstance();
            configSlidesInstance();
        }
    };

    const initSlideInstance = () => {
        Reveal.initialize({
            embedded: true,
            slideNumber: true,
        });
    };

    const configSlidesInstance = () => {
        Reveal.configure({
            keyboard: {
                70: null, // F
                27: removeRevealNode, // esc
                13: 'next', // enter
                32: null // space
            }
        });
    }

    const removeRevealNode = () => {
        if (reveal.current) reveal.current.hidden = true;
    };

    const enterFullscreen = () => {
        let element = reveal.current;
        if (element.hidden !== true) {
            element = element || document.documentElement;

            const requestMethod = element.requestFullscreen ||
                element.webkitRequestFullscreen ||
                element.webkitRequestFullScreen ||
                element.mozRequestFullScreen ||
                element.msRequestFullscreen;

            if( requestMethod ) {
                requestMethod.apply(element);
            }
        }
    }

    return (
        <div>
            <Slides reveal={reveal} slides={slides} slidesData={slidesData} />
            <SlidesButton src={src} btnClassName={btnClassName} presentSlides={presentSlides} />
        </div>
    )
};

export default EditorSlides;
