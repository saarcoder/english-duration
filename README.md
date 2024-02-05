# english-duration
## Description
Spell out a time duration from a given input of seconds, in an English language sentence

## Usage
Pass any (positive) number of seconds to get string describing the given time duration in English language. Number values will be returned as integers, not words. As this helper does not work with dates, no values indicating months will be returned.

Basic examples
```js
englishDuration(3602)   // returns '1 hour and 2 seconds'
englishDuration(894492160)  // returns '28 years, 132 days, 22 hours, 2 minutes and 40 seconds'
```
