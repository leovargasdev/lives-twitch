function toggleMenu() {
  const button = document.getElementById('button-mobile')
  button.classList.toggle('active')

  const navigation = document.getElementById('navigation')
  navigation.classList.toggle('active')
}