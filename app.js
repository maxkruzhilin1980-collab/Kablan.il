const CITIES = [
  ["tlv", "Тель-Авив", "תל אביב"],
  ["rishon", "Ришон-ле-Цион", "ראשון לציון"],
  ["netanya", "Нетания", "נתניה"],
  ["haifa", "Хайфа", "חיפה"],
  ["jerusalem", "Иерусалим", "ירושלים"],
  ["petah", "Петах-Тиква", "פתח תקווה"],
  ["ashdod", "Ашдод", "אשדוד"],
  ["beer", "Беэр-Шева", "באר שבע"],
  ["holon", "Холон", "חולון"],
  ["herzliya", "Герцлия", "הרצליה"],
  ["rehovot", "Реховот", "רחובות"],
  ["eilat", "Эйлат", "אילת"],
  ["ashkelon", "Ашкелон", "אשקלון"],
  ["kfar", "Кфар-Саба", "כפר סבא"],
  ["batyam", "Бат-Ям", "בת ים"],
  ["modiin", "Модиин", "מודיעין"],
];
const TRADES = [
  ["tile", "Плитка", "ריצוף / קרמיקה"],
  ["elec", "Электрика", "חשמל"],
  ["paint", "Малярка", "צבע"],
  ["plumb", "Сантехника", "אינסטלציה"],
  ["gypsum", "Гипсокартон", "גבס"],
  ["ac", "Кондиционеры", "מיזוג"],
  ["alum", "Алюминий / окна", "אלומיניום"],
  ["frame", "Каркас", "שלד"],
  ["reno", "Ремонт под ключ", "שיפוץ כללי"],
  ["other", "Прочее", "אחר"],
];

const WORKS = {
  tile: [
    ["floor", "Пол / комната", "ריצוף חדר"],
    ["bath", "Стены и пол ванной", "ריצוף וחיפוי חדר רחצה"],
    ["shower", "Душевой поддон / ниша", "מקלחון / נישה"],
    ["kitchen", "Фартук кухни", "חיפוי מטבח"],
    ["steps", "Ступени / крыльцо", "מדרגות / כניסה"],
    ["grout", "Затирка / ремонт швов", "רובה / תיקון מישקים"],
  ],
  elec: [
    ["panel", "Щиток", "לוח חשמל"],
    ["points", "Точки розеток и выключателей", "נקודות חשמל"],
    ["light", "Освещение / споты", "תאורה"],
    ["floorheat", "Тёплый пол", "חימום תת רצפתי"],
    ["weak", "Слаботочка / интернет", "תקשורת"],
  ],
  paint: [
    ["walls", "Стены", "קירות"],
    ["ceiling", "Потолок", "תקרה"],
    ["out", "Фасад / балкон", "חזית / מרפסת"],
    ["prep", "Шпаклёвка и грунт", "שפכטל והכנה"],
    ["wallp", "Обои", "טפטים"],
  ],
  plumb: [
    ["bath", "Разводка ванной", "אינסטלציה בחדר רחצה"],
    ["kitchen", "Кухня / мойка", "מטבח / כיור"],
    ["leak", "Протечка", "נזילה"],
    ["boiler", "Бойлер", "דוד שמש / חשמל"],
    ["sewer", "Канализация", "ביוב"],
  ],
  gypsum: [
    ["walls", "Стены / перегородки", "קירות / מחיצות"],
    ["ceiling", "Потолок", "תקרה"],
    ["niche", "Ниши и короба", "נישות וארגזים"],
    ["door", "Откосы дверей", "משקופים"],
    ["spot", "Потолок под споты", "תקרה לתושבות"],
  ],
  ac: [
    ["split", "Поставить сплит", "התקנת מזגן"],
    ["multi", "Мультисплит", "מולטי ספליט"],
    ["service", "Сервис / чистка", "שירות / ניקוי"],
    ["duct", "Воздуховоды", "תעלות"],
  ],
  alum: [
    ["win", "Окна", "חלונות"],
    ["door", "Двери", "דלתות"],
    ["shutter", "Рольставни", "תריסים"],
    ["rail", "Перила балкона", "מעקה מרפסת"],
  ],
  frame: [
    ["wall", "Стены каркаса", "קירות שלד"],
    ["roof", "Крыша", "גג"],
    ["conc", "Бетон / стяжка", "בטון / רצפה"],
    ["open", "Проёмы", "פתחים"],
  ],
  reno: [
    ["full", "Квартира под ключ", "דירה מפתח"],
    ["bath", "Только санузел", "רק חדר רחצה"],
    ["kitchen", "Только кухня", "רק מטבח"],
    ["room", "Одна комната", "חדר אחד"],
  ],
};

