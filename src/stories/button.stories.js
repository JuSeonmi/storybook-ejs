import { storiesOf } from '@storybook/html'
import listTemplate from '../components/list.ejs'
import ifTemplate from '../components/if.ejs'
import functionTemplate from '../components/functions.ejs'
import classnameTemplate from '../components/classname.ejs'
import includeTemplate from '../components/header.ejs'
import buttonTemplate from '../components/button.ejs'

import centered from '@storybook/addon-centered/html'
import { linkTo } from '@storybook/addon-links'
import withEvents from '@storybook/addon-events';

storiesOf('Ejs', module)
	.addDecorator(centered)
	.add('list', () => listTemplate({ 
		"pets": [
			{
				name: "Hazel"
			}
			, {
				name: "Crystal"
			}
			, {
				name: "Catcher"
			}
		]
	}))

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

	// .add('First', () =>  buttonTemplate(
	// 	{ 
	// 		label: 'Button!',
	// 		methods: {
	// 			click: linkTo('include')
	// 		}
	// }))


	