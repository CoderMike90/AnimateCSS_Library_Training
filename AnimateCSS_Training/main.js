
// First section button animation
$(function() {
  $('#animateBtn-1').click(function() {
    animate('#first-h-animation', 'bounce');
    animate('#first-p-animation', 'zoomInDown');
    return false;
  });

// Seccond section button animation
  $('#animateBtn-2').click(function() {
    animate('#seccond-h-animation', 'swing');
    animate('#seccond-p-animation', 'shake');
    return false;
  });

  // Third section button animation
    $('#animateBtn-3').click(function() {
      animate('#third-h-animation', 'wobble');
      animate('#third-p-animation', 'jello');
      return false;
    });

    // Fourt section button animation
      $('#animateBtn-4').click(function() {
        animate('#fourth-h-animation', 'flipInX');
        animate('#fourth-p-animation', 'lightSpeedIn');
        return false;
      });

    //Animate script
  function animate(element, animation) {
      $(element).addClass('animated ' +animation);
      var wait = setTimeout(function(){
        $(element).removeClass('animated ' +animation);
      }, 1000);
  }
});
