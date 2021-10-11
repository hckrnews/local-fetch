import { expect, describe, it } from '@jest/globals'
import getPath from '../get-path.js'

const testCases = [
  {
    description: 'Location is local',
    target: './src/__fixtures__/example.json',
    expectedResult: './src/__fixtures__/example.json',
    expectedType: String
  },
  {
    description: 'Location is local',
    target: '/src/__fixtures__/example.json',
    expectedResult: '/src/__fixtures__/example.json',
    expectedType: String
  },
  {
    description: 'Location is local',
    target: 'file:///src/__fixtures__/example.json',
    expectedResult: 'file:///src/__fixtures__/example.json',
    expectedType: URL
  },
  {
    description: 'Location is local',
    target: 'file://localhost/etc/fstab',
    expectedResult: 'file:///etc/fstab',
    expectedType: URL
  }
]

describe.each(testCases)(
  'Test the Fetcher helper with test cases',
  ({ description, target, expectedResult, expectedType }) => {
    it(description, async () => {
      const results = getPath(target)

      expect(results.constructor).toEqual(expectedType)
      expect(results.toString()).toBe(expectedResult)
    })
  }
)
