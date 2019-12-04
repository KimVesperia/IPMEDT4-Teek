window.onload = function(){
  //console.log("Tst")

  var bol = document.getElementById('bol');

  var box1 = document.getElementById('box1');
  var box2 = document.getElementById('box2');
  var box3 = document.getElementById('box3');
  var box4 = document.getElementById('box4');

  var camera = document.getElementById('camera');
  box1.style.backgroundColor = "black";


  window.onscroll = function() {myFunction()};

  function myFunction() {
    document.getElementById('cursor');
    camera.setAttribute("position", "5 2 -3");
  }

  // bol.addEventListener("mouseenter", function(){
  //   //this.setAttribute("color", "#FF5508");
  //
  //   document.getElementById('cursor').appendChild(this);
  //   this.setAttribute("position", "1 1 -2");
  //
  // })

  // box1.addEventListener("mouseenter", function(){
  //   //this.setAttribute("color", "#FF5508");
  //
  //
  //   camera.setAttribute("position", "-1 2 -3").style.transition = "all 2s";
  //
  // })

  box2.addEventListener("mouseenter", function(){
    //this.setAttribute("color", "#FF5508");

    document.getElementById('cursor');
    camera.setAttribute("position", "-1 2 -10");

  })

  box3.addEventListener("mouseenter", function(){
    //this.setAttribute("color", "#FF5508");

    document.getElementById('cursor');
    camera.setAttribute("position", "5 2 -10");

  })

  box4.addEventListener("mouseenter", function(){
    //this.setAttribute("color", "#FF5508");

    document.getElementById('cursor');
    camera.setAttribute("position", "5 2 -3");

  })

  // bol.addEventListener("mouseleave", function(){
  //   this.setAttribute("color", "#FFF");
  // })

}
