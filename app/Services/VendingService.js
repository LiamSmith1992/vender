import { appState } from "../AppState.js";



class VendingService {
  setActive(name) {
    let selected = appState.items.find(i => i.name == name)
    appState.activeItem = selected
    console.log(name);
  }

  addMoney() {
    appState.money = appState.money + 1
  }

  buyItem() {
    if (appState.money >= activeItem.price) {
      appState.money -= activeItem.price
      appState.emit('money')
    }

  }
}

export const vendingService = new VendingService()