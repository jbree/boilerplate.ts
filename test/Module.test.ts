import { Module } from '../src/Module'

describe('Module', () => {
  test('greeting', () => {
    const m = new Module()
    expect(m.greeting).toEqual('Hello, world!')
  })
})