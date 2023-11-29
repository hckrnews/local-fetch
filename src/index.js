import fs from 'node:fs'
import getPath from './get-path.js'

const localFetch = async (location) => {
  const path = getPath(location)
  const rawdata = fs.readFileSync(path)
  const stream = fs.createReadStream(path)
  return {
    body: stream,
    text: async () => rawdata.toString('ascii', 0, rawdata.length),
    json: async () => JSON.parse(rawdata)
  }
}

export default localFetch