const I18N = {
  ru: {
    brand: "BuildIL",
    heroTitle: "Кабланы и мастера находят друг друга",
    heroText: "Биржа стройки для Израиля. Пока бесплатно — заявка, отклик, WhatsApp.",
    iAmContractor: "Я каблан / заказчик",
    iAmContractorHint: "Нужна бригада или мастер на объект",
    iAmWorker: "Я мастер / бригада",
    iAmWorkerHint: "Ищу объекты рядом",
    feed: "Лента",
    newJob: "Заявка",
    profile: "Профиль",
    more: "Ещё",
    all: "Все",
    filterJobs: "Ищу мастера",
    filterOffers: "Ищу заказ",
    badgeJob: "Заказ",
    badgeOffer: "Мастер свободен",
    emptyJobs: "Заказов пока нет.",
    emptyOffers: "Мастера ещё не выставили анкеты.",
    post: "Опубликовать",
    city: "Город",
    trade: "Работа",
    title: "Что нужно сделать",
    works: "Какие работы",
    otherText: "Прочее — напишите сами",
    desc: "Подробности",
    dates: "Когда",
    dateFrom: "С даты",
    dateTo: "По дату",
    budget: "Бюджет",
    budgetSum: "Сумма",
    budgetTalk: "По договорённости",
    plan: "Схема объекта",
    planHint: "Фото или PDF схемы",
    tradesNeed: "Какие работы нужны",
    pickOne: "Отметьте хотя бы одну работу",
    phone: "WhatsApp",
    name: "Имя / компания",
    save: "Сохранить",
    empty: "Заявок пока нет. Каблан может добавить первую.",
    wa: "Написать в WhatsApp",
    posted: "Заявка в ленте",
    ad: "Сюда позже встанет реклама магазина материалов — сервис для кабланов и мастеров бесплатный.",
    demo: "Примеры заявок уже в ленте. Свои хранятся в этом телефоне.",
    switchWorker: "Войти как мастер",
    switchContractor: "Войти как каблан",
    nowContractor: "Сейчас вы каблан",
    nowWorker: "Сейчас вы мастер",
    changeRole: "Сменить роль",
    seek: "Ищу работу",
    seekHint: "Мастер не публикует объект. Только профессия, что умеет и город.",
    seekSave: "Выставить в ленту",
    seekingIn: "Ищу работу",
    login: "Вход",
    register: "Регистрация",
    password: "Пароль",
    who: "Кто вы",
    sphere: "Сфера",
    needAuth: "Ленту видят все. Чтобы выставить заявку — зарегистрируйтесь.",
    logout: "Выйти",
    hasAccount: "Уже есть вход",
    noAccount: "Нет аккаунта — регистрация",
  },
  he: {
    brand: "BuildIL",
    heroTitle: "קבלנים ומקצוענים מוצאים אחד את השני",
    heroText: "בורסת בנייה לישראל. בינתיים בחינם — מודעה, פנייה, וואטסאפ.",
    iAmContractor: "אני קבלן / מזמין",
    iAmContractorHint: "צריך בעל מקצוע או צוות לפרויקט",
    iAmWorker: "אני בעל מקצוע / צוות",
    iAmWorkerHint: "מחפש עבודות באזור",
    feed: "לוח",
    newJob: "מודעה",
    profile: "פרופיל",
    more: "עוד",
    all: "הכל",
    filterJobs: "מחפש מקצוען",
    filterOffers: "מחפש עבודה",
    badgeJob: "הזמנה",
    badgeOffer: "מקצוען פנוי",
    emptyJobs: "אין הזמנות עדיין.",
    emptyOffers: "אין עדיין כרטיסי מקצוענים.",
    post: "פרסום",
    city: "עיר",
    trade: "מקצוע",
    title: "מה צריך לעשות",
    works: "אילו עבודות",
    otherText: "אחר — כתבו בעצמכם",
    desc: "פרטים",
    dates: "מתי",
    dateFrom: "מתאריך",
    dateTo: "עד תאריך",
    budget: "תקציב",
    budgetSum: "סכום",
    budgetTalk: "לפי סיכום",
    plan: "תוכנית",
    planHint: "תמונה או PDF של התוכנית",
    tradesNeed: "אילו עבודות צריך",
    pickOne: "סמנו לפחות מקצוע אחד",
    phone: "וואטסאפ",
    name: "שם / חברה",
    save: "שמירה",
    empty: "אין מודעות עדיין. קבלן יכול לפרסם ראשונה.",
    wa: "וואטסאפ",
    posted: "המודעה בלוח",
    ad: "כאן תהיה פרסומת לחנות חומרים. השירות לקבלנים ולמקצוענים בחינם.",
    demo: "יש מודעות לדוגמה. המודעות שלכם נשמרות בטלפון.",
    switchWorker: "כניסה כבעל מקצוע",
    switchContractor: "כניסה כקבלן",
    nowContractor: "עכשיו אתם קבלן",
    nowWorker: "עכשיו אתם בעל מקצוע",
    changeRole: "החלפת תפקיד",
    seek: "מחפש עבודה",
    seekHint: "בעל מקצוע לא מפרסם פרויקט. רק מקצוע, מה הוא עושה והעיר.",
    seekSave: "שמירת כרטיס",
    seekingIn: "מחפש עבודה",
    login: "כניסה",
    register: "הרשמה",
    password: "סיסמה",
    who: "מי אתם",
    sphere: "תחום",
    needAuth: "את הלוח רואים כולם. כדי לפרסם מודעה צריך הרשמה.",
    logout: "יציאה",
    hasAccount: "כבר רשומים",
    noAccount: "אין חשבון — הרשמה",
  },
};

