
function printDateTime() {
  // Leggo dal localStorage (cioè dai Cookies) il valore salvato con ID 'timbrato'
  let savedDate = localStorage.getItem('timbrato')

  if (savedDate === null) { // Se questo valore non esiste
    localStorage.setItem('timbrato', new Date()) // lo creo e lo salvo
  }

  // Lo leggo di nuovo, ora sicuramente esiste
  // Il localStorage però salva solo stringhe, quindi devo creare un oggetto data partendo dalla stringa che leggo
  let dateTime = new Date(localStorage.getItem('timbrato'))
  let dateIT = dateTime.toLocaleDateString('it-IT')
  let timeIT = dateTime.toLocaleTimeString('it-IT')
  let stringToPrint = `Hai timbrato in data ${ dateIT  } alle ore ${ timeIT }`
  document.getElementById('screen').innerHTML = stringToPrint
}
