alert("Welcome to Vrediclion Website");
const links = document.querySelectorAll("a");
links.forEach(function(link){
  link.addEventListener("click", function(){
    alert("Kamu akan membuka: " + link.innerText);
  });
});
