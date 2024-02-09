export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  if (!email) {
    if (!emailRegex.test(email)) {
      return 'format email tidak valid'
    }
    return 'email tidak boleh kosong'
  } else {
    return ''
  }
}
