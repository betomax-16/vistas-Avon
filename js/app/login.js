$(document).ready(function(){
    $("#btnLogin").click(function(){
        $.ajax({
            type: "POST",
            url: "http://xzrksndt.lucusvirtual.es/index.php/api/login",
            data: {
                email: $("#email").val(),
                password: $("#pass").val()
            },
            success: function(data){
                if (data.idUsuario) {
                    localStorage.setItem('user', JSON.stringify(data));
                    window.location.replace("./perfil.html");
                }
                else {
                    alert("Credenciales invalidas.");
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
               alert("Credenciales invalidas");
            }
        });
    });
  });