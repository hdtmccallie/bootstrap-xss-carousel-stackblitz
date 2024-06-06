$(function () {
  $('.btn-xss').click(function () {
    $(this)
      .button('loading')
      .delay(3000)
      .queue(function () {
        $(this).button('reset');
        $(this).dequeue();
      });
  });

  $('.string-test').click(function () {
    $(this)
      // .button({ foo: 'bar' })
      .button('herodevs')
      .delay(3000)
      .queue(function () {
        $(this).button('reset');
        $(this).dequeue();
      });
  });

  $('.input-test').click(function () {
    var inputValue = $('#firstName').val();
    $(this).data('loadingText', inputValue);
    $(this)
      .button('loading', inputValue)
      .delay(3000)
      .queue(function () {
        $(this).button('reset');
        $(this).dequeue();
      });
  });
});
