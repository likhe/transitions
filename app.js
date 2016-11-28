//pour activer le js en même temps que la page
document.addEventListener("DOMContentLoaded", function() {
    //Quand la class cube est cliqué je veux ajouter une class selected
    document.querySelector(".cube").addEventListener("click", function() {
      //créer une condition si class contient selcted apparait sinon n'apparrait pas
      if(this.classList.contains("selected")) {
        this.classList.remove("selected");
      } else {
        this.classList.add("selected");
      }
});

//quand selected jaune, disparait à retravailler
document.querySelector(".cube").addEventListener("transitionend", function(e) {
  console.log(e);
  this.classList.add("leave");
})
});