const DEMO = [
  { id: "d1", kind: "job", trade: "tile", city: "netanya", titleRu: "Плитка ванная + пол 42 м²", titleHe: "ריצוף חדר רחצה ורצפה 42 מ״ר", dates: "23–26.09", budget: "₪ 4,800", phone: "0500000001" },
  { id: "d2", kind: "job", trade: "elec", city: "rishon", titleRu: "Щиток и точки в новостройке", titleHe: "לוח חשמל ונקודות בדירה חדשה", dates: "на этой неделе", budget: "", phone: "0500000002" },
  { id: "d3", kind: "job", trade: "reno", city: "tlv", titleRu: "Косметический ремонт 3 комн.", titleHe: "שיפוץ קוסמטי 3 חדרים", dates: "октябрь", budget: "₪ 28,000", phone: "0500000003" },
  { id: "d4", kind: "offer", trade: "gypsum", trades: ["gypsum"], cities: ["netanya", "herzliya"], titleRu: "Гипсокартон — стены и потолки", titleHe: "גבס — קירות ותקרות", phone: "0500000004", name: "Игорь" },
];

const store = {
  get lang() { return localStorage.getItem("bil_lang") || "ru"; },
  set lang(v) { localStorage.setItem("bil_lang", v); },
  get role() { return localStorage.getItem("bil_role") || ""; },
  set role(v) { localStorage.setItem("bil_role", v); },
  get tab() { return localStorage.getItem("bil_tab") || "feed"; },
  set tab(v) { localStorage.setItem("bil_tab", v); },
  get filter() { return localStorage.getItem("bil_filter") || "all"; },
  set filter(v) { localStorage.setItem("bil_filter", v); },
  get kind() { return localStorage.getItem("bil_kind") || "all"; },
  set kind(v) { localStorage.setItem("bil_kind", v); },
  jobs() { try { return JSON.parse(localStorage.getItem("bil_jobs") || "[]"); } catch { return []; } },
  saveJobs(list) { localStorage.setItem("bil_jobs", JSON.stringify(list)); },
  profile() { try { return JSON.parse(localStorage.getItem("bil_profile") || "{}"); } catch { return {}; } },
  saveProfile(p) { localStorage.setItem("bil_profile", JSON.stringify(p)); },
  users() { try { return JSON.parse(localStorage.getItem("bil_users") || "[]"); } catch { return []; } },
  saveUsers(list) { localStorage.setItem("bil_users", JSON.stringify(list)); },
  get session() { return localStorage.getItem("bil_session") || ""; },
  set session(v) { localStorage.setItem("bil_session", v); },
  user() { return this.users().find((u) => u.phone === this.session) || null; },
};

