import React from "react";
import "./App.css";

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, Menu } from './containers';
import {Navbar} from './components/Navbar/Navbar';


export default function App(){
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <Menu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer/> 
        </div>
    );
}