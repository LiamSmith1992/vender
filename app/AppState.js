import { Value } from "./Models/Value.js"
import { Items } from "./Models/Vending.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  items = [
    new Items({
      name: "doritos",
      price: 1,
      imgURL: 'https://mobileimages.lowes.com/product/converted/028400/028400097659.jpg?size=pdhism'
    }),
    new Items({
      name: "funions",
      price: 1,
      imgURL: 'https://pics.drugstore.com/prodimg/567368/450.jpg'
    }),
    new Items({
      name: "sunchips",
      price: 1,
      imgURL: 'https://m.media-amazon.com/images/I/81Gd9HPSd6L.jpg'
    }),
    new Items({
      name: "cookies",
      price: 1.50,
      imgURL: 'https://www.iscream-shop.com/web/image/product.image/2524/image_1024/Oreo%20Cookies%20Packaging?unique=f19f37a'
    }),
    new Items({
      name: "twix",
      price: 2,
      imgURL: 'https://p.kindpng.com/picc/s/769-7696022_twix-freetoedit-twix-spekulatius-hd-png-download.png'
    }),
    new Items({
      name: "sucker",
      price: 2,
      imgURL: 'https://image.shutterstock.com/image-photo/lollipop-260nw-135454724.jpg'
    }),
    new Items({
      name: "snickers",
      price: 2,
      imgURL: 'https://cdn.shopify.com/s/files/1/1857/6931/products/lEqHx4mON1_1200x.jpg?v=1628513243'
    }),
    new Items({
      name: "cheese",
      price: 3,
      imgURL: 'https://image.shutterstock.com/image-photo/piece-cheese-isolated-on-white-260nw-1416372146.jpg'
    }),
    new Items({
      name: "jerky",
      price: 5,
      imgURL: 'https://bjs.scene7.com/is/image/bjs/35906?$bjs-Zoom$'
    })
  ]

  activeItem = null

  money = 0



}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
