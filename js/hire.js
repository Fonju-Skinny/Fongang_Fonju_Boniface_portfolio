// google form submit to google sheets ======================>
document.querySelector("#googleFormSub").classList.remove("active")
// Open google form event listener ==========> 
let openForm = document.querySelector("#openForm").addEventListener("click", () => {
    document.querySelector("#googleFormSub").classList.add("active")
    
})

// Close google form event listener ==========> 
let closeForm = document.querySelector("#closeForm").addEventListener("click", () => {
    document.querySelector("#googleFormSub").classList.remove("active")
    
})


// google form submit to google sheets ======================>
document.querySelector("#whatApp").classList.remove("active")
// Open google form event listener ==========> 
let openChat = document.querySelector("#openChat").addEventListener("click", () => {
    document.querySelector("#whatApp").classList.add("active")
    
})

// Close google form event listener ==========> 
let closeChat = document.querySelector("#closeChat").addEventListener("click", () => {
    document.querySelector("#whatApp").classList.remove("active")
    
})