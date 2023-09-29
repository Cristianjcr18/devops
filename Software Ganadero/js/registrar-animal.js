// Validación de datos
$(function() {
    // Validación de raza
    $('#raza').on('blur', function() {
      if ($(this).val() == '') {
        $('.error-raza').show();
      } else {
        $('.error-raza').hide();
      }
    });
  
    // Validación de edad
    $('#edad').on('blur', function() {
      if (!Number.isInteger($(this).val())) {
        $('.error-edad').show();
      } else {
        $('.error-edad').hide();
      }
    });
  
    // Validación de peso
    $('#peso').on('blur', function() {
      if (!Number.isInteger($(this).val())) {
        $('.error-peso').show();
      } else {
        $('.error-peso').hide();
      }
    });
  });
  