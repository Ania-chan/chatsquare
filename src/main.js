import van from 'vanjs-core'
import { Button } from './components/Button/Button'
import { NumberInput } from './components/NumberInput/NumberInput'
import { NameGenerator } from './components/NameGenerator/NameGenerator'

const { div } = van.tags

const Hello = () =>
  div(
    { class: 'root' },
    div(NumberInput({ min: '1', name: 'example', alt: 'number input example' })),
    div(NameGenerator),
    div(
      Button({
        text: 'create room',
        name: 'example button',
        alt: 'default button example',
        onClick: () => alert('Hello from 🍦VanJS')
      })
    ),
    div(
      Button({
        text: 'create room',
        name: 'example button',
        alt: 'success button example',
        type: 'success',
        onClick: () => alert('Hello from 🍦VanJS')
      })
    ),
    div(
      Button({
        text: 'create room',
        name: 'example button',
        alt: 'warning button example',
        type: 'warning',
        onClick: () => alert('Hello from 🍦VanJS')
      })
    ),
    div(
      Button({
        text: 'create room',
        name: 'example button',
        alt: 'error button example',
        type: 'error',
        onClick: () => alert('Hello from 🍦VanJS')
      })
    ),
    div(
      Button({
        text: 'create room',
        name: 'example button',
        alt: 'info button example',
        type: 'info',
        onClick: () => alert('Hello from 🍦VanJS')
      })
    )
  )

van.add(document.body, Hello())
