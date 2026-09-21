const CITIES = [
  ["tlv", "Тель-Авив", "תל אביב", "Tel Aviv"],
  ["rishon", "Ришон-ле-Цион", "ראשון לציון", "Rishon LeZion"],
  ["netanya", "Нетания", "נתניה", "Netanya"],
  ["haifa", "Хайфа", "חיפה", "Haifa"],
  ["jerusalem", "Иерусалим", "ירושלים", "Jerusalem"],
  ["petah", "Петах-Тиква", "פתח תקווה", "Petah Tikva"],
  ["ashdod", "Ашдод", "אשדוד", "Ashdod"],
  ["beer", "Беэр-Шева", "באר שבע", "Beersheba"],
  ["holon", "Холон", "חולון", "Holon"],
  ["herzliya", "Герцлия", "הרצליה", "Herzliya"],
  ["rehovot", "Реховот", "רחובות", "Rehovot"],
  ["eilat", "Эйлат", "אילת", "Eilat"],
  ["ashkelon", "Ашкелон", "אשקלון", "Ashkelon"],
  ["kfar", "Кфар-Саба", "כפר סבא", "Kfar Saba"],
  ["batyam", "Бат-Ям", "בת ים", "Bat Yam"],
  ["modiin", "Модиин", "מודיעין", "Modiin"],
];
const TRADES = [
  ["tile", "Плитка", "ריצוף / קרמיקה", "Tiling"],
  ["elec", "Электрика", "חשמל", "Electrical"],
  ["paint", "Малярка", "צבע", "Painting"],
  ["plumb", "Сантехника", "אינסטלציה", "Plumbing"],
  ["gypsum", "Гипсокартон", "גבס", "Drywall"],
  ["ac", "Кондиционеры", "מיזוג", "Air conditioning"],
  ["alum", "Алюминий / окна", "אלומיניום", "Windows / aluminum"],
  ["frame", "Каркас", "שלד", "Framing"],
  ["reno", "Ремонт под ключ", "שיפוץ כללי", "Full renovation"],
  ["facade", "Фасадные работы", "עבודות חזית", "Facade works"],
  ["other", "Прочее", "אחר", "Other"],
];

const WORKS = {
  tile: [
    ["floor", "Пол / комната", "ריצוף חדר", "Room floor"],
    ["bath", "Стены и пол ванной", "ריצוף וחיפוי חדר רחצה", "Bathroom tile"],
    ["shower", "Душевой поддон / ниша", "מקלחון / נישה", "Shower / niche"],
    ["kitchen", "Фартук кухни", "חיפוי מטבח", "Kitchen backsplash"],
    ["steps", "Ступени / крыльцо", "מדרגות / כניסה", "Steps / entrance"],
    ["grout", "Затирка / ремонт швов", "רובה / תיקון מישקים", "Grout repair"],
  ],
  elec: [
    ["panel", "Щиток", "לוח חשמל", "Electrical panel"],
    ["points", "Точки розеток и выключателей", "נקודות חשמל", "Outlets and switches"],
    ["light", "Освещение / споты", "תאורה", "Lighting"],
    ["floorheat", "Тёплый пол", "חימום תת רצפתי", "Underfloor heating"],
    ["weak", "Слаботочка / интернет", "תקשורת", "Low voltage / internet"],
  ],
  paint: [
    ["walls", "Стены", "קירות", "Walls"],
    ["ceiling", "Потолок", "תקרה", "Ceiling"],
    ["out", "Фасад / балкон", "חזית / מרפסת", "Facade / balcony"],
    ["prep", "Шпаклёвка и грунт", "שפכטל והכנה", "Prep and primer"],
    ["wallp", "Обои", "טפטים", "Wallpaper"],
  ],
  plumb: [
    ["bath", "Разводка ванной", "אינסטלציה בחדר רחצה", "Bathroom plumbing"],
    ["kitchen", "Кухня / мойка", "מטבח / כיור", "Kitchen sink"],
    ["leak", "Протечка", "נזילה", "Leak"],
    ["boiler", "Бойлер", "דוד שמש / חשמל", "Water heater"],
    ["sewer", "Канализация", "ביוב", "Sewage"],
  ],
  gypsum: [
    ["walls", "Стены / перегородки", "קירות / מחיצות", "Walls / partitions"],
    ["ceiling", "Потолок", "תקרה", "Ceiling"],
    ["niche", "Ниши и короба", "נישות וארגזים", "Niches and boxes"],
    ["door", "Откосы дверей", "משקופים", "Door frames"],
    ["spot", "Потолок под споты", "תקרה לתושבות", "Ceiling for spotlights"],
  ],
  ac: [
    ["split", "Поставить сплит", "התקנת מזגן", "Install split AC"],
    ["multi", "Мультисплит", "מולטי ספליט", "Multi-split"],
    ["service", "Сервис / чистка", "שירות / ניקוי", "Service / cleaning"],
    ["duct", "Воздуховоды", "תעלות", "Ducts"],
  ],
  alum: [
    ["win", "Окна", "חלונות", "Windows"],
    ["door", "Двери", "דלתות", "Doors"],
    ["shutter", "Рольставни", "תריסים", "Shutters"],
    ["rail", "Перила балкона", "מעקה מרפסת", "Balcony railing"],
  ],
  frame: [
    ["wall", "Стены каркаса", "קירות שלד", "Frame walls"],
    ["roof", "Крыша", "גג", "Roof"],
    ["conc", "Бетон / стяжка", "בטון / רצפה", "Concrete / screed"],
    ["open", "Проёмы", "פתחים", "Openings"],
  ],
  reno: [
    ["full", "Квартира под ключ", "דירה מפתח", "Turnkey apartment"],
    ["bath", "Только санузел", "רק חדר רחצה", "Bathroom only"],
    ["kitchen", "Только кухня", "רק מטבח", "Kitchen only"],
    ["room", "Одна комната", "חדר אחד", "One room"],
  ],
  facade: [
    ["paint", "Покраска фасада", "צביעת חזית", "Facade painting"],
    ["plaster", "Штукатурка / шпаклёвка", "טיח בחזית", "Facade plaster"],
    ["stone", "Камень / клинкер", "אבן / קלינקר", "Stone / clinker"],
    ["panels", "Монтаж панелей", "התקנת פאנלים", "Panel installation"],
    ["insul", "Утепление фасада", "בידוד חזית", "Facade insulation"],
    ["scaffold", "Леса / высота", "פיגומים / גובה", "Scaffolding / height"],
    ["clean", "Мойка фасада", "שטיפת חזית", "Facade cleaning"],
  ],
};

