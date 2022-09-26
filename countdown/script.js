let dateTime = new Date();
dateTime.setTime(1000 * 3) // Mille millisecondi per 60 secondi per 5 minuti

let interval;

function startCountdown() {
  // Salviamo dentro a interval un riferimento al nostro interval
  interval = setInterval(printTimer, 10)
}

function printTimer() {

  if (dateTime.getTime() <= 0) {
    clearInterval(interval)
    return // Restituisce un valore e esce dalla funzione, cioè, la ferma
  }

  // Se abbiamo fatto return, sopra, allora queste righe non vengono eseguite
  let newValue = dateTime.getTime() - 10
  dateTime.setTime(newValue)
  document.getElementById('screen').innerHTML = `${dateTime.getMinutes()}:${dateTime.getSeconds()}:${dateTime.getMilliseconds()}`
}
