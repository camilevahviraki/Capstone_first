const ButtonShowab = document.getElementById('hamburger1');
const ButtonHideab = document.getElementById('hamburger2');
const HomePage = document.getElementById('home_page');
const AboutPage = document.getElementById('About_section');
const HomeBtn = document.getElementById('home');
const AboutBtn = document.getElementById('about');
const HomeBtn2 = document.getElementById('home2');
const AboutBtn2 = document.getElementById('about2');

function showNav() {
  const NavAll = document.getElementById('NavBar1');
  const UlNav = document.getElementById('ul_nav');
   
  document.getElementById('hamburger1').style.display = 'none';
  document.getElementById('hamburger2').style.display = 'flex';
  UlNav.style.display = 'flex';
  console.log('Nav shown');
}
function HideNav() {
  const NavAll = document.getElementById('NavBar1');
  const UlNav = document.getElementById('ul_nav');
  
  document.getElementById('hamburger1').style.display = 'flex';
  document.getElementById('hamburger2').style.display = 'none';
  UlNav.style.display = 'none';
  console.log('Nav Hiden');
}

function showHomePage () {
  HomePage.style.display = 'flex';
  AboutPage.style.display = 'none';
  console.log('show home page');
}

function showAboutPage () {
  HomePage.style.display = 'none';
  AboutPage.style.display = 'flex';
  console.log('show About page');
}

ButtonShowab.addEventListener('click', showNav);
ButtonHideab.addEventListener('click', HideNav);

AboutBtn.addEventListener('click', HideNav);
HomeBtn.addEventListener('click', HideNav);

AboutBtn.addEventListener('click', showAboutPage);
HomeBtn.addEventListener('click', showHomePage);

AboutBtn2.addEventListener('click', showAboutPage);
HomeBtn2.addEventListener('click', showHomePage);

function displayCard (nameC, jobC, pictureC, storieC, containerC) {
  const containerCards = containerC;
  const AllTags = [
      {
        type: 'div',
        name: 'cardContainer',
        class: 'feature_card',
      },
      {
        type: 'div',
        name: '2Images',
        class: 'imagesP',
      },
      {
        type: 'img',
        name: 'chess',
        class: 'chess',
        src: 'images/Chess-PNG-Background.png',
      },
      {
        type: 'img',
        name: 'presenter',
        class: 'presenter',
        src: `${pictureC}`,
      },
      {
        name: 'desc_presenter',
        class: 'desc_presenter',
        type: 'div',
      },
      {
        name: 'name_presenter',
        class: 'name_presenter',
        type: 'h3',
        texte: `${nameC}`,
      },
      {
        name: 'function_presenter',
        class: 'function_presenter',
        type: 'h4',
        texte: `${jobC}`,
      },
      {
        name: 'line_grey',
        class: 'line_grey',
        type: 'div',
      },
      {
        name: 'p_presenter',
        class: 'p_presenter',
        type: 'p',
        texte: `${storieC}`,
      }
    ];
  
    function createEveryTag() {
      const output = [];
      for (let i = 0; i < AllTags.length; i += 1) {
        AllTags[i].name = document.createElement(AllTags[i].type);
        AllTags[i].name.classList.add(AllTags[i].class);
  
        if (Object.prototype.hasOwnProperty.call(AllTags[i], 'id')) {
          AllTags[i].name.setAttribute('id', AllTags[i].id);
        }
  
        if (Object.prototype.hasOwnProperty.call(AllTags[i], 'src')) {
          AllTags[i].name.src = AllTags[i].src;
        }// Check if theres Src
  
        if (Object.prototype.hasOwnProperty.call(AllTags[i], 'texte')) {
          AllTags[i].name.innerText = AllTags[i].texte;
        }
  
        output.push(AllTags[i].name);
      }
  
      return output;
    }
    let myTags = {};
    myTags = createEveryTag();
  
    console.log(myTags);
  
    myTags[0].append(myTags[1], myTags[4]);
    myTags[1].append(myTags[2], myTags[3]);
    myTags[4].append(myTags[5], myTags[6], myTags[7], myTags[8]);
    containerCards.append(myTags[0]);
  
}

  function wrapCards (numOfCards) {
    const presenters = [
      {
        picture: "images/Craig_rowe.jpg",
        name: "Annaliese Dayes",
        job: "Artistic director and management",
        storie:
          "The study of public speaking began about 2,500 years ago in ancient Athens. Men were required to give speeches as part of their civic duties,",
      },
      {
        picture: "images/Craig_rowe.jpg",
        name: "Annaliese Dayes",
        job: "Artistic director and management",
        storie:
          "The study of public speaking began about 2,500 years ago in ancient Athens. Men were required to give speeches as part of their civic duties,",
      },
      {
        picture: "images/Craig_rowe.jpg",
        name: "Annaliese Dayes",
        job: "Artistic director and management",
        storie:
          "The study of public speaking began about 2,500 years ago in ancient Athens. Men were required to give speeches as part of their civic duties,",
      },
      {
        picture: "images/Craig_rowe.jpg",
        name: "Annaliese Dayes",
        job: "Artistic director and management",
        storie:
          "The study of public speaking began about 2,500 years ago in ancient Athens. Men were required to give speeches as part of their civic duties,",
      }
    ];
    let listLength = 2;
    const showMore = document.getElementById('showMore');
    const showMore2 = document.getElementById('showMore2');
      

    for (let i=0; i < presenters.length; i += 1) {
      const nameCard = presenters[i].name;
      const jobCard = presenters[i].job;
      const pictureCard = presenters[i].picture;
      const storieCard = presenters[i].storie;
      ///////
      const section = document.querySelectorAll('.feature_card');
      if (i >= 2) {
        section[i].style.display = 'none';
      }///////
      showMore.addEventListener('click', function () {
        showMore2.style.display = 'flex'; 
        showMore.style.display = 'none';
        section[i].style.display = 'flex';
        console.log('clicked');
      });

      showMore2.addEventListener('click', function () {
        if (i >= 2) {
          section[i].style.display = 'none';
          showMore2.style.display = 'none'; 
          showMore.style.display = 'flex';
          console.log('Hiden');
        }
      });

      displayCard(nameCard, jobCard, pictureCard, storieCard, document.getElementById('futuresSp'));
    }

    for (let i=0; i < presenters.length; i += 1) {
      const nameCard = presenters[i].name;
      const jobCard = presenters[i].job;
      const pictureCard = presenters[i].picture;
      const storieCard = presenters[i].storie;
      displayCard(nameCard, jobCard, pictureCard, storieCard, document.getElementById('futuresDesck'));
    }

  }
  
  wrapCards ();

