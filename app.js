const products = [
  { category: "LOOP Juice", brand: "LOOP", code: "815055", name: "Morning Glory", detail: "6 × 300 ml", image: "815055" },
  { category: "LOOP Juice", brand: "LOOP", code: "815056", name: "Better Together", detail: "6 × 300 ml", image: "815056" },
  { category: "LOOP Juice", brand: "LOOP", code: "815058", name: "Deep Green", detail: "6 × 300 ml", image: "815058" },
  { category: "LOOP Juice", brand: "LOOP", code: "815059", name: "Beach Bum", detail: "6 × 300 ml", image: "815059" },
  { category: "LOOP Juice", brand: "LOOP", code: "815060", name: "King of the Hill", detail: "6 × 300 ml", image: "815060" },
  { category: "LOOP Juice", brand: "LOOP", code: "815061", name: "Undercover", detail: "6 × 300 ml", image: "815061" },
  { category: "LOOP Juice", brand: "LOOP", code: "815062", name: "High Achiever", detail: "6 × 300 ml", image: "815062" },
  { category: "LOOP Juice", brand: "LOOP", code: "815063", name: "Cranberry", detail: "6 × 300 ml", image: "815063" },
  { category: "LOOP Juice", brand: "LOOP", code: "815064", name: "Clementine", detail: "6 × 300 ml", image: "815064" },
  { category: "LOOP Probiotic Soda", brand: "LOOP", code: "815026", name: "Orange Clementine", detail: "12 × 355 ml", image: "815026" },
  { category: "LOOP Probiotic Soda", brand: "LOOP", code: "815027", name: "Ginger Lemon", detail: "12 × 355 ml", image: "815027" },
  { category: "LOOP Probiotic Soda", brand: "LOOP", code: "815028", name: "Lemon Lime", detail: "12 × 355 ml", image: "815028" },
  { category: "LOOP Probiotic Soda", brand: "LOOP", code: "815029", name: "Blueberry", detail: "12 × 355 ml", image: "815029" },
  { category: "LOOP Iced Tea", brand: "LOOP", code: "815037", name: "Lemon Iced Tea", detail: "12 × 355 ml", image: "815037" },
  { category: "LOOP Iced Tea", brand: "LOOP", code: "815038", name: "Grapefruit Iced Tea", detail: "12 × 355 ml", image: "815038" },
  { category: "LOOP Iced Tea", brand: "LOOP", code: "815039", name: "Strawberry Iced Tea", detail: "12 × 355 ml", image: "815039" },
  { category: "LOOP Iced Tea", brand: "LOOP", code: "815041", name: "Peach Iced Tea", detail: "12 × 355 ml", image: "815041" },
  { category: "LOOP Shots", brand: "LOOP", code: "815014", name: "Recover Shot", detail: "12 × 60 ml", image: "815014" },
  { category: "LOOP Shots", brand: "LOOP", code: "815015", name: "Booster Shot", detail: "12 × 60 ml", image: "815015" },
  { category: "LOOP Shots", brand: "LOOP", code: "815016", name: "Brain Fuel Shot", detail: "12 × 60 ml", image: "815016" },
  { category: "LOOP Smoothies", brand: "LOOP", code: "815066", name: "Green vibes", detail: "6 × 300 ml", image: "815066" },
  { category: "LOOP Smoothies", brand: "LOOP", code: "815065", name: "Mango paradise", detail: "6 × 300 ml", image: "815065" },
  { category: "Milks", brand: "Milkadamia", code: "801034", name: "Lait de macadame", detail: "12 × 32 oz", image: "801034" },
  { category: "Milks", brand: "Earth’s Own", code: "801006", name: "Boisson de soya", detail: "case", image: "soy" },
  { category: "Milks", brand: "Henrietta", code: "820001", name: "Henrietta Lait barista 3,8%", detail: "9 × 2 L", image: "820001" },
  { category: "Mate Libre", brand: "Mate Libre", code: "827050", name: "Original", detail: "12 × 355 ml", image: "827050" },
  { category: "Mate Libre", brand: "Mate Libre", code: "827051", name: "Rose Hibiscus", detail: "12 × 355 ml", image: "827051" },
  { category: "Mate Libre", brand: "Mate Libre", code: "827052", name: "Passion", detail: "12 × 355 ml", image: "827052" },
  { category: "Mate Libre", brand: "Mate Libre", code: "827053", name: "Mint Lime", detail: "12 × 355 ml", image: "827053" },
  { category: "Mate Libre", brand: "Mate Libre", code: "827054", name: "Sugar-Free Ginger", detail: "12 × 355 ml", image: "827054" },
  { category: "Mate Libre", brand: "Mate Libre", code: "827056", name: "Peach", detail: "12 × 355 ml", image: "827056" },
  { category: "Heal Tea", brand: "Healtea", code: "866020", name: "Sparkling Ginger + Chamomile", detail: "12 × 355 ml", image: "866020" },
  { category: "Heal Tea", brand: "Healtea", code: "866021", name: "Sparkling Peppermint + Dandelion", detail: "12 × 355 ml", image: "866021" },
  { category: "Heal Tea", brand: "Healtea", code: "866022", name: "Sparkling Nettle + Rosemary", detail: "12 × 355 ml", image: "866022" },
  { category: "Heal Tea", brand: "Healtea", code: "866023", name: "Sparkling Hibiscus + Mango", detail: "12 × 355 ml", image: "866023" },
  { category: "Gutsy Kombucha", brand: "Gutsy", code: "827400", name: "Le Remontant (Raspberry Leaf)", detail: "8 × 355 ml", image: "827400" },
  { category: "Gutsy Kombucha", brand: "Gutsy", code: "827401", name: "Energy Boost (Cardamom & Rhodiola)", detail: "8 × 355 ml", image: "827401" },
  { category: "Gutsy Kombucha", brand: "Gutsy", code: "827402", name: "Digestif (Hibiscus & Fennel)", detail: "8 × 355 ml", image: "827402" },
  { category: "Gutsy Kombucha", brand: "Gutsy", code: "827403", name: "Relaxant 2.0 (Grapefruit, Verbena & Skullcap)", detail: "8 × 355 ml", image: "827403" },
  { category: "Gutsy Kombucha", brand: "Gutsy", code: "827404", name: "Le Flamboyant (Passion Fruit & Codonopsis)", detail: "8 × 355 ml", image: "827404" },
  { category: "Gutsy Kombucha", brand: "Gutsy", code: "827405", name: "Vitalité (Raspberry Mint & Astragalus)", detail: "8 × 355 ml", image: "827405" },
  { category: "Gutsy Kombucha", brand: "Gutsy", code: "827407", name: "Le Tonifiant (Sugar-Free Ginger)", detail: "8 × 355 ml", image: "827407" },
  { category: "Gutsy Kombucha", brand: "Gutsy", code: "827411", name: "Cream Soda (Vanilla & Lemon, Sugar-Free)", detail: "8 × 355 ml", image: "827411" },
  { category: "Onibi", brand: "Onibi", code: "867110", name: "Natural (Can)", detail: "10 × 355 ml", image: "867110" },
  { category: "Onibi", brand: "Onibi", code: "867111", name: "Sparkling Lime", detail: "10 × 355 ml", image: "867111" },
  { category: "Onibi", brand: "Onibi", code: "867112", name: "Sparkling Mango", detail: "10 × 355 ml", image: "867112" },
  { category: "Onibi", brand: "Onibi", code: "867113", name: "Sparkling Blood Orange", detail: "10 × 355 ml", image: "867113" },
  { category: "Onibi", brand: "Onibi", code: "867114", name: "Sparkling Dragon Fruit", detail: "10 × 355 ml", image: "867114" },
  { category: "Onibi", brand: "Onibi", code: "867115", name: "Sparkling Wild Berries", detail: "10 × 355 ml", image: "867115" },
  { category: "Onibi", brand: "Onibi", code: "867116", name: "Sparkling Natural", detail: "10 × 355 ml", image: "867116" },
  { category: "Onibi", brand: "Onibi", code: "867117", name: "Sparkling Blackberry", detail: "10 × 355 ml", image: "867117" },
  { category: "Onibi", brand: "Onibi", code: "867118", name: "Sparkling Blue Raspberry", detail: "10 × 355 ml", image: "867118" },
  { category: "Cafe Limo", brand: "Café Limo", code: "828011", name: "Cafélimo", detail: "24 × 355 ml", image: "828011" },
  { category: "Cafe Limo", brand: "Café Limo", code: "828020", name: "Cafélimo orange sanguine", detail: "24 × 355 ml", image: "828020" },
  { category: "Cafe Limo", brand: "Café Limo", code: "828021", name: "Cafélimo cerise", detail: "24 × 355 ml", image: "828021" },
  { category: "Chai", brand: "Say When", code: "801020", name: "Chai bio authentique", detail: "12 × 32 oz", image: "801020" },
];

