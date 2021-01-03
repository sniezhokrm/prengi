$(document).ready(function() {
new WOW().init();
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput, #accsess').trigger('focus')
});
$('#myInput, #accsess').on('click', function() {
  $('.modal').fadeIn('slow')
});
$('.btn-secondary, .close').on('click', function() {
  $('.modal').fadeOut('slow')
});
$("form").validate({
  rules: {
    name: "required",
    email: {
      required: true,
      email: true,
    },
    telephon: {
      required: true,
      number: true
    }
  },
  messages: {
    name: "Please specify your name",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    telephon: {
      required: "We need your cellphone number  to contact you",
      number: "Your cellphone number must be in the format of 380999999999"

    }
  }
  });
//mail
$('form').submit(function() {
  e.preventDefault();
  a.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find('.btn-primary').val("");
    $('.modal').fadeOut();
    $('.close').fadeIn('slow')

    $('form').trigger("reset");
  });
  return false;
});
});
/*$('#myInput').on('click', function() {
  $('#myModal').fadeIn('slow')
});*/
