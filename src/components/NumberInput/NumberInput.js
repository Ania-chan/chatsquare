import van from 'vanjs-core'
import '../../style.css'
import './numberInput.css'

const { div, input } = van.tags

export const NumberInput = ({ min = '0', max = '100', name = '', alt = '' }) =>
  div({ class: 'numberInput' }, input({ type: 'number', min, max, name, alt, class: 'input' }))
