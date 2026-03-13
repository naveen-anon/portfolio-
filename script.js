// Terminal typing effect

const text = "Hello, I am Naveen | Cyber Security Researcher";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("terminal").innerHTML += text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();



// Matrix background

const canvas = document.getElementById("matrix");

const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";

const fontSize = 16;

const columns = canvas.width/fontSize;

const drops = [];

for(let x=0;x<columns;x++) drops[x]=1;

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#0F0";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0;

drops[i]++;

}

}

setInterval(draw,33);



// GitHub repo loader

fetch("https://api.github.com/users/YOUR_GITHUB_USERNAME/repos")

.then(res=>res.json())

.then(data=>{

let html="";

data.slice(0,6).forEach(repo=>{

html += `
<div class="repo">

<h3>${repo.name}</h3>

<p>${repo.description || "No description"}</p>

<a href="${repo.html_url}" target="_blank">View</a>

</div>
`

})

document.getElementById("repos").innerHTML = html;

});
