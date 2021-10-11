import { expect, describe, it } from '@jest/globals'
import isURL from '../is-url.js'

const testCases = [
  {
    description: 'Location is local',
    target: './test.json',
    expectedResult: false
  },
  {
    description: 'Location is local',
    target: '/local/test.json',
    expectedResult: false
  },
  {
    description: 'Location is local',
    target: 'file:///foo.txt',
    expectedResult: true
  },
  {
    description: 'Location is local',
    target: 'file://localhost/etc/fstab',
    expectedResult: true
  }
]

describe.each(testCases)(
  'Test the Fetcher helper with test cases',
  ({ description, target, expectedResult }) => {
    it(description, async () => {
      const results = isURL(target)

      expect(results).toEqual(expectedResult)
    })
  }
)
