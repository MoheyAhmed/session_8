var x = document.getElementById("mobilemenu1");
var y = document.getElementById("mobilemenu2");
var z = document.getElementById("mobilenav");
var d = document.getElementById("register"); 

x.addEventListener("click",function(){
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "block";
      } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
      }
    }
)

y.addEventListener("click",function(){
    if (y.style.display === "block") {
        y.style.display = "none";
        z.style.display = "none";
        x.style.display = "block";
    }else{
        x.style.display = "none";
        y.style.display = "none";
    }
})

d.addEventListener("click",function(){
    if (d.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
      }
    }
)

d.addEventListener("click",function(){
    if (d.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
      }
    }
)