const ICO = {
  tile: "🧱", elec: "⚡", paint: "🎨", plumb: "🚿", gypsum: "🧱",
  ac: "❄️", alum: "🪟", frame: "🏗️", reno: "🏠", other: "✏️",
  city: "📍", date: "📅", money: "💰", plan: "📐", phone: "📱",
  name: "👤", feed: "📋", job: "📝", profile: "👷", more: "☰",
  contractor: "🏗️", worker: "🛠️",
};
function t(key) { return (I18N[store.lang] || I18N.ru)[key] || key; }
function ico(id) { return `${ICO[id] || ""} `; }
function tradeName(id) {
  const row = TRADES.find((x) => x[0] === id);
  if (!row) return id;
  return store.lang === "he" ? row[2] : row[1];
}
function tradeLabel(id) { return `${ico(id)}${tradeName(id)}`; }
function workName(trade, id) {
  const row = (WORKS[trade] || []).find((x) => x[0] === id);
  if (!row) return id;
  return store.lang === "he" ? row[2] : row[1];
}
function cityName(id) {
  const row = CITIES.find((x) => x[0] === id || x[1] === id || x[2] === id);
  if (!row) return id;
  return store.lang === "he" ? row[2] : row[1];
}

function setLang(lang) {
  store.lang = lang;
  document.documentElement.lang = lang === "he" ? "he" : "ru";
  document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  document.body.dir = lang === "he" ? "rtl" : "ltr";
}

function waLink(phone, text) {
  const num = String(phone || "").replace(/\D/g, "");
  if (!num) return "#";
  const full = num.startsWith("972") ? num : num.replace(/^0/, "972");
  return `https://wa.me/${full}?text=${encodeURIComponent(text || "")}`;
}

function render() {
  const app = document.getElementById("app");
  const langBar = `
    <div class="lang">
      <button class="${store.lang === "ru" ? "on" : ""}" data-lang="ru">RU</button>
      <button class="${store.lang === "he" ? "on" : ""}" data-lang="he">עב</button>
    </div>`;

  const user = store.user();
  if (user && user.role) store.role = user.role;

  let main = "";
  if (store.tab === "feed") main = viewFeed();
  else if (store.tab === "new") main = !user ? viewAuth() : (store.role === "worker" ? viewSeek() : viewNew());
  else if (store.tab === "profile") main = user ? viewProfile() : viewAuth();
  else main = `<div class="card"><p>${t("ad")}</p><p class="meta">${t("demo")}</p></div>`;

  app.innerHTML = `
    <div class="app">
      <div class="top"><div class="logo">${t("brand")}<span>.</span></div>${langBar}</div>
      ${main}
      <nav class="nav">
        <button data-tab="feed" class="${store.tab === "feed" ? "on" : ""}">${ico("feed")}${t("feed")}</button>
        <button data-tab="new" class="${store.tab === "new" ? "on" : ""}">${ico("job")}${t("newJob")}</button>
        <button data-tab="profile" class="${store.tab === "profile" ? "on" : ""}">${ico("profile")}${t("profile")}</button>
        <button data-tab="more" class="${store.tab === "more" ? "on" : ""}">${ico("more")}${t("more")}</button>
      </nav>
    </div>`;
  bind();
}

