# Local Fetch

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Scrutinizer Code Quality][scrutinizer-image]][scrutinizer-url]

With this package you can get local file data like the fetch method.

## Example usage

```javascript
import localFetchfrom '@hckrnews/local-fetch'

const fetch = await localFetcher('./src/__fixtures__/example.json')
```

Returns the body as string. 
```javascript
fetch.text()
```

Returns the body parsed as JSON. 
```javascript
fetch.json()
```

Returns the body as [ReadableStream](https://streams.spec.whatwg.org/#readablestream). 
```javascript
let result = ''
fetch.body.on('data', (chunk) => {
    result += chunk
})

fetch.body.on('end', () => {
    const data = JSON.parse(result)
})
```

[npm-url]: https://www.npmjs.com/package/@hckrnews/local-fetch
[npm-image]: https://img.shields.io/npm/v/@hckrnews/local-fetch.svg
[travis-url]: https://app.travis-ci.com/hckrnews/local-fetch
[travis-image]: https://app.travis-ci.com/hckrnews/local-fetch.svg?branch=main
[coveralls-url]: https://coveralls.io/r/hckrnews/local-fetch
[coveralls-image]: https://img.shields.io/coveralls/hckrnews/local-fetch/main.svg
[scrutinizer-url]: https://scrutinizer-ci.com/g/hckrnews/local-fetch/?branch=main
[scrutinizer-image]: https://scrutinizer-ci.com/g/hckrnews/local-fetch/badges/quality-score.png?b=main
