window.onload = function () {

    var repro = document.getElementById("gran");

    var rofl = document.getElementById("more");

    var close = document.getElementById("back");

    close.onclick = function () {
                repro.style.visibility = "hidden";
    }

    /*FUNCIÓ DE DEADPOOL*/
    
    var th = document.getElementById("throne");
    
    th.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "altres_things/img/il_throne.png";

    }
    
    
    /*FUNCIÓ DE LA GUERRA DELS MONS*/
    
    var cf = document.getElementById("coffe");
    
    cf.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "altres_things/img/il_coffe.png";
    }
    
    /*FUNCIÓ STOP MOTION*/
    
    var bt = document.getElementById("bat");
    
    bt.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "altres_things/img/il_bat.png";
    }
    
    
    /*FUNCIÓ BASEBALL*/
    
    var tmp = document.getElementById("temple");
    
    tmp.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "altres_things/img/il_temple.png";
    }
    
    var nt = document.getElementById("nit");
    
    nt.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "altres_things/img/il_nit.png";
    }
    
    var th_2 = document.getElementById("throne_2");
    
    th_2.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "altres_things/img/il_throne.png";
    }
    
    var hm = document.getElementById("helm");
    
    hm.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "altres_things/img/tx_helmet.jpg";
    }
    
    var ft = document.getElementById("front");
    
    ft.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "altres_things/img/tx_helmetfront.jpg";
    }
    
    var lx = document.getElementById("linx");
    
    lx.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "altres_things/img/a3_linx.jpg";
    }
    
    var bl = document.getElementById("ball");
    
    bl.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "altres_things/img/a3_ball.jpg";
    }
    
    
}