let dateTime;

function printDateTime() {

  if (dateTime === undefined) {
    dateTime = new Date();
  }

  console.log(dateTime.toISOString())
  let dateIT = dateTime.toLocaleDateString('it-IT')
  let timeIT = dateTime.toLocaleTimeString('it-IT')
  let stringToPrint = `Hai timbrato in data ${ dateIT  } alle ore ${ timeIT }`
  document.getElementById('screen').innerHTML = stringToPrint

  document.getElementById('usa-time').innerHTML = `NY TIME: ${dateTime.toLocaleString('it-IT', { timeZone: "America/New_York"})} `

}
