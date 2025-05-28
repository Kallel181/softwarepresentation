import {makeProject} from '@motion-canvas/core';

import intro from './scenes/intro?scene';
import Slide1 from './scenes/Slide1?scene';

import './global.css'; // <- import the css

export default makeProject({
  scenes: [intro,Slide1],
});
