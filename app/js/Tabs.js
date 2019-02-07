class Tabs {
  constructor (navContainer, innerClass) {
    this.navContainer = navContainer;
    this.innerClass = innerClass;
    this._init();
  }
  
  _init() {
    $(this.navContainer).on('click', 'li:not(.active)', () => {this._changeTab(event)
    })
  }
  
  _changeTab(event) {
    $(`${this.navContainer} li`).removeClass('active');
    $('.portfolioInner').hide();
    $(`${this.innerClass}.${event.target.className}`).show();
    $(event.target).addClass('active');
  }
}