const FLAG_IDS = ["citizen", "resident", "permit", "height", "tools", "car", "crew"];
const FLAG_MARK = {
  citizen: "🇮🇱",
  resident: "🏠",
  permit: "📄",
  height: "🏗️",
  tools: "🛠️",
  car: "🚗",
  crew: "👷",
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
    postOrder: "Заказ",
    postWork: "Работу",
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
    plan: "Чертёж / проект",
    planHint: "Тухнит или схема объекта — фото или PDF",
    extraDocs: "Другие документы",
    extraDocsHint: "Договор, счёт, фото объекта — не чертёж",
    noPlan: "Чертёж не приложен",
    noExtraDocs: "Других документов нет",
    openFile: "Открыть",
    noDesc: "Отдельный текст не написали — работы указаны выше.",
    flagsNeed: "Что нужно на объекте",
    flagsHave: "Статус и возможности",
    flagsHint: "Нажмите на значок — будет расшифровка.",
    flag_citizen: "Гражданин",
    flag_citizen_h: "Гражданин Израиля (эзрах).",
    flag_resident: "Постоянный житель",
    flag_resident_h: "Тошав кева — постоянный житель Израиля.",
    flag_permit: "Есть разрешение на работу",
    flag_permit_h: "Есть действующий хетер авода / разрешение на работу в Израиле.",
    flag_height: "Разрешение на высоту",
    flag_height_h: "Есть ишур авода бе-гова — допуск к работе на высоте.",
    flag_tools: "Есть инструмент",
    flag_tools_h: "Свой инструмент на объект.",
    flag_car: "Есть машина",
    flag_car_h: "Есть транспорт, может доехать и привезти материал.",
    flag_crew: "Работаем бригадой",
    flag_crew_h: "Выходит не один человек, а бригада.",
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
    nowContractor: "Зарегистрирован как каблан",
    nowWorker: "Зарегистрирован как мастер",
    changeRole: "Сменить роль",
    seek: "Ищу работу",
    seekHint: "Профессия, что умеете и города. И каблан, и мастер могут выставить поиск работы.",
    seekSave: "Выставить в ленту",
    seekingIn: "Ищу работу",
    login: "Вход",
    register: "Регистрация",
    password: "Пароль",
    who: "Кто вы",
    sphere: "Сфера",
    needAuth: "Ленту видят все. Разместить заказ или искать работу — только после регистрации.",
    logout: "Выйти",
    cloudOn: "Общая лента включена — заявки видят все.",
    cloudOff: "Нет сети. Пока видны только заявки с этого телефона.",
    myActive: "Актуальные",
    myHistory: "История",
    myActiveHint: "То, что сейчас в ленте",
    myHistoryHint: "То, что вы уже снимали с ленты",
    toHistory: "В историю",
    toActive: "Вернуть в ленту",
    emptyMine: "Вы ещё ничего не выставляли",
    emptyHistory: "История пустая",
    deleteJob: "Удалить",
    confirmDelete: "Удалить заявку навсегда? Её не будет в ленте и в профиле.",
    deleted: "Заявка удалена",
    backProfile: "К профилю",
    hasAccount: "Уже есть вход",
    noAccount: "Нет аккаунта — регистрация",
    rating: "Рейтинг",
    reviews: "отзывов",
    noRating: "Пока нет отзывов",
    badgePhone: "Телефон подтверждён",
    badgeDocs: "Документы загружены",
    badgeIns: "Есть страховка",
    badgeJobs: "Закрытые объекты",
    badgeWarn: "Есть жалоба",
    docsTitle: "Документы доверия",
    docsHint: "Пока без проверки человеком. Значок появится после загрузки.",
    addReview: "Отзыв после сдачи работы",
    reviewText: "Короткий отзыв",
    reviewSave: "Поставить оценку",
    stars: "Оценка",
    closedPlus: "Отметить объект сданным",
    members: "Участники",
    ratingBoard: "Рейтинг",
    boardFeed: "Лента",
    searchCode: "Код или имя",
    memberCode: "Код участника",
    topWorkers: "Лучшие мастера",
    topContractors: "Лучшие кабланы",
    uploadDocs: "Загрузить документы",
    docsList: "Загружено",
    viewReviews: "Смотреть отзывы",
    hideReviews: "Скрыть отзывы",
    writeReview: "Написать отзыв мастеру",
    writeReviewC: "Написать отзыв каблану",
    sendReview: "Отправить отзыв",
    reviewTo: "Отзыв для",
    needLoginReview: "Чтобы написать отзыв — войдите.",
    reviewOk: "Отзыв сохранён",
    details: "Подробнее",
    back: "Назад в ленту",
    postedBy: "Кто выставил",
    jobDetails: "О заказе",
    offerDetails: "Об анкете",
    documents: "Документы",
    noDocs: "Документов пока нет",
    worksDone: "Состав работ",
    photo: "Фото профиля",
    worksCount: "Работ",
    myPage: "Личная страница",
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
    postOrder: "הזמנה",
    postWork: "עבודה",
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
    plan: "שרטוט / תוכנית",
    planHint: "תוכנית או סקיצה — תמונה או PDF",
    extraDocs: "מסמכים אחרים",
    extraDocsHint: "חוזה, חשבונית, תמונת האתר — לא שרטוט",
    noPlan: "אין שרטוט",
    noExtraDocs: "אין מסמכים נוספים",
    openFile: "פתיחה",
    noDesc: "אין טקסט נוסף — העבודות מסומנות למעלה.",
    flagsNeed: "מה נדרש באתר",
    flagsHave: "סטטוס ויכולות",
    flagsHint: "לחצו על הסימון לפרוט.",
    flag_citizen: "אזרח",
    flag_citizen_h: "אזרח ישראל.",
    flag_resident: "תושב קבע",
    flag_resident_h: "תושב קבע בישראל.",
    flag_permit: "יש היתר עבודה",
    flag_permit_h: "יש היתר עבודה בתוקף בישראל.",
    flag_height: "אישור עבודה בגובה",
    flag_height_h: "יש אישור עבודה בגובה.",
    flag_tools: "יש כלים",
    flag_tools_h: "מגיע עם כלים משלו.",
    flag_car: "יש רכב",
    flag_car_h: "יש רכב — הגעה והובלת חומר.",
    flag_crew: "עובדים כצוות",
    flag_crew_h: "מגיעה קבוצה / בריגדה, לא אדם אחד.",
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
    nowContractor: "נרשם כקבלן",
    nowWorker: "נרשם כבעל מקצוע",
    changeRole: "החלפת תפקיד",
    seek: "מחפש עבודה",
    seekHint: "מקצוע, מה אתם יודעים ואילו ערים. גם קבלן וגם מקצוען יכולים לפרסם חיפוש עבודה.",
    seekSave: "שמירת כרטיס",
    seekingIn: "מחפש עבודה",
    login: "כניסה",
    register: "הרשמה",
    password: "סיסמה",
    who: "מי אתם",
    sphere: "תחום",
    needAuth: "את הלוח רואים כולם. פרסום הזמנה או חיפוש עבודה — רק אחרי הרשמה.",
    logout: "יציאה",
    cloudOn: "לוח משותף פעיל — כולם רואים את המודעות.",
    cloudOff: "אין רשת. רואים רק מודעות מהטלפון הזה.",
    myActive: "פעילים",
    myHistory: "היסטוריה",
    myActiveHint: "מה שמופיע בלוח עכשיו",
    myHistoryHint: "מה שהורדתם מהלוח",
    toHistory: "להיסטוריה",
    toActive: "להחזיר ללוח",
    emptyMine: "עדיין לא פרסמתם",
    emptyHistory: "אין היסטוריה",
    deleteJob: "מחיקה",
    confirmDelete: "למחוק את המודעה לצמיתות? היא לא תופיע בלוח ולא בפרופיל.",
    deleted: "המודעה נמחקה",
    backProfile: "חזרה לפרופיל",
    hasAccount: "כבר רשומים",
    noAccount: "אין חשבון — הרשמה",
    rating: "דירוג",
    reviews: "ביקורות",
    noRating: "עדיין אין ביקורות",
    badgePhone: "טלפון מאומת",
    badgeDocs: "מסמכים הועלו",
    badgeIns: "יש ביטוח",
    badgeJobs: "עבודות שנסגרו",
    badgeWarn: "יש תלונה",
    docsTitle: "מסמכי אמון",
    docsHint: "בינתיים בלי בדיקת אדם. הסימון יופיע אחרי העלאה.",
    addReview: "ביקורת אחרי מסירת העבודה",
    reviewText: "ביקורת קצרה",
    reviewSave: "שמירת ציון",
    stars: "ציון",
    closedPlus: "לסמן עבודה כהושלמה",
    members: "משתתפים",
    ratingBoard: "דירוג",
    boardFeed: "לוח",
    searchCode: "קוד או שם",
    memberCode: "קוד משתתף",
    topWorkers: "מקצוענים מובילים",
    topContractors: "קבלנים מובילים",
    uploadDocs: "העלאת מסמכים",
    docsList: "הועלה",
    viewReviews: "לראות ביקורות",
    hideReviews: "להסתיר ביקורות",
    writeReview: "לכתוב ביקורת למקצוען",
    writeReviewC: "לכתוב ביקורת לקבלן",
    sendReview: "שליחת ביקורת",
    reviewTo: "ביקורת עבור",
    needLoginReview: "כדי לכתוב ביקורת צריך להיכנס.",
    reviewOk: "הביקורת נשמרה",
    details: "פרטים",
    back: "חזרה ללוח",
    postedBy: "מי פרסם",
    jobDetails: "על ההזמנה",
    offerDetails: "על הכרטיס",
    documents: "מסמכים",
    noDocs: "אין מסמכים עדיין",
    worksDone: "פירוט עבודות",
    photo: "תמונת פרופיל",
    worksCount: "עבודות",
    myPage: "עמוד אישי",
  },
  en: {
    brand: "BuildIL",
    heroTitle: "Contractors and tradespeople find each other",
    heroText: "A construction board for Israel. Free for now — post, reply, WhatsApp.",
    iAmContractor: "I am a contractor",
    iAmContractorHint: "I need a crew or a tradesperson",
    iAmWorker: "I am a tradesperson / crew",
    iAmWorkerHint: "I am looking for jobs nearby",
    feed: "Feed",
    newJob: "Post",
    postOrder: "Job",
    postWork: "Work",
    profile: "Profile",
    more: "More",
    all: "All",
    filterJobs: "Looking for a pro",
    filterOffers: "Looking for a job",
    badgeJob: "Job",
    badgeOffer: "Pro available",
    emptyJobs: "No jobs yet.",
    emptyOffers: "No tradespeople posted yet.",
    post: "Publish",
    city: "City",
    trade: "Trade",
    title: "What needs to be done",
    works: "Work items",
    otherText: "Other — type it yourself",
    desc: "Details",
    dates: "When",
    dateFrom: "From",
    dateTo: "To",
    budget: "Budget",
    budgetSum: "Amount",
    budgetTalk: "To be agreed",
    plan: "Drawing / project",
    planHint: "Site plan or drawing — photo or PDF",
    extraDocs: "Other documents",
    extraDocsHint: "Contract, invoice, site photo — not the drawing",
    noPlan: "No drawing attached",
    noExtraDocs: "No other documents",
    openFile: "Open",
    noDesc: "No extra text — the selected works are listed above.",
    flagsNeed: "What the site needs",
    flagsHave: "Status and capabilities",
    flagsHint: "Tap a badge to see what it means.",
    flag_citizen: "Citizen",
    flag_citizen_h: "Israeli citizen.",
    flag_resident: "Permanent resident",
    flag_resident_h: "Permanent resident of Israel (toshav keva).",
    flag_permit: "Work permit",
    flag_permit_h: "Valid Israeli work permit.",
    flag_height: "Height permit",
    flag_height_h: "Certified to work at height.",
    flag_tools: "Has tools",
    flag_tools_h: "Brings their own tools.",
    flag_car: "Has a car",
    flag_car_h: "Has a vehicle for travel and materials.",
    flag_crew: "Works as a crew",
    flag_crew_h: "Comes as a crew, not one person.",
    tradesNeed: "Which trades",
    pickOne: "Select at least one trade",
    phone: "WhatsApp",
    name: "Name / company",
    save: "Save",
    empty: "No posts yet.",
    wa: "WhatsApp",
    posted: "Posted to the feed",
    ad: "Material-store ads will go here. The board stays free for contractors and trades.",
    demo: "Sample posts are in the feed. Your posts stay on this phone for now.",
    switchWorker: "Switch to tradesperson",
    switchContractor: "Switch to contractor",
    nowContractor: "Registered as contractor",
    nowWorker: "Registered as tradesperson",
    changeRole: "Change role",
    seek: "Looking for work",
    seekHint: "Trade, skills and cities. Both contractors and tradespeople can post this.",
    seekSave: "Post to feed",
    seekingIn: "Looking for work",
    login: "Log in",
    register: "Sign up",
    password: "Password",
    who: "Who are you",
    sphere: "Field",
    needAuth: "Anyone can browse the feed. Post a job or offer work after sign-up.",
    logout: "Log out",
    cloudOn: "Shared feed is on — everyone can see posts.",
    cloudOff: "Offline. Only posts from this phone are visible.",
    myActive: "Active",
    myHistory: "History",
    myActiveHint: "What is live on the feed",
    myHistoryHint: "What you took off the feed",
    toHistory: "Move to history",
    toActive: "Put back on feed",
    emptyMine: "You have not posted yet",
    emptyHistory: "History is empty",
    deleteJob: "Delete",
    confirmDelete: "Delete this post forever? It will leave the feed and your profile.",
    deleted: "Post deleted",
    backProfile: "Back to profile",
    hasAccount: "Already have an account",
    noAccount: "No account — sign up",
    rating: "Rating",
    reviews: "reviews",
    noRating: "No reviews yet",
    badgePhone: "Phone verified",
    badgeDocs: "Documents uploaded",
    badgeIns: "Insured",
    badgeJobs: "Closed jobs",
    badgeWarn: "Open complaint",
    docsTitle: "Trust documents",
    docsHint: "Not human-checked yet. Badge appears after upload.",
    addReview: "Review after job is done",
    reviewText: "Short review",
    reviewSave: "Submit rating",
    stars: "Score",
    closedPlus: "Mark job completed",
    members: "Members",
    ratingBoard: "Ranking",
    boardFeed: "Feed",
    searchCode: "Code or name",
    memberCode: "Member code",
    topWorkers: "Top tradespeople",
    topContractors: "Top contractors",
    uploadDocs: "Upload documents",
    docsList: "Uploaded",
    viewReviews: "See reviews",
    hideReviews: "Hide reviews",
    writeReview: "Write a review for the pro",
    writeReviewC: "Write a review for the contractor",
    sendReview: "Send review",
    reviewTo: "Review for",
    needLoginReview: "Log in to write a review.",
    reviewOk: "Review saved",
    details: "Details",
    back: "Back to feed",
    postedBy: "Posted by",
    jobDetails: "About the job",
    offerDetails: "About the profile",
    documents: "Documents",
    noDocs: "No documents yet",
    worksDone: "Work items",
    photo: "Profile photo",
    worksCount: "Jobs",
    myPage: "Profile page",
  },
};

