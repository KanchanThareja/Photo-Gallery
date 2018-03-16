
//on hover
function update(previewPic){
  var src = previewPic.getAttribute("src");
  var alt = previewPic.getAttribute("alt");
  document.getElementById('image').style.backgroundImage = "url('"+src+"')";
  document.getElementById('image').innerHTML = alt;

}
//on leave
function undo(){
  var x = document.getElementById('image');
  document.getElementById('image').style.backgroundImage = "url('')";
  x.innerHTML = x"Hover over an image below to display here";
}
