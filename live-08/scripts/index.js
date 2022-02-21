function handleActiveRadio(radioNumber) {
  document.getElementById('radio-1').classList.remove("active-radio");
  document.getElementById('radio-2').classList.remove("active-radio");
  document.getElementById('radio-3').classList.remove("active-radio");
  
  const periodElement = document.getElementById('radio-' + radioNumber)
  periodElement.classList.add("active-radio");
}

function handleOnBlur(inputName) {
  const isValue = !!document.querySelector(`#${inputName} input`).value 
  console.log('handleOnBlur', isValue)
  if(!isValue) {
    document.getElementById(inputName).classList.remove("active-input");
  }
}

function handleOnFocus(inputName) {
  console.log('handleOnFocus(inputName)')
  document.getElementById(inputName).classList.add("active-input");
}