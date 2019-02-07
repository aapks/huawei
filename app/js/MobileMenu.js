class MobileMenu {
  constructor (containerId, ulClass, items) {
    this.containerId = containerId;
    this.ulClass = ulClass;
    this.items = items;
    this._render()
  }
  _render() {
    let menu = $(`<ul class=${this.ulClass}/>`);
    this.items.forEach(item => {
      let menuItem = $(`<li><a href="${item[0]}">${item[1]}</a>`);
      if (item[2]) {menuItem.attr('id', item[2])}
      menu.append(menuItem);
    });
    $(this.containerId).append(menu)
  }
}