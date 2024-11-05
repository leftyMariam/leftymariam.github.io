// Select the displayed image, overlay, and button elements
const displayedImage = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const button = document.querySelector('button');
const thumbBar = document.querySelector('.thumb-bar');

// List of image paths for the thumbnails
const imagePaths = [
  'images/pic1.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
  'images/pic4.jpg',
  'images/pic5.jpg'
];

// Loop through each image path, creating a thumbnail and appending it to the thumb-bar
imagePaths.forEach(imagePath => {
  const newImage = document.createElement('img');
  newImage.src = imagePath;
  newImage.alt = 'Thumbnail';
  newImage.classList.add('thumb-img');
  thumbBar.appendChild(newImage);

  // Add click event to change the displayed image when a thumbnail is clicked
  newImage.addEventListener('click', () => {
    displayedImage.src = imagePath;
    displayedImage.alt = newImage.alt;
  });
});

// Toggle darkening effect
button.addEventListener('click', () => {
  if (button.classList.contains('dark')) {
    button.classList.replace('dark', 'light');
    button.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    button.classList.replace('light', 'dark');
    button.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