const DEMO = [
  { id: "d1", kind: "job", trade: "tile", trades: ["tile"], city: "netanya", titleRu: "Плитка ванная + пол 42 м²", titleHe: "ריצוף חדר רחצה ורצפה 42 מ״ר", titleEn: "Bathroom and floor tile 42 m²", dates: "23–26.09", budget: "₪ 4,800", phone: "0501110001", name: "Dana Build", posterCode: "K-10802", rating: 4.8, reviews: 14, docs: true, planName: "tohnit-bathroom.pdf", descRu: "Ванная 4.2 м² и пол комнаты. Плитка уже куплена, на объекте с 08:00. Нужен мастер на 3–4 дня.", descHe: "חדר רחצה 4.2 מ״ר ורצפת חדר. האריחים כבר באתר, כניסה מ-08:00. צריך מקצוען ל-3–4 ימים.", descEn: "4.2 m² bathroom plus room floor. Tiles on site, access from 08:00. Need a pro for 3–4 days." },
  { id: "d2", kind: "job", trade: "elec", trades: ["elec"], city: "rishon", titleRu: "Щиток и точки в новостройке", titleHe: "לוח חשמל ונקודות בדירה חדשה", titleEn: "Panel and outlets in a new flat", dates: "на этой неделе", budget: "", phone: "0501110002", name: "Yossi Electric", posterCode: "K-11017", rating: 4.2, reviews: 6, planName: "points-plan.jpg", descRu: "Новая квартира, щиток 24 модуля, 18 точек. Есть частичная схема.", descHe: "דירה חדשה, לוח 24 מודול, 18 נקודות. יש תוכנית חלקית.", descEn: "New flat, 24-module panel, 18 points. Partial plan available." },
  { id: "d3", kind: "job", trade: "reno", trades: ["reno", "paint"], city: "tlv", titleRu: "Косметический ремонт 3 комн.", titleHe: "שיפוץ קוסמטי 3 חדרים", titleEn: "Cosmetic renovation, 3 rooms", dates: "октябрь", budget: "₪ 28,000", phone: "0501110003", name: "Dana Build", posterCode: "K-10802", rating: 5, reviews: 3, docs: true, insurance: true, planName: "3room-tohnit.pdf", descRu: "Покраска, плинтуса, лёгкий гипс в коридоре. Доступ ежедневно после 16:00.", descHe: "צבע, פנלים, גבס קל במסדרון. כניסה כל יום אחרי 16:00.", descEn: "Paint, skirting, light drywall in the hall. Access daily after 16:00." },
  { id: "d4", kind: "offer", trade: "gypsum", trades: ["gypsum"], cities: ["netanya", "herzliya"], titleRu: "Гипсокартон — стены и потолки", titleHe: "גבס — קירות ותקרות", titleEn: "Drywall — walls and ceilings", phone: "0501110004", name: "Igor", posterCode: "K-10421", rating: 4.9, reviews: 21, docs: true, insurance: true, closed: 21, planName: "portfolio-gypsum.pdf", descRu: "Стены, потолки, ниши. Работаю Нетания и Герцлия. Есть страховка.", descHe: "קירות, תקרות, נישות. נתניה והרצליה. יש ביטוח.", descEn: "Walls, ceilings, niches. Netanya and Herzliya. Insured." },
  { id: "d5", kind: "job", trade: "plumb", trades: ["plumb"], city: "haifa", titleRu: "Замена труб кухня + санузел", titleHe: "החלפת צנרת מטבח ושירותים", titleEn: "Replace pipes kitchen and WC", dates: "28–30.09", budget: "₪ 6,200", phone: "0501110005", name: "Haifa Home", posterCode: "K-11230", rating: 4.5, reviews: 8, docs: true, descRu: "Старые трубы на кухне и в туалете. Доступ с 07:30.", descHe: "צנרת ישנה במטבח ובשירותים. כניסה מ-07:30.", descEn: "Old pipes in kitchen and WC. Access from 07:30." },
  { id: "d6", kind: "job", trade: "paint", trades: ["paint"], city: "holon", titleRu: "Покраска квартиры 80 м²", titleHe: "צביעת דירה 80 מ״ר", titleEn: "Paint 80 m² flat", dates: "1–3.10", budget: "₪ 5,500", phone: "0501110006", name: "Holon Fix", posterCode: "K-11311", rating: 4.7, reviews: 11, descRu: "Две комнаты и коридор. Краска уже куплена.", descHe: "שני חדרים ומסדרון. הצבע כבר נקנה.", descEn: "Two rooms and hall. Paint already bought." },
  { id: "d7", kind: "job", trade: "ac", trades: ["ac"], city: "ashdod", titleRu: "Поставить 2 кондиционера", titleHe: "התקנת 2 מזגנים", titleEn: "Install 2 AC units", dates: "на этой неделе", budget: "₪ 3,800", phone: "0501110007", name: "Ashdod Build", posterCode: "K-11402", rating: 4.4, reviews: 7, descRu: "Гостиная и спальня. Кронштейны есть.", descHe: "סלון וחדר שינה. התושבות במקום.", descEn: "Living room and bedroom. Brackets on site." },
  { id: "d8", kind: "job", trade: "alum", trades: ["alum"], city: "petah", titleRu: "Окно + москитная сетка", titleHe: "חלון ורשת נגד יתושים", titleEn: "Window plus fly screen", dates: "5.10", budget: "по договорённости", phone: "0501110008", name: "PT Kablan", posterCode: "K-11540", rating: 4.3, reviews: 5, descRu: "Замена одного окна на балкон.", descHe: "החלפת חלון אחד למרפסת.", descEn: "Replace one balcony window." },
  { id: "d9", kind: "job", trade: "frame", trades: ["frame"], city: "modiin", titleRu: "Каркас гипсокартона 2 стены", titleHe: "שלד גבס 2 קירות", titleEn: "Drywall frame, 2 walls", dates: "октябрь", budget: "₪ 4,200", phone: "0501110009", name: "Modiin Pro", posterCode: "K-11608", rating: 4.6, reviews: 9, docs: true, descRu: "Две внутренние стены, профиль есть.", descHe: "שני קירות פנים, הפרופיל במקום.", descEn: "Two internal walls, profiles on site." },
  { id: "d10", kind: "job", trade: "tile", trades: ["tile"], city: "jerusalem", titleRu: "Плитка кухня фартук 7 м²", titleHe: "חיפוי מטבח 7 מ״ר", titleEn: "Kitchen backsplash 7 m²", dates: "8–9.10", budget: "₪ 2,900", phone: "0501110010", name: "Jerusalem Works", posterCode: "K-11721", rating: 4.8, reviews: 16, descRu: "Фартук и столешница. Плитка на объекте.", descHe: "חיפוי ומשטח. האריחים באתר.", descEn: "Backsplash and counter. Tiles on site." },
  { id: "d11", kind: "offer", trade: "tile", trades: ["tile"], cities: ["tlv", "holon", "batyam"], titleRu: "Плиточник — ванные и полы", titleHe: "רצף — חדרי רחצה ורצפות", titleEn: "Tiler — baths and floors", phone: "0501110011", name: "Sasha Tile", posterCode: "K-11803", rating: 4.9, reviews: 33, docs: true, insurance: true, closed: 33, descRu: "Ванные, полы, фартуки. Тель-Авив и юг Гуша.", descHe: "חדרי רחצה, רצפות, חיפויים. תל אביב ודרום גוש דן.", descEn: "Baths, floors, splashbacks. Tel Aviv and south Gush Dan." },
  { id: "d12", kind: "offer", trade: "elec", trades: ["elec"], cities: ["haifa", "kfar"], titleRu: "Электрик мусмах — щитки", titleHe: "חשמלאי מוסמך — לוחות", titleEn: "Licensed electrician — panels", phone: "0501110012", name: "Alex Power", posterCode: "K-11944", rating: 4.7, reviews: 18, docs: true, insurance: true, closed: 18, descRu: "Щитки, точки, замена проводки. Хайфа.", descHe: "לוחות, נקודות, החלפת חיווט. חיפה.", descEn: "Panels, points, rewiring. Haifa." },
  { id: "d13", kind: "offer", trade: "paint", trades: ["paint", "reno"], cities: ["rishon", "rehovot"], titleRu: "Маляр + косметика", titleHe: "צבע + שיפוץ קוסמטי", titleEn: "Painter + cosmetic work", phone: "0501110013", name: "Roma Color", posterCode: "K-12015", rating: 4.6, reviews: 12, closed: 12, descRu: "Покраска, шпаклёвка, мелкий ремонт.", descHe: "צביעה, שפכטל, תיקונים קטנים.", descEn: "Paint, filler, small repairs." },
  { id: "d14", kind: "offer", trade: "plumb", trades: ["plumb"], cities: ["ashdod", "ashkelon"], titleRu: "Сантехник — трубы и бойлер", titleHe: "אינסטלטור — צנרת ודוד", titleEn: "Plumber — pipes and boiler", phone: "0501110014", name: "Gabi Plumb", posterCode: "K-12109", rating: 4.8, reviews: 22, docs: true, insurance: true, closed: 22, descRu: "Трубы, бойлер, протечки. Ашдод / Ашкелон.", descHe: "צנרת, דוד, נזילות. אשדוד / אשקלון.", descEn: "Pipes, boiler, leaks. Ashdod / Ashkelon." },
  { id: "d15", kind: "offer", trade: "ac", trades: ["ac"], cities: ["tlv", "herzliya", "netanya"], titleRu: "Кондиционеры — монтаж и сервис", titleHe: "מזגנים — התקנה ושירות", titleEn: "AC — install and service", phone: "0501110015", name: "CoolIL", posterCode: "K-12270", rating: 4.5, reviews: 15, insurance: true, closed: 15, descRu: "Монтаж, заправка, сервис по центру.", descHe: "התקנה, מילוי, שירות במרכז.", descEn: "Install, refill, service in the center." },
  { id: "d16", kind: "offer", trade: "alum", trades: ["alum"], cities: ["jerusalem", "modiin"], titleRu: "Алюминий и окна", titleHe: "אלומיניום וחלונות", titleEn: "Aluminum and windows", phone: "0501110016", name: "Nir Alum", posterCode: "K-12333", rating: 4.4, reviews: 10, docs: true, closed: 10, descRu: "Окна, двери, москитные сетки.", descHe: "חלונות, דלתות, רשתות.", descEn: "Windows, doors, screens." },
  { id: "d17", kind: "job", trade: "reno", trades: ["reno", "gypsum", "paint"], city: "beer", titleRu: "Ремонт под ключ 2 комн.", titleHe: "שיפוץ מפתח 2 חדרים", titleEn: "Turnkey renovation, 2 rooms", dates: "ноябрь", budget: "₪ 45,000", phone: "0501110017", name: "Beer Sheva Kablan", posterCode: "K-12480", rating: 4.7, reviews: 13, docs: true, insurance: true, descRu: "Полный косметический ремонт. Есть тухнит.", descHe: "שיפוץ קוסמטי מלא. יש תוכנית.", descEn: "Full cosmetic renovation. Plan ready." },
  { id: "d18", kind: "offer", trade: "frame", trades: ["frame", "gypsum"], cities: ["eilat"], titleRu: "Каркас и гипс — Эйлат", titleHe: "שלד וגבס — אילת", titleEn: "Framing and drywall — Eilat", phone: "0501110018", name: "Eilat Crew", posterCode: "K-12561", rating: 4.3, reviews: 6, closed: 6, descRu: "Бригада в Эйлате. Каркас, гипс, потолки.", descHe: "צוות באילת. שלד, גבס, תקרות.", descEn: "Crew in Eilat. Frames, drywall, ceilings." },
]

