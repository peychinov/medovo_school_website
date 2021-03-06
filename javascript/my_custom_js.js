menu = {};

// ready event
menu.ready = function() {

  // selector cache
  var
    $menuItem = $('.menu a.item, .menu .link.item'),
    // alias
    handler = {
      activate: function() {
        $(this)
        .addClass('active')
        .closest('.ui.menu')
        .find('.item')
        .not($(this))
        .removeClass('active');
      }
    }
  ;

  $menuItem
    .on('click', handler.activate)
  ;

};


// attach ready event
$(document).ready(menu.ready);

$(document).ready(function(){
  $('div.bxslider').bxSlider({
    slideMargin: 10,
    slideWidth: 1000,
    mode: 'fade',
    auto: true,
    pause: 10000,
    autoControls: true
  });

  $('ul.bxslider').bxSlider({
    mode: 'fade',
    auto: true,
    pause: 10000
  });
});
