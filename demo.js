console.log("I love git")

const headerTitle = document.getElementById('header-title')
const title1 = document.getElementsByClassName('title')
// const items = document.getElementsByClassName('list-group-item')
const items = document.querySelectorAll('.list-group-item')
const secondItem = document.querySelector('.list-group-item:nth-child(2)')
const thirdItem = document.querySelector('.list-group-item:nth-child(3)')
const li = document.getElementsByTagName('li')

headerTitle.style.borderBottom = 'solid 3px black'
title1[0].style.fontWeight = 'bold'
title1[0].style.color = 'green'

items[1].style.color = 'green'

secondItem.style.backgroundColor = 'green';
thirdItem.style.visibility = 'hidden';

for (let i = 0; i < items.length; i++) {
//    items[i].style.fontWeight = 'bold'
//    li[i].style.backgroundColor = '#f4f4f4'

   if (i % 2 !== 0) {
        items[i].style.backgroundColor = 'green'
   } 
    
}