const store = {
  get lang() { return localStorage.getItem("bil_lang") || "ru"; },
  set lang(v) { localStorage.setItem("bil_lang", v); },
  get role() { return localStorage.getItem("bil_role") || ""; },
  set role(v) { localStorage.setItem("bil_role", v); },
  get tab() { return localStorage.getItem("bil_tab") || "feed"; },
  set tab(v) { localStorage.setItem("bil_tab", v); },
  get filter() { return localStorage.getItem("bil_filter") || "all"; },
  set filter(v) { localStorage.setItem("bil_filter", v); },
  get cityFilter() { return localStorage.getItem("bil_cityf") || "all"; },
  set cityFilter(v) { localStorage.setItem("bil_cityf", v); },
  get kind() { return localStorage.getItem("bil_kind") || "all"; },
  set kind(v) { localStorage.setItem("bil_kind", v); },
  get board() { return localStorage.getItem("bil_board") || "feed"; },
  set board(v) { localStorage.setItem("bil_board", v); },
  get q() { return localStorage.getItem("bil_q") || ""; },
  set q(v) { localStorage.setItem("bil_q", v); },
  get openRev() { return localStorage.getItem("bil_openrev") || ""; },
  set openRev(v) { localStorage.setItem("bil_openrev", v); },
  get openJob() { return localStorage.getItem("bil_openjob") || ""; },
  set openJob(v) { localStorage.setItem("bil_openjob", v); },
  extraRevs() { try { return JSON.parse(localStorage.getItem("bil_extra_revs") || "{}"); } catch { return {}; } },
  saveExtraRevs(map) { localStorage.setItem("bil_extra_revs", JSON.stringify(map)); },
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
const CLOUD_URL = "https://crudcrud.com/api/b2ae0bb077fd48628c21911d429fa9fc/jobs";
let cloudCache = [];
let cloudOk = false;

function slimJob(j) {
  const copy = { ...j };
  delete copy._id;
  if (copy.planData && String(copy.planData).length > 70000) copy.planData = "";
  if (Array.isArray(copy.extraDocs)) {
    copy.extraDocs = copy.extraDocs.map((f) => {
      const data = f && f.data && String(f.data).length > 70000 ? "" : (f && f.data) || "";
      return { name: (f && f.name) || "", data };
    });
  }
  return copy;
}
async function cloudLoad() {
  try {
    const res = await fetch(CLOUD_URL);
    if (!res.ok) throw new Error("cloud");
    const list = await res.json();
    cloudCache = Array.isArray(list) ? list : [];
    cloudOk = true;
  } catch (e) {
    cloudOk = false;
  }
  return cloudCache;
}
async function cloudSave(job) {
  const body = JSON.stringify(slimJob(job));
  try {
    if (job.cloudId) {
      const res = await fetch(CLOUD_URL + "/" + job.cloudId, { method: "PUT", headers: { "Content-Type": "application/json" }, body });
      if (!res.ok) throw new Error("put");
      cloudOk = true;
      return job.cloudId;
    }
    const res = await fetch(CLOUD_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body });
    if (!res.ok) throw new Error("post");
    const saved = await res.json();
    cloudOk = true;
    return saved._id || "";
  } catch (e) {
    cloudOk = false;
    return "";
  }
}
async function cloudDelete(cloudId) {
  if (!cloudId) return false;
  try {
    const res = await fetch(CLOUD_URL + "/" + cloudId, { method: "DELETE" });
    return res.ok || res.status === 404;
  } catch (e) {
    return false;
  }
}
async function removeMyJob(id) {
  if (!id) return;
  if (!confirm(t("confirmDelete"))) return;
  const local = store.jobs().find((j) => j.id === id);
  const cloud = publicJobs().find((j) => j.id === id);
  const job = local || cloud;
  if (job && job.cloudId) await cloudDelete(job.cloudId);
  store.saveJobs(store.jobs().filter((j) => j.id !== id));
  cloudCache = cloudCache.filter((j) => j && j.id !== id);
  if (store.openJob === id) store.openJob = "";
  await cloudLoad();
  render();
}
async function cloudPushLocal() {
  const list = store.jobs();
  let changed = false;
  for (let i = 0; i < list.length; i++) {
    if (!list[i].cloudId) {
      const id = await cloudSave(list[i]);
      if (id) { list[i] = { ...list[i], cloudId: id }; changed = true; }
    }
  }
  if (changed) store.saveJobs(list);
}
function publicJobs() {
  const map = {};
  cloudCache.forEach((j) => { if (j && j.id) map[j.id] = j; });
  store.jobs().forEach((j) => { map[j.id] = { ...(map[j.id] || {}), ...j }; });
  return Object.values(map);
}



const ICO = {
  tile: "M4 10l8-6 8 6v10H4V10zm8 2v6",
  elec: "M13 2L4 14h7l-1 8 9-12h-7l1-8z",
  paint: "M12 3l7 7-8 8H6v-5l6-10zM5 20h14",
  plumb: "M7 3h4v8H7zM11 7h6v4H11zM15 11v8M12 19h6",
  gypsum: "M4 6h16v4H4zM4 12h7v6H4zM13 12h7v6h-7z",
  ac: "M12 4v16M4 12h16M7 7l10 10M17 7L7 17",
  alum: "M4 6h16v12H4zM8 6v12M16 6v12",
  frame: "M3 20h18M6 20V8l6-4 6 4v12M10 20v-6h4v6",
  reno: "M4 11l8-7 8 7v9H4v-9zm6 9v-6h4v6",
  other: "M4 20l2-2 12-12 2 2L8 20H4zm12-14l2 2",
  city: "M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zm0-8a3 3 0 110-6 3 3 0 010 6z",
  date: "M7 3v3M17 3v3M4 8h16M5 5h14a1 1 0 011 1v14H4V6a1 1 0 011-1z",
  money: "M12 3v18M8 7h5a3 3 0 010 6H9a3 3 0 000 6h7",
  plan: "M4 6l8-3 8 3v12l-8 3-8-3V6zm8-3v18M8 9l8 3M8 13l8 3",
  phone: "M7 3h10v18H7zM11 18h2",
  name: "M12 12a4 4 0 100-8 4 4 0 000 8zM5 20a7 7 0 0114 0",
  feed: "M8 6h13M8 12h13M8 18h13M4 6v.01M4 12v.01M4 18v.01",
  job: "M8 7V5h8v2M5 7h14v13H5V7z",
  profile: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 20c1.5-3 4-5 8-5s6.5 2 8 5",
  more: "M5 12h.01M12 12h.01M19 12h.01",
  contractor: "M4 20h16M6 20V9l6-5 6 5v11M10 20v-5h4v5",
  worker: "M14.7 6.3a4 4 0 11-5.4 0M9 10l-5 9h16l-5-9",
};
function t(key) { return (I18N[store.lang] || I18N.ru)[key] || key; }
function ico(id) {
  const pics = { tile:1, elec:1, paint:1, plumb:1, gypsum:1, ac:1, alum:1, frame:1, reno:1, facade:1, other:1, contractor:1, worker:1, profile:1 };
  if (pics[id]) {
    const file = id === "facade" ? "paint" : id;
    return `<span class="picwrap"><img class="icon pic" src="icons/${file}.gif?v=24" alt="" /></span>`;
  }
  const d = ICO[id];
  if (!d) return "";
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
}
function loc(row) {
  if (!row) return "";
  if (store.lang === "he") return row[2];
  if (store.lang === "en") return row[3] || row[1];
  return row[1];
}
function tradeName(id) {
  const row = TRADES.find((x) => x[0] === id);
  if (!row) return id;
  return loc(row);
}
function tradeLabel(id) { return `${ico(id)}${tradeName(id)}`; }
function flagLabel(id) { return t("flag_" + id); }
function flagHint(id) { return t("flag_" + id + "_h"); }
function flagsHtml(ids) {
  return (ids || []).filter((id) => FLAG_MARK[id]).map((id) =>
    `<button type="button" class="flag" data-flag-info="${id}" title="${flagHint(id)}">${FLAG_MARK[id]} ${flagLabel(id)}</button>`
  ).join("");
}
function flagChecks(name, selected) {
  const on = selected || [];
  return FLAG_IDS.map((id) =>
    `<label class="check"><input type="checkbox" name="${name}" value="${id}" ${on.includes(id) ? "checked" : ""} /> ${FLAG_MARK[id]} ${flagLabel(id)}</label>`
  ).join("");
}
function workName(trade, id) {
  const row = (WORKS[trade] || []).find((x) => x[0] === id);
  if (!row) return id;
  return loc(row);
}
function cityName(id) {
  const row = CITIES.find((x) => x[0] === id || x[1] === id || x[2] === id);
  if (!row) return id;
  return loc(row);
}

