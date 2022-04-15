const ButtonShowab = document.getElementById('hamburger1');
const ButtonHideab = document.getElementById('hamburger2');
const HomePage = document.getElementById('home_page');
const AboutPage = document.getElementById('About_section');
const HomeBtn = document.getElementById('home');
const AboutBtn = document.getElementById('about');
const HomeBtn2 = document.getElementById('home2');
const AboutBtn2 = document.getElementById('about2');
const logoN = document.getElementById('lodNav');

function showNav() {
  const UlNav = document.getElementById('ul_nav');

  document.getElementById('hamburger1').style.display = 'none';
  document.getElementById('hamburger2').style.display = 'flex';
  UlNav.style.display = 'flex';
  console.log('Nav shown');
}
function HideNav() {
  const UlNav = document.getElementById('ul_nav');

  document.getElementById('hamburger1').style.display = 'flex';
  document.getElementById('hamburger2').style.display = 'none';
  UlNav.style.display = 'none';
  console.log('Nav Hiden');
}

function showHomePage() {
  HomePage.style.display = 'flex';
  AboutPage.style.display = 'none';
  console.log('show home page');
}

function showAboutPage() {
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

logoN.addEventListener('click', showHomePage);

function displayCard(nameC, jobC, pictureC, storieC, containerC) {
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
    },
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
      }

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

function wrapCards() {
  const presenters = [
    {
      picture: 'images/Craig_rowe.jpg',
      name: 'Craig Rowe',
      job: 'Director of Manufacturing and distribution',
      storie:
        'To solve rural challenges around the world and increase connectivity, Craig Rowe launched Internet.org, a technology partnership that brings the Internet to remote and rural regions in the world.',
    },
    {
      picture: 'images/Annaliese_Dayes.jpeg',
      name: 'Annaliese Dayes',
      job: 'Artistic director and management',
      storie:
        'Annaliese Dayes did the study of public speaking in Artitic school in Sweden about 10 years ago. Girls were required to give speeches as part of their civic duties,',
    },
    {
      picture: 'images/Square_Ophelia_Dennis.jpeg',
      name: 'Ophelia Dennis',
      job: 'Planning and Controlling director',
      storie:
        'Ophelia Dennis ongoing learning has enabled her to embrace the broad scope the nursing profession',
    },
    {
      picture: 'images/Alex_kramer.jpg',
      name: 'Alex kramer',
      job: 'Director Finance',
      storie:
        'Undertaking an Australian School-based Apprenticeship helped Caitlin realise her dream carrer of becoming an ancounter',
    },
    {
      picture: 'images/Charlie_brook.jpg',
      name: 'Charlie Brook',
      job: 'Technology and Engineering manager',
      storie:
        'Charlie Brook managed to find a job where she combines her knoweldge of Electronic and Telecomunication with his love of environment',
    },
    {
      picture: 'images/Chloe_everton.jpg',
      name: 'Chloe Everton',
      job: 'Organization director and manager',
      storie:
        'Chloe Everton changed careers to management after studying in photgraphy and psychology.Shes now in the job of her childhood dream',
    },
  ];

  const showMore = document.getElementById('showMore');
  const showMore2 = document.getElementById('showMore2');    

  for (let i = 0; i < presenters.length; i += 1) {
    const nameCard = presenters[i].name;
    const jobCard = presenters[i].job;
    const pictureCard = presenters[i].picture;
    const storieCard = presenters[i].storie;

    const section = document.querySelectorAll('.feature_card');
    if (i >= 2) {
      section[i].style.display = 'none';
    }
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

  for (let i = 0; i < presenters.length; i += 1) {
    const nameCard = presenters[i].name;
    const jobCard = presenters[i].job;
    const pictureCard = presenters[i].picture;
    const storieCard = presenters[i].storie;
    displayCard(nameCard, jobCard, pictureCard, storieCard, document.getElementById('futuresDesck'));
  }

}
wrapCards();
