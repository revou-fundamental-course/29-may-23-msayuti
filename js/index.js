let nama = prompt("Masukan Nama Kamu");
document.getElementById("nama").innerText = nama;

function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const date = document.forms["message-form"]["birth-date"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["messages"].value;

  if (name == "" || date == "" || gender == "" || messages == "") {
    alert("Input tidak boleh kosong!");
    return false;
  } else {
    alert("Sukses, Data Anda Akan dimunculkan");
  }

  document.getElementById("sender-full-name").innerText = name;
  document.getElementById("sender-birth-date").innerText = date;
  document.getElementById("sender-gender").innerText = gender;
  document.getElementById("sender-messages").innerText = messages;
  return false;
}


