document.addEventListener("DOMContentLoaded", () => {
  const bannerOferta = document.querySelector(".banner-oferta");

  bannerOferta.innerHTML = `
  <div class="carousel">
      <button class="carousel-btn carousel-prev">&#10094;</button>
      <a href="#" class="carousel-link">
          <img src="img1.jpg" alt="Slide 1" class="carousel-image">
      </a>
      <button class="carousel-btn carousel-next">&#10095;</button>
      <div class="carousel-dots"></div>
  </div>
`;

  const images = [
    { src: "/img/test.jpg", link: "#" },
    { src: "img2.jpg", link: "#" },
    { src: "img3.jpg", link: "#" },
  ];

  let currentIndex = 0;
  const imgElement = document.querySelector(".carousel-image");
  const linkElement = document.querySelector(".carousel-link");
  const dotsContainer = document.querySelector(".carousel-dots");

  images.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => changeSlide(index));
    dotsContainer.appendChild(dot);
  });

  const updateCarousel = () => {
    imgElement.src = images[currentIndex].src;
    linkElement.href = images[currentIndex].link;
    document.querySelectorAll(".dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  };

  const changeSlide = (index) => {
    currentIndex = index;
    updateCarousel();
  };

  document.querySelector(".prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  document.querySelector(".next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  updateCarousel();
});
