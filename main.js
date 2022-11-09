// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    let user = {
      name : nameInput.value,
      email : emailInput.value
    }
    
    localStorage.setItem("userDetails" + user.email, JSON.stringify(user))
    userList.innerHTML = userList.innerHTML + `<li>${user.name}: ${user.email}</li> `
        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
      
  }
}
function getData () {
  let keys = Object.keys(localStorage);
  for(let key of keys) {
    let {name,email} = JSON.parse(localStorage.getItem(key))
    userList.innerHTML = userList.innerHTML + `<li>${name}: ${email}</li> `
  }

}

getData()