const DEMO_REVIEWS = {
  d1: [
    { stars: 5, name: "Михаил", textRu: "Плитку положил ровно, швы аккуратные.", textHe: "ריצוף ישר ומישקים נקיים.", textEn: "Even tiling, clean joints." },
    { stars: 5, name: "Ольга", textRu: "Уложились в срок, объект чистый.", textHe: "עמדו בלוח הזמנים, האתר נקי.", textEn: "On time and the site was clean." },
    { stars: 4, name: "Avi", textRu: "Хорошая работа, чуть задержали материал.", textHe: "עבודה טובה, החומר התעכב קצת.", textEn: "Good work, materials were a bit late." },
  ],
  d2: [
    { stars: 4, name: "Сергей", textRu: "Щиток собрал нормально, объяснил схему.", textHe: "הלוח הורכב בסדר, הסביר את התוכנית.", textEn: "Panel was fine, explained the layout." },
    { stars: 5, name: "Noa", textRu: "Приехал вовремя, точки где просили.", textHe: "הגיע בזמן, הנקודות במקום.", textEn: "Arrived on time, points where asked." },
  ],
  d3: [
    { stars: 5, name: "Ирина", textRu: "Косметика на высоте, краска без полос.", textHe: "שיפוץ קוסמטי מצוין, הצבע אחיד.", textEn: "Great cosmetic job, even paint." },
    { stars: 5, name: "David", textRu: "Смета совпала с фактом.", textHe: "ההצעה תאמה את המחיר הסופי.", textEn: "Quote matched the final price." },
    { stars: 5, name: "Лена", textRu: "Можно рекомендовать.", textHe: "אפשר להמליץ.", textEn: "Would recommend." },
  ],
  d4: [
    { stars: 5, name: "Андрей", textRu: "Потолок и ниши — как в тухните.", textHe: "התקרה והנישות לפי התוכנית.", textEn: "Ceiling and niches match the plan." },
    { stars: 5, name: "Maya", textRu: "Быстро и без грязи в квартире.", textHe: "מהיר ובלי לכלוך בדירה.", textEn: "Fast and no mess in the flat." },
    { stars: 4, name: "Павел", textRu: "Короб чуть подровняли на второй день.", textHe: "תיקנו את הארגז ביום השני.", textEn: "Adjusted a box on day two." },
    { stars: 5, name: "Юлия", textRu: "Игорь знает гипс. Буду звать ещё.", textHe: "איגור מבין בגבס. אזמין שוב.", textEn: "Igor knows drywall. Will hire again." },
  ],
  "K-10421": [
    { stars: 5, name: "Андрей", textRu: "Потолок и ниши — как в тухните.", textHe: "התקרה והנישות לפי התוכנית.", textEn: "Ceiling and niches match the plan." },
    { stars: 5, name: "Maya", textRu: "Быстро и без грязи в квартире.", textHe: "מהיר ובלי לכלוך בדירה.", textEn: "Fast and no mess in the flat." },
    { stars: 5, name: "Юлия", textRu: "Игорь знает гипс.", textHe: "איגור מבין בגבס.", textEn: "Igor knows drywall." },
  ],
  "K-10802": [
    { stars: 5, name: "Игорь Г.", textRu: "Каблан платит вовремя, объект понятный.", textHe: "הקבלן משלם בזמן, הפרויקט ברור.", textEn: "Pays on time, clear site." },
    { stars: 4, name: "Yossi", textRu: "ТЗ нормальное, чуть много правок.", textHe: "המפרט בסדר, קצת יותר מדי תיקונים.", textEn: "Brief was fine, a few extra changes." },
  ],
  "K-11017": [
    { stars: 5, name: "Dana", textRu: "Электрика по стандарту, аккуратно.", textHe: "חשמל לפי התקן, עבודה נקייה.", textEn: "Electrical to code, tidy." },
    { stars: 4, name: "Роман", textRu: "Приехал на день позже, работу сделал.", textHe: "הגיע באיחור של יום, אבל סיים.", textEn: "A day late, but finished the job." },
  ],
  d11: [
    { stars: 5, name: "Лена", textRu: "Плитка в ванной идеально.", textHe: "הריצוף בחדר הרחצה מושלם.", textEn: "Bathroom tile is perfect." },
    { stars: 5, name: "Itay", textRu: "Быстро и чисто.", textHe: "מהיר ונקי.", textEn: "Fast and clean." },
  ],
  d14: [
    { stars: 5, name: "Марина", textRu: "Протечку нашёл сразу.", textHe: "מצא את הנזילה מיד.", textEn: "Found the leak immediately." },
    { stars: 4, name: "Oren", textRu: "Цена нормальная.", textHe: "המחיר סביר.", textEn: "Fair price." },
  ],
  "K-11803": [
    { stars: 5, name: "Dana", textRu: "Саша кладёт плитку ровно.", textHe: "סשה מרצף ישר.", textEn: "Sasha lays tile straight." },
  ],
  "K-12109": [
    { stars: 5, name: "Avi", textRu: "Габи приехал ночью на протечку.", textHe: "גבי הגיע בלילה לנזילה.", textEn: "Gabi came at night for a leak." },
  ],
};

const SEED_MEMBERS = [
  { code: "K-10421", name: "Igor", role: "worker", city: "netanya", cities: ["netanya", "herzliya"], rating: 4.9, reviews: 21, docs: true, insurance: true, closed: 21, trades: ["gypsum"], phone: "0501110004", docFiles: ["bituch.pdf", "portfolio-gypsum.pdf"], aboutRu: "Гипсокартон 8 лет. Стены, потолки, ниши.", aboutHe: "גבס 8 שנים. קירות, תקרות, נישות.", aboutEn: "Drywall for 8 years. Walls, ceilings, niches." },
  { code: "K-10802", name: "Dana Build", role: "contractor", city: "tlv", rating: 4.8, reviews: 14, docs: true, closed: 14, trades: ["reno"], phone: "0501110001", docFiles: ["osek.pdf", "3room-tohnit.pdf"], aboutRu: "Каблан косметики и плитки в центре.", aboutHe: "קבלן שיפוץ קוסמטי וריצוף במרכז.", aboutEn: "Cosmetic and tile contractor in the center." },
  { code: "K-11017", name: "Yossi Electric", role: "worker", city: "rishon", cities: ["rishon", "holon"], rating: 4.6, reviews: 9, docs: true, insurance: true, closed: 9, trades: ["elec"], phone: "0501110002", docFiles: ["hashmal-license.pdf"], aboutRu: "Электрик мусмах, щитки и точки.", aboutHe: "חשמלאי מוסמך, לוחות ונקודות.", aboutEn: "Licensed electrician, panels and points." },
  { code: "K-11803", name: "Sasha Tile", role: "worker", city: "tlv", cities: ["tlv", "holon", "batyam"], rating: 4.9, reviews: 33, docs: true, insurance: true, closed: 33, trades: ["tile"], phone: "0501110011", aboutRu: "Плиточник 12 лет. Ванные и полы.", aboutHe: "רצף 12 שנה. חדרי רחצה ורצפות.", aboutEn: "Tiler 12 years. Baths and floors." },
  { code: "K-11944", name: "Alex Power", role: "worker", city: "haifa", rating: 4.7, reviews: 18, docs: true, insurance: true, closed: 18, trades: ["elec"], phone: "0501110012", aboutRu: "Электрик мусмах, Хайфа.", aboutHe: "חשמלאי מוסמך, חיפה.", aboutEn: "Licensed electrician, Haifa." },
  { code: "K-12015", name: "Roma Color", role: "worker", city: "rishon", rating: 4.6, reviews: 12, closed: 12, trades: ["paint", "reno"], phone: "0501110013", aboutRu: "Маляр и косметика.", aboutHe: "צבע ושיפוץ קוסמטי.", aboutEn: "Painter and cosmetic work." },
  { code: "K-12109", name: "Gabi Plumb", role: "worker", city: "ashdod", rating: 4.8, reviews: 22, docs: true, insurance: true, closed: 22, trades: ["plumb"], phone: "0501110014", aboutRu: "Сантехник Ашдод / Ашкелон.", aboutHe: "אינסטלטור אשדוד / אשקלון.", aboutEn: "Plumber Ashdod / Ashkelon." },
  { code: "K-12270", name: "CoolIL", role: "worker", city: "tlv", rating: 4.5, reviews: 15, insurance: true, closed: 15, trades: ["ac"], phone: "0501110015", aboutRu: "Кондиционеры по центру.", aboutHe: "מזגנים במרכז.", aboutEn: "AC in the center." },
  { code: "K-11230", name: "Haifa Home", role: "contractor", city: "haifa", rating: 4.5, reviews: 8, docs: true, closed: 8, trades: ["plumb", "reno"], phone: "0501110005", aboutRu: "Каблан Хайфа, сантехника и ремонт.", aboutHe: "קבלן חיפה, אינסטלציה ושיפוץ.", aboutEn: "Haifa contractor, plumbing and reno." },
  { code: "K-12480", name: "Beer Sheva Kablan", role: "contractor", city: "beer", rating: 4.7, reviews: 13, docs: true, insurance: true, closed: 13, trades: ["reno"], phone: "0501110017", aboutRu: "Ремонт под ключ в Беэр-Шеве.", aboutHe: "שיפוץ מפתח בבאר שבע.", aboutEn: "Turnkey renovation in Beersheba." },
];

