import { storiesOf } from '@storybook/html'
import listTemplate from '../components/list.ejs'
import ifTemplate from '../components/if.ejs'
import functionTemplate from '../components/functions.ejs'
import classnameTemplate from '../components/classname.ejs'
import includeTemplate from '../components/header.ejs'

storiesOf('Ejs', module)
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
	}))

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


