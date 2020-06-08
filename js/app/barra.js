$(document).ready(function(){
    var user = JSON.parse(localStorage.getItem('user'));
    if (user && user.tipo == 'CLIENTE') {
        $("#btnCatalogo").remove();
    }
    else if (!user) {
        window.location.replace("./inicio-sesion.html");
    }

    $("#btnSignOut").click(function(){
        if (user) {
            localStorage.removeItem('user');
            window.location.replace("./inicio-sesion.html");
        }
    });
  });