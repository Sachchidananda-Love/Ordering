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
  { category: "Milks", brand: "Earth’s Own", code: "801006", name: "Boisson de soya", detail: "case", image: null },
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

const existingSupplies = [
  "8 Oz Hot Drink To Go Cups", "10 Oz Hot Drink To Go Cups", "12 Oz Hot Drink To Go Cups",
  "12 Oz Cold Drink To Go Cups", "16 Oz Cold Drink To Go Cups", "Hot Drink To Go Lids",
  "Cold Drink To Go Lids", "Vanilla 1883", "Hot drink sleeves",
];

const boudreaultSupplies = [
  "Pampak # 1 sml togo", "pampak #3 lrg togo", "Coffee Caraf", "lrg handle bags",
  "sml handle bags", "partry sml greeseproof", "forks", "knife", "spoon",
  "brown napkin (dispenser)", "White swan dinner napkin", "Sanitizer  quat plus",
  "floor cleaner (neutraliozer)", "hand towel", "roll ups papers", "Blu Lite Dustbane",
  "sweetener",
];

const oliviaSupplies = ["Toilet paper", "Brown sugar"];

const supplies = [
  ...existingSupplies.map(name => ({ name, recipient: "nantel" })),
  ...boudreaultSupplies.map(name => ({ name, recipient: "boudreault" })),
  ...oliviaSupplies.map(name => ({ name, recipient: "olivia" })),
].map(({ name, recipient }, index) => ({
  category: "Supplies", brand: "Supplies", code: `supply-${index}`, name,
  detail: "no catalogue image", image: null, unit: "box", recipient,
}));

const allItems = [...products.map(item => ({ ...item, recipient: "nantel" })), ...supplies];
const categories = [...new Set(allItems.map(item => item.category))];
const quantities = JSON.parse(localStorage.getItem("weekly-order-quantities") || "{}");
let activeCategory = "All products";
let searchTerm = "";

const sectionsEl = document.querySelector("#product-sections");
const navEl = document.querySelector("#category-nav");
const resultsNoteEl = document.querySelector("#results-note");
const selectedListEl = document.querySelector("#selected-list");
const totalUnitsEl = document.querySelector("#total-units");
const messageEl = document.querySelector("#order-message");
const emailButtons = document.querySelectorAll("[data-copy-recipient]");

function getQuantity(item) { return Math.max(0, Number.parseInt(quantities[item.code], 10) || 0); }

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
  const item = allItems.find(candidate => candidate.category === category && candidate.image);
  if (!item) return `<span class="category-thumb category-thumb-placeholder" aria-hidden="true">✦</span>`;
  return `<img class="category-thumb" src="public/assets/products/${item.image}.png" alt="" />`;
}

function matches(item) {
  const categoryMatches = activeCategory === "All products" || item.category === activeCategory;
  const haystack = `${item.name} ${item.code} ${item.brand} ${item.category}`.toLowerCase();
  return categoryMatches && haystack.includes(searchTerm.toLowerCase());
}

function renderNav() {
  navEl.innerHTML = ["All products", ...categories].map(category => `
    <button class="category-button ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">
      ${categoryThumbnail(category)}
      <span>${category}</span>
    </button>
  `).join("");
}

function renderProduct(item) {
  const qty = getQuantity(item);
  const image = item.image
    ? `<img src="public/assets/products/${item.image}.png" alt="${item.name}" loading="lazy" />`
    : `<span class="no-image">Image coming soon</span>`;
  return `
    <article class="product-card ${qty ? "in-order" : ""}" data-code="${item.code}">
      <div class="product-visual">${image}</div>
      <div class="product-info">
        <div class="product-brand">${item.brand}</div>
        <h4 class="product-name">${item.name}</h4>
        <div class="product-detail">${item.detail}</div>
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

function renderProducts() {
  const visible = allItems.filter(matches);
  resultsNoteEl.textContent = searchTerm || activeCategory !== "All products" ? `${visible.length} product${visible.length === 1 ? "" : "s"} shown` : "";
  if (!visible.length) {
    sectionsEl.innerHTML = `<div class="empty-state" style="padding: 60px 0"><span class="empty-icon">⌕</span><p>No products found.</p><small>Try another search or category.</small></div>`;
    return;
  }
  const visibleCategories = [...new Set(visible.map(item => item.category))];
  sectionsEl.innerHTML = visibleCategories.map(category => {
    const items = visible.filter(item => item.category === category);
    return `<section class="product-section" id="${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}">
      <div class="product-section-heading"><h3>${category}</h3><span>${items.length} item${items.length === 1 ? "" : "s"}</span></div>
      <div class="product-grid">${items.map(renderProduct).join("")}</div>
    </section>`;
  }).join("");
}

function orderLines(items = allItems) {
  return items.filter(item => getQuantity(item) > 0).map(item => {
    const unit = item.unit || "case";
    if (item.code.startsWith("supply-")) return `${getQuantity(item)} x ${unit} ${item.name.toLowerCase()}`;
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
  ["nantel", "boudreault", "olivia"].forEach(recipient => {
    document.querySelectorAll(`[data-copy-recipient="${recipient}"]`).forEach(button => {
      button.hidden = !selectedRecipients.has(recipient);
    });
  });
}

function renderSummary() {
  const selected = allItems.filter(item => getQuantity(item) > 0);
  const totalUnits = selected.reduce((sum, item) => sum + getQuantity(item), 0);
  totalUnitsEl.textContent = totalUnits;
  selectedListEl.innerHTML = selected.length ? selected.map(item => `
    <div class="selected-item"><div class="selected-item-name"><strong>${item.name}</strong><span>${item.code.startsWith("supply-") ? "Supply" : item.code}</span></div><span class="selected-item-qty">× ${getQuantity(item)}</span></div>
  `).join("") : `<div class="empty-state"><span class="empty-icon">＋</span><p>Your order is empty.</p><small>Use the quantity controls to add products.</small></div>`;
  messageEl.value = emailMessage("nantel");
  updateCopyButtons();
}

function renderAll() {
  renderNav();
  renderProducts();
  renderSummary();
  document.querySelector("#catalogue-count").textContent = allItems.length;
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
  window.location.href = emailHref(recipient);
}

emailButtons.forEach(button => button.addEventListener("click", sendEmail));

renderAll();