const supplies = [
  { category: "Shed", name: "Knives", code: "supply-16", recipient: "boudreault", price: 80.85, image: "supply-16" },
  { category: "Shed", name: "Forks", code: "supply-15", recipient: "boudreault", price: 80.85, image: "supply-15" },
  { category: "Shed", name: "Spoons", code: "supply-17", recipient: "boudreault", price: 80.85, image: "supply-17" },
  { category: "Shed", name: "Coffee caraf", code: "supply-11", recipient: "boudreault", price: 169.87, image: "supply-11" },
  { category: "Shed", name: "8 Oz Hot Drink To Go Cups", code: "supply-0", recipient: "nantel", image: "supply-0" },
  { category: "Shed", name: "10 Oz Hot Drink To Go Cups", code: "supply-1", recipient: "nantel", image: "supply-1" },
  { category: "Shed", name: "12 Oz Hot Drink To Go Cups", code: "supply-2", recipient: "nantel", image: "supply-2" },
  { category: "Shed", name: "12 Oz Cold Drink To Go Cups", code: "supply-3", recipient: "nantel", image: "supply-3" },
  { category: "Shed", name: "16 Oz Cold Drink To Go Cups", code: "supply-4", recipient: "nantel", image: "supply-4" },
  { category: "Shed", name: "Hot Drink To Go Lids", code: "supply-5", recipient: "nantel", image: "supply-5" },
  { category: "Shed", name: "Cold Drink To Go Lids", code: "supply-6", recipient: "nantel", image: "supply-6" },
  { category: "Shed", name: "Straws", code: "supply-28", recipient: "olivia", image: "supply-28" },
  { category: "Shed", name: "Sleeves", code: "supply-8", recipient: "nantel", image: "supply-8" },
  { category: "Shed", name: "Sweetener", code: "supply-25", recipient: "boudreault", price: 47.59, image: "supply-25" },
  { category: "Shed", name: "Brown sugar", code: "supply-27", recipient: "olivia", image: "supply-27" },
  { category: "Shed", name: "Pampak # 1 sml togo", code: "supply-9", recipient: "boudreault", price: 52.24, image: "supply-9" },
  { category: "Shed", name: "Pampak #3 lrg togo", code: "supply-10", recipient: "boudreault", price: 51.91, image: "supply-10" },
  { category: "Shed", name: "Coffee Trays", code: "supply-34", recipient: "nantel", image: "supply-34" },
  { category: "Shed", name: "Handle bag large", code: "supply-38", recipient: "boudreault", image: "supply-38" },
  { category: "Shed", name: "Small to go bowl", detail: "500 / case · 16 oz · 115mm", code: "supply-35", recipient: "boudreault", price: 48.98, unit: "case", image: "supply-35" },
  { category: "Shed", name: "Large to go bowl", detail: "300 / case · 34 oz · 165mm", code: "supply-36", recipient: "boudreault", price: 47.48, unit: "case", image: "supply-36" },
  { category: "Shed", name: "250ml Deli Container", detail: "240 / case · 8 oz", code: "supply-31", recipient: "boudreault", price: 36.87, unit: "case", image: "supply-31" },
  { category: "Shed", name: "500ml Deli Container", detail: "240 / case · 16 oz", code: "supply-32", recipient: "boudreault", price: 41.64, unit: "case", image: "supply-32" },
  { category: "Shed", name: "1l Deli Container", detail: "300 / case · 32 oz", code: "supply-33", recipient: "boudreault", price: 57.66, unit: "case", image: "supply-33" },
  { category: "Closet", name: "Large pastry bags", code: "supply-12", recipient: "olivia", image: "supply-12" },
  { category: "Closet", name: "Small Greeseroof Sandwhich Bags", code: "supply-30", recipient: "boudreault", price: 31.96, image: "supply-30" },
  { category: "Bulk Head", name: "Vanilla 1883", code: "supply-7", recipient: "nantel", image: "supply-7" },
  { category: "Bulk Head", name: "Roll up papers", emailName: "White Napkin Bands", code: "supply-23", recipient: "boudreault", price: 23.68, image: "supply-23" },
  { category: "Bulk Head", name: "Large pastry box", detail: "50 / case · 15.5 × 11 × 4", code: "supply-37", recipient: "boudreault", price: 62.86, unit: "case", image: "supply-37" },
  { category: "Bulk Head", name: "Small window pastry boxes", code: "supply-29", recipient: "boudreault", price: 38.48, image: "supply-29" },
  { category: "Bathrooms", name: "Neutralizer (floor)", code: "supply-21", recipient: "boudreault", price: 21.34, image: "supply-21" },
  { category: "Bathrooms", name: "Sanitizer", code: "supply-20", recipient: "boudreault", price: 25.41, image: "supply-20" },
  { category: "Bathrooms", name: "Toilet paper", code: "supply-26", recipient: "olivia", image: "supply-26" },
  { category: "Bathrooms", name: "Hand towel", code: "supply-22", recipient: "boudreault", price: 41.20, image: "supply-22" },
].map(item => ({ ...item, brand: item.category, detail: item.detail || "no catalogue image", image: item.image || null, unit: item.unit || "box" }));

