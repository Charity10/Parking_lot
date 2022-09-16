const buttons = document.getElementById("btn")


buttons.addEventListener('click', function() {
  if (buttons.innerHTML === "Booked"){
    buttons.innerHTML = "Free"
    buttons.style.backgroundColor='white'
  } else {
    buttons.innerHTML = "Booked"
    buttons.style.backgroundColor='purple';
   
  }
})

