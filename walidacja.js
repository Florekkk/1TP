
function walidacja (form){
     if(document.getElementById("imię i nazwisko").value == ""){
        alert("wpisz imię i nazwisko");
        form.imię i nazwisko.focus();
        return false;
    }else if(document.getElementById("imię i nazwisko").value.length < 3){
        alert("musisz wpisać imię i nazwisko");
        form.imię i nazwisko.focus();
        return false;
    }

    if(document.getElementById("email").value == ""){
        alert("wpisz E-mail");
        form.email.focus();
        return false
    } else if(document.getElementById("email").value.length < 3){
        alert("wymagany znak @");
        form.email.focus();
        return false;
    }

    if(document.getElementById("ocena").value == ""){
        alert("wpisz ocenę")
        form.ocena.focus();
        return false;
    }

    if(document.getElementById("data").value == ""){
        alert("wpisz datę");
        form.data.focus();
        return false
    } else if(document.getElementById("data").value.length < 3){
        alert("musisz wpisać datę");
        form.data.focus();
        return false;
    }

    return true;
}