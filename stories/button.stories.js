import { document } from 'global';
import { action } from '@storybook/addon-actions';
import { useEffect } from '@storybook/client-api';

export default {
  title: 'Demo',
};

export const button = () => {
  const btn = document.createElement('button');
  btn.innerHTML = 'Hello Button';
  btn.addEventListener('click', alert('click'));
  return btn;
};

export const effect = () => {
  	useEffect(() => {
    	document.getElementById('button').classList.add('someclass');
	});

  return '<button id="button">addclass button</button>';
};