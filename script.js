var myheading = document.querySelector('h1');
myheading.textContent = '4eva';

var images = document.querySelector('img');
images.onclick = function () {
  var mysource = images.getAttribute('src');
  if (mysource == 'images/bigkrit.jpg'){
    images.setAttribute('src','images/bigkrit2.jpg');
  } else {
    images.setAttribute('src','images/bigkrit.jpg');
  }
}