function nextCode() {
  const used = new Set(store.users().map((u) => u.code).concat(SEED_MEMBERS.map((m) => m.code)));
  let n = 10000 + store.users().length;
  let code = "K-" + n;
  while (used.has(code)) { n += 1; code = "K-" + n; }
  return code;
}
function ensureCodes() {
  const users = store.users().map((u) => u.code ? u : { ...u, code: nextCode() });
  if (JSON.stringify(users) !== JSON.stringify(store.users())) store.saveUsers(users);
}
function memberList() {
  ensureCodes();
  const fromUsers = store.users().map((u) => {
    const mine = u.phone === store.session;
    const p = mine ? store.profile() : {};
    const r = mine ? myRep() : {};
    return {
      code: u.code,
      name: u.name || p.name || u.phone,
      role: u.role || "contractor",
      city: p.city || u.city || "",
      rating: r.avg || u.rating || 0,
      reviews: r.count || u.reviews || 0,
      docs: r.docs || u.docs,
      insurance: r.insurance || u.insurance,
      closed: r.closed || u.closed || 0,
      phone: u.phone,
      trades: u.trades || p.trades || [],
      flags: u.flags || p.flags || [],
      photo: p.photo || u.photo || "",
    };
  });
  return fromUsers.concat(SEED_MEMBERS.filter((s) => !fromUsers.some((u) => u.code === s.code)));
}
function myRep() {
  const p = store.profile();
  const list = p.reviews || [];
  const avg = list.length ? list.reduce((s, r) => s + Number(r.stars || 0), 0) / list.length : 0;
  return {
    avg: Math.round(avg * 10) / 10,
    count: list.length,
    phone: Boolean(store.session || p.phone),
    docs: Boolean(p.docs),
    insurance: Boolean(p.insurance),
    closed: Number(p.closed || 0),
    warn: Boolean(p.warn),
  };
}
function starsHtml(score, count) {
  if (!count) return `<span class="meta">${t("noRating")}</span>`;
  const full = Math.round(score);
  return `<span class="stars">${"★".repeat(full)}${"☆".repeat(Math.max(0, 5 - full))} <b>${score}</b> · ${count}</span>`;
}
function badgesHtml(item) {
  const bits = [];
  if (item.phone) bits.push(`<span class="tag">${t("badgePhone")}</span>`);
  if (item.docs) bits.push(`<span class="tag">${t("badgeDocs")}</span>`);
  if (item.insurance) bits.push(`<span class="tag">${t("badgeIns")}</span>`);
  if (item.closed) bits.push(`<span class="tag">${t("badgeJobs")}: ${item.closed}</span>`);
  if (item.warn) bits.push(`<span class="tag warn">${t("badgeWarn")}</span>`);
  return bits.join("");
}
function reviewText(r) {
  if (store.lang === "he") return r.textHe || r.textRu || r.text || "";
  if (store.lang === "en") return r.textEn || r.textRu || r.text || "";
  return r.textRu || r.text || "";
}
function reviewsFor(id) {
  const extra = store.extraRevs()[id] || [];
  return (DEMO_REVIEWS[id] || []).concat(extra);
}
function reviewsBox(id, kind) {
  const open = store.openRev === id;
  const list = reviewsFor(id);
  const shown = list.map((r) => `<div class="review-item"><b>★${r.stars}</b> ${r.name || t("reviews")} — ${reviewText(r)}</div>`).join("");
  const form = `<form class="review-write" data-rev-target="${id}">
    <label>${kind === "worker" || kind === "offer" ? t("writeReview") : t("writeReviewC")}</label>
    <select name="stars"><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select>
    <textarea name="text" placeholder="${t("reviewText")}"></textarea>
    <button class="btn" type="submit">${t("sendReview")}</button>
  </form>`;
  return `<button class="btn ghost" type="button" data-open-rev="${id}">${open ? t("hideReviews") : t("viewReviews")}</button>
    ${open ? `<div class="reviews">${shown || `<div class="meta">${t("noRating")}</div>`}${form}</div>` : ""}`;
}
function setLang(lang) {
  store.lang = lang;
  document.documentElement.lang = lang === "he" ? "he" : lang === "en" ? "en" : "ru";
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
      <button class="${store.lang === "en" ? "on" : ""}" data-lang="en">EN</button>
    </div>`;

  const user = store.user();
  if (user && user.role) store.role = user.role;

  let main = "";
  if (store.tab === "feed" && String(store.openJob).startsWith("member:")) main = viewMemberDetail(store.openJob.slice(7));
  else if (store.tab === "feed" && store.openJob) main = viewJobDetail(store.openJob);
  else if (store.tab === "feed") main = store.board === "members" ? viewMembers() : store.board === "rating" ? viewRatingBoard() : viewFeed();
  else if (store.tab === "new" || store.tab === "order") main = !user ? viewAuth() : viewNew();
  else if (store.tab === "work") main = !user ? viewAuth() : viewSeek();
  else if (store.tab === "mine" || store.tab === "history") main = user ? viewMine(store.tab === "history") : viewAuth();
  else if (store.tab === "profile") main = user ? viewProfile() : viewAuth();
  else main = `<div class="card"><p>${t("ad")}</p><p class="meta">${t("demo")}</p></div>`;

  app.innerHTML = `
    <div class="app">
      <div class="top"><div class="logo">${t("brand")}<span>.</span></div>${langBar}</div>
      ${main}
      <nav class="nav">
        <button data-tab="feed" class="${store.tab === "feed" ? "on" : ""}">${ico("feed")}${t("feed")}</button>
        <button data-tab="order" class="${store.tab === "order" || store.tab === "new" ? "on" : ""}">${ico("contractor")}${t("postOrder")}</button>
        <button data-tab="work" class="${store.tab === "work" ? "on" : ""}">${ico("worker")}${t("postWork")}</button>
        <button data-tab="profile" class="${store.tab === "profile" || store.tab === "mine" || store.tab === "history" ? "on" : ""}">${ico("profile")}${t("profile")}</button>
      </nav>
    </div>`;
  bind();
}

function boardNav() {
  return `<div class="filters">
    <button class="chip ${store.board === "feed" ? "on" : ""}" data-board="feed">${t("boardFeed")}</button>
    <button class="chip ${store.board === "members" ? "on" : ""}" data-board="members">${t("members")}</button>
    <button class="chip ${store.board === "rating" ? "on" : ""}" data-board="rating">${t("ratingBoard")}</button>
  </div>`;
}
function cityChips() {
  const opts = [`<option value="all">${t("all")}</option>`]
    .concat(CITIES.map((row) => `<option value="${row[0]}" ${store.cityFilter === row[0] ? "selected" : ""}>${loc(row)}</option>`))
    .join("");
  return `<div class="filters"><label class="citypick">${ico("city")}<select id="city-filter">${opts}</select></label></div>`;
}
function inCity(item) {
  if (store.cityFilter === "all") return true;
  const cities = item.cities || (item.city ? [item.city] : []);
  return cities.includes(store.cityFilter);
}

function avatarFor(key) {
  const s = String(key || "user");
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 33 + s.charCodeAt(i)) >>> 0;
  return "avatars/a" + (h % 8) + ".jpg";
}
function tradeAvatar(trades, role) {
  const pics = { tile:1, elec:1, paint:1, plumb:1, gypsum:1, ac:1, alum:1, frame:1, reno:1, facade:1, other:1 };
  const first = (trades || []).find((id) => pics[id]);
  if (first === "facade") return "icons/paint.gif?v=24";
  if (first) return "icons/" + first + ".gif?v=24";
  if (role === "worker") return "icons/worker.gif?v=24";
  return "icons/contractor.gif?v=24";
}
function face(name, photo, role, trades) {
  if (photo) return photo;
  return tradeAvatar(trades, role);
}
function jobPhoto(j) {
  if (j.planData && String(j.planData).startsWith("data:image")) return j.planData;
  if (j.photo) return j.photo;
  const trades = j.trades || (j.trade ? [j.trade] : []);
  if (trades.length) return tradeAvatar(trades, j.kind === "offer" ? "worker" : "contractor");
  if (j.kind === "offer") return "icons/worker.gif?v=24";
  return "icons/contractor.gif?v=24";
}
function memberCard(m) {
  return `<article class="card job tt-card ${m.role === "worker" ? "offer" : "order"}">
    <div class="tt-row">
      <span class="picwrap big"><img class="tt-photo" src="${face(m.name, m.photo, m.role === "worker" ? "worker" : "contractor", m.trades)}" alt="" /></span>
      <div class="tt-body">
        <div class="badge ${m.role === "worker" ? "offer" : "order"}">${m.code}</div>
        <h3>${m.name || m.code}</h3>
        <div class="meta">${m.role === "worker" ? t("nowWorker") : t("nowContractor")} · ${m.city ? ico("city") + cityName(m.city) : ""}</div>
        <div>${starsHtml(m.rating || 0, m.reviews || reviewsFor(m.code).length)}</div>
        <div class="tags">${(m.trades || []).map((id) => `<span class="tag">${tradeLabel(id)}</span>`).join("")}</div>
        <div class="flags">${flagsHtml(m.flags)}</div>
        <div class="tt-actions">
          <button class="btn ghost" type="button" data-open-member="${m.code}">${t("details")}</button>
          ${m.phone ? `<a class="btn" href="${waLink(m.phone, m.code)}">${t("wa")}</a>` : ""}
        </div>
      </div>
    </div>
    ${reviewsBox(m.code || m.name, m.role === "worker" ? "worker" : "contractor")}
  </article>`;
}
function viewMembers() {
  const q = store.q.trim().toLowerCase();
  let list = memberList();
  if (q) list = list.filter((m) => `${m.code} ${m.name} ${m.phone || ""}`.toLowerCase().includes(q));
  list = list.filter(inCity);
  return boardNav() + cityChips() + `<div class="card">
    <label>${t("searchCode")}</label>
    <input id="member-q" value="${store.q}" placeholder="K-10421" />
  </div>` + (list.map(memberCard).join("") || `<div class="empty">${t("empty")}</div>`);
}
function viewRatingBoard() {
  const list = memberList().filter((m) => m.reviews || m.closed);
  const workers = list.filter((m) => m.role === "worker").sort((a, b) => (b.rating - a.rating) || (b.closed - a.closed));
  const contractors = list.filter((m) => m.role !== "worker").sort((a, b) => (b.rating - a.rating) || (b.closed - a.closed));
  return boardNav() + `<div class="card"><b>${t("topWorkers")}</b></div>` +
    (workers.slice(0, 10).map((m, i) => `<div class="meta">${i + 1}. ${m.code} ${m.name}</div>` + memberCard(m)).join("") || `<div class="empty">${t("emptyOffers")}</div>`) +
    `<div class="card"><b>${t("topContractors")}</b></div>` +
    (contractors.slice(0, 10).map((m, i) => `<div class="meta">${i + 1}. ${m.code} ${m.name}</div>` + memberCard(m)).join("") || `<div class="empty">${t("emptyJobs")}</div>`);
}
function viewFeed() {
  const own = publicJobs().filter((j) => !j.archived);
  const all = [...own, ...DEMO];
  let filtered = all;
  const itemKind = (j) => j.kind === "offer" ? "offer" : "job";
  if (store.kind === "job") filtered = filtered.filter((j) => itemKind(j) === "job");
  if (store.kind === "offer") filtered = filtered.filter((j) => itemKind(j) === "offer");
  if (store.filter !== "all") filtered = filtered.filter((j) => (j.trades || [j.trade]).includes(store.filter));
  filtered = filtered.filter(inCity);
  const cloudNote = `<div class="meta" style="padding:0 4px 8px">${cloudOk ? t("cloudOn") : t("cloudOff")}</div>`;
  const kinds = cloudNote + `<div class="filters">
      <button class="chip ${store.board === "feed" ? "on" : ""}" data-board="feed">${t("boardFeed")}</button>
      <button class="chip ${store.board === "members" ? "on" : ""}" data-board="members">${t("members")}</button>
      <button class="chip ${store.board === "rating" ? "on" : ""}" data-board="rating">${t("ratingBoard")}</button>
    </div>
    <div class="filters">
      <button class="chip ${store.kind === "all" ? "on" : ""}" data-kind="all">${t("all")}</button>
      <button class="chip ${store.kind === "offer" ? "on" : ""}" data-kind="offer">${ico("worker")}${t("filterJobs")}</button>
      <button class="chip ${store.kind === "job" ? "on" : ""}" data-kind="job">${ico("contractor")}${t("filterOffers")}</button>
      <label class="citypick">${ico("city")}<select id="city-filter">${[`<option value="all">${t("all")}</option>`].concat(CITIES.map((row) => `<option value="${row[0]}" ${store.cityFilter === row[0] ? "selected" : ""}>${loc(row)}</option>`)).join("")}</select></label>
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
    const title = store.lang === "he" ? (j.titleHe || j.titleRu) : store.lang === "en" ? (j.titleEn || j.titleRu || j.titleHe) : (j.titleRu || j.titleHe);
    const cities = (j.cities || [j.city]).filter(Boolean).map(cityName).join(", ");
    const text = `${title} — ${cities}`;
    return `<article class="card job tt-card ${offer ? "offer" : "order"}">
      <div class="tt-row">
        <span class="picwrap big"><img class="tt-photo" src="${jobPhoto(j)}" alt="" /></span>
        <div class="tt-body">
          <div class="badge ${offer ? "offer" : "order"}">${offer ? t("badgeOffer") : t("badgeJob")}</div>
          <h3>${title}</h3>
          <div class="meta">${j.name ? j.name + " · " : ""}${cities}${j.dates ? " · " + j.dates : ""}</div>
          <div>${starsHtml(j.rating || 0, j.reviews || reviewsFor(j.id).length)}</div>
          <div class="tags">${(j.trades || [j.trade]).filter(Boolean).map((id) => `<span class="tag">${tradeLabel(id)}</span>`).join("")}${!offer && j.budget ? `<span class="tag">${j.budget}</span>` : ""}</div>
          <div class="flags">${flagsHtml(j.flags)}</div>
          <div class="tt-actions">
            <button class="btn ghost" type="button" data-open-job="${j.id}">${t("details")}</button>
            <a class="btn" href="${waLink(j.phone, text)}">${t("wa")}</a>
          </div>
        </div>
      </div>
      ${reviewsBox(j.id || j.phone, offer ? "offer" : "job")}
    </article>`;
  }).join("");
}

