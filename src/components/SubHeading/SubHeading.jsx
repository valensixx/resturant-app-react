import React from 'react';
import images from '../../data/images';
import './SubHeading.css';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className='p-cormorant'>{title}</p>
    <img src={images.spoon} alt="image of a spoon" className='spoon-image' />
  </div>
);

export default SubHeading;