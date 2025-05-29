import {makeProject} from '@motion-canvas/core';

import intro from './scenes/intro?scene';
import Slide1 from './scenes/Slide1?scene';
import Slide2 from './scenes/Slide2?scene';
import Slide3 from './scenes/Slide3?scene';

import './global.css'; // <- import the css

export default makeProject({
  scenes: [intro,Slide1,Slide2,Slide3],
});
