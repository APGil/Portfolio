window.onload = function () {

    var repro = document.getElementById("reproductor");

    var rofl = document.getElementById("vide");

    var close = document.getElementById("back");

    close.onclick = function () {
                repro.style.visibility = "hidden";
                rofl.pause();
    }

    /*FUNCIÓ DE DEADPOOL*/
    
    var dp = document.getElementById("roto");
    
    dp.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "animacio_things/vid/dp.mp4";
            rofl.play();
    }
    
    
    /*FUNCIÓ DE LA GUERRA DELS MONS*/
    
    var lgm = document.getElementById("war");
    
    lgm.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "animacio_things/vid/lagdm.mp4";
            rofl.play();
    }
    
    /*FUNCIÓ STOP MOTION*/
    
    var sthap = document.getElementById("stopm");
    
    sthap.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "animacio_things/vid/sm.mp4";
            rofl.play();
    }
    
    
    /*FUNCIÓ BASEBALL*/
    
    var ball = document.getElementById("base");
    
    ball.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "animacio_things/vid/baseball.mp4";
            rofl.play();
    }
    
    var cycle = document.getElementById("walk");
    
    cycle.onclick = function () {
            repro.style.visibility = "visible";
            rofl.src = "animacio_things/vid/walkcylce.mp4";
            rofl.play();
    }
}