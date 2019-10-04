import { configure } from '@storybook/html'
import { withNotes } from '@storybook/addon-notes'

function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
addDecorator(withNotes)