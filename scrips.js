/*const Gamings = [
    {
      id: 1,
      title: 'Welcome to Virtual Reality',
      place: 'The Virtural Game',
      image: 'https://escapetovr.com/wp-content/uploads/2020/12/1030_LL_VR-1030x580-1.jpg'
    },
    {
      id: 2,
      title: 'The Future of Virtual Reality',
      place: 'The Virtural Game',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*u9E_tiaCY980rEJVePum_Q.jpeg'
    },
    {
      id: 3,
      title: 'Virtual Reality New Era',
      place: 'The Virtural Game',
      image: 'https://www.rd.com/wp-content/uploads/2022/08/GettyImages-1405467489.jpg'
    },
    {
      id: 4,
      title: 'Virtual Revolution',
      place: 'The Virtural Game',
      image: 'https://www.blippar.com/uploads/legacy/Listing/_flexL/vr.jpg'
    },
]
  const GamingsList = document.querySelector('.Gamings .options');
  const virturalContainer = document.querySelector('.virturalContainer');

  window.addEventListener('load', function() {
    Gamings.map((virtural) => {
      GamingsList.innerHTML+= `
        <div class="option">
          <h3>0${virtural.id}</h3>
            <div>
            <h2>${virtural.title}</h2>
            <h5>${virtural.place}</h5>
          </div>
        </div>
      `
    });
    
  const allGamings = document.querySelectorAll('.Gamings .options .option');
    
  // Default active class
  allGamings[0].classList.add('active');
  document.querySelector('.virturalText .GamingText').innerText = Gamings[0].place;
  document.querySelector('.virturalText .GamingText').classList.remove('animate');
  void document.querySelector('.virturalText .GamingText').offsetWidth;
  document.querySelector('.virturalText .GamingText').classList.add('animate');
  document.querySelector('.virturalText .playerText').classList.remove('animate');
  void document.querySelector('.virturalText .playerText').offsetWidth;
  document.querySelector('.virturalText .playerText').classList.add('animate');
  document.querySelector('.virturalText .playerText').innerText = Gamings[0].title;
  virturalContainer.style.background = `linear-gradient(to bottom, rgba(150, 246, 150, 0.1), rgba(155, 150, 252, 0.2)), url(${countries[0].image})`
    
  for (let i = 0; i < allGamings.length; i++) {
    allCountries[i].addEventListener('click', function() {
      allCountries[i].classList.add('active');
      document.querySelector('.virturalText .GamingText').innerText = Gamings[i].place;
      document.querySelector('.virturalText .playerText').innerText = Gamings[i].title;
      document.querySelector('.virturalText .GamingText').classList.remove('animate');
      void document.querySelector('.virturalText .GamingText').offsetWidth;
      document.querySelector('.virturalText .GamingText').classList.add('animate');
      document.querySelector('.virturalText .playerText').classList.remove('animate');
      void document.querySelector('.virturalText .playerText').offsetWidth;
      document.querySelector('.virturalText .playerText').classList.add('animate');
      virturalContainer.style.background = `linear-gradient(to bottom, rgba(150, 246, 150, 0.1), rgba(155, 150, 252, 0.2)), url(${Gamings[i].image})`
      Array.prototype.slice.call(allGamings).filter((c) => c !== allGamings[i]).map((cntry => {
        cntry.classList.remove('active');
      }));
    })
  }
  })*/

  const Gamings = [
    {
      id: 1,
      title: "Welcome to Virtual Reality",
      place: "The Virtural Game",
      image: "https://escapetovr.com/wp-content/uploads/2020/12/1030_LL_VR-1030x580-1.jpg",
    },
    {
      id: 2,
      title: "The Future of Virtual Reality",
      place: "The Virtural Game",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*u9E_tiaCY980rEJVePum_Q.jpeg",
    },
    {
      id: 3,
      title: "Virtual Reality New Era",
      place: "The Virtural Game",
      image: "https://www.rd.com/wp-content/uploads/2022/08/GettyImages-1405467489.jpg",
    },
    {
      id: 4,
      title: "Virtual Revolution",
      place: "The Virtural Game",
      image: "https://www.blippar.com/uploads/legacy/Listing/_flexL/vr.jpg",
    },
  ];
  
  const optionsList = document.querySelector(".options");
  const virturalContainer = document.querySelector(".virturalContainer");
  
  Gamings.map((gaming) => {
    optionsList.innerHTML += `
            <div class="option">
              <h3>0${gaming.id}</h3>
              <div>
                <h2>${gaming.title}</h2>
                <h5>${gaming.place}</h5>
              </div>
            </div>
          `;
  });
  
  const allGamings = document.querySelectorAll(".options .option");
  
  // Default active class
  allGamings[0].classList.add("active");
  document.querySelector(
    ".virturalText .GamingText"
  ).innerText = Gamings[0].title;
  document.querySelector(".virturalText .GamingText").classList.remove("animate");
  void document.querySelector(".virturalText .GamingText").offsetWidth;
  document.querySelector(".virturalText .GamingText").classList.add("animate");
  document.querySelector(".virturalText .playerText").classList.remove("animate");
  void document.querySelector(".virturalText .playerText").offsetWidth;
  document.querySelector(".virturalText .playerText").classList.add("animate");
  document.querySelector(".virturalText .playerText").innerText =
    Gamings[0].place;
  virturalContainer.style.background = `linear-gradient(to bottom, rgba(150, 246, 150, 0.1), rgba(155, 150, 252, 0.2)), url(${Gamings[0].image})`;
  
  for (let i = 0; i < allGamings.length; i++) {
    allGamings[i].addEventListener("click", function () {
      // Remove "active" class from all elements
      allGamings.forEach((gaming) => {
        gaming.classList.remove("active");
      });
  
      // Add "active" class to the clicked element
      this.classList.add("active");
  
      // Get the selected country
      const selectedGaming = Gamings.find((c) => c.id === parseInt(this.querySelector("h3").textContent.slice(1)));
  
      // Update the text with the new selected country name
      document.querySelector(".virturalText .GamingText").innerText = selectedGaming.title;
      document.querySelector(".virturalText .playerText").innerText = selectedGaming.place;
      document.querySelector(
        ".virturalContainer"
      ).style.background = `linear-gradient(to bottom, rgba(150, 246, 150, 0.1), rgba(155, 150, 252, 0.2)), url(${selectedGaming.image})`;
    });
  }