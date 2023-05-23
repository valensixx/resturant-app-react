import React, { useRef } from "react";
import "./Intro.css";
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import meal from '../../assets/meal.mp4';
import { data } from "../../data";

export default function Intro() {
    const vidRef = useRef();

    return (
        <div className="app-video">
            <video
                src={meal}
                ref={vidRef}
                controls={false}
                type="video/mp4"
                loop
            />
        </div>
    );
}