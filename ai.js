const aiMessages = document.getElementById("ai-messages")

document.getElementById("ai-input").addEventListener("keypress",function(e){

if(e.key==="Enter"){

let q = this.value

aiMessages.innerHTML += "<div>you: "+q+"</div>"

if(q.includes("skills")){

aiMessages.innerHTML += "<div>AI: Python, OSINT, Kali Linux</div>"

}

else{

aiMessages.innerHTML += "<div>AI: ask about skills or projects</div>"

}

this.value=""

}

})
