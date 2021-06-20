$('.image1').click(()=>{
  $('.description1').toggle();
  $('.image1').toggle();
  $('.head1').hide()
})
$('.description1').click(()=>{
  $('.description1').toggle();
  $('.image1').toggle();
  $('.head1').show()
})
$('.image2').click(()=>{
  $('.description2').toggle();
  $('.image2').toggle();
  $('.head2').hide()
})
$('.description2').click(()=>{
  $('.description2').toggle();
  $('.image2').toggle();
  $('.head2').show()
})
$('.image3').click(()=>{
  $('.description3').toggle();
  $('.image3').toggle();
  $('.head3').hide()
})
$('.description3').click(()=>{
  $('.description3').toggle();
  $('.image3').toggle();
  $('.head3').show()
})


$()



function validate(){
  let name = document.getElementById('fname').value;
  let mail = document.getElementById('mailing').value
  let message = document.getElementById('message').value
  if(name.length <2){
    alert('name is too short')
  }

  
  if(message.length < 50){
    alert('meassage too short')
  }
  else{
    alert('Message Recieved')
  }
}

var button = document.getElementById('button')
button.addEventListener('click',()=>{
  validate();
})