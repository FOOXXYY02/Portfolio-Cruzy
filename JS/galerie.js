document.addEventListener("DOMContentLoaded", function () {
  const themeImages = {
    portrait: [
      "../image/portrait1.jpeg",
      "../image/portrait2.jpeg",
      "../image/portrait3.jpeg",
      "../image/portrait4.jpeg",
      "../image/portrait5.jpeg",
      "../image/portrait6.jpeg"
    ],
    voiture: [
      "../image/voiture1.jpg",
      "../image/voiture2.jpg",
      "../image/voiture3.jpg",
      "../image/voiture4.jpg",
      "../image/voiture5.jpg",
      "../image/voiture6.jpg",
      "../image/voiture7.jpg",
      "../image/voiture8.jpg"
    ],
    paysage: [
      "../image/paysage1.jpg",
      "../image/paysage2.jpg",
      "../image/paysage3.jpg",
      "../image/paysage4.jpg",
      "../image/paysage5.jpg",
      "../image/paysage6.jpg"
    ]
  };

  const sliderItems = document.querySelectorAll(".slider-item");
  const subGallery = document.getElementById("sub-gallery");

  sliderItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      const theme = item.getAttribute("data-theme");
      const images = themeImages[theme];

      if (images && Array.isArray(images)) {
        subGallery.innerHTML = images
          .map(src => `<img src="${src}" alt="">`)
          .join("");
      } else {
        subGallery.innerHTML = "<p>Aucune image disponible pour ce thème.</p>";
      }
    });
  });
});
