import van from 'vanjs-core'
import '../../style.css'
import './button.css'

const { button } = van.tags

export const Button = ({ text, onClick, type }) =>
  button({ onclick: onClick, class: `button ${type || 'default'}` }, text)
