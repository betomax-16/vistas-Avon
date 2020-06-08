$(document).ready(function(){
    var user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        $.ajax({
            type: "GET",
            url: "http://xzrksndt.lucusvirtual.es/index.php/api/usuario/"+user.idUsuario+"/catalogo",
            success: function(data){
                var id = 0;
                var i = 0;
                data.forEach(element => {
                    if (i == 0) {
                        $("#tabla").append('<div id="' + id + '" class="fila"></div>');
                    }
                    $("#"+id).append('<div class="catalogo" onclick="go(\''+element.idCatalogo+'\')"><div class="portada-catalogo" style="background-image: url('+element.imagenPath+');background-size:cover;"></div><div class="nom-catalogo"></div></div>');

                    if (i == 3) {
                        i = 0;
                        id++;
                    }
                    else { i++; }
                });
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
               alert("Error al consultar catalogos");
            }
        });
    }
    else {
        window.location.replace("./inicio-sesion.html");
    }

    function go(id) {
        window.location.replace("./catalogo.html?id=" + id);
    }
});