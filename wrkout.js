const ia = ['Maskgroup0', 'Maskgroup1', 'Maskgroup2', 'Maskgroup3', 'Maskgroup4']

const la = document.querySelector('.leftarrow')
const ra = document.querySelector('.rightarrow')
const con1 = document.querySelector('.con1')
const con2 = document.querySelector('.con2')
const con3 = document.querySelector('.con3')

la.addEventListener('click', handleLa)
ra.addEventListener('click', handleRa)

let target = 3

function handleLa(){
    if (target == 3){
        return
    }
    target -= 1
    const ra = ia.slice(target - 3, target)
    con1.style.backgroundImage = `url(./asset/${ra[0]}.png)`
    con2.style.backgroundImage = `url(./asset/${ra[1]}.png)`
    con3.style.backgroundImage = `url(./asset/${ra[2]}.png)`

}
function handleRa(){
    if (target == 4){
        return
    }
    target += 1
    const ra = ia.slice(target - 3, target)
    con1.style.backgroundImage = `url(./asset/${ra[0]}.png)`
    con2.style.backgroundImage = `url(./asset/${ra[1]}.png)`
    con3.style.backgroundImage = `url(./asset/${ra[2]}.png)`

}