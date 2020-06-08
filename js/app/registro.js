$(document).ready(function(){
    $("#btnSignUp").click(function(){
        $.ajax({
            type: "POST",
            url: "http://xzrksndt.lucusvirtual.es/index.php/api/signup",
            data: {
                nombre:$("#nombre").val(),
                apellidos:$("#apellidos").val(),
                alias:$("#alias").val(),
                telefono:$("#telefono").val(),
                email:$("#email").val(),
                direccion:$("#direccion").val(),
                tipo:"CLIENTE",
                password:$("#pass").val(),
                password_confirmation:$("#pass").val()
            },
            success: function(data){
                $.ajax({
                    type: "POST",
                    url: "http://xzrksndt.lucusvirtual.es/index.php/api/login",
                    data: {
                        email: $("#email").val(),
                        password: $("#pass").val()
                    },
                    success: function(data2){
                        if (data2.idUsuario) {
                            localStorage.setItem('user', JSON.stringify(data2));
                            window.location.replace("./index.html");
                        }
                        else {
                            alert("Credenciales invalidas.");
                        }
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                       alert("Credenciales invalidas");
                    }
                });
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
               alert("Error al crear el usuario");
            }
        });
    });
  });