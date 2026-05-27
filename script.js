/* =============================================
   ZOVA ECOMMERCE — SCRIPT.JS
   ============================================= */

'use strict';

// ── DATA ────────────────────────────────────────

const PRODUCTS = [
  { id: 1,  brand: 'Sony',      name: 'WH-1000XM5 Noise Cancelling Headphones',      category: 'electronics', price: 24999,  original: 34999,  rating: 4.8, reviews: 12430, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80&auto=format', badges: ['top'],         flash: true  },
  { id: 2,  brand: 'Samsung',   name: 'Galaxy S24 Ultra 5G Smartphone 256GB',        category: 'electronics', price: 89999,  original: 109999, rating: 4.7, reviews: 8921,  img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80&auto=format', badges: ['new'],         flash: false },
  { id: 3,  brand: 'Apple',     name: 'iPad Pro 12.9" M4 Wi-Fi 256GB',               category: 'electronics', price: 99999,  original: 112999, rating: 4.9, reviews: 5423,  img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80&auto=format', badges: ['top'],         flash: false },
  { id: 4,  brand: 'Nike',      name: 'Air Max 270 React Running Shoes',             category: 'fashion',     price: 8999,   original: 12999,  rating: 4.5, reviews: 6720,  img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80&auto=format', badges: ['discount'],    flash: true  },
  { id: 5,  brand: 'Levi\'s',   name: '511 Slim Fit Stretch Jeans Midnight Navy',    category: 'fashion',     price: 2499,   original: 4499,   rating: 4.3, reviews: 18290, img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80&auto=format', badges: ['discount'],    flash: false },
  { id: 6,  brand: 'Zara',      name: 'Premium Linen Blend Oversized Shirt',         category: 'fashion',     price: 1999,   original: 3599,   rating: 4.4, reviews: 4210,  img: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&q=80&auto=format', badges: ['new'],         flash: false },
  { id: 7,  brand: 'Dyson',     name: 'Airwrap Multi-Styler Complete Long',          category: 'beauty',      price: 44900,  original: 54900,  rating: 4.7, reviews: 3820,  img: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&q=80&auto=format', badges: ['top'],         flash: true  },
  { id: 8,  brand: 'Estée Lauder', name: 'Advanced Night Repair Serum 50ml',         category: 'beauty',      price: 6200,   original: 7800,   rating: 4.8, reviews: 9100,  img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80&auto=format', badges: ['flash'],       flash: true  },
  { id: 9,  brand: 'The Ordinary', name: 'Hyaluronic Acid 2% + B5 Hydrating Serum', category: 'beauty',      price: 990,    original: 1490,   rating: 4.6, reviews: 22100, img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80&auto=format', badges: ['discount'],    flash: false },
  { id: 10, brand: 'IKEA',      name: 'KALLAX Shelf Unit 4×4 White 147×147cm',      category: 'home',        price: 9999,   original: 13999,  rating: 4.4, reviews: 7600,  img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80&auto=format', badges: ['discount'],    flash: false },
  { id: 11, brand: 'Philips',   name: 'Hue Gradient Lightstrip 2m Smart LED',       category: 'home',        price: 5499,   original: 7499,   rating: 4.5, reviews: 3200,  img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&auto=format', badges: ['new'],         flash: true  },
  { id: 12, brand: 'Bose',      name: 'QuietComfort 45 Wireless Headphones',        category: 'electronics', price: 19999,  original: 29900,  rating: 4.6, reviews: 9845,  img: 'https://images.unsplash.com/photo-1546435770-a3e736f6e5b4?w=500&q=80&auto=format', badges: ['discount'],    flash: true  },
  { id: 13, brand: 'H&M',       name: 'Relaxed Fit Cotton Hooded Sweatshirt',       category: 'fashion',     price: 1299,   original: 2199,   rating: 4.2, reviews: 11200, img: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80&auto=format', badges: [],              flash: false },
  { id: 14, brand: 'Nykaa',     name: 'Skin Rx Vitamin C Brightening Face Serum',   category: 'beauty',      price: 699,    original: 999,    rating: 4.3, reviews: 31000, img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80&auto=format', badges: ['flash'],       flash: true  },
  { id: 15, brand: 'LG',        name: 'OLED C3 55" 4K Smart TV with AI ThinQ',      category: 'electronics', price: 129999, original: 159999, rating: 4.9, reviews: 2100,  img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80&auto=format', badges: ['top'],         flash: false },
  { id: 16, brand: 'Puma',      name: 'RS-X³ Puzzle Chunky Sneakers',               category: 'fashion',     price: 6999,   original: 9999,   rating: 4.4, reviews: 5400,  img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80&auto=format', badges: ['new'],         flash: false },
];

// ── STATE ────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('zova_cart') || '[]');
let activeFilter = 'all';
let activeSort = 'default';
let searchQuery = '';

// ── UTILS ────────────────────────────────────────
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

function getDiscount(orig, price) {
  return Math.round((1 - price / orig) * 100);
}

function renderStars(r) {
  const full = Math.floor(r);
  const half = r % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function saveCart() {
  localStorage.setItem('zova_cart', JSON.stringify(cart));
}

// ── TOAST ────────────────────────────────────────
function showToast(msg, type = 'success', icon = '✅') {
  const icons = { success: '✅', error: '❌', info: '🛍️' };
  const container = $('#toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || icon}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}

// ── CART ─────────────────────────────────────────
function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const countEl = $('#cart-count');
  countEl.textContent = total;
  countEl.classList.toggle('visible', total > 0);
  countEl.classList.add('pop');
  setTimeout(() => countEl.classList.remove('pop'), 300);

  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);
  $('#cart-total').textContent = formatPrice(totalPrice);

  renderCartItems();
  saveCart();
}

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  showToast(`<strong>${product.name.slice(0, 28)}…</strong> added to cart`, 'success');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else updateCartUI();
}

function renderCartItems() {
  const container = $('#cart-items');
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Your cart is empty.<br/>Start shopping!</p>
      </div>`;
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" loading="lazy"/>
      <div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" data-action="dec" data-id="${item.id}">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
        </div>
      </div>
      <button class="cart-remove" data-remove="${item.id}" aria-label="Remove">✕</button>
    </div>`).join('');

  container.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = +e.currentTarget.dataset.id;
      const action = e.currentTarget.dataset.action;
      changeQty(id, action === 'inc' ? 1 : -1);
    });
  });
  container.querySelectorAll('.cart-remove').forEach(btn => {
    btn.addEventListener('click', e => removeFromCart(+e.currentTarget.dataset.remove));
  });
}

// Cart drawer
function openCart() {
  $('#cart-drawer').classList.add('open');
  $('#cart-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  $('#cart-drawer').classList.remove('open');
  $('#cart-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

$('#cart-btn').addEventListener('click', openCart);
$('#cart-close').addEventListener('click', closeCart);
$('#cart-overlay').addEventListener('click', closeCart);

// ── PRODUCT CARD ─────────────────────────────────
function createCard(product, isFlash = false) {
  const disc = getDiscount(product.original, product.price);
  const badgesHTML = [
    product.badges.includes('discount') ? `<span class="badge badge-discount">-${disc}%</span>` : '',
    product.badges.includes('flash')    ? `<span class="badge badge-flash">⚡ Flash</span>` : '',
    product.badges.includes('new')      ? `<span class="badge badge-new">New</span>` : '',
    product.badges.includes('top')      ? `<span class="badge badge-top">Top Rated</span>` : '',
    (disc >= 20 && !product.badges.includes('discount')) ? `<span class="badge badge-discount">-${disc}%</span>` : '',
  ].filter(Boolean).slice(0, 2).join('');

  const card = document.createElement('div');
  card.className = 'product-card reveal';
  card.dataset.id = product.id;
  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${product.img}" alt="${product.name}" loading="lazy"/>
      <div class="card-badges">${badgesHTML}</div>
      <button class="card-wishlist" data-id="${product.id}" aria-label="Wishlist">♡</button>
    </div>
    <div class="card-body">
      <div class="card-brand">${product.brand}</div>
      <div class="card-name">${product.name}</div>
      <div class="card-rating">
        <span class="stars">${renderStars(product.rating)}</span>
        <span class="rating-val">${product.rating}</span>
        <span class="rating-count">(${product.reviews.toLocaleString()})</span>
      </div>
      <div class="card-price">
        <span class="price-now">${formatPrice(product.price)}</span>
        <span class="price-orig">${formatPrice(product.original)}</span>
        <span class="price-save">${disc}% off</span>
      </div>
      <button class="btn-add-cart" data-id="${product.id}">Add to Cart</button>
    </div>`;

  card.querySelector('.btn-add-cart').addEventListener('click', e => {
    e.stopPropagation();
    addToCart(product);
  });

  const wishBtn = card.querySelector('.card-wishlist');
  wishBtn.addEventListener('click', e => {
    e.stopPropagation();
    wishBtn.classList.toggle('active');
    wishBtn.textContent = wishBtn.classList.contains('active') ? '♥' : '♡';
    showToast(
      wishBtn.classList.contains('active') ? 'Added to wishlist' : 'Removed from wishlist',
      'info'
    );
  });

  return card;
}

// ── RENDER PRODUCTS ──────────────────────────────
function getFilteredProducts() {
  let list = [...PRODUCTS];
  if (activeFilter !== 'all') list = list.filter(p => p.category === activeFilter);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }
  switch (activeSort) {
    case 'price-asc':  list.sort((a,b) => a.price - b.price); break;
    case 'price-desc': list.sort((a,b) => b.price - a.price); break;
    case 'rating':     list.sort((a,b) => b.rating - a.rating); break;
    case 'discount':   list.sort((a,b) => getDiscount(b.original,b.price) - getDiscount(a.original,a.price)); break;
  }
  return list;
}

function renderProducts() {
  const grid = $('#products-grid');
  const noResults = $('#no-results');
  const list = getFilteredProducts();

  grid.innerHTML = '';
  if (list.length === 0) {
    noResults.classList.remove('hidden');
  } else {
    noResults.classList.add('hidden');
    list.forEach((p, i) => {
      const card = createCard(p);
      card.style.transitionDelay = `${Math.min(i, 8) * 45}ms`;
      grid.appendChild(card);
    });
    observeReveal();
  }
}

function renderFlashSale() {
  const grid = $('#flash-grid');
  const flashProducts = PRODUCTS.filter(p => p.flash);
  flashProducts.forEach(p => {
    const card = createCard(p, true);
    grid.appendChild(card);
  });
  observeReveal();
}

// ── FILTERS ──────────────────────────────────────
function setFilter(filter) {
  activeFilter = filter;

  $$('.cat-pill').forEach(el => el.classList.toggle('active', el.dataset.filter === filter));
  $$('.nav-link').forEach(el => el.classList.toggle('active', el.dataset.filter === filter));
  $$('.mob-link').forEach(el => el.classList.toggle('active', el.dataset.filter === filter));

  renderProducts();
  $('#products-section').scrollIntoView({ behavior: 'smooth' });
}

$$('.cat-pill').forEach(btn => btn.addEventListener('click', () => setFilter(btn.dataset.filter)));
$$('.nav-link').forEach(link => link.addEventListener('click', e => {
  e.preventDefault();
  setFilter(link.dataset.filter);
}));
$$('.mob-link').forEach(link => link.addEventListener('click', e => {
  e.preventDefault();
  setFilter(link.dataset.filter);
  closeMobileMenu();
}));
$$('.hero-cta').forEach(btn => btn.addEventListener('click', () => setFilter(btn.dataset.filter)));

$('#sort-select').addEventListener('change', e => {
  activeSort = e.target.value;
  renderProducts();
});

// ── SEARCH ───────────────────────────────────────
let searchDebounce;
const searchInput = $('#search-input');
const searchDropdown = $('#search-dropdown');

searchInput.addEventListener('input', () => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    const q = searchInput.value.trim().toLowerCase();
    searchQuery = q;

    if (!q) {
      searchDropdown.classList.add('hidden');
      renderProducts();
      return;
    }

    const results = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q)
    ).slice(0, 5);

    if (results.length === 0) {
      searchDropdown.classList.add('hidden');
      renderProducts();
      return;
    }

    searchDropdown.classList.remove('hidden');
    searchDropdown.innerHTML = results.map(p => `
      <div class="search-result-item" data-id="${p.id}">
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        <div class="sr-info">
          <div class="sr-name">${p.name}</div>
          <div class="sr-price">${formatPrice(p.price)}</div>
        </div>
      </div>`).join('');

    searchDropdown.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const product = PRODUCTS.find(p => p.id === +item.dataset.id);
        if (product) addToCart(product);
        searchDropdown.classList.add('hidden');
        searchInput.value = '';
        searchQuery = '';
        renderProducts();
      });
    });
  }, 220);
});

$('#search-btn').addEventListener('click', () => {
  searchQuery = searchInput.value.trim().toLowerCase();
  searchDropdown.classList.add('hidden');
  renderProducts();
  $('#products-section').scrollIntoView({ behavior: 'smooth' });
});

searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    searchQuery = searchInput.value.trim().toLowerCase();
    searchDropdown.classList.add('hidden');
    renderProducts();
    $('#products-section').scrollIntoView({ behavior: 'smooth' });
  }
});

document.addEventListener('click', e => {
  if (!e.target.closest('#search-wrap')) {
    searchDropdown.classList.add('hidden');
  }
});

// ── HERO CAROUSEL ────────────────────────────────
let currentSlide = 0;
const totalSlides = 3;
const track = $('#hero-track');
const dots = $$('#hero-dots .dot');
let autoSlide;

function goToSlide(n) {
  currentSlide = (n + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

function startAutoSlide() {
  autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

$('#hero-next').addEventListener('click', () => { goToSlide(currentSlide + 1); resetAuto(); });
$('#hero-prev').addEventListener('click', () => { goToSlide(currentSlide - 1); resetAuto(); });
dots.forEach((d, i) => d.addEventListener('click', () => { goToSlide(i); resetAuto(); }));

function resetAuto() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// Touch swipe
let touchStartX = 0;
$('#hero').addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
$('#hero').addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) { goToSlide(dx < 0 ? currentSlide + 1 : currentSlide - 1); resetAuto(); }
});

startAutoSlide();

// ── COUNTDOWN TIMER ──────────────────────────────
function startTimer() {
  const end = new Date();
  end.setHours(end.getHours() + 5, end.getMinutes() + 30, 0, 0);

  function tick() {
    const diff = end - Date.now();
    if (diff <= 0) { clearInterval(interval); return; }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    $('#t-h').textContent = pad(h);
    $('#t-m').textContent = pad(m);
    $('#t-s').textContent = pad(s);
  }
  tick();
  const interval = setInterval(tick, 1000);
}

startTimer();

// ── NAVBAR SCROLL ────────────────────────────────
const navbar = $('#navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── HAMBURGER / MOBILE MENU ──────────────────────
const hamburger = $('#hamburger');
const mobileMenu = $('#mobile-menu');

function closeMobileMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// ── INTERSECTION OBSERVER (reveal) ──────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

function observeReveal() {
  $$('.reveal').forEach(el => revealObserver.observe(el));
}

// ── LOGIN BUTTON ─────────────────────────────────
$('.btn-login').addEventListener('click', () => {
  showToast('Login feature coming soon!', 'info');
});

$('.btn-checkout').addEventListener('click', () => {
  if (cart.length === 0) {
    showToast('Your cart is empty!', 'error');
    return;
  }
  showToast('🎉 Order placed successfully! (Demo mode)', 'success');
  cart = [];
  updateCartUI();
  closeCart();
});

// ── INIT ─────────────────────────────────────────
renderFlashSale();
renderProducts();
updateCartUI();
observeReveal();
