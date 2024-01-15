import { adjectives, animals } from './words'

const getRandomWordFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

const capitaliseWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const generateUsername = () => {
  let namePart1 = getRandomWordFromArray(adjectives)
  let namePart2 = getRandomWordFromArray(adjectives)
  let namePart3 = getRandomWordFromArray(animals)
  return `${capitaliseWord(namePart1)}-${capitaliseWord(namePart2)}-${namePart3}`
}
