var swiper = new Swiper('.slide', {
    direction: "vertical",//세로 방향
    speed: 1500,//버튼을 눌렀을 때 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 3000,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    pagination: {//블릿 버튼
        el: '.slide .swiper-pagination',
        clickable: true,
    },
});

// 시그니처 메뉴 슬라이드
var swiper = new Swiper(".center_in", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
      navigation: { // ✅ 버튼 연결
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
});

AOS.init({
    direction: 1500,
});

// 시그니처 메뉴 슬라이드
var swiper2 = new Swiper(".md_menu", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {//블릿 버튼
        el: '.md_menu .swiper-pagination',
        clickable: true,
    },

});
const sidebar = document.querySelector('.map_search');
const toggleBtnImg = sidebar.querySelector('.sidebar-toggle img');

sidebar.addEventListener('mouseenter', () => {
  sidebar.classList.add('active');
  toggleBtnImg.style.transform = 'rotate(180deg)';  // 아이콘 180도 회전
});

sidebar.addEventListener('mouseleave', () => {
  sidebar.classList.remove('active');
  toggleBtnImg.style.transform = 'rotate(0deg)';    // 원래대로
});


document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("slideTrack");
  const clones = track.innerHTML; // 원본 복사
  track.innerHTML += clones; // 복제 추가

  // 이미지 로딩 확인 후 움직일 거리 계산
  const images = track.querySelectorAll("img");
  let loaded = 0;
  images.forEach(img => {
    img.onload = () => {
      loaded++;
      if (loaded === images.length) {
        const totalWidth = track.scrollWidth / 2;
        track.style.setProperty('--move', `-${totalWidth}px`);
        track.style.animation = `scrollSlider 30s linear infinite`;
      }
    };
  });
});
