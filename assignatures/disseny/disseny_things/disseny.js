window.onload = function () {

    var repro = document.getElementById("gran");

    var rofl = document.getElementById("more");

    var close = document.getElementById("back");

    close.onclick = function () {
                repro.style.visibility = "hidden";
    }

    
    var bs = document.getElementById("bos");
    
    bs.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "disseny_things/img/ph_bosc.jpg";
    }
    
    
    /*FUNCIÓ DE LA GUERRA DELS MONS*/
    
    var gf = document.getElementById("graf");
    
    gf.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "disseny_things/img/ph_graffiti.jpg";
    }
    
    
    var rr = document.getElementById("retr");
    
    rr.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "disseny_things/img/ph_retrat.jpg";
    }
    
    
    var ai = document.getElementById("auri");
    
    ai.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "disseny_things/img/auriculars.png";
    }
    
    var icn = document.getElementById("icon");
    
    icn.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "disseny_things/img/icones.png";
    }
    
    var eq = document.getElementById("esq");
    
    eq.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "disseny_things/img/esquelet.png";
    }
    
        
}