const speakers = [
  {
    name: 'NoKapt',
    profession: 'Twitch, Youtube',
    img: 'https://yt3.googleusercontent.com/ytc/AGIKgqMpmTZPBtcJN1FuHhynd2v8hzOOnJM5wzEA5ZBzGA=s176-c-k-c0x00ffffff-no-rj',
    description:
      'NoKapt is a French YouTuber who covers news on RPGs, PC, and mobile games, including Genshin Impact and Epic Seven. They accept promotion offers through email.',
  },
  {
    name: 'Wallenstein Ch',
    profession: 'Youtube',
    img: 'https://yt3.googleusercontent.com/mtogNgD6EztFGu5KGS3PTmDPoKoku5DKpEe3OsasMPm9MluOJywna5wGeqi-3voywNfH57w29u0=s176-c-k-c0x00ffffff-no-rj',
    description:
      'Wallenstein is a content creator who posts daily videos about Genshin Impact and potentially other games. He also has a Discord server and shared details about his PC specifications.',
  },
  {
    name: 'IWTL Gaming',
    profession: 'Youtube',
    img: 'https://yt3.googleusercontent.com/ytc/AGIKgqNSVYvG8Vr6D5X6DyQ5MqoKatfpEbqCwbjlrZUlqQ=s176-c-k-c0x00ffffff-no-rj',
    description:
      'IWinToLooseGaming is a dedicated gamer who creates analysis, showcase, and other videos for the games they play, with a focus on Genshin Impact.',
  },
  {
    name: 'Zy0x',
    profession: 'Twitch, Youtube',
    img: 'https://yt3.googleusercontent.com/ytc/AGIKgqNXdscpVWVa62PX3KTUN7CKdiQDQKczxlwJg-YDCg=s176-c-k-c0x00ffffff-no-rj',
    description:
      'Zy0x has 649K subscribers on YouTube and has created 235 videos. Additionally, links to their Twitter and Twitch accounts are available.',
  },
  {
    name: 'Dish',
    profession: 'Twitch, Youtube, Instagram',
    img: 'https://yt3.googleusercontent.com/ytc/AGIKgqNL353B2-5Rk6DvHTaQQbj5yIMjg8kks9pFAzjYTA=s176-c-k-c0x00ffffff-no-rj',
    description:
      'Dish is a content creator with 777K subscribers on YouTube, who has posted 321 videos so far. Dish has provided links to their Twitch, Twitter, Instagram, Email, Discord, and TikTok accounts.',
  },
  {
    name: 'Gacha Gamer',
    profession: 'Youtube, Own website',
    img: 'https://yt3.googleusercontent.com/ytc/AGIKgqPWDdC-925sSfPwi4L9iJ6Mmc359DeItDqLSqXC=s176-c-k-c0x00ffffff-no-rj',
    description:
      'Gacha Gamer provides tier lists, guides, reviews, and news for gacha games, with a focus on collectible style games. They also cover MMORPG and other mobile game titles, and offer the latest news on gacha games on their website.',
  },
];

let speakersLoaded = [];

const hamburgerMenu = document.querySelector('#hamburger');
const menuContainer = document.querySelector('#menu');
const speakersContainer = document.querySelector('#speakers');

const isOnMobile = () => window.screen.width < 768;

const hideMenu = () => {
  menuContainer.style.visibility = 'hidden';
};

const showMenu = () => {
  menuContainer.style.visibility = 'visible';
};

const createSpeaker = (speaker) => {
  const speakerElement = document.createElement('div');
  speakerElement.className = 'speaker-item';

  const imgElement = document.createElement('div');
  imgElement.className = 'img';

  const imgBackground = document.createElement('span');
  imgBackground.className = 'img-background';

  const img = document.createElement('img');
  img.src = speaker.img;

  imgElement.appendChild(imgBackground);
  imgElement.appendChild(img);

  speakerElement.appendChild(imgElement);

  const infoElement = document.createElement('div');
  infoElement.className = 'info';

  const h3 = document.createElement('h3');
  h3.innerHTML = speaker.name;

  const profession = document.createElement('p');
  profession.className = 'profession';
  profession.innerHTML = speaker.profession;

  const hr = document.createElement('hr');
  hr.className = 'info-separator';

  const description = document.createElement('p');
  description.className = 'description';
  description.innerHTML = speaker.description;

  infoElement.appendChild(h3);
  infoElement.appendChild(profession);
  infoElement.appendChild(hr);
  infoElement.appendChild(description);

  speakerElement.appendChild(infoElement);

  return speakerElement;
};

const refreshSpeakers = () => {
  for (let i = 0; i < speakersLoaded.length; i += 1) {
    speakersContainer.removeChild(speakersLoaded[i]);
  }
  speakersLoaded = [];
};

const loadSpeakers = () => {
  for (let i = 0; i < (isOnMobile() ? 2 : speakers.length); i += 1) {
    const speakerElement = createSpeaker(speakers[i]);
    speakersLoaded.push(speakerElement);
    speakersContainer.appendChild(speakerElement);
  }

  const button = document.createElement('button');
  button.className = 'btn-outlined';
  button.innerHTML = 'MORE';
  button.addEventListener('click', () => {
    refreshSpeakers();
    for (let i = 0; i < speakers.length; i += 1) {
      const speakerElement = createSpeaker(speakers[i]);
      speakersLoaded.push(speakerElement);
      speakersContainer.appendChild(speakerElement);
    }
  });

  const i = document.createElement('i');
  i.className = 'fa-solid fa-chevron-down';

  button.appendChild(i);
  speakersLoaded.push(button);
  speakersContainer.appendChild(button);
};

window.addEventListener('resize', () => {
  if (isOnMobile()) {
    hideMenu();
  } else {
    showMenu();
  }

  refreshSpeakers();
  loadSpeakers();
});

window.addEventListener('DOMContentLoaded', () => {
  if (isOnMobile()) {
    hideMenu();
  } else {
    showMenu();
  }

  loadSpeakers();
});

hamburgerMenu.addEventListener('click', () => {
  showMenu();
});

const xmark = document.querySelector('#xmark');

xmark.addEventListener('click', () => {
  hideMenu();
});

const menuItems = document.querySelectorAll('.menu-item');

for (let i = 0; i < menuItems.length; i += 1) {
  const menuItem = menuItems[i];
  menuItem.addEventListener('click', () => {
    hideMenu();
  });
}
