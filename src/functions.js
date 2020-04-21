function generateDogs(){

    var numbers = []; 

    for(var i = 0; i < 7; i++){
        for(var j = 0; j < 7; j++){

            var random = Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10);
            
            // Check if number is included --> repeat iteration until not
            if(numbers.includes(random)){
                j--;
            }

            else {
                numbers.push(random); // Add random number to array
                document.getElementById("pic"+i+j).src = "images/image_000" + random + ".png";
            }
        }
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}