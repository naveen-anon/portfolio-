const messages = document.getElementById("chat-messages")

document.getElementById("chat-input").addEventListener("keypress",function(e){

if(e.key==="Enter"){

let text=this.value

let msg=document.createElement("div")

msg.innerText=text

messages.appendChild(msg)

this.value=""

}

})