const milkAndSyrupCategories = new Set(["Milks", "Chai"]);
const catalogueProducts = products.map(item => ({
  ...item,
  category: milkAndSyrupCategories.has(item.category) ? "Milks + Syrups" : "Drinks",
  drinkGroup: milkAndSyrupCategories.has(item.category) ? "Milks + Syrups" : item.category,
  recipient: "nantel",
}));

const allItems = [...catalogueProducts, ...supplies];
const categories = [...new Set(allItems.map(item => item.category))];
const quantities = JSON.parse(localStorage.getItem("weekly-order-quantities") || "{}");
let activeCategory = "All products";
let searchTerm = "";
const drinkGroupState = {};
let activeDrinkGroup = "";
let drinkScrollTrackingBound = false;

const sectionsEl = document.querySelector("#product-sections");
const navEl = document.querySelector("#category-nav");
const resultsNoteEl = document.querySelector("#results-note");
const selectedListEl = document.querySelector("#selected-list");
const totalUnitsEl = document.querySelector("#total-units");
const boudreaultTotalEl = document.querySelector("#boudreault-total");
const boudreaultShippingNoteEl = document.querySelector("#boudreault-shipping-note");
const emailButtons = document.querySelectorAll("[data-copy-recipient]");
const BOUDREAULT_SHIPPING_THRESHOLD = 150;

