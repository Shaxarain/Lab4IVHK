function validateField(fieldId) {
  var fieldValue = document.getElementById(fieldId).value;
  if (fieldValue === '') {
    alert('Write something in ' + fieldId + ' field.');
  }
}
function errorsView(name){
  let text = document.getElementById('errors');
  let p = document.createElement('h5');
  p.innerText = name;
  text.appendChild(p);
}

