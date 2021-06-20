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


$('.works1').hover(()=>{
  $('.work1').toggle()
})
$('.works2').hover(()=>{
  $('.work2').toggle()
})
$('.works3').hover(()=>{  
  $('.work3').toggle()
})
$('.works4').hover(()=>{
  $('.work4').toggle()
})
$('.works5').hover(()=>{
  $('.work5').toggle()
})
$('.works6').hover(()=>{
  $('.work6').toggle()
})
$('.works7').hover(()=>{
  $('.work7').toggle()
})
$('.works8').hover(()=>{
  $('.work8').toggle()
})



function validate(){
  let name = document.getElementById('fname').value;
  let mail = document.getElementById('mailing').value
  let message = document.getElementById('message').value
  if(name.length <2 || name.length === ""){
    alert('please Enter your full name')
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