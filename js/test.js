/**
 *   Este fichero prueba el código.
 *   @author Miguel Jaque <mjaque@migueljaque.com>
 *   @license GPL-3.0-or-later
 *   Ref: https://spdx.org/licenses/
 */

/*** NO MODIFIQUES ESTE FICHERO ***/
/* Tú debes programar solo en codigo.js */

'use strict'

window.onload = probar

function probar() {
  let ej = 'ej11'
  let ok = false
  //Ejercicio 1.1
  if (sumar("5", "7") === 12)
    document.getElementById(ej).classList.add('ok')
  else
    document.getElementById(ej).classList.add('nok')

  //Ejercicio 1.2
  ej = 'ej12'
  if (comprobar("5") && !comprobar("Zapato"))
    document.getElementById(ej).classList.add('ok')
  else
    document.getElementById(ej).classList.add('nok')

  //Ejercicio 2.1
  ej = 'ej21'
  if (typeof multiplicar == 'function') {
    let res = multiplicar(3.1, 2.4)
    if (res > 7.43 && res < 7.441)
      document.getElementById(ej).classList.add('ok')
    else
      document.getElementById(ej).classList.add('nok')
  } else
    document.getElementById(ej).classList.add('nok')

  //Ejercicio 2.2
  ej = 'ej22'
  if (elevar(2, 3) === 8 && elevar(2.4, 0) === 1)
    document.getElementById(ej).classList.add('ok')
  else
    document.getElementById(ej).classList.add('nok')

  //Ejercicio 3.1
  ej = 'ej31'
  if (JSON.stringify(generarArray()) == JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
    document.getElementById(ej).classList.add('ok')
  else
    document.getElementById(ej).classList.add('nok')

  //Ejercicio 3.2
  ej = 'ej32'
  let filas = 3
  let cols = 5
  let suma = 0
  let matriz = generarArrayBidimensionalAleatorio(filas, cols)
  if (matriz.length != filas) {
    document.getElementById(ej).classList.add('nok')
    return
  }
  for (let f = 0; f < matriz.length; f++) {
    if (matriz[f].length != cols) {
      document.getElementById(ej).classList.add('nok')
      return
    }
    for (let c = 0; c < cols; c++) {
      if (matriz[f][c] < 1 || matriz[f][c] > 100) {
        document.getElementById(ej).classList.add('nok')
        return
      }
      suma += matriz[f][c]
    }
  }
  if (sumarArrayBidimensional(matriz) == suma)
    document.getElementById(ej).classList.add('ok')
  else
    document.getElementById(ej).classList.add('nok')

  //Ej. 4.1
  ej = 'ej41'
  ok = false
  if (typeof Factura == 'function') {
    let f = new Factura('Pepe', 100, 21)
    if (f.getCliente() == 'Pepe' &&
      f.getBase() == 100 &&
      f.getTipoIVA() == 21) {
      if (f.getTotal() == 121)

        ok = true
    }
  }
  if (ok)
    document.getElementById(ej).classList.add('ok')
  else
    document.getElementById(ej).classList.add('nok')

}
