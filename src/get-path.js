import { URL } from 'url'
import isURL from './is-url.js'

const getPath = location =>
  isURL(location)
    ? new URL(location)
    : location

export default getPath
