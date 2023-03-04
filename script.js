let btn = document.getElementById("dice")

const getAdvice =()=>{
fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(data => {console.log(data)

    document.getElementById("id").innerHTML = `ADVICE  #${data.slip.id}`
    document.getElementById("advice").innerText = `"${data.slip.advice}"`
})
}
getAdvice()
const newQuote = ()=> {
    getAdvice()
}