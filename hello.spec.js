const Hello = number => number * 2

describe('HELLO TEST', () => {
  it('is a basic test', () => {
    const number = 1
    const result = Hello(number)
    expect(result).toEqual(2)
  })

  it('should fail this test', () => {
    const number = 2
    const result = Hello(number)
    expect(result).toEqual(4)
  })
})
