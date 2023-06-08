// profile

let slideIndex = 1;
ShowDivs(slideIndex);

function plusDivs(n) {
  ShowDivs((slideIndex += n));
}

function ShowDivs(n) {
  let i;
  let imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = imgList.length;
  }
  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }
  imgList[slideIndex - 1].style.display = "block";
}
