var pwChange = document.querySelector('#chpassword');
pwChange.addEventListener('change', alert1, false);

function alert1(){
  var type = $('#chpassword').attr('type');
  if(type=="text"){
    alert("changed");
    document.location.href="index.html";
  }
}
