import van from 'vanjs-core'
import { Button } from './components/Button/Button'
import { NumberInput } from './components/NumberInput/NumberInput'

const { a, div, li, p, ul } = van.tags

const Hello = () =>
  div(
    { class: 'root' },
    div(NumberInput({ min: '1', name: 'example', alt: 'number input example' })),
    div(Button({ text: 'create room', onClick: () => alert('Hello from 🍦VanJS') })),
    div(Button({ text: 'create room', type: 'success', onClick: () => alert('Hello from 🍦VanJS') })),
    div(Button({ text: 'create room', type: 'warning', onClick: () => alert('Hello from 🍦VanJS') })),
    div(Button({ text: 'create room', type: 'error', onClick: () => alert('Hello from 🍦VanJS') })),
    div(Button({ text: 'create room', type: 'info', onClick: () => alert('Hello from 🍦VanJS') }))
  )

van.add(document.body, Hello())
