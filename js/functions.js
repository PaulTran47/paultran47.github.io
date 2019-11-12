var $menuOpenIcon = $('.icon-menu'),
    $menuCloseIcon = $('.icon-menu-close'),
    $menuList = $('.site-menu'),
    $menuOverlay = $('.site-menu-overlay');


$menuOverlay.on('click', function(e){
  closeMenu();
});

$menuCloseIcon.on('click', function(e){
  closeMenu();
});

$menuOpenIcon.on('click', function(e){
  openMenu();
});

function closeMenu(){
  $menuCloseIcon.addClass('hidden');
  $menuList.addClass('hidden');
  $menuOverlay.addClass('hidden');
}

function openMenu() {
  $menuCloseIcon.removeClass('hidden');
  $menuList.removeClass('hidden');
  $menuList.removeClass('hidden');
  $menuOverlay.removeClass('hidden');
}

function setBackgroundIMG() {
  var $imgSection = $('.row-img');

  // Loop through all the myclass elements
  $imgSection.each(function () {
    // Find the image tag within the myclass
    var $img = $(this).find('img');

    // Get the image the browser will use in the picture tag
    var $srcSet = $img.prop('currentSrc') || $img.prop('src');

    // For debug purpose
    console.log($srcSet);

    // Set the myclass background 
    $(this).css({
      'background-image': 'url(' + $srcSet + ')'
    });

  });
}

$(window).on('load resize', function () {
  setBackgroundIMG();
});