const toastTriggerConfirmar = document.getElementById('liveToastConfirmar')
const toastTriggerNConfirmar = document.getElementById('liveToastNConfirmar')
const toastLiveSuccess = document.getElementById('liveToastSuccess')
const toastLiveDanger = document.getElementById('liveToastDanger')


if (toastTriggerConfirmar) {

  toastTriggerConfirmar.addEventListener('click', () => {
  const toast = new bootstrap.Toast(toastLiveSuccess)

  toast.show()
})
  
}


if (toastTriggerNConfirmar) {

  toastTriggerNConfirmar.addEventListener('click', () => {
  const toast = new bootstrap.Toast(toastLiveDanger)

  toast.show()
})
}
