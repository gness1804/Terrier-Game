$(document).ready(function () {
  $(".scottie").click(function () {
    $("#frame1").attr("src", "http://www.akc.org/embeds/breed-standard/scottish-terrier");
  });
  $(".westie").click(function () {
    $("#frame1").attr("src", "http://www.akc.org/embeds/breed-standard/west-highland-white-terrier");
  });
  $(".cairn").click(function () {
    $("#frame1").attr("src", "http://www.akc.org/embeds/breed-standard/cairn-terrier");
  });
}); //end of jQuery body
