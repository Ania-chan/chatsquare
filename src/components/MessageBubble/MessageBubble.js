import van from 'vanjs-core'
import '../../style.css'
import './messageBubble.css'

const { div, p } = van.tags

export const MessageBubble = ({ time, user, text }) =>
  div(
    { class: 'textBubbleContainer' },
    p({ class: 'timeAndUser' }, `${time} ago - ${user}`),
    div({ class: 'textBubble' }, p({ class: 'text' }, text))
  )
