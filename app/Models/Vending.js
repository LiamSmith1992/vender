



export class Items {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgURL = data.imgURL
  }

  get ListTemplate() {
    return `
  <div class="col-2 rounded img-fluid card bg-dark text-light">
  <img class="itemHeight" src="${this.imgURL}" alt="" onclick=app.vendingController.setActive('${this.name}')>
  <h4>${this.name}</h4>
  <h5>$${this.price}</h5>
</div>
  `
  }

  get ActiveTemplate() {
    return `
    <div class="col-6 card bg-dark text-light align-items-center ">
        <img class="img-fluid activeImage" src="${this.imgURL}" alt=""</div>
        <h2>${this.name}, $${this.price}</h2>
        <button class="btn btn-info" onclick="app.vendingController.buyItem()">Buy</button>
    </div>
    `
  }




}