
import { storiesOf } from '@storybook/html'
import listTemplate from '../src/components/list.ejs'
import ifTemplate from '../src/components/if.ejs'
import functionTemplate from '../src/components/functions.ejs'
import classnameTemplate from '../src/components/classname.ejs'
import includeTemplate from '../src/components/header.ejs'
import buttonTemplate from '../src/components/button.ejs'

import centered  from '@storybook/addon-centered/html';
import { action } from '@storybook/addon-actions';

storiesOf('Ejs|syntax', module)
	.addDecorator(centered)
	.add('list', () => listTemplate({ 
		"pets": [
			{
				pname: "Hazel"
			}
			, {
				pname: "Crystal"
			}
			, {
				pname: "Catcher"
			}
		],
	}),
	{ 
		backgrounds: [{
		  name: 'red', value: 'rgba(255, 0, 0)',
		}]
	})


	.add('if1', () => ifTemplate({
		type: "A"
	}))

	.add('if2', () => ifTemplate({
		type: "B"
	}), 
	{
		notes: 'A very simple example of addon notes',
	})

	.add ('functions', () => functionTemplate ({
			users: [
				{name: 'Tobi', age: 2, species: 'ferret'},
				{name: 'Loki', age: 2, species: 'ferret'},
				{name: 'Jane', age: 6, species: 'ferret'}
			]
	}))

	.add('classname', () => classnameTemplate({
		selected : true,
		currentMenu: 'dashboard' 
	}))

	
	.add('include', () => includeTemplate({

	}))
	
	.add('button', () => {
		const button = document.createElement('button');
		button.innerHTML = 'Hello Button';
		button.addEventListener('click', action('Click'));
		return button;
	});
	
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