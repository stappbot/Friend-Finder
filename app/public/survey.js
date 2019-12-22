      //jQuery for modal
      $(document).ready(function(){
      $('.modal').modal();

      document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  // jQuery


  $(document).ready(function(){
    $('select').formSelect();
  });
    
    $("#submit").on("click", function() {
        function validateForm() {
            let isValid = true;
            $(".form-control").each(function(){
                if ($(this).val() === "") {
                    isValid = false;
                }
            });
            $(".chosen-select").each(function() {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });
            return isValid;
        }
        if (validateForm()) {
            var userData = {
                name: $("#name").val(),
                photo: $("#photo").val(),
                scores: [
                    $("#q1").val(),
                    $("#q2").val(),
                    $("#q3").val(),
                    $("#q4").val(),
                    $("#q5").val(),
                    $("#q6").val(),
                    $("#q7").val(),
                    $("#q8").val(),
                    $("#q9").val(),
                    $("#q10").val()
                ]
            };
            var currentURL = window.location.origin;
            $.post(currentURL + "/api/friends", userData, function(data) {
                alert("working");
            }
        });
    })