function findJob(id) {
  return publicJobs().concat(DEMO).find((j) => j.id === id) || null;
}
function findPoster(job) {
  if (!job) return null;
  const list = memberList();
  return list.find((m) => m.code && m.code === job.posterCode)
    || list.find((m) => m.phone && job.phone && m.phone === job.phone)
    || {
      code: job.posterCode || "—",
      name: job.name || job.phone || t("postedBy"),
      role: job.kind === "offer" ? "worker" : "contractor",
      city: job.city,
      rating: job.rating || 0,
      reviews: job.reviews || 0,
      docs: job.docs,
      insurance: job.insurance,
      closed: job.closed || 0,
      phone: job.phone,
      trades: job.trades || [job.trade],
    };
}
function viewMemberDetail(code) {
  const m = memberList().find((x) => x.code === code) || SEED_MEMBERS.find((x) => x.code === code);
  if (!m) return `<div class="card"><button class="btn ghost" data-close-job="1">${t("back")}</button><p>${t("empty")}</p></div>`;
  const worker = m.role === "worker";
  const about = store.lang === "he" ? (m.aboutHe || m.aboutRu || "") : store.lang === "en" ? (m.aboutEn || m.aboutRu || "") : (m.aboutRu || "");
  const cities = (m.cities || [m.city]).filter(Boolean).map(cityName).join(", ");
  const files = m.docFiles || [];
  const seed = SEED_MEMBERS.find((x) => x.code === code) || {};
  const allFiles = files.length ? files : (seed.docFiles || []);
  const text = about || seed.aboutRu || "";
  return `${boardNav()}
    <button class="btn ghost" data-close-job="1">${t("back")}</button>
    <article class="card job ${worker ? "offer" : "order"}">
      <div class="badge ${worker ? "offer" : "order"}">${m.code}</div>
      <h3>${m.name}</h3>
      <div class="meta">${worker ? t("nowWorker") : t("nowContractor")} · ${ico("city")}${cities}</div>
      <div>${starsHtml(m.rating || 0, m.reviews || reviewsFor(m.code).length)}</div>
      <div class="tags">${(m.trades || []).map((id) => `<span class="tag">${tradeLabel(id)}</span>`).join("")}${badgesHtml({ ...m, ...seed })}</div>
      <b>${worker ? t("offerDetails") : t("jobDetails")}</b>
      <p>${text || t("empty")}</p>
      <b>${t("documents")}</b>
      ${allFiles.length ? allFiles.map((n) => `<div class="plan-name">📄 ${n}</div>`).join("") : `<div class="meta">${t("noDocs")}</div>`}
      ${reviewsBox(m.code, worker ? "worker" : "contractor")}
      ${m.phone || seed.phone ? `<a class="btn" href="${waLink(m.phone || seed.phone, m.code)}">${t("wa")}</a>` : ""}
    </article>`;
}
function fileView(name, data) {
  if (!name && !data) return "";
  const raw = String(data || "");
  const isImg = raw.startsWith("data:image");
  if (isImg) {
    return `<a class="file-open" href="${raw}" target="_blank" rel="noopener">
      <img class="plan-preview" src="${raw}" alt="${name || ""}" />
      <span class="plan-name">${t("openFile")}${name ? " — " + name : ""}</span>
    </a>`;
  }
  if (raw.startsWith("data:")) {
    return `<a class="btn ghost" href="${raw}" target="_blank" rel="noopener" download="${name || "file"}">${t("openFile")} ${name || ""}</a>`;
  }
  return name ? `<div class="plan-name">📄 ${name}</div>` : "";
}
function viewJobDetail(id) {
  const j = findJob(id);
  if (!j) return `<div class="card"><button class="btn ghost" data-close-job="1">${t("back")}</button><p>${t("empty")}</p></div>`;
  const offer = j.kind === "offer";
  const title = store.lang === "he" ? (j.titleHe || j.titleRu) : store.lang === "en" ? (j.titleEn || j.titleRu) : (j.titleRu || j.titleHe);
  const desc = store.lang === "he" ? (j.descHe || j.descRu || j.other || "") : store.lang === "en" ? (j.descEn || j.descRu || j.other || "") : (j.descRu || j.other || "");
  const cities = (j.cities || [j.city]).filter(Boolean).map(cityName).join(", ");
  const poster = findPoster(j);
  const extra = (j.extraDocs || []).concat(j.extraName ? [{ name: j.extraName, data: j.extraData }] : []);
  const extraHtml = extra.map((f) => fileView(f.name || f, f.data)).filter(Boolean).join("")
    || (j.docFiles || []).map((n) => `<div class="plan-name">📄 ${n}</div>`).join("");
  return `${boardNav()}
    <button class="btn ghost" data-close-job="1">${t("back")}</button>
    <article class="card job ${offer ? "offer" : "order"}">
      <div class="badge ${offer ? "offer" : "order"}">${offer ? t("badgeOffer") : t("badgeJob")}</div>
      <h3>${title}</h3>
      <div>${starsHtml(j.rating || 0, j.reviews || reviewsFor(j.id).length)}</div>
      <div class="meta">${ico("city")}${cities}${j.dates ? " · " + ico("date") + j.dates : ""}${j.budget ? " · " + ico("money") + j.budget : ""}</div>
      <div class="tags">${(j.trades || [j.trade]).filter(Boolean).map((id) => `<span class="tag">${tradeLabel(id)}</span>`).join("")}</div>
      <div class="flags">${flagsHtml(j.flags)}</div>
      ${j.flags && j.flags.length ? `<div class="meta">${t("flagsHint")}</div>` : ""}
      <b>${offer ? t("offerDetails") : t("jobDetails")}</b>
      <p>${desc || t("noDesc")}</p>
      <b>${t("plan")}</b>
      ${fileView(j.planName, j.planData) || `<div class="meta">${t("noPlan")}</div>`}
      <b>${t("extraDocs")}</b>
      ${extraHtml || `<div class="meta">${t("noExtraDocs")}</div>`}
      ${reviewsBox(j.id || j.phone, offer ? "offer" : "job")}
      <a class="btn" href="${waLink(j.phone, title)}">${t("wa")}</a>
      ${isMine(j) ? `<button class="btn danger" type="button" data-del-job="${j.id}">${t("deleteJob")}</button>` : ""}
    </article>
    <div class="card">
      <b>${t("postedBy")}</b>
      ${poster ? memberCard(poster) : ""}
    </div>`;
}
function viewNew() {
  const cities = CITIES.map((row) => `<option value="${row[0]}">${loc(row)}</option>`).join("");
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
    <label>${t("extraDocs")}</label>
    <input type="file" name="docs" accept="image/*,.pdf,application/pdf" multiple />
    <div class="plan-name">${t("extraDocsHint")}</div>
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
    <label>${t("flagsNeed")}</label>
    <div class="checkgrid">${flagChecks("flags", [])}</div>
    <div class="plan-name">${t("flagsHint")}</div>
    <div style="height:10px"></div>
    <button class="btn" type="submit">${t("post")}</button>
  </form>`;
}

function viewSeek() {
  const p = store.profile();
  const picked = p.cities || (p.city ? [p.city] : []);
  const selected = p.trades || [];
  const checks = TRADES.filter(([id]) => id !== "other").map(([id]) => `<label class="check"><input type="checkbox" name="trades" value="${id}" ${selected.includes(id) ? "checked" : ""} /> ${tradeLabel(id)}</label>`).join("");
  const cityChecks = CITIES.map((row) => `<label class="check"><input type="checkbox" name="cities" value="${row[0]}" ${picked.includes(row[0]) ? "checked" : ""} /> ${loc(row)}</label>`).join("");
  return `<form class="card" id="seek-form">
    <p>${t("seekHint")}</p>
    <label>${ico("name")}${t("name")}</label><input name="name" value="${p.name || ""}" />
    <label>${t("tradesNeed")}</label>
    <div class="checkgrid">${checks}</div>
    <div id="works-box"></div>
    <label>${ico("city")}${t("city")}</label>
    <div class="checkgrid">${cityChecks}</div>
    <label>${ico("phone")}${t("phone")}</label><input name="phone" value="${p.phone || ""}" placeholder="050..." />
    <label>${t("flagsHave")}</label>
    <div class="checkgrid">${flagChecks("flags", p.flags || [])}</div>
    <div class="plan-name">${t("flagsHint")}</div>
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

function viewReputation() {
  const p = store.profile();
  const r = myRep();
  const code = p.code || (store.user() && store.user().code) || "";
  const files = (p.docFiles || []).map((n) => `<div class="plan-name">${n}</div>`).join("");
  return `<div class="card profile-bg">
    <b>${t("memberCode")}</b>
    <h3>${code || "—"}</h3>
    <b>${t("rating")}</b>
    <div>${starsHtml(r.avg, r.count)}</div>
    <div class="tags">${badgesHtml(r)}</div>
    <p class="meta">${t("docsHint")}</p>
    <label class="check"><input type="checkbox" id="flag-docs" ${p.docs ? "checked" : ""} /> ${t("badgeDocs")}</label>
    <label class="check"><input type="checkbox" id="flag-ins" ${p.insurance ? "checked" : ""} /> ${t("badgeIns")}</label>
    <label>${t("uploadDocs")}</label>
    <input type="file" id="doc-file" accept="image/*,.pdf,application/pdf" />
    <div class="plan-name">${t("docsList")}</div>
    ${files}
  </div>`;
}

function isMine(j) {
  const u = store.user() || {};
  const p = store.profile() || {};
  const code = u.code || p.code || "";
  const phone = p.phone || u.phone || "";
  return Boolean((code && j.posterCode === code) || (phone && j.phone === phone));
}
function viewMine(history) {
  const list = publicJobs().filter((j) => isMine(j) && (history ? j.archived : !j.archived));
  const cards = list.length
    ? list.map((j) => {
        const offer = j.kind === "offer";
        const title = j.titleRu || j.titleHe || "";
        return `<article class="card job tt-card ${offer ? "offer" : "order"}">
          <div class="tt-row">
            <span class="picwrap big"><img class="tt-photo" src="${jobPhoto(j)}" alt="" /></span>
            <div class="tt-body">
              <div class="badge ${offer ? "offer" : "order"}">${offer ? t("badgeOffer") : t("badgeJob")}</div>
              <h3>${title}</h3>
              <div class="meta">${(j.cities || [j.city]).filter(Boolean).map(cityName).join(", ")}${j.dates ? " · " + j.dates : ""}</div>
              <div class="tt-actions">
                <button class="btn ghost" type="button" data-open-job="${j.id}">${t("details")}</button>
                <button class="btn" type="button" data-archive="${j.id}" data-arch="${history ? "0" : "1"}">${history ? t("toActive") : t("toHistory")}</button>
                <button class="btn danger" type="button" data-del-job="${j.id}">${t("deleteJob")}</button>
              </div>
            </div>
          </div>
        </article>`;
      }).join("")
    : `<div class="empty">${history ? t("emptyHistory") : t("emptyMine")}</div>`;
  return `<div class="card page-head">
      <button class="btn ghost" type="button" data-tab="profile">${t("backProfile")}</button>
      <h2>${history ? t("myHistory") : t("myActive")}</h2>
      <p class="meta">${history ? t("myHistoryHint") : t("myActiveHint")}</p>
    </div>${cards}`;
}
function viewProfile() {
  const p = store.profile();
  const r = myRep();
  const code = p.code || (store.user() && store.user().code) || "";
  const cities = CITIES.map((row) => `<option value="${row[0]}" ${p.city === row[0] ? "selected" : ""}>${loc(row)}</option>`).join("");
  return `<div class="card profile-bg page-head">
    <img class="avatar lg" src="${face(p.name, p.photo, store.role === "worker" ? "worker" : "contractor", p.trades)}" alt="" />
    <h2>${p.name || t("myPage")}</h2>
    <div class="meta">${code} · ${store.role === "worker" ? t("nowWorker") : t("nowContractor")}</div>
    <div class="flags">${flagsHtml(p.flags)}</div>
    <div>${starsHtml(r.avg, r.count)}</div>
    <div class="stats">
      <div><b>${r.closed}</b><span>${t("worksCount")}</span></div>
      <div><b>${r.count}</b><span>${t("reviews")}</span></div>
      <div><b>${r.avg || "—"}</b><span>${t("rating")}</span></div>
    </div>
    <label class="filebtn">${t("photo")}
      <input type="file" id="photo-file" accept="image/*" />
    </label>
    <div class="mine-row">
      <button type="button" class="mine-tile" data-tab="mine">${ico("job")}<b>${t("myActive")}</b><span>${t("myActiveHint")}</span></button>
      <button type="button" class="mine-tile" data-tab="history">${ico("date")}<b>${t("myHistory")}</b><span>${t("myHistoryHint")}</span></button>
    </div>
  </div>
  <form class="card profile-bg" id="prof-form">
    <label>${ico("name")}${t("name")}</label><input name="name" value="${p.name || ""}" />
    <label>${ico("city")}${t("city")}</label><select name="city">${cities}</select>
    <label>${ico("phone")}${t("phone")}</label><input name="phone" value="${p.phone || ""}" />
    <label>${t("flagsHave")}</label>
    <div class="checkgrid">${flagChecks("flags", p.flags || [])}</div>
    <div class="plan-name">${t("flagsHint")}</div>
    <div style="height:10px"></div>
    <button class="btn" type="submit">${t("save")}</button>
  </form>
  ${viewReputation()}
  <div class="card">
    <button class="btn ghost" data-logout="1">${t("logout")}</button>
  </div>`;
}

function bind() {
  document.querySelectorAll("[data-lang]").forEach((b) => b.onclick = () => { setLang(b.dataset.lang); render(); });
  document.querySelectorAll("[data-role]").forEach((b) => b.onclick = () => { store.role = b.dataset.role; store.tab = "feed"; render(); });
  document.querySelectorAll("[data-tab]").forEach((b) => b.onclick = () => { store.tab = b.dataset.tab; render(); });
  document.querySelectorAll("[data-filter]").forEach((b) => b.onclick = () => { store.filter = b.dataset.filter; render(); });
  document.querySelectorAll("[data-city]").forEach((b) => b.onclick = () => { store.cityFilter = b.dataset.city; render(); });
  const photo = document.getElementById("photo-file");
  if (photo) photo.onchange = () => {
    const f = photo.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => { store.saveProfile({ ...store.profile(), photo: reader.result }); render(); };
    reader.readAsDataURL(f);
  };
  document.querySelectorAll("[data-kind]").forEach((b) => b.onclick = () => { store.kind = b.dataset.kind; render(); });
  document.querySelectorAll("[data-board]").forEach((b) => b.onclick = () => { store.board = b.dataset.board; store.openJob = ""; store.tab = "feed"; render(); });
  document.querySelectorAll("[data-open-job]").forEach((b) => b.onclick = () => { store.openJob = b.dataset.openJob; store.tab = "feed"; render(); });
  document.querySelectorAll("[data-open-member]").forEach((b) => b.onclick = () => { store.openJob = "member:" + b.dataset.openMember; store.tab = "feed"; render(); });
  document.querySelectorAll("[data-flag-info]").forEach((b) => {
    b.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      alert(FLAG_MARK[b.dataset.flagInfo] + " " + flagLabel(b.dataset.flagInfo) + "\n\n" + flagHint(b.dataset.flagInfo));
    };
  });
  document.querySelectorAll("[data-del-job]").forEach((b) => {
    b.onclick = () => removeMyJob(b.dataset.delJob);
  });
  document.querySelectorAll("[data-archive]").forEach((b) => {
    b.onclick = async () => {
      const id = b.dataset.archive;
      const on = b.dataset.arch === "1";
      const list = store.jobs().map((j) => j.id === id ? { ...j, archived: on } : j);
      store.saveJobs(list);
      const job = list.find((j) => j.id === id) || publicJobs().find((j) => j.id === id);
      if (job) {
        const cloudId = job.cloudId || await cloudSave({ ...job, archived: on });
        if (cloudId && !job.cloudId) store.saveJobs(store.jobs().map((j) => j.id === id ? { ...j, cloudId } : j));
        else if (job.cloudId) await cloudSave({ ...job, archived: on });
      }
      await cloudLoad();
      render();
    };
  });
  document.querySelectorAll("[data-close-job]").forEach((b) => b.onclick = () => { store.openJob = ""; render(); });
  document.querySelectorAll("[data-open-rev]").forEach((b) => b.onclick = () => {
    store.openRev = store.openRev === b.dataset.openRev ? "" : b.dataset.openRev;
    render();
  });
  document.querySelectorAll("form.review-write").forEach((form) => {
    form.onsubmit = (e) => {
      e.preventDefault();
      if (!store.session) { alert(t("needLoginReview")); store.tab = "profile"; render(); return; }
      const f = new FormData(form);
      const id = form.dataset.revTarget;
      const map = store.extraRevs();
      map[id] = (map[id] || []).concat([{
        stars: Number(f.get("stars")),
        text: String(f.get("text") || ""),
        textRu: String(f.get("text") || ""),
        name: store.profile().name || t("reviews"),
      }]);
      store.saveExtraRevs(map);
      store.openRev = id;
      render();
    };
  });
  const cf = document.getElementById("city-filter");
  if (cf) cf.onchange = () => { store.cityFilter = cf.value; render(); };
  const mq = document.getElementById("member-q");
  if (mq) mq.onchange = mq.onkeyup = () => { store.q = mq.value; }; 
  if (mq) mq.addEventListener("keydown", (e) => { if (e.key === "Enter") { store.q = mq.value; render(); } });
  const docFile = document.getElementById("doc-file");
  if (docFile) docFile.onchange = () => {
    const f = docFile.files[0];
    if (!f) return;
    const p = store.profile();
    store.saveProfile({ ...p, docs: true, docFiles: (p.docFiles || []).concat([f.name]) });
    render();
  };
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
      code: nextCode(),
    };
    store.saveUsers(store.users().concat(user));
    store.session = phone;
    store.role = user.role;
    store.saveProfile({ ...store.profile(), name: user.name, phone, trades, code: user.code });
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
    store.saveProfile({ ...store.profile(), name: user.name, phone: user.phone, trades: user.trades || [], code: user.code || nextCode() });
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
    const readOne = (file) => new Promise((resolve) => {
      if (!file) { resolve({ name: "", data: "" }); return; }
      if (file.size >= 900000) { resolve({ name: file.name, data: "" }); return; }
      const reader = new FileReader();
      reader.onload = () => resolve({ name: file.name, data: String(reader.result || "") });
      reader.readAsDataURL(file);
    });
    const planFile = job.querySelector("input[name=plan]").files[0];
    const plan = await readOne(planFile);
    const extraFiles = [...(job.querySelector("input[name=docs]")?.files || [])];
    const extraDocs = [];
    for (const file of extraFiles.slice(0, 4)) extraDocs.push(await readOne(file));
    const descText = [...workLabels, other].filter(Boolean).join(". ");
    const list = store.jobs();
    list.unshift({
      id: "j" + Date.now(),
      kind: "job",
      trade: trades[0],
      trades,
      city: f.get("city"),
      titleRu: title,
      titleHe: title,
      titleEn: title,
      dates,
      budget,
      phone: f.get("phone"),
      planName: plan.name,
      planData: plan.data,
      extraDocs,
      flags: [...job.querySelectorAll("input[name=flags]:checked")].map((x) => x.value),
      other,
      descRu: descText,
      descHe: descText,
      descEn: descText,
      posterCode: (store.user() && store.user().code) || store.profile().code || "",
      name: store.profile().name || "",
      docs: Boolean(store.profile().docs),
      insurance: Boolean(store.profile().insurance),
      archived: false,
    });
    store.saveJobs(list);
    const cloudId = await cloudSave(list[0]);
    if (cloudId) {
      list[0].cloudId = cloudId;
      store.saveJobs(list);
    }
    store.tab = "mine";
    await cloudLoad();
    render();
  };
  const seek = document.getElementById("seek-form");
  if (seek) seek.onsubmit = async (e) => {
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
    const title = workLabels.filter(Boolean).join(", ") || trades.map(tradeName).join(", ") || name;
    const flags = [...seek.querySelectorAll("input[name=flags]:checked")].map((x) => x.value);
    store.saveProfile({
      ...store.profile(),
      name,
      city: cities[0] || "",
      cities,
      phone,
      trades,
      works,
      flags,
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
      titleEn: title,
      phone,
      name,
      flags,
      posterCode: (store.user() && store.user().code) || store.profile().code || "",
      docs: Boolean(store.profile().docs),
      insurance: Boolean(store.profile().insurance),
      closed: Number(store.profile().closed || 0),
      archived: false,
    });
    store.saveJobs(list);
    const cloudId = await cloudSave(list[0]);
    if (cloudId) {
      list[0].cloudId = cloudId;
      store.saveJobs(list);
    }
    store.tab = "mine";
    await cloudLoad();
    render();
  };
  const docs = document.getElementById("flag-docs");
  const ins = document.getElementById("flag-ins");
  if (docs) docs.onchange = () => store.saveProfile({ ...store.profile(), docs: docs.checked });
  if (ins) ins.onchange = () => store.saveProfile({ ...store.profile(), insurance: ins.checked });
  const closedBtn = document.getElementById("btn-closed");
  if (closedBtn) closedBtn.onclick = () => {
    const p = store.profile();
    store.saveProfile({ ...p, closed: Number(p.closed || 0) + 1 });
    render();
  };
  const review = document.getElementById("review-form");
  if (review) review.onsubmit = (e) => {
    e.preventDefault();
    const f = new FormData(review);
    const p = store.profile();
    const reviews = (p.reviews || []).concat([{ stars: Number(f.get("stars")), text: String(f.get("text") || "") }]);
    store.saveProfile({ ...p, reviews });
    render();
  };
  const prof = document.getElementById("prof-form");
  if (prof) prof.onsubmit = (e) => {
    e.preventDefault();
    const f = new FormData(prof);
    const flags = [...prof.querySelectorAll("input[name=flags]:checked")].map((x) => x.value);
    store.saveProfile({
      ...store.profile(),
      name: f.get("name"),
      city: f.get("city"),
      phone: f.get("phone"),
      flags,
    });
    store.saveUsers(store.users().map((u) => u.phone === store.session ? { ...u, flags } : u));
    render();
  };
}

setLang(store.lang);
(async () => {
  await cloudLoad();
  await cloudPushLocal();
  render();
})();
