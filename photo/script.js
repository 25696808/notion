let currentSlide = 0;
let imageList = [];

function renderImages(images) {
  const track = document.getElementById('carousel-track');
  imageList = images;

  images.forEach(img => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';

    const image = document.createElement('img');
    image.src = `./photo/${img}`;

    slide.appendChild(image);
    track.appendChild(slide);
  });
}

function moveSlide(direction) {
  const track = document.getElementById('carousel-track');
  const totalSlides = imageList.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

fetch('./photo/imageList.json')
  .then(res => res.json())
  .then(renderImages);
