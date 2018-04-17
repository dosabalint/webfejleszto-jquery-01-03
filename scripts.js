$(function() {
  $('input#percent').change(function() {
    // elemek összegyűjtése
    let $input = $(this);
    let $progress = $('.progress-bar');

    // értékek összegyűjtése
    let percent = $input.val();

    // értékek beállítása
    // aria-valuenow
    $progress.attr('aria-valuenow', percent);
    // css
    $progress.css('width', percent + '%');
    // text
    $progress.text(percent + '%');
  });
});
