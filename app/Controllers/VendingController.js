import { appState } from "../AppState.js";
import { Items } from "../Models/Vending.js";
import { vendingService } from "../Services/vendingService.js";
import { setHTML, setText } from "../Utils/Writer.js";


function _drawItems() {
  let snack = appState.items.sort((a, b) => b.price - a.price)
  let template = ''
  snack.forEach(i => template += i.ListTemplate)
  setHTML('app', template)
}

function _drawActive() {
  let selected = appState.activeItem
  setHTML('activeItem', selected.ActiveTemplate)
}

function _drawMoney() {
  let money = appState.money
  let template = ''
  for (let i = 0; i < money; i++) {
    template += '🪙'
  }
  setText('money', template)
}




export class VendingController {

  constructor() {

    _drawItems()

    appState.on('activeItem', _drawActive)

    appState.on('money', _drawMoney)
  }

  addMoney() {
    vendingService.addMoney()
  }

  buyItem() {
    vendingService.buyItem()
  }


  setActive(name) {
    vendingService.setActive(name)
  }

}