import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#0b5096',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;