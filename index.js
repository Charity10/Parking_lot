const buttons = document.getElementById("btn")


buttons.addEventListener('click', function() {
  if (buttons.innerHTML === "Booked"){
    buttons.innerHTML = "Free"
    buttons.style.backgroundColor='white'
    buttons.style.fontSize='18px'
  } else {
    buttons.innerHTML = "Booked"
    buttons.style.backgroundColor='purple';
    buttons.style.fontSize='10px'
   
  }
})

