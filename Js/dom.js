// const listContainer = document.getElementsByClassName('item-container');

// for(const item of listContainer){
//     item.addEventListener('click', function(event){
//         event.target.parentNode.removeChild(event.target)
//     })
// }

// document.getElementById('add-btn').addEventListener('click', function(){
//     const listContainer = document.getElementById('item-container')

//     const btn = document.createElement('button');
//     btn.classList.add('item-btn')
//     btn.innerText = "Add button item"
    
//     listContainer.appendChild(btn)
// })

// document.getElementById('item-container').addEventListener('click', function(event){
//     event.target.parentNode.removeChild(event.target)
// })

// document.getElementById('addBtn').addEventListener('click', function(){
//     const itemsContainer = document.getElementById('item-container')

//     const li = document.createElement('li')
//     li.innerText = 'add item'
//     li.classList.add('item')
//     itemsContainer.appendChild(li)
// })


let countSubhanAllah = document.getElementById('subhanAllahIncre');
let subhanAllahValue = 0;
// Increment
document.getElementById('subhanAllahBtn').addEventListener('click', function(){
    if(subhanAllahValue === 33){
        return alert('SubhanAllah Complete please fill up another one')
     }
    subhanAllahValue = subhanAllahValue + 1
    countSubhanAllah.innerText = subhanAllahValue
   
})
// Decrement

document.getElementById('subhanAllahDec').addEventListener('click', function(){
    if(subhanAllahValue === 0){
        return alert('You cannot added negative number')
    }
    subhanAllahValue = subhanAllahValue - 1
    countSubhanAllah.innerText = subhanAllahValue
})

// Alhamdulliah Area

let countAlhamdulliah = document.getElementById('alhamdulillahCount');
let alhamdulliahValue = 0

document.getElementById('alhamdulillahBtn').addEventListener('click', function(){
    if(alhamdulliahValue === 33){
        return alert('Alhamdulliah Complete please fill up another one')
    }

    alhamdulliahValue = alhamdulliahValue + 1
    countAlhamdulliah.innerText = alhamdulliahValue

})

document.getElementById('alhamdulliahDec').addEventListener('click', function(){
    if(alhamdulliahValue === 0){
        return alert('You Cannot added negative number')
    }

    alhamdulliahValue = alhamdulliahValue + 1
    countAlhamdulliah.innerText = alhamdulliahValue
})

// AllahuAKber area

let countAllahuAkber = document.getElementById('allahuakberCount');
let allahuakbarValue = 0

document.getElementById('allahuAkberInc').addEventListener('click', function(){
    if(allahuakbarValue === 34){
        return alert('Complete AllahuAkber, please fill up another one')
    }

    allahuakbarValue = allahuakbarValue + 1
    countAllahuAkber.innerText = allahuakbarValue
})



document.getElementById('allahuAkberDec').addEventListener('click', function(){
    if(allahuakbarValue === 0){
        return alert('You cannot added negative Number')
    }

    allahuakbarValue = allahuakbarValue - 1
    countAllahuAkber.innerText = allahuakbarValue
})

// Reset area

document.getElementById('resetBtn').addEventListener('click', function(){
    allahuakbarValue = 0
    subhanAllahValue = 0;
    subhanAllahValue = 0;

    countAllahuAkber.innerText = 0
    countAlhamdulliah.innerText = 0
    countSubhanAllah.innerText = 0

})



