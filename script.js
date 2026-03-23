
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

/*
const DATA = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemp6djl1M3htdHdicjhnZmhraWVtbjR1M3U1ODU5ZnU0M2FkbWZ5OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LPlmexh8SLjO9OwPxP/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b3E4dXJ1ajQ3cnF1eTYyd3pxenJucDF2dnlnenJhd2JicmlldnZhaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HADJFxlJv4AF2rUAB6/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NDlnc20xdHN3OGh4a2poZnIzN25ydTR4aGxmaDZ2dHEyZHBrYzRmciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8L1j9qBR3uUlG/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dXh1Z3k0MXh6djdlc242NDRvZ28wc2VsY3l1cDdmang4dTByeXZ3ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Pir43hEPSUgBR7CSVD/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OGtrZHI1ZXVyaGtzZ3RxZTE1azdzaXJ6NHQ2eTFleXBubGY3a3owNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XcYLEpqpebmoWjUbEe/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bnJnY2FvY2U4bG1icW9jam5jdmQycDVzYmJhendnbXM5NHY5a2ZnaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0EximfiVGoId7VFm/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c2Q0dXNkMWRsOHJpZDEyM2RpNTEybzE4cDFndW5iOGcwMm9xZmR6cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9eomukGUKIMLTcxXnO/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZkcjN2NHlub3l2NHlsanZlNzBxOTlieWN4Ymd2NXo4bWV0ZmhiYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/joP5uM0DWcREs/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZkcjN2NHlub3l2NHlsanZlNzBxOTlieWN4Ymd2NXo4bWV0ZmhiYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hnO7HE86HcSiY/giphy.gif",
	
"https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NTdhYWU2YnR6bmd1ajZ4cmR4ZXdrb2Y0bW11MTRweG9pdWNkbDZ2ZiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/ejxrYMPC9EoAWxJ6A4/giphy.gif",

"https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bGNjbzZqNmcyMzA4NGl4a2w1ZGh2ODdrNTRlcjUxdmExa3kzYnoyayZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/c6O1ZXP9vBfgzxfX5q/giphy.gif",

"https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bGNjbzZqNmcyMzA4NGl4a2w1ZGh2ODdrNTRlcjUxdmExa3kzYnoyayZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/I7uWdHANWHEiZkx9vt/giphy.gif"
];

const N = DATA.length;
const container = document.querySelector('.a3d');
container.style.setProperty('--n', N);

for (let i = 0; i < N; i++) {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.setProperty('--i', i);

  const img = document.createElement('img');
  img.src = DATA[i];
  img.alt = 'gif image';

  const text = document.createElement('div');
  text.className = 'card-text';
  text.id = `card${i + 1}`;
  text.textContent = `FEATURE ${i + 1}`;


  card.appendChild(img);
  card.appendChild(text);

  // Create reflection div
  const reflection = document.createElement('div');
  reflection.className = 'reflection card';

  const reflectionImg = document.createElement('img');
  reflectionImg.src = DATA[i];
  reflectionImg.alt = 'gif reflection';

  reflection.appendChild(reflectionImg);
  card.appendChild(reflection);

  container.appendChild(card);
}

*/


const DATA = [
  'placeholders/gif0.webm',
  'placeholders/gif1.webm',
  'placeholders/gif2.webm',
  'placeholders/gif3.webm',
  'placeholders/gif4.webm',
  'placeholders/gif5.webm',
  'placeholders/gif6.webm',
  'placeholders/gif7.webm',
  'placeholders/gif8.webm',
  'placeholders/gif9.webm',
  'placeholders/gif10.webm',
  'placeholders/gif11.webm'
];

const N = DATA.length;
const container = document.querySelector('.a3d');
container.style.setProperty('--n', N);

for (let i = 0; i < N; i++) {
  const card = document.createElement('div');
  card.className = 'card';           // same class
  card.style.setProperty('--i', i); // same inline style

  const video = document.createElement('video');
  video.src = DATA[i];
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.controls = false;
  video.disablePictureInPicture = true;
  video.controlsList = "nodownload nofullscreen noremoteplayback";

  const text = document.createElement('div');
  text.className = 'card-text';      // same class
  text.id = `card${i + 1}`;
  text.textContent = `FEATURE ${i + 1}`;

  card.appendChild(video);
  card.appendChild(text);

  // reflection as in your original code
  const reflection = document.createElement('div');
  reflection.className = 'reflection card';

  const reflectionVideo = document.createElement('video');
  reflectionVideo.src = DATA[i];
  reflectionVideo.autoplay = true;
  reflectionVideo.loop = true;
  reflectionVideo.muted = true;
  reflectionVideo.playsInline = true;
  reflectionVideo.controls = false;
  reflectionVideo.disablePictureInPicture = true;
  reflectionVideo.controlsList = "nodownload nofullscreen noremoteplayback";

  reflection.appendChild(reflectionVideo);
  card.appendChild(reflection);

  container.appendChild(card);
}



