// ========== REPLACE FROM LINE 447 TO END OF FILE ==========

// Touch variables
let startX = 0;
let startY = 0;
let isThrottled = false;
let isDragging = false;
let rafId = null;
let lastX = 0;
let velocity = 0;
let lastTime = 0;
let animationId = null;

// Card selection variables
let selectedCard = null;
let touchStartTime = 0;
let touchStartX = 0;
let touchStartY = 0;
const MAX_TOUCH_TIME = 300;
const MAX_TOUCH_MOVE = 10;

// Function to select a card
function selectCard(card) {
  if (selectedCard) {
    selectedCard.classList.remove('selected');
  }
  card.classList.add('selected');
  selectedCard = card;
}

// Add touch events to each card
document.querySelectorAll('.card').forEach(card => {
  let cardTouchStart = { time: 0, x: 0, y: 0 };
  
  card.addEventListener('touchstart', (e) => {
    e.stopPropagation();
    const touch = e.touches[0];
    cardTouchStart.time = Date.now();
    cardTouchStart.x = touch.clientX;
    cardTouchStart.y = touch.clientY;
  }, { passive: true });
  
  card.addEventListener('touchend', (e) => {
    e.stopPropagation();
    const touch = e.changedTouches[0];
    const touchDuration = Date.now() - cardTouchStart.time;
    const moveX = Math.abs(touch.clientX - cardTouchStart.x);
    const moveY = Math.abs(touch.clientY - cardTouchStart.y);
    
    if (touchDuration < MAX_TOUCH_TIME && 
        moveX < MAX_TOUCH_MOVE && 
        moveY < MAX_TOUCH_MOVE) {
      selectCard(card);
    }
  }, { passive: true });
  
  card.addEventListener('click', (e) => {
    e.stopPropagation();
    selectCard(card);
  });
});

// Carousel touch handlers
function handleTouchStart(e) {
  const touch = e.touches[0];
  touchStartTime = Date.now();
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
  
  if (e.target.closest('.card')) {
    return;
  }
  
  startCarouselDrag(touch);
}

function startCarouselDrag(touch) {
  isDragging = true;
  startX = touch.clientX;
  startY = touch.clientY;
  
  lastX = startX;
  lastTime = Date.now();
  velocity = 0;

  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  el.style.animationPlayState = 'paused';
}

function handleTouchMove(e) {
  if (isThrottled) return;
  
  const currentX = e.touches[0].clientX;
  const currentTime = Date.now();
  const deltaTime = currentTime - lastTime;

  if (!isDragging) {
    const moveX = Math.abs(currentX - touchStartX);
    const moveY = Math.abs(e.touches[0].clientY - touchStartY);
    
    if (moveX > MAX_TOUCH_MOVE || moveY > MAX_TOUCH_MOVE) {
      startCarouselDrag(e.touches[0]);
    } else {
      return;
    }
  }
  
  if (deltaTime > 0) {
    velocity = (currentX - lastX) / deltaTime;
  }

  lastX = currentX;
  lastTime = currentTime;

  const diffX = Math.abs(currentX - startX);
  const diffY = Math.abs(e.touches[0].clientY - startY);

  if (diffX > diffY) {
    e.preventDefault();

    const deltaX = currentX - startX;
    startX = currentX;

    progress += -deltaX * 0.001;
    if (progress > 1) progress -= 1;
    if (progress < 0) progress += 1;
    
    if (rafId) cancelAnimationFrame(rafId);
    
    rafId = requestAnimationFrame(() => {
      el.style.animationDelay = `-${progress * 60}s`;
    });
  }

  isThrottled = true;
  setTimeout(() => { isThrottled = false; }, 16);
}

function applyInertia() {
  const friction = 0.95;
  const minVelocity = 0.01;

  function animate() {
    if (Math.abs(velocity) < minVelocity) {
      el.style.animationPlayState = 'running';
      return;
    }
    
    progress += -velocity * 0.05;
    if (progress > 1) progress -= 1;
    if (progress < 0) progress += 1;
    el.style.animationDelay = `-${progress * 60}s`;
    
    velocity *= friction;
    animationId = requestAnimationFrame(animate);
  }
  
  animationId = requestAnimationFrame(animate);
}

el.addEventListener('touchstart', handleTouchStart, { passive: false });
el.addEventListener('touchmove', handleTouchMove, { passive: false });
el.addEventListener('touchend', () => {
  isDragging = false;
  
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  
  if (Math.abs(velocity) > 0.1) {
    applyInertia();
  } else {
    el.style.animationPlayState = 'running';
  }
});

// Keep existing mouse/wheel events
el.addEventListener('mouseenter', () => {
  el.style.animationPlayState = 'paused';
});

el.addEventListener('mouseleave', () => {
  el.style.animationPlayState = 'running';
});

el.addEventListener('wheel', e => {
  if (el.style.animationPlayState === 'paused') {
    e.preventDefault();
    progress += e.deltaY * 0.0001;
    if (progress > 1) progress -= 1;
    if (progress < 0) progress += 1;
    el.style.animationDelay = `-${progress * 60}s`;
  }
});

// ========== END OF REPLACEMENT ==========
