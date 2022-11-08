console.log("I love git")

const headerTitle = document.getElementById('header-title')
const title1 = document.getElementsByClassName('title')
const items = document.getElementsByClassName('list-group-item')

headerTitle.style.borderBottom = 'solid 3px black'
title1[0].style.fontWeight = 'bold'
title1[0].style.color = 'green'

items[2].style.backgroundColor = 'green';
for (let i = 0; i < items.length; i++) {
   items[i].style.fontWeight = 'bold'
    
}
