
$(document).ready(function () {
  var $backToTop = $(".to-top");
  $backToTop.hide();

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
      $backToTop.fadeIn();
    } else {
      $backToTop.fadeOut();
    }
  });


  $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
    var target = $(this).attr('href'),
      bl_top = $(target).offset().top - 250;
    $('body, html').animate({ scrollTop: bl_top }, 700);
    return false;
  });


  $('.search__open-btn').click(function () {
    $('.search__wrap').toggleClass('open');
  });

  /*login popup behavior*/

  $('.login-btn').click(function () {
    $('.user__login').addClass('open');
  });
  $('.close').click(function () {
    $('.user__login').removeClass('open');
  });

  function scrollToggle(val) {
    if (val === 'on') {
      document.body.style.position = '';
      document.body.style.top = '';
    }
    else {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    }
  }

  /*menu behavior on mobile breakpoint */

  $('.menu-trigger').click(function () {
    $('.header__nav').addClass('open');
    scrollToggle('off');

  });
  $(document).mouseup(function (e) {
    if (!$('.header__nav').is(e.target) && $('.header__nav').has(e.target).length === 0) {
      $('.header__nav').removeClass('open');
      scrollToggle('on');
    }
  });
  $('.menu-close').click(function () {
    $('.header__nav').removeClass('open');
    scrollToggle('off');
  });

  $('.dropdown__trigger').click(function () {
    $(this).next('.dropdown__wrap').toggleClass('open');
  });

  // $('.submenu__trigger').click(function () {
  //   $(this).next('.submenu__list').toggleClass('open');
  // });

  $('.dropdown__close').click(function () {
    $('.dropdown__wrap').removeClass('open');
  });

  $('.dropdown-btn').click(function () {
    $(this).siblings($('.dropdown-body')).toggleClass('open');
  });

  $('.dropdown-close').click(function () {
    $('.dropdown-body').removeClass('open');
  });


  /*breadcrumbs behavior*/
  $('.breadcrambs__item a').shave(33);
});

$(window).scroll(function () {
  if (window.matchMedia("(min-width: 720px)").matches) {
    if ($(window).scrollTop() >= 115) {
      $('.header__nav').addClass('fixed');
      $('.main').addClass('fixed');
    }
    else {
      $('.header__nav').removeClass('fixed');
      $('.main').removeClass('fixed');
    }
  };
  if (window.matchMedia("(max-width: 720px)").matches) {
    if ($(window).scrollTop() >= 115) {
      $('.header__main').addClass('fixed');
    }
    else {
      $('.header__main').removeClass('fixed');
    }
  };
});


if (window.matchMedia("(max-width: 720px)").matches) {
  $('.footer__title').click(function () {
    $(this).next('.footer__list').toggleClass('open');
  });
};


const tabs = document.querySelectorAll(".tabs__link");

const tab = document.querySelector(".tabs");

tab.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("tabs__link")) {
    // console.log("yep");
    hideTabs();
    tabs.forEach((item, index) => {
      // console.log("yep");
      // if(index === 0 || index === 4) return;
      if (e.target === tabs[index]) {
        showTab(index);
        return;
      }

      // console.log('...')
    });
  }
});

const tabsContent = document.querySelectorAll('.tabs-content__item');
const mainMenu = document.querySelector('.main-menu');
function hideTabs() {
  tabsContent.forEach((item, index) => {
    item.classList.add('hide');
    item.classList.remove('show');
    tabs[index].classList.remove("tabs__link--active");
  })
}

function showTab(i = 1) {
  tabsContent[i].classList.remove('hide');
  tabsContent[i].classList.add('show');
  tabs[i].classList.add("tabs__link--active");
}
// hideTabs();
// showTab();
// $(window).resize(function () {
// });
let btnHeader = document.querySelector('.btn-header');

function showMenu(e) {
  if (e.target === btnHeader) {
    btnHeader.classList.toggle('btn-header--icon-close');
    mainMenu.classList.toggle('hide');
    mainMenu.classList.toggle('show');
    if(mainMenu.classList.contains('show')){
      hideTabs();
      showTab();
    }
  }
}
btnHeader.addEventListener('click', showMenu);

// document.addEventListener('DOMContentLoaded', function(){
//   let submenuLists = document.querySelectorAll('.submenu__list');
//   console.log(submenuLists);
// })