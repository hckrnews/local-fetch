# Local Fetch

[![NPM version][npm-image]][npm-url] [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_local-fetch&metric=coverage)](https://sonarcloud.io/summary/new_code?id=hckrnews_local-fetch) [![Scrutinizer Code Quality][scrutinizer-image]][scrutinizer-url] [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_local-fetch&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=hckrnews_local-fetch) 
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_local-fetch&metric=bugs)](https://sonarcloud.io/summary/new_code?id=hckrnews_local-fetch) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_local-fetch&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=hckrnews_local-fetch) [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_local-fetch&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=hckrnews_local-fetch) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_local-fetch&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=hckrnews_local-fetch)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_local-fetch&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=hckrnews_local-fetch) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_local-fetch&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=hckrnews_local-fetch) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_local-fetch&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=hckrnews_local-fetch)

With this package you can get local file data like the fetch method.

## Example usage

```javascript
import localFetchfrom '@hckrnews/local-fetch'

const fetch = await localFetcher('file:///Users/pieter.wigboldus/projects/local-fetch/src/__fixtures__/example.json')
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
