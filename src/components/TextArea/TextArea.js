import van from 'vanjs-core'
import '../../style.css'
import './textArea.css'

const { textarea } = van.tags

export const TextArea = ({ rows = '2', cols = '20', name = '' }) => textarea({ class: 'textArea', rows, cols, name })
