// function togglemenu(){
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
// }

// About tabs
var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname){

            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }

            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

// Nav Hamburger
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// Function to check the aspect ratio of an image
function getImageAspectRatio(image) {
  return image.width / image.height;
}

// Function to initialize Swiper based on the image aspect ratio
function initializeSwiper() {
  const swiperContainers = document.querySelectorAll('.card-wrapper');

  swiperContainers.forEach(container => {
      const images = container.querySelectorAll('.card-image');
      let isLandscape = false;

      // Check if the first image is landscape (aspect ratio > 1)
      const firstImage = images[0];
      firstImage.onload = function () {
          if (getImageAspectRatio(firstImage) > 1) {
              isLandscape = true;  // Landscape image
          }

          // Initialize Swiper with a custom slidesPerView based on the image type
          new Swiper(container, {
              loop: true,
              spaceBetween: 30,
              pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                  dynamicBullets: true,
              },
              navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
              },
              breakpoints: {
                  0: {
                      slidesPerView: isLandscape ? 1 : 1,  // Landscape gets 1 slide per view, square/portrait gets 2
                  },
                  840: {
                      slidesPerView: isLandscape ? 2 : 2,  // Landscape gets 2 slides per view, square/portrait gets 3
                  },
                  1024: {
                      slidesPerView: isLandscape ? 2 : 3,  // Landscape gets 2 slides per view on 1024px width
                  },
              },
          });
      }
  });
}

// Call the initializeSwiper function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeSwiper);


// Contact Form
  const scriptURL = 'https://script.google.com/macros/s/AKfycbymJYXIzcIbUKri5F8eOdGwe3T4Xecp3dKRvp1pqvJtCVVLt9OtUtjkOkdi2M02S15o/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


