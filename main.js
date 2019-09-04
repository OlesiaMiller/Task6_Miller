var contact = document.getElementById('contacts');
var show  = document.getElementById('shower');
var hide  = document.getElementById('hider');
var form  = document.getElementById('form');
var main  = document.getElementById('main');
var description = document.getElementById('description');



document.getElementById('hider').onclick = function() {
    contact.style.height = "0";
    form.style.display = "none";
    hider.style.display = "none";
    description.style.display = "none";
    contact.classList.remove('tool');
  }

  document.getElementById('shower').onclick = function() {
    contact.style.height = "450px";
    form.style.display = "block";
    hider.style.display = "block";
    description.style.display = "block";
    contact.classList.toggle('tool');
  

  }