/*links  
const DATA = [
    '1540968221243-29f5d70540bf',
    '1596135187959-562c650d98bc',
    '1628944682084-831f35256163',
    '1590013330451-3946e83e0392',
    '1590421959604-741d0eec0a2e',
    '1572613000712-eadc57acbecd',
    '1570097192570-4b49a6736f9f',
    '1620789550663-2b10e0080354',
    '1617775623669-20bff4ffaa5c',
    '1548600916-dc8492f8e845',
    '1573824969595-a76d4365a2e6',
    '1633936929709-59991b5fdd72'
  ];

  const N = DATA.length;
  const container = document.querySelector('.a3d');
  container.style.setProperty('--n', N);

  for (let i = 0; i < N; i++) {
    const img = document.createElement('img');
    img.className = 'card';
    img.src = `https://images.unsplash.com/photo-${DATA[i]}?w=280`;
    img.alt = 'jellifish';
    img.style.setProperty('--i', i);
    container.appendChild(img);
  }
*/


//------toggle root values-------
const root = document.documentElement;

let defaultValues = {
  '--background': '#780116',
  '--main-h1': '#F7b538',
  '--faint-blink': '#ff4444',
  '--main-h2': '#ff4444',
  '--main-h3': '#000000',
  '--nav-logo': '#F7b538',
  '--nav-items': '#ff4444',
  '--nav-items-hover': '#C32f27',
  '--nav-hamburger': '#ff4444',
  '--card-text': '#F7b538',
};

const activeValues  = {
  '--background': '#780116',
  '--main-h1': '#F7b538',
  '--faint-blink': '#ff4444',
  '--main-h2': '#ff4444',
  '--main-h3': '#000000',
  '--nav-logo': '#F7b538',
  '--nav-items': '#ff4444',
  '--nav-items-hover': '#C32f27',
  '--nav-hamburger': '#ff4444',
  '--card-text': '#F7b538',
};

// Create form inputs dynamically
const form = document.getElementById('colorForm');
for (const [varName, color] of Object.entries(activeValues)) {
  const label = document.createElement('label');
  label.textContent = varName + ': ';
  label.style.display = 'block';

  const input = document.createElement('input');
  input.type = 'color';
  input.value = color;
  input.dataset.var = varName;

  input.addEventListener('input', e => {
    root.style.setProperty(e.target.dataset.var, e.target.value);
  });

  label.appendChild(input);
  form.appendChild(label);
}

// Show/hide menu
document.getElementById('editColorsBtn').addEventListener('click', () => {
  const menu = document.getElementById('colorMenu');
  if (menu.style.display === 'none' || !menu.style.display) {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});

document.getElementById('closeMenu').addEventListener('click', () => 
	{
  document.getElementById('colorMenu').style.display = 'none';
	});




let active = false;

function applyColors(colors) {
  for (const [key, value] of Object.entries(colors)) {
    root.style.setProperty(key, value);
  }
}

document.getElementById('toggleBtn').addEventListener('click', () => {
  if (active) {
    applyColors(defaultValues);
  } else {
    applyColors(activeValues);
  }
  active = !active;
});
//------toggle root values-------



//-------------bounding box----------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
});



document.querySelectorAll('.bounding-box').forEach(el => {
  observer.observe(el);
});

const cards = document.querySelectorAll('.card');
const box = document.querySelector('.bounding-box');

function isIntersecting(card, box) {
  const cardRect = card.getBoundingClientRect();
  const boxRect = box.getBoundingClientRect();
  return !(
    cardRect.right < boxRect.left ||
    cardRect.left > boxRect.right ||
    cardRect.bottom < boxRect.top ||
    cardRect.top > boxRect.bottom
  );
}

