  // Put DOM elements into variables
// const myForm = document.querySelector('#my-form');
// const descriptionInput = document.querySelector('#description');
// const amountInput = document.querySelector('#amount');
// const categoriesInput = document.querySelector('#category');
// const msg = document.querySelector('.msg');
// const list = document.querySelector('#list');
// // Listen for form submit
// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();

//   if (descriptionInput.value === '' || amountInput.value === '') {
//     // alert('Please enter all fields');
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     // Remove error after 3 seconds
//     setTimeout(() => msg.remove(), 3000);
//   } else {

//     // Create new list item 
//     let li = document.createElement('li')
//     let details = {
//       amount : amountInput.value,
//       desc : descriptionInput.value,
//       category: categoriesInput.value
//     }
//     li.innerHTML = `
//     <div id=${amountInput.value}>
//       ${details.amount} - ${details.desc} - ${details.category} <button class="btn delete" onclick=deleteItem('${amountInput.value}')>Delete</button>
//       <button class="btn edit" onclick=edit('${details.amount}','${details.desc}')>Edit</button>
//     </div>
//     `
//     list.appendChild(li)
    

//   }
// }


// function deleteItem(amount) {
 
//   const toDelete = document.getElementById(amount)
//   toDelete.style.display = 'none'

// }


// function edit(amount, description) {
//   amountInput.value = amount
//   descriptionInput.value = description

//   deleteItem(amount)
// }


const posts = [

  {

      title : 'Post One', body : 'This is post one'

  },

  {

      title : 'Post Two', body : 'This is post two'

  }

]



function getPosts() {


   setTimeout(() => {

      let output = ''

      posts.forEach((post) => {

          output += `<li>${post.title} </li>`

      })

      document.body.innerHTML = output

  }, 1000)

}



async function createPost(post) {

 const createdPost = new Promise((resolve,reject) => {
  setTimeout(() => {
      posts.push(post)
      const error = false
      if (!error) {
          resolve()
      } else {
          reject('Error : Something went wrong')
      }
  }, 2000)
 })

 let newPost = await createdPost
 return newPost

}
async function deletePost() {
  const promise = new Promise((resolve,reject) => {  
      setTimeout(() => { 
        if (posts.length == 0) {
          reject('All Posts are Deleted')
        } else {
        posts.pop()    
        resolve()
      }
  }, 5000) 
  })

  let remainingPosts = await promise
  return remainingPosts
}

createPost({title : 'Post Three',body : 'This is post three'}).then(getPosts).catch(err => console.log(err))
createPost({title : 'Post Four',body : 'This is post four'}).then(deletePost).then(getPosts).catch(err => console.log(err))

deletePost().then(getPosts).catch(err => console.log(err))
deletePost().then(getPosts).catch(err => console.log(err))
deletePost().then(getPosts).catch(err => console.log(err))

// const promise1 = Promise.resolve('Hello world')
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'))

// Promise.all([promise1,promise2,promise3]).then(values => console.log(values))

// let userActivityTime = new Date()
// console.log(userActivityTime)

// function updateLastUserActivityTime() {
//   return new Promise((resolve,reject) => setTimeout(() => {
//     userActivityTime += new Date()
//     console.log(userActivityTime)
//     resolve()
//   },3000)
//   )
// } 

// Promise.all([createPost({title : 'Post Five',body : 'This is post Five'}), updateLastUserActivityTime]).then(() => console.log(posts)).then(deletePost)