function getQuantity(item) { return Math.max(0, Number.parseInt(quantities[item.code], 10) || 0); }
function formatCurrency(value) { return `$${value.toFixed(2)}`; }
function imageSrc(item) {
  if (!item.image) return "";
  const folder = item.code.startsWith("supply-") ? "supplies" : "products";
  return `public/assets/${folder}/${item.image}.png`;
}
function getRecipientItems(recipient) { return allItems.filter(item => item.recipient === recipient); }
function getRecipientTotal(recipient) {
  return getRecipientItems(recipient).reduce((sum, item) => sum + getQuantity(item) * (item.price || 0), 0);
}
function getBoudreaultShippingStatus() {
  const selected = getRecipientItems("boudreault").filter(item => getQuantity(item) > 0);
  const total = selected.reduce((sum, item) => sum + getQuantity(item) * (item.price || 0), 0);
  const missingPrices = selected.filter(item => typeof item.price !== "number");
  return { total, missingPrices, ready: total >= BOUDREAULT_SHIPPING_THRESHOLD && !missingPrices.length };
}

function syncQuantityCard(item) {
  const card = document.querySelector(`.product-card[data-code="${item.code}"]`);
  if (!card) return;
  const quantity = getQuantity(item);
  card.classList.toggle("in-order", quantity > 0);
  const input = card.querySelector("input[data-action=\"input\"]");
  if (input) input.value = quantity;
}