function viewFeed() {
  const own = store.jobs();
  const all = [...own, ...DEMO];
  let filtered = all;
  const itemKind = (j) => j.kind === "offer" ? "offer" : "job";
  if (store.kind === "job") filtered = filtered.filter((j) => itemKind(j) === "job");
  if (store.kind === "offer") filtered = filtered.filter((j) => itemKind(j) === "offer");
  if (store.filter !== "all") filtered = filtered.filter((j) => (j.trades || [j.trade]).includes(store.filter));
  const kinds = `
    <div class="filters">
      <button class="chip ${store.kind === "all" ? "on" : ""}" data-kind="all">${t("all")}</button>
      <button class="chip ${store.kind === "offer" ? "on" : ""}" data-kind="offer">${ico("worker")}${t("filterJobs")}</button>
      <button class="chip ${store.kind === "job" ? "on" : ""}" data-kind="job">${ico("contractor")}${t("filterOffers")}</button>
    </div>`;
  const chips = `<div class="filters">` +
    [`<button class="chip ${store.filter === "all" ? "on" : ""}" data-filter="all">${t("all")}</button>`]
      .concat(TRADES.filter(([id]) => id !== "other").map(([id]) => `<button class="chip ${store.filter === id ? "on" : ""}" data-filter="${id}">${tradeLabel(id)}</button>`))
      .join("") + `</div>`;
  if (!filtered.length) {
    const msg = store.kind === "offer" ? t("emptyOffers") : store.kind === "job" ? t("emptyJobs") : t("empty");
    return kinds + chips + `<div class="empty">${msg}</div>`;
  }
  return kinds + chips + filtered.map((j) => {
    const offer = j.kind === "offer";
    const title = store.lang === "he" ? (j.titleHe || j.titleRu) : (j.titleRu || j.titleHe);
    const cities = (j.cities || [j.city]).filter(Boolean).map(cityName).join(", ");
    const text = `${title} — ${cities}`;
    return `<article class="card job ${offer ? "offer" : "order"}">
      <div class="badge ${offer ? "offer" : "order"}">${offer ? ico("worker") + t("badgeOffer") : ico("contractor") + t("badgeJob")}</div>
      <h3>${title}</h3>
      <div class="meta">${j.name ? ico("name") + j.name + " · " : ""}${ico("city")}${cities}${j.dates ? " · " + ico("date") + j.dates : ""}</div>
      <div class="tags">${(j.trades || [j.trade]).filter(Boolean).map((id) => `<span class="tag">${tradeLabel(id)}</span>`).join("")}${!offer && j.budget ? `<span class="tag">${ico("money")}${j.budget}</span>` : ""}</div>
      ${j.planData && j.planData.startsWith("data:image") ? `<img class="plan-preview" src="${j.planData}" alt="" />` : ""}
      ${j.planName && !(j.planData && j.planData.startsWith("data:image")) ? `<div class="plan-name">${j.planName}</div>` : ""}
      <a class="btn" href="${waLink(j.phone, text)}">${t("wa")}</a>
    </article>`;
  }).join("");
}

