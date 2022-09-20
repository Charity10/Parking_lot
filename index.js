const buttons = document.getElementById('btn')
const Book = document.getElementById("bookings")


buttons.addEventListener('click', function() {
  if (buttons.innerHTML === "Booked"){
    buttons.innerHTML = "Free"
    buttons.style.backgroundColor ='white'
    buttons.style.fontSize='18px'
    window.alert('Have a nice drive... We hope to see you again')
  } else {
    buttons.innerHTML = "Booked"
    buttons.style.backgroundColor='purple';
    buttons.style.fontSize='10px'
    window.alert("You've booked a space for 2hours")
   
  }
})