function setQuantity(item, value) {
  const next = Math.max(0, Number.parseInt(value, 10) || 0);
  if (next === 0) delete quantities[item.code];
  else quantities[item.code] = next;
  localStorage.setItem("weekly-order-quantities", JSON.stringify(quantities));
  syncQuantityCard(item);
  renderSummary();
}

function categoryThumbnail(category) {
  const sectionIcons = {
    Shed: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5 12 4l9 6.5"/><path d="M5.5 9.5V20h13V9.5M9 20v-5.5h6V20"/></svg>`,
    Closet: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4.5" y="3.5" width="15" height="17" rx="1.5"/><path d="M12 3.5v17M10 8.5h.01M14 8.5h.01"/></svg>`,
    "Bulk Head": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 7 8-3 8 3-8 3-8-3Z"/><path d="M4 7v10l8 3 8-3V7M12 10v10"/></svg>`,
    Bathrooms: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M6 12v3a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5v-3"/><path d="M7 12V6a2 2 0 0 1 4 0v1M11 7h3"/></svg>`,
  };
  if (sectionIcons[category]) return `<span class="category-thumb category-icon" aria-hidden="true">${sectionIcons[category]}</span>`;
  const item = allItems.find(candidate => candidate.category === category && candidate.image);
  if (!item) return `<span class="category-thumb category-thumb-placeholder" aria-hidden="true">✦</span>`;
  return `<img class="category-thumb" src="${imageSrc(item)}" alt="" />`;
}

