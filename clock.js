setInterval(Clock,1000)

const hourHand=document.querySelector('[hour-hand]')
const minuteHand=document.querySelector('[minute-hand]')
const secondHand=document.querySelector('[second-hand]')

function Clock(){
    const currentDate=new Date()
    const seconds=currentDate.getSeconds()/60
    const minutes=(seconds+currentDate.getMinutes())/60
    const hours=(minutes+currentDate.getHours())/12
    Rotations(secondHand,seconds)
    Rotations(minuteHand,minutes)
    Rotations(hourHand,hours)
}

function Rotations(item,rotation){
    item.style.setProperty('--rotation',rotation*360)


}