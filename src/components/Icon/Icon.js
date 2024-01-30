import van from 'vanjs-core'
import '../../style.css'
import './icon.css'
import icons from './icon-imports'

const { img } = van.tags

export const Icon = ({ name, alt = '' }) => img({ class: 'icon', alt, innerHTML: icons[name] })