function slugify(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-"); }

function drinkThumbnail(group) {
  const item = allItems.find(candidate => candidate.drinkGroup === group && candidate.image);
  if (!item) return `<span class="drink-thumb drink-thumb-placeholder" aria-hidden="true">✦</span>`;
  return `<img class="drink-thumb" src="${imageSrc(item)}" alt="" />`;
}

function syncStickyOffsets() {
  const categoryNav = document.querySelector("#category-nav");
  if (categoryNav) document.documentElement.style.setProperty("--category-nav-height", `${categoryNav.offsetHeight}px`);
}

function matches(item) {
  const categoryMatches = activeCategory === "All products" || item.category === activeCategory;
  const haystack = `${item.name} ${item.code} ${item.brand} ${item.category} ${item.drinkGroup || ""}`.toLowerCase();
  return categoryMatches && haystack.includes(searchTerm.toLowerCase());
}

function renderNav() {
  navEl.innerHTML = ["All products", ...categories].map(category => `
    <button class="category-button ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">
      ${categoryThumbnail(category)}
      <span>${category}</span>
    </button>
  `).join("");
  syncStickyOffsets();
}

function renderProduct(item) {
  const qty = getQuantity(item);
  const image = item.image
    ? `<img src="${imageSrc(item)}" alt="${item.name}" loading="lazy" />`
    : `<span class="no-image">Image coming soon</span>`;
  return `
    <article class="product-card ${qty ? "in-order" : ""}" data-code="${item.code}">
      <div class="product-visual">${image}</div>
      <div class="product-info">
        <div class="product-brand">${item.brand}</div>
        <h4 class="product-name">${item.name}</h4>
        <div class="product-detail">${item.detail}</div>
        ${item.recipient === "boudreault" ? `<div class="product-price">${typeof item.price === "number" ? `${formatCurrency(item.price)} / ${item.unit || "case"}` : "Price not listed"}</div>` : ""}
        ${item.code.startsWith("supply-") ? "" : `<div class="product-code">Code ${item.code}</div>`}
        <div class="quantity-row">
          <div class="quantity-control" aria-label="Quantity for ${item.name}">
            <button type="button" data-action="decrease" data-code="${item.code}" aria-label="Decrease quantity">−</button>
            <input type="number" min="0" inputmode="numeric" value="${qty}" data-action="input" data-code="${item.code}" aria-label="Quantity" />
            <button type="button" data-action="increase" data-code="${item.code}" aria-label="Increase quantity">+</button>
          </div>
          <span class="unit-label">${item.unit || "case"}</span>
        </div>
      </div>
    </article>
  `;
}

function renderDrinkSection(items) {
  const visibleGroups = [...new Set(items.map(item => item.drinkGroup))];
  if (!visibleGroups.includes(activeDrinkGroup)) activeDrinkGroup = visibleGroups[0] || "";
  const drinkNav = `
    <nav class="drink-subnav" id="drink-subnav" aria-label="Drink sections">
      ${visibleGroups.map(group => `
        <button class="drink-subnav-button ${group === activeDrinkGroup ? "active" : ""}" type="button" data-drink-group="${group}">
          ${drinkThumbnail(group)}
          <span>${group}</span>
        </button>
      `).join("")}
    </nav>
  `;
  const groups = visibleGroups.map(group => {
    const groupItems = items.filter(item => item.drinkGroup === group);
    const isOpen = drinkGroupState[group] !== false;
    return `
      <section class="drink-group ${isOpen ? "is-open" : ""}" id="drink-group-${slugify(group)}" data-drink-group="${group}">
        <button class="drink-group-toggle" type="button" data-toggle-drink-group="${group}" aria-expanded="${isOpen}">
          <span class="drink-group-title">
            <span><strong>${group}</strong><small>${groupItems.length} item${groupItems.length === 1 ? "" : "s"}</small></span>
          </span>
          <span class="drink-group-chevron" aria-hidden="true">${isOpen ? "⌃" : "⌄"}</span>
        </button>
        <div class="drink-group-content" ${isOpen ? "" : "hidden"}>
          <div class="product-grid">${groupItems.map(renderProduct).join("")}</div>
        </div>
      </section>
    `;
  }).join("");
  return `<section class="product-section product-section-drinks" id="drinks">
    <div class="product-section-heading"><h3>Drinks</h3><span>${items.length} items</span></div>
    ${drinkNav}
    <div class="drink-groups">${groups}</div>
  </section>`;
}

function renderStandardSection(category, items) {
  return `<section class="product-section" id="${slugify(category)}">
    <div class="product-section-heading"><h3>${category}</h3><span>${items.length} item${items.length === 1 ? "" : "s"}</span></div>
    <div class="product-grid">${items.map(renderProduct).join("")}</div>
  </section>`;
}

function setActiveDrinkGroup(group, shouldScroll = true) {
  const nav = document.querySelector("#drink-subnav");
  const buttons = [...document.querySelectorAll("#drink-subnav [data-drink-group]")];
  const button = buttons.find(candidate => candidate.dataset.drinkGroup === group);
  if (!nav || !button) return;
  const changed = activeDrinkGroup !== group;
  if (changed) {
    activeDrinkGroup = group;
    buttons.forEach(candidate => candidate.classList.toggle("active", candidate === button));
  }
  if (shouldScroll && changed) {
    const left = button.offsetLeft - (nav.clientWidth - button.offsetWidth) / 2;
    nav.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }
}

function updateActiveDrinkGroup() {
  const groups = [...document.querySelectorAll(".drink-group")];
  if (!groups.length) return;
  const nav = document.querySelector("#drink-subnav");
  const marker = Math.max(150, (nav?.getBoundingClientRect().bottom || 0) + 18);
  let current = groups[0];
  groups.forEach(group => {
    if (group.getBoundingClientRect().top <= marker) current = group;
  });
  setActiveDrinkGroup(current.dataset.drinkGroup, true);
}

function setupDrinkGroupTracking() {
  if (!drinkScrollTrackingBound) {
    window.addEventListener("scroll", updateActiveDrinkGroup, { passive: true });
    window.addEventListener("resize", () => {
      syncStickyOffsets();
      updateActiveDrinkGroup();
    });
    drinkScrollTrackingBound = true;
  }
  syncStickyOffsets();
  updateActiveDrinkGroup();
}

function renderProducts() {
  const visible = allItems.filter(matches);
  resultsNoteEl.textContent = searchTerm || activeCategory !== "All products" ? `${visible.length} product${visible.length === 1 ? "" : "s"} shown` : "";
  if (!visible.length) {
    sectionsEl.innerHTML = `<div class="empty-state" style="padding: 60px 0"><span class="empty-icon">⌕</span><p>No products found.</p><small>Try another search or category.</small></div>`;
    setupDrinkGroupTracking();
    return;
  }
  const visibleCategories = [...new Set(visible.map(item => item.category))];
  sectionsEl.innerHTML = visibleCategories.map(category => {
    const items = visible.filter(item => item.category === category);
    return category === "Drinks" ? renderDrinkSection(items) : renderStandardSection(category, items);
  }).join("");
  setupDrinkGroupTracking();
}

function orderLines(items = allItems) {
  return items.filter(item => getQuantity(item) > 0).map(item => {
    const unit = item.unit || "case";
    if (item.code.startsWith("supply-")) {
      const name = item.emailName || item.name.toLowerCase();
      return `${getQuantity(item)} x ${unit} ${name}`;
    }
    return `${getQuantity(item)} x ${unit} — ${item.code} — ${item.name}`;
  });
}

function emailMessage(recipient) {
  const lines = orderLines(allItems.filter(item => item.recipient === recipient));
  const intro = recipient === "nantel"
    ? "Bonjour, voici la commande cette semaine, merci!"
    : "Hey man, here's an order for this week,";
  return [intro, "", ...lines].join("\n");
}

const emailDetails = {
  nantel: { to: "commandes@nantelmcdiarmid.com", subject: "Commande Cafe Palmier" },
  boudreault: { to: "Luc.Lessard@imperialdade.com", subject: "Order Cafe Palmier" },
  olivia: { to: "olivia@cafepalmier.ca", subject: "Order Cafe Palmier" },
};

function emailHref(recipient) {
  const details = emailDetails[recipient];
  const lines = orderLines(allItems.filter(item => item.recipient === recipient));
  const subject = recipient === "olivia" && lines.length
    ? `${details.subject} — ${lines.join(", ")}`
    : details.subject;
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (recipient !== "olivia") params.push(`body=${encodeURIComponent(emailMessage(recipient))}`);
  return `mailto:${details.to}?${params.join("&")}`;
}

function updateCopyButtons() {
  const selectedRecipients = new Set(allItems.filter(item => getQuantity(item) > 0).map(item => item.recipient));
  const shippingStatus = getBoudreaultShippingStatus();
  ["nantel", "boudreault", "olivia"].forEach(recipient => {
    document.querySelectorAll(`[data-copy-recipient="${recipient}"]`).forEach(button => {
      button.hidden = !selectedRecipients.has(recipient);
      if (recipient === "boudreault") {
        button.classList.toggle("boudreault-ready", shippingStatus.ready);
        button.classList.toggle("boudreault-below-threshold", !shippingStatus.ready);
      }
    });
  });
}

const recipientLabels = {
  boudreault: "Boudreault",
  nantel: "Nantel",
  olivia: "Olivia/Costco",
};

function renderSummary() {
  const selected = allItems.filter(item => getQuantity(item) > 0);
  const totalUnits = selected.reduce((sum, item) => sum + getQuantity(item), 0);
  const boudreaultStatus = getBoudreaultShippingStatus();
  totalUnitsEl.textContent = totalUnits;
  boudreaultTotalEl.textContent = formatCurrency(boudreaultStatus.total);
  boudreaultShippingNoteEl.textContent = boudreaultStatus.missingPrices.length
    ? "Some Boudreault items have no listed price"
    : boudreaultStatus.ready
      ? "Free shipping threshold reached"
      : `Free shipping at ${formatCurrency(BOUDREAULT_SHIPPING_THRESHOLD)}`;
  const recipientOrder = ["boudreault", "nantel", "olivia"];
  selectedListEl.innerHTML = `${recipientOrder.map(recipient => {
    const recipientItems = selected.filter(item => item.recipient === recipient);
    return `
      <section class="order-recipient" aria-labelledby="recipient-${recipient}">
        <h3 id="recipient-${recipient}">${recipientLabels[recipient]}</h3>
        ${recipientItems.length ? recipientItems.map(item => `
          <div class="selected-item"><div class="selected-item-name"><strong>${item.name}</strong><span>${typeof item.price === "number" ? `${formatCurrency(item.price)} / ${item.unit || "case"}` : item.code.startsWith("supply-") ? "Supply · price not listed" : item.code}</span></div><span class="selected-item-qty">× ${getQuantity(item)}</span></div>
        `).join("") : `<p class="recipient-empty">No items selected</p>`}
      </section>
    `;
  }).join("")}`;
  updateCopyButtons();
}

function renderAll() {
  renderNav();
  renderProducts();
  renderSummary();
}

navEl.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderAll();
});

