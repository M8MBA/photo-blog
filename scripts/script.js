// Array of image URLs
const images = [
  'assets/images/fav-grafitti.JPG',
  'assets/images/building-light.JPG',
  'assets/images/dat-one-mtn.JPG',
  'assets/images/slc-long-exposure.JPG',
  'assets/images/day-dragon.JPG',
  'assets/images/desert-tree.JPG',
  'assets/images/dumpster-dive.JPG',
  'assets/images/night-dragon.JPG',
  'assets/images/indicator.JPG',
  'assets/images/or-wave.JPG',
  'assets/images/recycle-clown.JPG',
  'assets/images/shoes-grafitti.JPG',

  // Add more image URLs here
];

// Function to create image elements and append them to the gallery
function createGallery() {
  const gallery = document.getElementById('gallery');

  images.forEach((imageURL) => {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';

    const img = document.createElement('img');
    img.src = imageURL;

    img.addEventListener('click', () => {
      showOriginalImage(imageURL);
    });

    imgContainer.appendChild(img);
    gallery.appendChild(imgContainer);
  });
}

// Function to display the original image in a modal or separate view
function showOriginalImage(imageURL) {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  const modal = document.createElement('div');
  modal.className = 'modal';

  const img = document.createElement('img');
  img.src = imageURL;

  modal.appendChild(img);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });
}

// Call the createGallery function when the page finishes loading
window.addEventListener('load', createGallery);


// JavaScript to handle header size on scroll
var header = document.getElementById("header");
var sticky = header.offsetTop;

window.onscroll = function () {
  if (window.pageYOffset > sticky) {
    header.classList.add("small");
  } else {
    header.classList.remove("small");
  }
};