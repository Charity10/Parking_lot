
// const userInfo = document.getElementsById("submit")
const submit = document.querySelector('#submit')
const buttons = document.querySelectorAll('#btn')


// button1.addEventListener('click', function() {
//   if (button1.innerHTML === "Booked"){
//     button1.innerHTML = "Free"
//     button1.style.backgroundColor ='white'
//     button1.style.fontSize='18px'
//     window.alert('Have a nice drive... We hope to see you again')
//   } else {
//     // `${<a href = "parking.html"></a>}`
//     button1.innerHTML = "Booked"
//     button1.style.backgroundColor='purple';
//     button1.style.fontSize='10px'
//     window.alert("You've booked a space for 2hours")
   
//   }
// })


// // userInfo.addEventListener('click', function() {
    
// // })

// button2.addEventListener('click', function() {
//   if (button2.innerHTML === "Booked"){
//     button2.innerHTML = "Free"
//     button2.style.backgroundColor ='white'
//     button2.style.fontSize='18px'
//     window.alert('Have a nice drive... We hope to see you again')
//   } else {
//     button2.innerHTML = "Booked"
//     button2.style.backgroundColor='purple';
//     button2.style.fontSize='10px'
//     window.alert("You've booked a space for 2hours")
   
//   }
// })
submit.addEventListener('click', function() {
  localStorage.setItem()
})

// button3.addEventListener('click', function() {
//   if (button3.innerHTML === "Booked"){
//     button3.innerHTML = "Free"
//     button3.style.backgroundColor ='white'
//     button3.style.fontSize='18px'
//     Submit()
//   } else {
//     button3.innerHTML = "Booked"
//     button3.style.backgroundColor='purple';
//     button3.style.fontSize='10px'
//     window.alert("You've booked a space for 2hours")
   
//   }
// })



// button4.addEventListener('click', function() {
//   if (button4.innerHTML === "Booked"){
//     button4.innerHTML = "Free"
//     button4.style.backgroundColor ='white'
//     button4.style.fontSize='18px'
//     window.alert('Have a nice drive... We hope to see you again')
//   } else {
//     // `${<a href = "parking.html"></a>}`
//     button4.innerHTML = "Booked"
//     button4.style.backgroundColor='purple';
//     button4.style.fontSize='10px'
//     window.alert("You've booked a space for 2hours")
   
//   }
// })



  for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function() {
      if (buttons[i].innerHTML === "Booked"){
        buttons[i].innerHTML = "Free"
        buttons[i].style.backgroundColor ='white'
        buttons[i].style.fontSize='18px'
        window.alert('Have a nice drive... We hope to see you again')
      } else {
        // `${<a href = "parking.html"></a>}`
        buttons[i].innerHTML = "Booked"
        buttons[i].style.backgroundColor='purple';
        buttons[i].style.fontSize='10px'
        window.alert("You've booked a space for 2hours")
       
      }
    })

  }
