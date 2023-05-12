import React from "react";
import "./App.css";

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Laurels, Menu } from "./containers";
import {Navbar} from './components';


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