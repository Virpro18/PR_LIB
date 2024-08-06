fetch("https://first-nine-jet.vercel.app/?methode=s").then(response => response.json())
.then(data => {
    console.log(data)
    document.getElementById("test").innerHTML = data[0]
    
})