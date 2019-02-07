'use strict';

$(document).ready(() => {
  const view = (() => {
    new MobileMenu('#mobileMenuContainer', 'mobileSubMenu', [
      ['#', 'главная'],
      ['#', 'ремонтируем&nbsp;<i class="fas fa-caret-down"></i>', 'subMenuButton'],
      ['#', 'о&nbsp;компании'],
      ['#', 'сотрудничество'],
      ['#', 'гарантии'],
      ['#', 'новости'],
      ['#', 'контакты']
    ]);
    new MobileMenu('#subMenuButton', 'mobileManufacturersMenu', [
      ['#', 'huawei'],
      ['#', 'honor'],
      ['#', 'meizu'],
      ['#', 'xiaomi']
    ]);
    new MobileMenu('#regionMenuContainer', 'mobileRegionMenu', [
      ['#', 'Санкт-Петербург'],
      ['#', 'Москва'],
      ['#', 'Самара']
    ]);
    
  })();
 
  const controller = (() => {
    $('#subMenuButton').click(() => {
      $('.mobileManufacturersMenu').slideToggle(300)
    });
    $('#mobileMenu').click(() => {
      $('.mobileSubMenu').slideToggle(300)
    });
    let regionNode = $('.region');
    if ($(window).width() <= 600) {
      regionNode.click(() => {$('.mobileRegionMenu').slideToggle(300); regionNode.slideToggle(300)});
      $('#regionMenuContainer li').click(() => {$('.mobileRegionMenu').slideToggle(300); regionNode.slideToggle(300)})
    }
    if ($(window).width() > 600) {
      regionNode.unbind()
    }
  })();
  
  const plugins = (() => {
    $(".owlSlider").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      navText: ['<img src="../img/arrowLeft_icon.png"/>', '<img src="../img/arrowRight_icon.png"/>'],
      navElement: 'div',
      responsive: {
        820: {
          items: 2
        }
      }
    });
    
    $(".portfolioOwl").owlCarousel({
      items: 2,
      loop: true,
      nav: true,
      dots: false,
      margin: 1,
      navText: ['<img src="../img/arrowLeft_icon.png"/>', '<img src="../img/arrowRight_icon.png"/>'],
      navElement: 'div'
    });
    
    $(".feedbacksOwl").owlCarousel({
      nav: true,
      items: 1,
      loop: true,
      dots: true,
      navText: ['<img src="../img/arrowLeft_icon.png"/>', '<img src="../img/arrowRight_icon.png"/>'],
      navElement: 'div',
      responsive: {
        600: {
          items: 2,
          margin: 2
        },
        820: {
          items: 1
        }
      }
    });
  
    $(".employeesOwl").owlCarousel({
      nav: true,
      items: 2,
      loop: true,
      dots: true,
      margin: 10,
      navText: ['<img src="../img/arrowLeft_icon.png"/>', '<img src="../img/arrowRight_icon.png"/>'],
      navElement: 'div',
      responsive: {
        730: {
          items: 3,
          margin: 91
        }
      }
    });
    
    new Tabs('.tabsNav', '.portfolioInner');
  
    $('.requestTel').mask('+7 (000) 000-0000');
    new LengthChecker('.requestForm1');
    new LengthChecker('.requestForm2');
    new LengthChecker('.requestForm3');
  })();
});