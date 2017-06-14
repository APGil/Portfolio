document.getElementById("mostra").onmouseover = function(){
            document.getElementById("idk").className = "fletxes_ends";

}
document.getElementById("mostra").onmouseout = function(){
            document.getElementById("idk").className = "fletxes";
}




    function displayNextImage() {
          x = (x === images.length - 1) ? 0 : x + 1;
          document.getElementById("things").src = images[x];
    }

    function displayPreviousImage() {
        x = (x <= 0) ? images.length - 1 : x - 1;
        document.getElementById("things").src = images[x];
     }

      function startTimer() {
          setInterval(displayNextImage, 3000);
     }

        var images = [], x = -1;
        images[0] = "index_things/img/cthulhu.png";
        images[1] = "index_things/img/il_throne.png";
        images[2] = "index_things/img/ph_bosc.jpg";
        images[3] = "index_things/img/tx_helmet.jpg";

