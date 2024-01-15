import van from 'vanjs-core'
import '../../style.css'
import './nameGenerator.css'

const { div, p, button } = van.tags
const username = van.state('')

export const NameGenerator = ({ generateUsername }) =>
  div(
    { class: 'nameGenerator' },
    p({ class: 'username' }, username),
    button({ class: 'usernameButton', onclick: () => (username.val = generateUsername()) }, 'test')
  )
