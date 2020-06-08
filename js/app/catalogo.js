$(document).ready(function(){
    var user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        var idCatalogo = getUrlParameter('id');
        if (idCatalogo) {
            $.ajax({
                type: "GET",
                url: "http://xzrksndt.lucusvirtual.es/index.php/api/catalogo/"+idCatalogo,
                success: function(data){
                    console.log(data);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                   alert("Error al consultar catalogo");
                }
            });
        }
    }
    else {
        window.location.replace("./inicio-sesion.html");
    }

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };
});