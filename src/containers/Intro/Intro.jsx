import React from "react";
import "./Intro.css";
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import meal from '../../assets/meal.mp4';
import { data } from "../../data";

export default function Intro() {
    return (
        <div className="app-video">
            <video src={meal} controls />
        </div>
    );
}