function viewNew() {
  const cities = CITIES.map(([id, ru, he]) => `<option value="${id}">${store.lang === "he" ? he : ru}</option>`).join("");
  const checks = TRADES.map(([id]) => `<label class="check"><input type="checkbox" name="trades" value="${id}" /> ${tradeLabel(id)}</label>`).join("");
  return `<form class="card" id="job-form">
    <label>${t("tradesNeed")}</label>
    <div class="checkgrid">${checks}</div>
    <div id="works-box"></div>
    <label>${t("otherText")}</label>
    <textarea name="other" placeholder="${t("otherText")}"></textarea>
    <label>${ico("plan")}${t("plan")}</label>
    <input type="file" name="plan" accept="image/*,.pdf,application/pdf" />
    <div class="plan-name">${t("planHint")}</div>
    <label>${ico("city")}${t("city")}</label><select name="city">${cities}</select>
    <label>${ico("date")}${t("dateFrom")}</label><input type="date" name="dateFrom" required />
    <label>${ico("date")}${t("dateTo")}</label><input type="date" name="dateTo" />
    <label>${ico("money")}${t("budget")}</label>
    <div class="checkgrid">
      <label class="check"><input type="radio" name="budgetType" value="talk" checked /> ${t("budgetTalk")}</label>
      <label class="check"><input type="radio" name="budgetType" value="sum" /> ${t("budgetSum")}</label>
    </div>
    <input name="budget" id="budget-sum" placeholder="₪ 5000" style="display:none" />
    <label>${ico("phone")}${t("phone")}</label><input name="phone" placeholder="050..." required />
    <div style="height:10px"></div>
    <button class="btn" type="submit">${t("post")}</button>
  </form>`;
}

function viewSeek() {
  const p = store.profile();
  const picked = p.cities || (p.city ? [p.city] : []);
  const selected = p.trades || [];
  const checks = TRADES.filter(([id]) => id !== "other").map(([id]) => `<label class="check"><input type="checkbox" name="trades" value="${id}" ${selected.includes(id) ? "checked" : ""} /> ${tradeLabel(id)}</label>`).join("");
  const cityChecks = CITIES.map(([id, ru, he]) => `<label class="check"><input type="checkbox" name="cities" value="${id}" ${picked.includes(id) ? "checked" : ""} /> ${store.lang === "he" ? he : ru}</label>`).join("");
  return `<form class="card" id="seek-form">
    <p>${t("seekHint")}</p>
    <label>${ico("name")}${t("name")}</label><input name="name" value="${p.name || ""}" />
    <label>${t("tradesNeed")}</label>
    <div class="checkgrid">${checks}</div>
    <div id="works-box"></div>
    <label>${ico("city")}${t("city")}</label>
    <div class="checkgrid">${cityChecks}</div>
    <label>${ico("phone")}${t("phone")}</label><input name="phone" value="${p.phone || ""}" placeholder="050..." />
    <div style="height:10px"></div>
    <button class="btn" type="submit">${t("seekSave")}</button>
  </form>`;
}

function fillWorks() {
  const box = document.getElementById("works-box");
  if (!box) return;
  const selected = [...document.querySelectorAll("input[name=trades]:checked")].map((x) => x.value);
  const blocks = selected.filter((id) => WORKS[id]).map((id) => {
    const saved = (store.profile().works || []);
    const items = WORKS[id].map(([wid]) => {
      const val = `${id}:${wid}`;
      const on = saved.includes(val) ? "checked" : "";
      return `<label class="check"><input type="checkbox" name="works" value="${val}" ${on} /> ${workName(id, wid)}</label>`;
    }).join("");
    return `<label>${tradeLabel(id)}</label><div class="checkgrid">${items}</div>`;
  });
  box.innerHTML = blocks.join("");
}

function viewAuth() {
  const checks = TRADES.filter(([id]) => id !== "other").map(([id]) => `<label class="check"><input type="checkbox" name="trades" value="${id}" /> ${tradeLabel(id)}</label>`).join("");
  return `<div class="card"><p>${t("needAuth")}</p></div>
  <form class="card" id="reg-form">
    <label>${t("register")}</label>
    <label>${t("name")}</label><input name="name" required />
    <label>${ico("phone")}${t("phone")}</label><input name="phone" placeholder="050..." required />
    <label>${t("password")}</label><input name="password" type="password" required />
    <label>${t("who")}</label>
    <div class="checkgrid">
      <label class="check"><input type="radio" name="role" value="contractor" checked /> ${t("iAmContractor")}</label>
      <label class="check"><input type="radio" name="role" value="worker" /> ${t("iAmWorker")}</label>
    </div>
    <label>${t("sphere")}</label>
    <div class="checkgrid">${checks}</div>
    <button class="btn" type="submit">${t("register")}</button>
  </form>
  <form class="card" id="login-form">
    <label>${t("hasAccount")}</label>
    <label>${ico("phone")}${t("phone")}</label><input name="phone" required />
    <label>${t("password")}</label><input name="password" type="password" required />
    <button class="btn ghost" type="submit">${t("login")}</button>
  </form>`;
}

