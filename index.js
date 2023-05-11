// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (name, string) => name.filter(name => name.toLowerCase() === string.toLowerCase())

const fuzzyMatch = (name, string) => name.filter(name => name.charAt(0) === string.charAt(0))

const matchName = (driver, string) => driver.filter(driver => driver.name === string)