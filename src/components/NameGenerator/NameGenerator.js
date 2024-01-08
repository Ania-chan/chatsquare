import van from 'vanjs-core'
import { adjectives, animals } from './words'
import '../../style.css'
import './nameGenerator.css'

const { div, p, button } = van.tags
const username = van.state('')

const getRandomWordFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

const capitaliseWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const generateUsername = () => {
  let namePart1 = getRandomWordFromArray(adjectives)
  let namePart2 = getRandomWordFromArray(adjectives)
  let namePart3 = getRandomWordFromArray(animals)
  return (username.val = `${capitaliseWord(namePart1)}-${capitaliseWord(namePart2)}-${namePart3}`)
}

export const NameGenerator = () =>
  div(
    { class: 'nameGenerator' },
    p({ class: 'username' }, username),
    button({ class: 'usernameButton', onclick: generateUsername }, 'test')
  )
