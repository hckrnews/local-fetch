import fs from 'fs'

const localFetch = async (location) => {
  const rawdata = fs.readFileSync(location)
  const stream = fs.createReadStream(location)
  return {
    body: stream,
    text: async () => rawdata.toString('ascii', 0, rawdata.length),
    json: async () => JSON.parse(rawdata)
  }
}

export default localFetch
