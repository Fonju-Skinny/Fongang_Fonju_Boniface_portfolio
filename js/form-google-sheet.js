
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx68si1OhVVQUyvnToE4WEvGTe7y1FGJYUH0B8wCVVo5rJIJCEFFH22xTUEd5ZWB-o6/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')
  msg.addEventListener("click", () =>{
  msg.classList.remove("active")
  } )
  msg.classList.remove("active")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.classList.add("active")
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
