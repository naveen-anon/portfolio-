fetch("https://api.openbrewerydb.org/breweries")

.then(res=>res.json())

.then(data=>{

let html=""

data.slice(0,6).forEach(t=>{

html += `<div class="threat">

<p>${t.name}</p>

<p>${t.city}</p>

</div>`

})

document.getElementById("threat-feed").innerHTML = html

})
