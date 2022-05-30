// carrossel de carros pagina de locação
const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  // Update css classes for gallery
  updateGallery() {
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i+1}`);
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState(direction) {

    if (direction.className == 'gallery-controls-previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  // Construct the carousel navigation
  // setNav() {
    // galleryContainer.appendChild(document.createElement('ul')).className = 'gallery-nav';

    // this.carouselArray.forEach(item => {
    //   const nav = galleryContainer.lastElementChild;
    //   nav.appendChild(document.createElement('li'));
    // }); 
  // }s

  // Construct the carousel controls
  setControls() {
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;

      document.querySelector(`.gallery-controls-${control}`).innerText = control;
    });
  }
 
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();

        if (control.className == 'gallery-controls') {
          // const newItem = document.createElement('img');
          const latestItem = this.carouselArray.length;
          const latestIndex = this.carouselArray.findIndex(item => item.getAttribute('data-index') == this.carouselArray.length)+1;

          // Assign the necessary properties for new gallery item
          // Object.assign(newItem,{
          //   className: 'gallery-item',
          //   src: `../img/${this.carouselArray.length+1}`
          // });
          // newItem.setAttribute('data-index', this.carouselArray.length+1);

          // // Then add it to the carouselArray and update the gallery
          // this.carouselArray.splice(latestIndex, 0, newItem);
          // document.querySelector(`[data-index="${latestItem}"]`).after(newItem);
          // this.updateGallery();

        } else {
          this.setCurrentState(control);
        }

      });
    });
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
// exampleCarousel.setNav();
exampleCarousel.useControls();




// google maps
var x=document.getElementById("demo");
        function getLocation()
          {
          if (navigator.geolocation)
            {
            navigator.geolocation.getCurrentPosition(showPosition,showError);
            }
          else{x.innerHTML="Geolocalização não é suportada nesse browser.";}
          }
         
        function showPosition(position)
          {
          lat=position.coords.latitude;
          lon=position.coords.longitude;
          latlon=new google.maps.LatLng(lat, lon)
          mapholder=document.getElementById('mapholder')
          mapholder.style.height='20rem';
          mapholder.style.width='40rem';
         
          var myOptions={
          center:latlon,zoom:14,
          mapTypeId:google.maps.MapTypeId.ROADMAP,
          mapTypeControl:false,
          navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
          };
          var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
          var marker=new google.maps.Marker({position:latlon,map:map,title:"Você está Aqui!"});
          }
         
        function showError(error)
          {
          switch(error.code)
            {
            case error.PERMISSION_DENIED:
              x.innerHTML="Usuário rejeitou a solicitação de Geolocalização."
              break;
            case error.POSITION_UNAVAILABLE:
              x.innerHTML="Localização indisponível."
              break;
            case error.TIMEOUT:
              x.innerHTML="O tempo da requisição expirou."
              break;
            case error.UNKNOWN_ERROR:
              x.innerHTML="Algum erro desconhecido aconteceu."
              break;
            }
          }
