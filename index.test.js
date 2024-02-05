const englishDuration = require('./index')
test('spell duration in English', ()=> {
    expect(englishDuration(3602)).toBe('1 hour and 2 seconds')
})