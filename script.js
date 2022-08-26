const search = document.getElementById("search")
const btn = document.getElementById("btn")
const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=5142a079c21f6cb2df156c3a42bfec63`

btn.addEventListener("click", ()=>{
    console.log(search.value);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=5142a079c21f6cb2df156c3a42bfec63`).then(res=>res.json()).then(data=>{
        let result = `<div class="size"><h4>${data.name}</h4> <h4>temp = ${Math.floor(data["main"].temp-273)} °C</h4>
        <h4> pressure = ${data["main"].pressure} </h4>
        <h4> humidity = ${data["main"].humidity} </h4></div>`
        const subcont = document.querySelector(".subcont")
        subcont.innerHTML=result
        console.log(data);
    }).catch(err=>alert("error"))
})