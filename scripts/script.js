// Array of image URLs
const images = [
  'assets/css/images/fav-grafitti.JPG',
  'assets/css/images/building-light.JPG',
  'assets/css/images/dat-one-mtn.JPG',
  'assets/css/images/slc-long-exposure.JPG',
  'assets/css/images/day-dragon.JPG',
  'assets/css/images/desert-tree.JPG',
  'assets/css/images/dumpster-dive.JPG',
  'assets/css/images/night-dragon.JPG',
  'assets/css/images/indicator.JPG',
  'assets/css/images/or-wave.JPG',
  'assets/css/images/recycle-clown.JPG',
  'assets/css/images/shoes-grafitti.JPG',
  
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