function viewProfile() {
  const p = store.profile();
  const cities = CITIES.map(([id, ru, he]) => `<option value="${id}" ${p.city === id ? "selected" : ""}>${store.lang === "he" ? he : ru}</option>`).join("");
  return `<form class="card profile-bg" id="prof-form">
    <label>${ico("name")}${t("name")}</label><input name="name" value="${p.name || ""}" />
    <label>${ico("city")}${t("city")}</label><select name="city">${cities}</select>
    <label>${ico("phone")}${t("phone")}</label><input name="phone" value="${p.phone || ""}" />
    <div style="height:10px"></div>
    <button class="btn" type="submit">${t("save")}</button>
  </form>
  <div class="card">
    <p>${store.role === "worker" ? t("nowWorker") : t("nowContractor")}</p>
    ${store.role === "worker" && store.profile().seeking ? `<p class="ok">${t("seekingIn")}: ${(store.profile().cities || [store.profile().city]).filter(Boolean).map(cityName).join(", ")}</p>` : ""}
    <div class="row">
      <button class="btn ghost" data-switch="contractor">${ico("contractor")}${t("switchContractor")}</button>
      <button class="btn ghost" data-switch="worker">${ico("worker")}${t("switchWorker")}</button>
    </div>
    <div style="height:10px"></div>
    <button class="btn ghost" data-logout="1">${t("logout")}</button>
  </div>`;
}

