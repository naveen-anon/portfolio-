function osintSearch(){

let q = document.getElementById("osint-input").value

let html = `

<a href="https://github.com/${q}" target="_blank">GitHub</a><br>
<a href="https://twitter.com/${q}" target="_blank">Twitter</a><br>
<a href="https://instagram.com/${q}" target="_blank">Instagram</a><br>
<a href="https://www.google.com/search?q=${q}" target="_blank">Google</a>

`

document.getElementById("osint-results").innerHTML = html

}
