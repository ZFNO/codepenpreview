const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});


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
  text.textContent = `FEATURE ${i + 1}`; // change as needed

  card.appendChild(img);
  card.appendChild(text);

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
//-------------bounding box----------------------
//-------------Typewriter----------------------
const headlines = [
  "One AI. Infinite Profiles. All Systems Go.",
  "Deploy a dev agent in seconds.",
  "Render → Write → Ship with cli clarity."
];

const cardtext = [
	"create a new "
	
];

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




window.onload = () => {
  // For single intro element
  const intro = document.getElementById('typewriter_intro');
  if (intro) animateTypewriter(intro, headlines);

  // For all card-text elements
  const cards = document.querySelectorAll('.card-text');
  cards.forEach(card => {
    animateTypewriter(card, headlines);
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