function bind() {
  document.querySelectorAll("[data-lang]").forEach((b) => b.onclick = () => { setLang(b.dataset.lang); render(); });
  document.querySelectorAll("[data-role]").forEach((b) => b.onclick = () => { store.role = b.dataset.role; store.tab = "feed"; render(); });
  document.querySelectorAll("[data-tab]").forEach((b) => b.onclick = () => { store.tab = b.dataset.tab; render(); });
  document.querySelectorAll("[data-filter]").forEach((b) => b.onclick = () => { store.filter = b.dataset.filter; render(); });
  document.querySelectorAll("[data-kind]").forEach((b) => b.onclick = () => { store.kind = b.dataset.kind; render(); });
  document.querySelectorAll("[data-switch]").forEach((b) => {
    b.onclick = () => {
      store.role = b.dataset.switch;
      const users = store.users().map((u) => u.phone === store.session ? { ...u, role: store.role } : u);
      store.saveUsers(users);
      store.tab = "feed";
      render();
    };
  });
  document.querySelectorAll("[data-logout]").forEach((b) => b.onclick = () => { store.session = ""; store.tab = "feed"; render(); });
  const reg = document.getElementById("reg-form");
  if (reg) reg.onsubmit = (e) => {
    e.preventDefault();
    const f = new FormData(reg);
    const phone = String(f.get("phone") || "").replace(/\s/g, "");
    if (store.users().some((u) => u.phone === phone)) { alert(t("hasAccount")); return; }
    const trades = [...reg.querySelectorAll("input[name=trades]:checked")].map((x) => x.value);
    const user = {
      name: String(f.get("name") || ""),
      phone,
      password: String(f.get("password") || ""),
      role: String(f.get("role") || "contractor"),
      trades,
    };
    store.saveUsers(store.users().concat(user));
    store.session = phone;
    store.role = user.role;
    store.saveProfile({ ...store.profile(), name: user.name, phone, trades });
    store.tab = "feed";
    render();
  };
  const login = document.getElementById("login-form");
  if (login) login.onsubmit = (e) => {
    e.preventDefault();
    const f = new FormData(login);
    const phone = String(f.get("phone") || "").replace(/\s/g, "");
    const password = String(f.get("password") || "");
    const user = store.users().find((u) => u.phone === phone && u.password === password);
    if (!user) { alert(t("login")); return; }
    store.session = phone;
    store.role = user.role;
    store.saveProfile({ ...store.profile(), name: user.name, phone: user.phone, trades: user.trades || [] });
    store.tab = "feed";
    render();
  };
  document.querySelectorAll("input[name=trades]").forEach((c) => c.onchange = fillWorks);
  fillWorks();
  const budgetSum = document.getElementById("budget-sum");
  document.querySelectorAll("input[name=budgetType]").forEach((r) => {
    r.onchange = () => {
      if (!budgetSum) return;
      const sumOn = document.querySelector("input[name=budgetType][value=sum]")?.checked;
      budgetSum.style.display = sumOn ? "block" : "none";
    };
  });
  const job = document.getElementById("job-form");
  if (job) job.onsubmit = async (e) => {
    e.preventDefault();
    const f = new FormData(job);
    const trades = [...job.querySelectorAll("input[name=trades]:checked")].map((x) => x.value);
    if (!trades.length) { alert(t("pickOne")); return; }
    const workLabels = [...job.querySelectorAll("input[name=works]:checked")].map((x) => {
      const [tr, wid] = String(x.value).split(":");
      return workName(tr, wid);
    });
    const other = String(f.get("other") || "").trim();
    const title = [...workLabels, other].filter(Boolean).join(", ") || tradeName(trades[0]);
    const from = String(f.get("dateFrom") || "");
    const to = String(f.get("dateTo") || "");
    const dates = to ? `${from} – ${to}` : from;
    const budget = f.get("budgetType") === "sum" && String(f.get("budget") || "").trim()
      ? String(f.get("budget")).trim()
      : t("budgetTalk");
    let planName = "";
    let planData = "";
    const file = job.querySelector("input[name=plan]").files[0];
    if (file) {
      planName = file.name;
      if (file.size < 900000) {
        planData = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result || ""));
          reader.readAsDataURL(file);
        });
      }
    }
    const list = store.jobs();
    list.unshift({
      id: "j" + Date.now(),
      kind: "job",
      trade: trades[0],
      trades,
      city: f.get("city"),
      titleRu: title,
      titleHe: title,
      dates,
      budget,
      phone: f.get("phone"),
      planName,
      planData,
    });
    store.saveJobs(list);
    store.tab = "feed";
    render();
  };
  const seek = document.getElementById("seek-form");
  if (seek) seek.onsubmit = (e) => {
    e.preventDefault();
    const f = new FormData(seek);
    const trades = [...seek.querySelectorAll("input[name=trades]:checked")].map((x) => x.value);
    const works = [...seek.querySelectorAll("input[name=works]:checked")].map((x) => x.value);
    const cities = [...seek.querySelectorAll("input[name=cities]:checked")].map((x) => x.value);
    const name = String(f.get("name") || "");
    const phone = String(f.get("phone") || "");
    const workLabels = works.map((w) => {
      const [tr, wid] = String(w).split(":");
      return workName(tr, wid);
    });
    const title = [name, ...workLabels].filter(Boolean).join(" · ") || trades.map(tradeName).join(", ");
    store.saveProfile({
      ...store.profile(),
      name,
      city: cities[0] || "",
      cities,
      phone,
      trades,
      works,
      seeking: true,
    });
    const list = store.jobs().filter((j) => !(j.kind === "offer" && j.phone === phone));
    list.unshift({
      id: "o" + Date.now(),
      kind: "offer",
      trade: trades[0],
      trades,
      cities,
      city: cities[0],
      titleRu: title,
      titleHe: title,
      phone,
      name,
    });
    store.saveJobs(list);
    store.tab = "feed";
    render();
  };
  const prof = document.getElementById("prof-form");
  if (prof) prof.onsubmit = (e) => {
    e.preventDefault();
    const f = new FormData(prof);
    store.saveProfile({ name: f.get("name"), city: f.get("city"), phone: f.get("phone") });
    render();
  };
}

setLang(store.lang);
render();
