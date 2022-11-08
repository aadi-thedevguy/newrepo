var itemList = document.querySelector('#items')

console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = '#f4f4f4'

console.log(itemList.firstChild)
console.log(itemList.lastChild)
console.log(itemList.lastElementChild)
itemList.firstElementChild.textContent = 'Hello 1'
itemList.lastElementChild.textContent = 'Hello 5'

console.log(itemList.nextSibling)
console.log(itemList.previousSibling)
itemList.previousElementSibling.style.color = 'green'
const newDiv = document.createElement('div')
newDiv.setAttribute('title','hello div')

const newDivText = document.createTextNode('hello world')
newDiv.appendChild(newDivText)
console.log(newDiv)

const item1 = itemList.firstElementChild
const main = document.querySelector('#main-header .container')
const title = document.querySelector('#header-title')

// main.insertBefore(newDiv,title)
// itemList.insertBefore(newDiv,item1)
