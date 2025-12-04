document.addEventListener('DOMContentLoaded', () => {
  const smallImages = document.querySelectorAll('.propertiesSmallPictures img');
  const bigImages = document.querySelectorAll('.propertiesBigPictures img');

  smallImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      bigImages[0].src = img.src;

      const nextIndex = (index + 1) % smallImages.length;
      bigImages[1].src = smallImages[nextIndex].src;
    });
  });
});
