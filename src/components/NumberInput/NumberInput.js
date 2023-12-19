import van from 'vanjs-core'
import '../../style.css'
import './numberInput.css'

const { div, input } = van.tags

export const NumberInput = () => div({ class: 'numberInput' }, input({ type: 'number', min: '1', class: 'input' }))
