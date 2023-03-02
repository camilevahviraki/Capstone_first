const ButtonShowab = document.getElementById('hamburger1');
const ButtonHideab = document.getElementById('hamburger2');
const HomePage = document.getElementById('home_page');
const AboutPage = document.getElementById('About_section');
const logoN = document.getElementById('lodNav');
const cardsContainerDesck = document.getElementById('futuresDesck');
const cardsContainerMobile = document.getElementById('futuresSp');
const showMore = document.getElementById('showMore');
const showLess = document.getElementById('showLess');
const navLinksContainer = document.getElementById('Ul_desk');
const navLinksMobile = document.getElementById('ul_nav');
const body = document.getElementById('body');

const navLinks = [
  { text: 'Home', id: { desk: 'home2', mob: 'home' } },
  { text: 'About', id: { desk: 'about2', mob: 'about' } },
  { text: 'Join', id: { desk: 'join', mob: 'join' } },
  { text: 'Program', id: { desk: 'Program', mob: 'Program' } },
  { text: 'V Ignite', id: { desk: 'Ignite', mob: '' } },
];

const presenters = [
  {
    picture: 'images/Craig_rowe.jpg',
    name: 'Craig Rowe',
    job: 'Director of Manufacturing and distribution',
    story:
      'To solve rural challenges around the world and increase connectivity, Craig Rowe launched Internet.org, a technology partnership that brings the Internet to remote and rural regions in the world.',
  },
  {
    picture: 'images/Annaliese_Dayes.jpeg',
    name: 'Annaliese Dayes',
    job: 'Artistic director and management',
    story:
      'Annaliese Dayes did the study of public speaking in Artitic school in Sweden about 10 years ago. Girls were required to give speeches as part of their civic duties,',
  },
  {
    picture: 'images/Square_Ophelia_Dennis.jpeg',
    name: 'Ophelia Dennis',
    job: 'Planning and Controlling director',
    story:
      'Ophelia Dennis ongoing learning has enabled her to embrace the broad scope the nursing profession',
  },
  {
    picture: 'images/Alex_kramer.jpg',
    name: 'Alex kramer',
    job: 'Director Finance',
    story:
      'Undertaking an Australian School-based Apprenticeship helped Caitlin realise her dream carrer of becoming an ancounter',
  },
  {
    picture: 'images/Charlie_brook.jpg',
    name: 'Charlie Brook',
    job: 'Technology and Engineering manager',
    story:
      'Charlie Brook managed to find a job where she combines her knoweldge of Electronic and Telecomunication with his love of environment',
  },
  {
    picture: 'images/Chloe_everton.jpg',
    name: 'Chloe Everton',
    job: 'Organization director and manager',
    story:
      'Chloe Everton changed careers to management after studying in photgraphy and psychology.Shes now in the job of her childhood dream',
  },
];

const displayNavLinks = (container, screen) => {
  container.innerHTML = '';

  navLinks.map((link) => {
    container.innerHTML += `
      <li>
        <a class="links_Nav" id="${screen === 'desk' ? link.id.desk : link.id.mob}" href="#">
          ${link.text}
        </a>
      </li>`;
    return null;
  });
};

displayNavLinks(navLinksMobile, 'mob');
displayNavLinks(navLinksContainer, 'desk');

const HomeBtn = document.getElementById('home');
const AboutBtn = document.getElementById('about');
const HomeBtn2 = document.getElementById('home2');
const AboutBtn2 = document.getElementById('about2');

function showNav() {
  const UlNav = document.getElementById('ul_nav');
  document.getElementById('hamburger1').style.display = 'none';
  document.getElementById('hamburger2').style.display = 'flex';
  body.style.overflow = 'hidden';
  UlNav.style.display = 'flex';
}
function HideNav() {
  const UlNav = document.getElementById('ul_nav');
  document.getElementById('hamburger1').style.display = 'flex';
  document.getElementById('hamburger2').style.display = 'none';
  body.style.overflow = 'scroll';
  UlNav.style.display = 'none';
}

function showHomePage() {
  HomePage.style.display = 'flex';
  AboutPage.style.display = 'none';
}

function showAboutPage() {
  HomePage.style.display = 'none';
  AboutPage.style.display = 'flex';
}

ButtonShowab.addEventListener('click', showNav);
ButtonHideab.addEventListener('click', HideNav);
AboutBtn.addEventListener('click', () => { showAboutPage(); HideNav(); });
HomeBtn.addEventListener('click', () => { showHomePage(); HideNav(); });
AboutBtn2.addEventListener('click', showAboutPage);
HomeBtn2.addEventListener('click', showHomePage);
logoN.addEventListener('click', showHomePage);

const displayCards = (limit = presenters.length, container) => {
  container.innerHTML = '';

  presenters.slice(0, limit).map((presenter) => {
    container.innerHTML += `
    <div class="feature_card">
      <div class="imagesP">
        <img class="chess" src="images/Chess-PNG-Background.png">
        <img class="presenter" src="${presenter.picture}">
      </div>
      <div class="desc_presenter">
        <h3 class="name_presenter">${presenter.name}</h3>
        <h4 class="function_presenter">
          ${presenter.job}
        </h4>
      <div class="line_grey">
      </div>
      <p class="p_presenter">
        ${presenter.story}
      </p>
      </div>
    </div>
    `;
    return null;
  });
};

const displaySpeakersMobile = () => {
  showMore.addEventListener('click', () => {
    showLess.style.display = 'flex';
    showMore.style.display = 'none';
    displayCards(presenters.length, cardsContainerMobile);
  });

  showLess.addEventListener('click', () => {
    showLess.style.display = 'none';
    showMore.style.display = 'flex';
    displayCards(2, cardsContainerMobile);
  });
};

displayCards(2, cardsContainerMobile);
displaySpeakersMobile();
displayCards(presenters.length, cardsContainerDesck);