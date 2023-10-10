/* eslint-disable no-unused-expressions */
const fs = require('fs')

// Read the JSON file
fs.readFile('./escriturras.json', 'utf8', (err, content) => {
  if (err) {
    console.error('Error reading JSON file:', err)
    return
  }

  try {
    // Parse the JSON content into a JavaScript object
    const escriturrasObj = JSON.parse(content)

    const { data, ...metadata } = escriturrasObj

    const ends = ['.', '!', '?']
    const starts = ['#', '¡', '¿']

    for (const escriturra of data) {
      escriturra.quote ? escriturra.quote = escriturra.quote.trim() : ''
      escriturra.quote_ans ? escriturra.quote_ans = escriturra.quote_ans.trim() : ''
      escriturra.context ? escriturra.context = escriturra.context.trim() : ''
      if (!ends.includes(escriturra.quote[escriturra.quote.length - 1])) { // if last letter not , ? or !, then add a dot.
        escriturra.quote += '.'
      }
      if (escriturra.quote_ans && escriturra.quote_ans[escriturra.quote_ans.length - 1] !== '.') { // if last letter is not a dot. add a dot
        escriturra.quote_ans += '.'
      }
      if (escriturra.context && escriturra.context[escriturra.context.length - 1] !== '.') { // if last letter is not a dot. add a dot
        escriturra.context += '.'
      }
      if (starts.includes(escriturra.quote[0])) { // if first letter not a Letter, delete it.
        escriturra.quote = escriturra.quote.slice(1)
      }
    }
    console.log(escriturrasObj)
    // Convert the JavaScript object back to JSON
    const updatedJson = { ...metadata, data }
    const updatedEscriturrasJson = JSON.stringify(updatedJson, null, 2)

    // Write the updated JSON back to the file, overwriting its contents
    fs.writeFile('./escriturras.json', updatedEscriturrasJson, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing JSON file:', writeErr)
      } else {
        console.log('JSON file updated successfully.')
      }
    })
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError)
  }
})
