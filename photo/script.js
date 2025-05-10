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

  // 啟動自動播放（每 4 秒切換一張）
  setInterval(() => moveSlide(1), 4000);
}

function moveSlide(direction) {
  const track = document.getElementById('carousel-track');
  const totalSlides = imageList.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// 載入圖片清單
fetch('./photo/imageList.json')
  .then(res => res.json())
  .then(renderImages);
