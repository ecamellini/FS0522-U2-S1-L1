let dateTime = new Date();
dateTime.setTime(0)


function startTimer() {
  setInterval(printTimer, 10)
}

function printTimer() {
  let newValue = dateTime.getTime() + 10
  dateTime.setTime(newValue)
  document.getElementById('screen').innerHTML = `${dateTime.getMinutes()}:${dateTime.getSeconds()}:${dateTime.getMilliseconds()}`
}
