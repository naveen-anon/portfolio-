const output = document.getElementById("terminal-output")

const input = document.getElementById("terminal-input")

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

let cmd = input.value

output.innerHTML += "<div>> "+cmd+"</div>"

if(cmd==="help"){

output.innerHTML += "<div>commands: help, about, projects</div>"

}

else if(cmd==="about"){

output.innerHTML += "<div>Cyber security researcher</div>"

}

else if(cmd==="projects"){

output.innerHTML += "<div>OSINT Dashboard | CyberScan</div>"

}

input.value=""

}

})
