// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function writeHeading(string, number) {
    const heading = document.createElement('h1')
    main.append(heading)
    heading.className = 'Kata'
    heading.id = number.toString()
    heading.append(string)
}

writeHeading('Kata One', 1)
writeHeading('Kata Two', 2)
writeHeading('Kata Three', 3)
writeHeading('Kata Four', 4)
writeHeading('Kata Five', 5)
writeHeading('Kata Six', 6)
writeHeading('Kata Seven', 7)

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const greenEyes1 = users.filter(user => user.eyeColor === "green")
printKata(0, greenEyes1)

const active = users.filter(user => user.isActive === "true")
printKata(1, active)

const email = users.map(user => user.email)
printKata(2, email)

const ovation = users.some(user => user.company === "OVATION")
printKata(3, ovation)

const age = users.find(user => user.age > 38)
printKata(4, age)

printKata(5, age, active)

const zenco = users.filter(user => user.company === "ZENCO")
const balance = users.map(user => user.balance)
printKata(6, zenco, balance)

const fugiat = users.includes(user => user.tags === "fugiat")
const ageOf = users.map(user => user.age)
printKata(7, ageOf, fugiat)