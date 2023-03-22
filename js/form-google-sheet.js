
  const scriptURL = 'https://script.google.com/macros/s/AKfycbznBOuR8gHhSayK4c9Dc0e3VIZ3yD59AVz61-0xscQ8jry6EGSNheQF3uCPE6wEijIr/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')
  msg.addEventListener("click", () =>{
  msg.classList.remove("active")
  } )
  msg.classList.remove("active")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(() => {
        msg.classList.add("active")
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


 
  