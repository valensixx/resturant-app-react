import React, { useRef, useState } from "react";
import "./Intro.css";
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import meal from '../../assets/meal.mp4';
import { data } from "../../data";

export default function Intro() {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();
    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo)
        if (playVideo) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }
    }

    return (
        <div className="app-video">
            <video
                src={meal}
                ref={vidRef}
                controls={false}
                type="video/mp4"
                loop
            />
            <div className="app-video-overlay flex-center">
                <div
                    className="app-video-overlay-circle flexcenter"
                    onClick={handleVideo}
                >
                    {playVideo ?
                        (
                            <BsPauseFill color="#fff" fontSize={30} />
                        ) : <BsFillPlayFill color="#fff" fontSize={30} />
                    }

                </div>
            </div>
        </div>
    );
}