function day2Script() {
  const burgerMenu = document.getElementsByClassName('day-2__burger')[0];

  burgerMenu.addEventListener('click', () => {
    $('.bar-2').css('transform', 'scale(0)');

    $('.day-2__burger').toggleClass('active');

    if (!burgerMenu.classList.contains('active')) {
      $('.bar-2').css('transform', 'scale(1)');
    }

    $('.bar-1').removeClass('no-animation');
    $('.bar-2').removeClass('no-animation');
    $('.bar-3').removeClass('no-animation');
  });
}

function main() {
  day2Script();
}

main();