document.querySelector("#search").addEventListener("input", event => {
  searchTerm = event.target.value.trim();
  renderProducts();
});

sectionsEl.addEventListener("click", event => {
  const groupToggle = event.target.closest("[data-toggle-drink-group]");
  if (groupToggle) {
    const group = groupToggle.dataset.toggleDrinkGroup;
    const groupSection = groupToggle.closest(".drink-group");
    const isOpen = !groupSection.classList.contains("is-open");
    drinkGroupState[group] = isOpen;
    groupSection.classList.toggle("is-open", isOpen);
    groupToggle.setAttribute("aria-expanded", String(isOpen));
    groupToggle.querySelector(".drink-group-chevron").textContent = isOpen ? "⌃" : "⌄";
    groupSection.querySelector(".drink-group-content").hidden = !isOpen;
    updateActiveDrinkGroup();
    return;
  }

  const drinkNavButton = event.target.closest("#drink-subnav [data-drink-group]");
  if (drinkNavButton) {
    const group = drinkNavButton.dataset.drinkGroup;
    const groupSection = [...document.querySelectorAll(".drink-group")].find(section => section.dataset.drinkGroup === group);
    if (!groupSection) return;
    if (!groupSection.classList.contains("is-open")) {
      drinkGroupState[group] = true;
      groupSection.classList.add("is-open");
      groupSection.querySelector(".drink-group-toggle").setAttribute("aria-expanded", "true");
      groupSection.querySelector(".drink-group-chevron").textContent = "⌃";
      groupSection.querySelector(".drink-group-content").hidden = false;
    }
    setActiveDrinkGroup(group, true);
    groupSection.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const button = event.target.closest("button[data-code]");
  if (!button) return;
  const item = allItems.find(candidate => candidate.code === button.dataset.code);
  if (!item) return;
  const current = getQuantity(item);
  setQuantity(item, button.dataset.action === "increase" ? current + 1 : current - 1);
});

sectionsEl.addEventListener("change", event => {
  const input = event.target.closest("input[data-code]");
  if (!input) return;
  const item = allItems.find(candidate => candidate.code === input.dataset.code);
  if (item) setQuantity(item, input.value);
});

document.querySelector("#clear-order").addEventListener("click", () => {
  Object.keys(quantities).forEach(key => delete quantities[key]);
  localStorage.removeItem("weekly-order-quantities");
  document.querySelectorAll(".product-card").forEach(card => {
    card.classList.remove("in-order");
    const input = card.querySelector("input[data-action=\"input\"]");
    if (input) input.value = 0;
  });
  renderSummary();
});

function sendEmail(event) {
  const recipient = event.currentTarget.dataset.copyRecipient;
  if (recipient === "boudreault") {
    const shippingStatus = getBoudreaultShippingStatus();
    if (!shippingStatus.ready) {
      const message = shippingStatus.missingPrices.length
        ? `The priced Boudreault subtotal is ${formatCurrency(shippingStatus.total)}, and ${shippingStatus.missingPrices.length} selected item${shippingStatus.missingPrices.length === 1 ? " has" : "s have"} no price listed. I cannot confirm the $150.00 free-shipping minimum. Do you want to continue?`
        : `The Boudreault order is ${formatCurrency(BOUDREAULT_SHIPPING_THRESHOLD - shippingStatus.total)} short of the $150.00 free-shipping minimum. Do you want to continue anyway?`;
      if (!window.confirm(message)) return;
    }
  }
  window.location.href = emailHref(recipient);
}

emailButtons.forEach(button => button.addEventListener("click", sendEmail));

renderAll();
