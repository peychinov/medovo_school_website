  $(document).ready(function () {
      $("select").chosen({
          disable_search_threshold: 10,
          width: "100%"
      });

      $('.ui.dropdown').dropdown();
      $('body [data-content]').popover({
          trigger: 'hover',
          placement: 'auto'
      });

      $("table.sortable").tablesort();

      $('.filefield').filestyle({
          buttonText: 'Choose file...'
      });

      /* == Lightbox == */
      $('.lightbox').swipebox();

      /* == Carousel == */
      $(".ui-carousel").owlCarousel();

      /* == Smooth Scroll == */
	  $(function() {
		$('a[href*=#]:not([href=#])').click(function() {
		  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
			  $('html,body').animate({
				scrollTop: target.offset().top
			  }, 1000);
			  return false;
			}
		  }
		});
	  });
      /* == Date/Time Picker == */
      $('body [data-datepicker]').pickadate({});
      $('body [data-timepicker]').pickatime({
          formatSubmit: 'HH:i:00'
      });

      /* == Close Message == */
      $('body').on('click', '.message i.close.icon', function () {
          var $msgbox = $(this).closest('.message')
          $msgbox.slideUp(500, function () {
              $(this).remove()
          });
      });

      $('body').on('click', '.toggle', function () {
          $('.toggle.active').not(this).removeClass('active');
          $(this).toggleClass("active");
      });

      /* == Navigation Menu == */
      $('#menu').smartmenus({
          subIndicatorsText: "<i class=\"down angle icon\"></i>",
          subMenusMaxWidth: "auto",
          subMenusMinWidth: "14em"
      });

      $('#menu li a[href="#"]').click(function (e) {
          e.preventDefault();
      });

      $('#menu > li[data-cols]').each(function () {
          var $ul = $(this);
          $ul.has('ul').children('ul').addClass($ul.data('cols'));
      });

      /* == Scroll To Top == */
      $.scrollUp();

      /* == Tabs == */
      $(".ui.tab.content").hide();
      $(".ui.tabs a:first").addClass("active").show();
      $(".ui.tab.content:first").show();
      $(".ui.tabs a").on('click', function () {
          $(".ui.tabs a").removeClass("active");
          $(this).addClass("active");
          $(".ui.tab.content").hide();
          var activeTab = $(this).data("tab");
          $(activeTab).show();
          //return false;
      });

      /* == UI Accordion == */
	  $('.ui.accordion')
		.accordion()
	  ;	  

      /* == Animate Progress Bars == */
      function progress(percent, element) {
          var progressBarWidth = percent * element.width() / 100;
          $(element).find('div').animate({
              width: progressBarWidth
          }, 500);
      }
      animateProgress();

      function animateProgress() {
          $('.progress').each(function () {
              var bar = $(this);
              var size = $(this).data('percent');
              progress(size, bar);
          });
      }
      $(window).resize(function () {
          animateProgress();
      });
  });

      /* == Fixed Navigation == */
		$(window).scroll(function() {
		  if ($(this).scrollTop() > 40) { //use `this`, not `document`
			  $('.fixed').css({
				  'padding-top': '0px','padding-bottom': '8px','margin-top': '-20px'
			  });
		  }		else {$('.fixed').css({
				  'padding-top': '30px','padding-bottom': '30px','margin-top': '0px'
			  });}
	  });
	  
      /* == Drop menu == */
		$(window).scroll(function() {
		  if ($(this).scrollTop() > 40) { //use `this`, not `document`
			  $('.fixed .down').css({
				  'margin-top': '18px'
			  });
		  }		else {$('.fixed .down').css({
				  'margin-top': '40px'
			  });}
	  });
	  
      /* == Mobile menu == */
	  $(function() {
		$('#menu-button').click(function() {
		  var $this = $(this),
			  $menu = $('#menu');
		  if (!$this.hasClass('collapsed')) {
			$menu.addClass('collapsed');
			$this.addClass('collapsed');
		  } else {
			$menu.removeClass('collapsed');
			$this.removeClass('collapsed');
		  }
		  return false;
		}).click();
	  });
	  
	  $(document).ready(function(){
		  $('.right.menu.open').on("click",function(e){
			  e.preventDefault();
			  $('.ui.vertical.menu').toggle();
		  });
	  });

	/* == Resizable Menu == */
	$(function(){
	
		var nav = $('.main-menu'),
			doc = $(document),
			win = $(window);
	
		win.scroll(function() {
	
			if (doc.scrollTop() > 80) {
				nav.addClass('scrolled');
			} else {
				nav.removeClass('scrolled');
			}
	
		});
	
		// Trigger the scroll listener on page load
		
		win.scroll();
	});


	  

