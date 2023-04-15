import { Application } from 'https://cdn.jsdelivr.net/npm/@splinetool/runtime@0.9.273/build/runtime.js';
  
const appDiv = document.getElementById('app');
const canvas = document.createElement('canvas');
canvas.id = 'canvas3d';
const app = new Application(canvas);
app.load('https://prod.spline.design/iFW23HTfxLhk2Gqk/scene.splinecode');
appDiv.appendChild(canvas);