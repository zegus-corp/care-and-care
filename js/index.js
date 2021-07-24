

var im_list = ["img/slide1.jpeg",
"img/slide2.jpeg",
"img/slide3.jpeg",
"img/slide4.jpeg",
"img/slide5.jpeg",
"img/slide6.jpeg"];

//setInterval(myTimer, 6000);
setInterval(myTimer, 6000);

function myTimer() {
    var image1 = document.getElementById("im1");
    var image2 = document.getElementById("im2");
    var image3 = document.getElementById("im3");
  var rand_arr = [];
    while(rand_arr.length < 4){
    var r = Math.floor(Math.random() * 6) + 1;
    if(rand_arr.indexOf(r) === -1) rand_arr.push(r);
    }
    console.log(rand_arr);

    
    image1.innerHTML = `<img src="img/slide${rand_arr[0]}.jpeg" alt=""></img>`;
    image2.innerHTML = `<img src="img/slide${rand_arr[1]}.jpeg" alt=""></img>`;
    image3.innerHTML = `<img src="img/slide${rand_arr[2]}.jpeg" alt=""></img>`;
    
    
  }
  
  
