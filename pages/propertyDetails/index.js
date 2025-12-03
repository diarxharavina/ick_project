document.addEventListener('DOMContentLoaded', () => {
  const smallImages = document.querySelectorAll('.propertiesSmallPictures img');
  const bigImages = document.querySelectorAll('.propertiesBigPictures img');

  smallImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      // First big image = clicked one
      bigImages[0].src = img.src;

      // Second big image = next image
      const nextIndex = (index + 1) % smallImages.length; // wraps around if last
      bigImages[1].src = smallImages[nextIndex].src;
    });
  });
});