function checkIntersect() {
  cards.forEach(card => {
    if (isIntersecting(card, box)) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

function animate() {
  checkIntersect();
  requestAnimationFrame(animate);
}

animate();




/*
const carousel = document.querySelector('.a3d'); // your rotating carousel element
let scrollSpeed = 0.001; // tune speed

window.addEventListener('mousemove', e => {
  const rect = box.getBoundingClientRect();
  if (e.clientX < rect.left) {
    // outside left
    scrollCarousel(-scrollSpeed);
  } else if (e.clientX > rect.right) {
    // outside right
    scrollCarousel(scrollSpeed);
  }
});

function scrollCarousel(delta) {
  // Use same progress variable as your animation
  progress += delta;
  if (progress > 1) progress -= 1;
  if (progress < 0) progress += 1;
  carousel.style.animationDelay = `-${progress * 60}s`;
}

*/


//-------------bounding box----------------------
//-------------Typewriter----------------------
const headlines = [
  "One AI. Infinite Profiles. All Systems Go.",
  "Deploy a dev agent in seconds.",
  "Start a project → Run your team _ Alone.",
	"Power at your fingertips. What will you do?"
];


const cardtext = {
  card1: ['300+ commands; comlpete commandline freedom', 'streamlined workflows'],
  card2: ['automated documentat usage and organization','automate document editing with their own custom histories' ],
  card3: ['value3a', 'value3b'],
  card4: ['value4a', 'value4b'],
  card5: ['value5a', 'value5b'],
  card6: ['value6a', 'value6b'],
  card7: ['value7a', 'value7b'],
  card8: ['value8a', 'value8b'],
  card9: ['add, edit, delete frequently used prompts as shortcuts', 'very powerful alias manager to avoid typing the same or similar prompts everytime'],
  card10: ['seamlessly switch between models and personas', 'global and local modes for extra personalized experiences'],
  card11: ['Multiple entry point text editing','send from another source and the proper agent receives it'],
  card12: ['very powerful document editing with their own custom histories ', 'edit documents with your small team that gets autogenerated to complete the task']
};



function animateTypewriter(element, texts, textIndex = 0, charIndex = 0) {
  if (charIndex < texts[textIndex].length) {
    element.textContent = texts[textIndex].substring(0, charIndex + 1);
    setTimeout(() => {
      animateTypewriter(element, texts, textIndex, charIndex + 1);
    }, 60);
  } else {
    setTimeout(() => {
      const nextIndex = (textIndex + 1) % texts.length;
      animateTypewriter(element, texts, nextIndex, 0);
    }, 3000);
  }
}


const el = document.querySelector('.a3d');
let progress = 0;  // from 0 to 1



el.addEventListener('mouseenter', () => {
  el.style.animationPlayState = 'paused';
});

el.addEventListener('mouseleave', () => {
  el.style.animationPlayState = 'running';
});

el.addEventListener('wheel', e => {
  if (el.style.animationPlayState === 'paused') {
    e.preventDefault();
    // update progress by wheel delta
    progress += e.deltaY * 0.0001;
    if (progress > 1) {
      progress -= 1;
    } else if (progress < 0) {
      progress += 1;
    }
    el.style.animationDelay = `-${progress * 60}s`;
  }
});
let startX = 0;
let startY = 0;
let isThrottled = false;

el.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

el.addEventListener('touchmove', e => {
  if (isThrottled) return;

  if (el.style.animationPlayState === 'paused') {
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = Math.abs(currentX - startX);
    const diffY = Math.abs(currentY - startY);

    if (diffX > diffY) {
      // Horizontal drag - prevent vertical scroll
      e.preventDefault();

      const deltaX = currentX - startX;
      startX = currentX;

      progress += -deltaX * 0.001;
      if (progress > 1) {
        progress -= 1;
      } else if (progress < 0) {
        progress += 1;
      }
      el.style.animationDelay = `-${progress * 60}s`;
    } else {
      // Vertical drag - don't preventDefault, allow scroll
    }
  }

  isThrottled = true;
  setTimeout(() => {
    isThrottled = false;
  }, 16); // throttle delay ~60fps
});


el.addEventListener('touchstart', () => {
  el.style.animationPlayState = 'paused';
});

el.addEventListener('touchend', () => {
  el.style.animationPlayState = 'running';
});





window.onload = () => {
  // For single intro element
  const intro = document.getElementById('typewriter_intro');
  if (intro) animateTypewriter(intro, headlines);

  // For all card-text elements
  const cardsText = document.querySelectorAll('.card-text');
  cardsText.forEach((card, index) => {
    const key = 'card' + (index + 1);
    const texts = cardtext[key];
    if (texts) {
      animateTypewriter(card, texts);
    }
  });

  // Prevent context menu on cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('contextmenu', e => e.preventDefault());
    card.addEventListener('touchstart', e => e.preventDefault(), { passive: false });
    card.addEventListener('mousedown', e => e.preventDefault());
  });
};





/* 
// Typewriter for intro
let hIndex1 = 0;
let charIndex1 = 0;
function typeEffect() {
  const element = document.getElementById("typewriter_intro");
  const text = headlines[hIndex1];
  if (charIndex1 < text.length) {
    element.textContent = text.substring(0, charIndex1 + 1);
    charIndex1++;
    setTimeout(typeEffect, 60);
  } else {
    setTimeout(() => {
      charIndex1 = 0;
      hIndex1 = (hIndex1 + 1) % headlines.length;
      typeEffect();
    }, 3000);
  }
}

// Typewriter for card-text (multiple elements)
let hIndex2 = 0;
let charIndex2 = 0;
function cardtypeEffect() {
  const element = document.querySelector(".card-text"); // first one only
  const text = headlines[hIndex2];
  if (!element) return; // guard
  if (charIndex2 < text.length) {
    element.textContent = text.substring(0, charIndex2 + 1);
    charIndex2++;
    setTimeout(cardtypeEffect, 60); // call itself
  } else {
    setTimeout(() => {
      charIndex2 = 0;
      hIndex2 = (hIndex2 + 1) % headlines.length;
      cardtypeEffect();
    }, 3000);
  }
}

window.onload = () => {
  typeEffect();
  cardtypeEffect();
};
*/
//-------------typewriter----------------------
