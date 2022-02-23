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

function handleToggleSelect(selectId) {
  const selectFlyClass = document.getElementById(selectId)
  const isClassOnSelect = selectFlyClass.classList.length !== 1

  if(isClassOnSelect) {
    selectFlyClass.classList.remove("select-active");
  } else {
    selectFlyClass.classList.add("select-active");
  }
}

function setValueSelect(value, selectId) {
  const currentValue = document.querySelector(`#${selectId} strong span`)
  currentValue.innerHTML = value
  document.getElementById(selectId).classList.remove("select-active");

}

function handleFormattedDate() {
  let fieldDate = document.getElementById("field-date");
  // Deixa somente números
  const value = fieldDate.value.replace(/\D/g, '');

  if (value.length < 4) {
    console.log('entrou')
    fieldDate.value = value.replace(/(\d{2})(\d{1,2})/g, '$1/$2')
  } else {
    fieldDate.value = value.slice(0, 7).replace(/(\d{2})(\d{2})(\d{1,4})/g, '$1/$2/$3')
  }
}