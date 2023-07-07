const Inp = document.querySelector("#input")
const Btn = document.querySelector("#btn")
const result = document.querySelector("#result")
const total = document.querySelector("#total")


Btn.addEventListener('click', (e) =>{
    // result.innerHTML += `<li>${Inp.value}</li>`
    // Inp.value = ''
    if (Inp.value === '') return
    createDelateElements(Inp.value)
    Inp.value = ''
})


function createDelateElements(value){
    
    
    const li =document.createElement('li')
    li.className = 'li'
    li.textContent = value
    
    const btn =document.createElement('button')
    btn.className = 'btn'
    btn.textContent = 'Delate'
    li.appendChild(btn)

    btn.addEventListener('click', (e) => {
        result.removeChild(li)
    })
    li.addEventListener('click', (e) => {
        li.classList.toggle('active')
    })

    result.appendChild(li)
}