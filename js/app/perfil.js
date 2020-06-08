$(document).ready(function(){
    var user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        $("#nombre").val(user.nombre);
        $("#apellidos").val(user.apellidos);
        $("#alias").val(user.alias);
        $("#telefono").val(user.telefono);
        $("#email").val(user.email);
        $("#direccion").val(user.direccion);
    }
    else {
        window.location.replace("./inicio-sesion.html");
    }

    $("#btnSignUp").click(function(){
        var data = {
            nombre:$("#nombre").val(),
            apellidos:$("#apellidos").val(),
            alias:$("#alias").val(),
            telefono:$("#telefono").val(),
            email:$("#email").val(),
            direccion:$("#direccion").val(),
            tipo:"CLIENTE",
            password:$("#pass").val(),
            password_confirmation:$("#pass").val()
        };

        if ($.trim($("#pass").val()) != "") {
            data.password = $("#pass").val();
            data.password_confirmation = $("#pass").val();
        }

        $.ajax({
            type: "POST",
            url: "http://xzrksndt.lucusvirtual.es/index.php/api/usuario/"+user.idUser,
            data: data,
            success: function(data){
                alert("Datos alamcenados exitosamente.");
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
               alert("Error al crear el usuario");
            }
        });
    });
  });