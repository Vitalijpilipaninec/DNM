/* ============================================================
   DNM — Definitely Not McDonalds — script.js (checkout + saját képek)
   ============================================================ */

/* ============ FORDÍTÁSOK ============ */
const TRANSLATIONS = {
  hu: {
    'logo.sub': 'Definitely Not McD',
    'nav.menu': 'Menü', 'nav.story': 'Történet', 'nav.location': 'Helyszín', 'nav.order': 'Rendelj most',
    'user.logout': 'Kijelentkezés',
    'hero.sub': 'Street Food · Since 2025',
    'hero.tag': '// megint éhes vagy? jó. gyere.',
    'hero.desc': 'Ez <strong>nem az a hely, ahol a "burger" szó műanyagot jelent.</strong> A nevünk vicc, a kajánk viszont <span class="highlight">halálosan komoly.</span> Minden reggel friss zsemle, helyi hús, házi szósz — és semmi, ami a fagyasztóból jön.',
    'hero.m1': 'Nem vagyunk McDonalds. <strong>Tényleg nem.</strong>',
    'hero.m2': 'Nincs bohóc. <strong>Nincs játszótér.</strong> Csak kaja.',
    'hero.m3': 'Ha a "Big Mac"-et keresed — <strong>sok szerencsét.</strong>',
    'hero.stat1': 'Termék', 'hero.stat2': 'Kategória', 'hero.stat3': 'Friss', 'hero.stat4': 'Bohóc',
    'hero.btn1': 'Menü böngészése', 'hero.btn2': 'Mi ez az egész?',
    'menu.label': '01 — A teljes menü', 'menu.title': 'Amit <em>kapsz</em>',
    'menu.search': 'Keress terméket... (pl. burger, cola, wings)',
    'filter.all': 'Összes', 'filter.vega': 'Vega', 'filter.hot': 'Csípős', 'filter.new': 'Új', 'filter.premium': 'Prémium',
    'cat.burgers': 'Burgerek', 'cat.chicken': 'Csirke & Nuggets', 'cat.wings': 'Wings', 'cat.fries': 'Fries',
    'cat.sides': 'Sides', 'cat.drinks': 'Üdítők', 'cat.shakes': 'Shake & Desszert',
    'cat.sauces': 'Szószok', 'cat.family': 'Családi', 'cat.kids': 'Gyerek',
    'no.results': 'Nincs találat. Próbálj mást keresni. (Vagy ne. Nekünk mindegy.)',
    'story.label': '02 — A sztori', 'story.title': 'Nem <em>McD</em>, az biztos',
    'story.p1': 'A DNM 2025-ben indult egy kis utcai standdal, mert elegünk lett abból, hogy a „gyorsétterem" szó egyet jelent a műanyag ízzel és a fagyasztott hússal. <strong>Nem akartunk franchise lenni.</strong> Nem akartunk drive-thrut. Csak főzni akartunk valamit, ami tényleg jó.',
    'story.p2': 'A név onnan jött, hogy mindenki azt kérdezte: „Ez most olyan, mint a McDonalds?" A válasz: <strong>definitely not.</strong> Aztán megtartottuk, mert vicces. Meg mert igaz.',
    'story.p3': 'Minden reggel friss zsemlét sütünk. A húst helyi termelőktől szerezzük be. A szószokat magunk keverjük. <strong>64 termék</strong>, de mind mögött valódi kaja áll. És egy csomó rossz vicc.',
    'story.marker': '// definitely not', 'story.stat.frozen': 'Fagyasztott',
    'loc.label': '03 — Merre találsz', 'loc.title': 'Gyere <em>éhesen</em>',
    'loc.hours': 'Nyitvatartás', 'loc.day.mon': 'Hétfő',
    'loc.closed': 'Zárva (mint a McD, de nekünk megvan az okunk)',
    'loc.day.tue.thu': 'Kedd – Csütörtök', 'loc.day.fri.sat': 'Péntek – Szombat', 'loc.day.sun': 'Vasárnap',
    'loc.address': 'Cím:', 'loc.tel': 'Tel:', 'loc.email': 'Email:',
    'cta.title': 'Éhes vagy már?', 'cta.sub': '// 64 termék. egy helyen. és nem, ez nem a McDonalds.', 'cta.btn': 'Rendelés indítása',
    'footer.desc': 'Definitely Not McDonalds. Utcai kaja, füst, neon, és semmi műanyag. 2025 óta. A bohóc nálunk nem játszik.',
    'footer.menu': 'Menü', 'footer.info': 'Info', 'footer.about': 'Rólunk', 'footer.hours': 'Nyitvatartás',
    'footer.allergens': 'Allergének', 'footer.career': 'Karrier (nem bohóckodunk)', 'footer.follow': 'Kövess',
    'footer.disclaimer': "Nem áll kapcsolatban a McDonald's-szal. Vicc volt. Nyugi. (De tényleg.)",
    'cart.title': 'Kosár', 'cart.empty.title': 'Üres a kosár',
    'cart.empty.sub': 'Ez most olyan, mint a McD kajája: üres és szomorú.',
    'cart.subtotal': 'Részösszeg', 'cart.shipping': 'Szállítás', 'cart.free': 'INGYENES',
    'cart.total': 'ÖSSZESEN', 'cart.checkout': 'Rendelés leadása',
    'cart.joke': '// tedd be a kaját, nem lesz bohóc',
    'checkout.title': 'Rendelés leadva!', 'checkout.p1': 'Kösz, hogy minket választottál.',
    'checkout.p2': 'És nem, <strong>tényleg nem</strong> vagyunk a McDonalds.',
    'checkout.joke': '// a bohóc nem jön. soha.', 'checkout.close': 'Rendben, csá',
    'auth.login': 'Bejelentkezés', 'auth.register': 'Regisztráció',
    'auth.welcome': 'Üdv újra!', 'auth.welcome.sub': 'Jelentkezz be, hogy rendelhess.',
    'auth.register.title': 'Új fiók', 'auth.register.sub': 'Pár adat és már rendelhetsz is.',
    'auth.login.btn': 'Bejelentkezés', 'auth.register.btn': 'Fiók létrehozása',
    'form.email': 'Email', 'form.email.ph': 'te@example.com',
    'form.password': 'Jelszó', 'form.password2': 'Jelszó újra',
    'form.name': 'Név', 'form.name.ph': 'Kis Pista',
    'pw.req.length': 'Minimum 8 karakter', 'pw.req.space': 'Legalább 1 szóköz',
    'pw.req.upper': 'Legalább 3 nagybetű', 'pw.req.special': 'Legalább 1 speciális karakter (!@#$%...)',
    'auth.hint': '<strong>Demo:</strong> az adatok csak a böngésződben tárolódnak (localStorage), nem kerülnek szerverre.',
    'err.name.short': 'A név legalább 2 karakter legyen.',
    'err.email.empty': 'Add meg az email címed.',
    'err.email.format': 'Érvénytelen email (pl. te@example.com).',
    'err.email.exists': 'Ez az email már regisztrálva van.',
    'err.email.notfound': 'Nincs ilyen email regisztrálva.',
    'err.password.empty': 'Add meg a jelszót.',
    'err.password.wrong': 'Hibás jelszó.',
    'err.password.match': 'A két jelszó nem egyezik.',
    'err.password.rules': 'A jelszó nem felel meg a követelményeknek.',
    'err.fill.all': 'Tölts ki minden mezőt helyesen!',
    'ok.register': 'Sikeres regisztráció! Most már bejelentkezhetsz.',
    'ok.login': 'Sikeres bejelentkezés!',
    'toast.cart.add': 'Hozzáadva a kosárhoz',
    'toast.logged.out': 'Kijelentkeztél.',
    'toast.must.login': 'Előbb jelentkezz be a rendeléshez!',
    'toast.removed': 'Termék törölve',
    'total.products': 'termék összesen',
    'items': 'termék',

    /* CHECKOUT */
    'co.step.shipping': 'Szállítás',
    'co.step.payment': 'Fizetés',
    'co.step.confirm': 'Megerősítés',
    'co.shipping.title': 'Szállítási adatok',
    'co.shipping.sub': 'Hova vigyük a kaját?',
    'co.name': 'Teljes név *', 'co.name.ph': 'Kis Pista',
    'co.phone': 'Telefonszám *', 'co.phone.ph': '+36 30 123 4567',
    'co.zip': 'Irányítószám *', 'co.zip.ph': '1052',
    'co.city': 'Város *', 'co.city.ph': 'Budapest',
    'co.street': 'Utca, házszám *', 'co.street.ph': 'Váci utca 42.',
    'co.floor': 'Emelet / ajtó', 'co.floor.ph': '3/12',
    'co.bell': 'Kapucsengő', 'co.bell.ph': 'Kis Pista',
    'co.note': 'Megjegyzés a futárnak', 'co.note.ph': 'Pl. a kapucsengő nem működik, hívj fel!',
    'co.next': 'Tovább a fizetéshez →',
    'co.back': '← Vissza',
    'co.payment.title': 'Fizetési mód',
    'co.payment.sub': 'Hogyan szeretnél fizetni?',
    'co.pay.card': 'Bankkártya', 'co.pay.card.desc': 'Visa, Mastercard, Amex',
    'co.pay.cash': 'Készpénz átvételkor', 'co.pay.cash.desc': 'A futárnál fizetsz',
    'co.pay.szep': 'SZÉP kártya', 'co.pay.szep.desc': 'OTP, K&H, MBH',
    'co.card.number': 'Kártyaszám *', 'co.card.number.ph': '1234 5678 9012 3456',
    'co.card.holder': 'Kártyabirtokos neve *', 'co.card.holder.ph': 'KIS PISTA',
    'co.card.exp': 'Lejárat (HH/ÉÉ) *', 'co.card.exp.ph': '12/28',
    'co.card.cvc': 'CVC *', 'co.card.cvc.ph': '123',
    'co.card.notice': 'Demo: nem történik valódi fizetés. Az adatok csak a böngésződben maradnak.',
    'co.confirm.title': 'Rendelés összegzése',
    'co.confirm.sub': 'Minden rendben?',
    'co.confirm.shipping': 'Szállítási cím',
    'co.confirm.payment': 'Fizetési mód',
    'co.confirm.items': 'Tételek',
    'co.confirm.total': 'Fizetendő',
    'co.place': 'Rendelés leadása ✓',
    'co.success.title': 'Rendelés leadva!',
    'co.success.p1': 'Kösz, hogy minket választottál.',
    'co.success.p2': 'És nem, <strong>tényleg nem</strong> vagyunk a McDonalds.',
    'co.success.joke': '// a bohóc nem jön. soha.',
    'co.success.close': 'Rendben, csá',
    'co.err.name': 'Add meg a teljes nevedet.',
    'co.err.phone': 'Érvénytelen telefonszám (legalább 7 számjegy).',
    'co.err.zip': 'Érvénytelen irányítószám (4 számjegy).',
    'co.err.city': 'Add meg a várost.',
    'co.err.street': 'Add meg az utcát és házszámot.',
    'co.err.card.number': 'Érvénytelen kártyaszám (16 számjegy).',
    'co.err.card.holder': 'Add meg a kártyabirtokos nevét.',
    'co.err.card.exp': 'Érvénytelen lejárat (HH/ÉÉ).',
    'co.err.card.cvc': 'Érvénytelen CVC (3-4 számjegy).',
    'co.err.card.expired': 'A kártya lejárt.',
    'co.pay.card.summary': 'Bankkártya',
    'co.pay.cash.summary': 'Készpénz átvételkor',
    'co.pay.szep.summary': 'SZÉP kártya'
  },
  en: {
    'logo.sub': 'Definitely Not McD',
    'nav.menu': 'Menu', 'nav.story': 'Story', 'nav.location': 'Location', 'nav.order': 'Order now',
    'user.logout': 'Log out',
    'hero.sub': 'Street Food · Since 2025',
    'hero.tag': '// hungry again? good. come.',
    'hero.desc': 'This is <strong>not the place where "burger" means plastic.</strong> Our name is a joke, our food is <span class="highlight">dead serious.</span> Fresh buns every morning, local meat, house-made sauce — and nothing from the freezer.',
    'hero.m1': 'We are not McDonalds. <strong>Really not.</strong>',
    'hero.m2': 'No clown. <strong>No playground.</strong> Just food.',
    'hero.m3': 'Looking for a "Big Mac"? — <strong>Good luck.</strong>',
    'hero.stat1': 'Products', 'hero.stat2': 'Categories', 'hero.stat3': 'Fresh', 'hero.stat4': 'Clowns',
    'hero.btn1': 'Browse menu', 'hero.btn2': 'What is this?',
    'menu.label': '01 — Full menu', 'menu.title': 'What <em>you get</em>',
    'menu.search': 'Search products... (e.g. burger, cola, wings)',
    'filter.all': 'All', 'filter.vega': 'Vegan', 'filter.hot': 'Spicy', 'filter.new': 'New', 'filter.premium': 'Premium',
    'cat.burgers': 'Burgers', 'cat.chicken': 'Chicken & Nuggets', 'cat.wings': 'Wings', 'cat.fries': 'Fries',
    'cat.sides': 'Sides', 'cat.drinks': 'Drinks', 'cat.shakes': 'Shake & Dessert',
    'cat.sauces': 'Sauces', 'cat.family': 'Family', 'cat.kids': 'Kids',
    'no.results': "No results. Try something else. (Or don't. We don't care.)",
    'story.label': '02 — The story', 'story.title': "Not <em>McD</em>, that's for sure",
    'story.p1': "DNM started in 2025 as a small street stand, because we got tired of \"fast food\" meaning plastic taste and frozen meat. <strong>We didn't want to be a franchise.</strong> We didn't want a drive-thru. We just wanted to cook something that's actually good.",
    'story.p2': 'The name came from everyone asking: "Is this like McDonalds?" The answer: <strong>definitely not.</strong> Then we kept it because it\'s funny. And because it\'s true.',
    'story.p3': "Every morning we bake fresh buns. We source meat from local farmers. We mix our own sauces. <strong>64 products</strong>, but real food behind each one. And a lot of bad jokes.",
    'story.marker': '// definitely not', 'story.stat.frozen': 'Frozen',
    'loc.label': '03 — Find us', 'loc.title': 'Come <em>hungry</em>',
    'loc.hours': 'Opening hours', 'loc.day.mon': 'Monday',
    'loc.closed': 'Closed (like McD, but we have a reason)',
    'loc.day.tue.thu': 'Tuesday – Thursday', 'loc.day.fri.sat': 'Friday – Saturday', 'loc.day.sun': 'Sunday',
    'loc.address': 'Address:', 'loc.tel': 'Phone:', 'loc.email': 'Email:',
    'cta.title': 'Hungry yet?', 'cta.sub': "// 64 products. one place. and no, it's not McDonalds.", 'cta.btn': 'Start order',
    'footer.desc': 'Definitely Not McDonalds. Street food, smoke, neon, and zero plastic. Since 2025. No clowns allowed.',
    'footer.menu': 'Menu', 'footer.info': 'Info', 'footer.about': 'About', 'footer.hours': 'Opening hours',
    'footer.allergens': 'Allergens', 'footer.career': 'Career (no clowning)', 'footer.follow': 'Follow',
    'footer.disclaimer': "Not affiliated with McDonald's. It was a joke. Relax. (But really.)",
    'cart.title': 'Cart', 'cart.empty.title': 'Cart is empty',
    'cart.empty.sub': "Right now it's like McD food: empty and sad.",
    'cart.subtotal': 'Subtotal', 'cart.shipping': 'Shipping', 'cart.free': 'FREE',
    'cart.total': 'TOTAL', 'cart.checkout': 'Place order',
    'cart.joke': '// add some food, no clown will come',
    'checkout.title': 'Order placed!', 'checkout.p1': 'Thanks for choosing us.',
    'checkout.p2': 'And no, we are <strong>really not</strong> McDonalds.',
    'checkout.joke': "// the clown won't come. ever.", 'checkout.close': 'Okay, bye',
    'auth.login': 'Log in', 'auth.register': 'Register',
    'auth.welcome': 'Welcome back!', 'auth.welcome.sub': 'Log in to order.',
    'auth.register.title': 'New account', 'auth.register.sub': 'A few details and you can order.',
    'auth.login.btn': 'Log in', 'auth.register.btn': 'Create account',
    'form.email': 'Email', 'form.email.ph': 'you@example.com',
    'form.password': 'Password', 'form.password2': 'Password again',
    'form.name': 'Name', 'form.name.ph': 'John Doe',
    'pw.req.length': 'Minimum 8 characters', 'pw.req.space': 'At least 1 space',
    'pw.req.upper': 'At least 3 uppercase letters', 'pw.req.special': 'At least 1 special character (!@#$%...)',
    'auth.hint': '<strong>Demo:</strong> data is stored only in your browser (localStorage), not sent to any server.',
    'err.name.short': 'Name must be at least 2 characters.',
    'err.email.empty': 'Enter your email.',
    'err.email.format': 'Invalid email (e.g. you@example.com).',
    'err.email.exists': 'This email is already registered.',
    'err.email.notfound': 'No account found with this email.',
    'err.password.empty': 'Enter your password.',
    'err.password.wrong': 'Wrong password.',
    'err.password.match': 'Passwords do not match.',
    'err.password.rules': 'Password does not meet the requirements.',
    'err.fill.all': 'Please fill in all fields correctly!',
    'ok.register': 'Registration successful! You can now log in.',
    'ok.login': 'Logged in successfully!',
    'toast.cart.add': 'Added to cart',
    'toast.logged.out': 'Logged out.',
    'toast.must.login': 'Please log in to order!',
    'toast.removed': 'Item removed',
    'total.products': 'products total',
    'items': 'items',

    /* CHECKOUT */
    'co.step.shipping': 'Shipping',
    'co.step.payment': 'Payment',
    'co.step.confirm': 'Confirm',
    'co.shipping.title': 'Shipping details',
    'co.shipping.sub': 'Where should we bring the food?',
    'co.name': 'Full name *', 'co.name.ph': 'John Doe',
    'co.phone': 'Phone number *', 'co.phone.ph': '+36 30 123 4567',
    'co.zip': 'ZIP code *', 'co.zip.ph': '1052',
    'co.city': 'City *', 'co.city.ph': 'Budapest',
    'co.street': 'Street, number *', 'co.street.ph': 'Váci utca 42.',
    'co.floor': 'Floor / door', 'co.floor.ph': '3/12',
    'co.bell': 'Doorbell', 'co.bell.ph': 'John Doe',
    'co.note': 'Note for the courier', 'co.note.ph': "E.g. the doorbell doesn't work, call me!",
    'co.next': 'Next: payment →',
    'co.back': '← Back',
    'co.payment.title': 'Payment method',
    'co.payment.sub': 'How would you like to pay?',
    'co.pay.card': 'Credit card', 'co.pay.card.desc': 'Visa, Mastercard, Amex',
    'co.pay.cash': 'Cash on delivery', 'co.pay.cash.desc': 'Pay the courier',
    'co.pay.szep': 'SZÉP card', 'co.pay.szep.desc': 'OTP, K&H, MBH',
    'co.card.number': 'Card number *', 'co.card.number.ph': '1234 5678 9012 3456',
    'co.card.holder': 'Cardholder name *', 'co.card.holder.ph': 'JOHN DOE',
    'co.card.exp': 'Expiry (MM/YY) *', 'co.card.exp.ph': '12/28',
    'co.card.cvc': 'CVC *', 'co.card.cvc.ph': '123',
    'co.card.notice': "Demo: no real payment happens. Data stays in your browser only.",
    'co.confirm.title': 'Order summary',
    'co.confirm.sub': 'Everything correct?',
    'co.confirm.shipping': 'Shipping address',
    'co.confirm.payment': 'Payment method',
    'co.confirm.items': 'Items',
    'co.confirm.total': 'Total',
    'co.place': 'Place order ✓',
    'co.success.title': 'Order placed!',
    'co.success.p1': 'Thanks for choosing us.',
    'co.success.p2': 'And no, we are <strong>really not</strong> McDonalds.',
    'co.success.joke': "// the clown won't come. ever.",
    'co.success.close': 'Okay, bye',
    'co.err.name': 'Please enter your full name.',
    'co.err.phone': 'Invalid phone number (at least 7 digits).',
    'co.err.zip': 'Invalid ZIP code (4 digits).',
    'co.err.city': 'Please enter the city.',
    'co.err.street': 'Please enter street and number.',
    'co.err.card.number': 'Invalid card number (16 digits).',
    'co.err.card.holder': 'Please enter the cardholder name.',
    'co.err.card.exp': 'Invalid expiry (MM/YY).',
    'co.err.card.cvc': 'Invalid CVC (3-4 digits).',
    'co.err.card.expired': 'The card has expired.',
    'co.pay.card.summary': 'Credit card',
    'co.pay.cash.summary': 'Cash on delivery',
    'co.pay.szep.summary': 'SZÉP card'
  }
};

/* ============ KATEGÓRIÁK ============ */
const CATS = {
  burgers: { icon: '01', pool: 'burger' },
  chicken: { icon: '02', pool: 'chicken' },
  wings:   { icon: '03', pool: 'wings' },
  fries:   { icon: '04', pool: 'fries' },
  sides:   { icon: '05', pool: 'sides' },
  drinks:  { icon: '06', pool: 'drinks' },
  shakes:  { icon: '07', pool: 'shakes' },
  sauces:  { icon: '08', pool: 'sauces' },
  family:  { icon: '09', pool: 'family' },
  kids:    { icon: '10', pool: 'kids' }
};

/* ============ KÉPEK ============ */
const U = "https://images.unsplash.com/photo-";
const POOLS = {
  burger: [
    "1568901346375-23c9450c58cd","1550547660-d9450f859349","1572802419224-296b0aeee0d9",
    "1586190848861-99aa4a171e90","1594212699903-ec8a3eca50f5","1607013251379-e6eecfffe234",
    "1610614819513-58e34989848b","1520072959219-c595dc870360","1553979459-d2229ba7433b",
    "1596664522902-d2e0d4c3c4f8","1562967916-eb82221dfb92","1571091718767-18b5b1457add",
    "1551782450-a2132b4ba21d","1600891964092-4316c288032e","1610440042657-612c34d95e9f"
  ],
  chicken: [
    "1626082927389-6cd097cee6a6","1562967914-608f82629710","1608039829572-78524f79c4c7",
    "1569058242253-92a9c755a0ec","1619881590738-a111d176d8ee","1598103442097-8b74394b95c6",
    "1626645738196-c2a7c87a8f58","1606755962773-d324e0a13086","1604505276158-32c4dee3da1c",
    "1626082927389-6cd097cee6a6"
  ],
  wings: [
    "1567620832903-9fc6debc209f","1569058242253-92a9c755a0ec","1608039829572-78524f79c4c7",
    "1619881590738-a111d176d8ee","1598103442097-8b74394b95c6","1608039755401-742074f0548d",
    "1527477396000-e27163b481c2","1626082927389-6cd097cee6a6"
  ],
  fries: [
    "1573080496219-bb080dd4f877","1630384060421-cb20d0e0649d","1585109649139-366815a0d713",
    "1600891964092-4316c288032e","1625938145312-c96d0c4d4c6a","1541592106381-b31e9677c0e5",
    "1518013431117-eb1465fa5752","1585109649139-366815a0d713"
  ],
  sides: [
    "1594212699903-ec8a3eca50f5","1541592106381-b31e9677c0e5","1625938145312-c96d0c4d4c6a",
    "1600891964092-4316c288032e","1585109649139-366815a0d713","1639024471283-03518883512d",
    "1531749668029-2db88e4276c7"
  ],
  drinks: [
    "1554866585-cd94860890b7","1629203851122-3726ecdf080e","1621263764928-df1444c5e859",
    "1544145945-f90425340c7e","1556679343-c7306c1976bc","1600271886742-f049cd451bba",
    "1437418747212-8d9709afab22","1622597467836-f3285f2131b8","1581636625402-29b2a704ef13",
    "1613478223719-2ab802602423"
  ],
  shakes: [
    "1600271886742-f049cd451bba","1572490122747-3968b75cc699","1553787499-6f9133860278",
    "1563805042-7684c019e1cb","1621263764928-df1444c5e859","1579954115545-a95591f28bfc",
    "1541658016709-82535e94bc69"
  ],
  sauces: [
    "1472476443507-c7a5948772fc","1585238342024-78d387f4a707","1607013251379-e6eecfffe234",
    "1610614819513-58e34989848b","1582169296194-e4d644c48063"
  ],
  family: [
    "1571091718767-18b5b1457add","1551782450-a2132b4ba21d","1626082927389-6cd097cee6a6",
    "1550547660-d9450f859349","1567620832903-9fc6debc209f","1610614819513-58e34989848b"
  ],
  kids: [
    "1619881590738-a111d176d8ee","1562967914-608f82629710","1608039829572-78524f79c4c7",
    "1626645738196-c2a7c87a8f58","1571091718767-18b5b1457add"
  ]
};
const FALLBACK_IMG = 'https://placehold.co/600x400/1c1c1c/FFD400?text=DNM';

/* ===== SAJÁT KÉPEK A MENÜBEN =====
   Formátum: "TERMÉKKÓD": "kepek/fajlnev.jpg"
   A termékkód a kártyán látható (pl. B-001), vagy lásd alább a listát.
   Ami itt nincs megadva, az az Unsplash pool-ból jön. */
const CUSTOM_IMG = {
   "B-001": "kepek/images.jpg",
   "B-002": "kepek/5.jpg",
   "B-003": "kepek/6.jpg",
   "B-004": "kepek/7.jpg",
   "B-005": "kepek/8.jpg",
   "B-006": "kepek/9.jpg",
   "B-007": "kepek/10.jpg",
   "B-008": "kepek/11.jpg",
   "B-009": "kepek/12.jpg",
   "B-010": "kepek/13.jpg",
   "C-011": "kepek/14.jpg",
   "C-012": "kepek/15.jpg",
   "C-013": "kepek/16.jpg",
   "C-014": "kepek/17.jpg",
   "C-015": "kepek/18.jpg",
   "C-016": "kepek/19.jpg",
   "C-017": "kepek/20.jpg",
   "W-018": "kepek/21.jpg",
   "W-019": "kepek/22.jpg",
   "W-020": "kepek/23.jpg",
   "W-021": "kepek/24.jpg",
   "W-022": "kepek/25.jpg",
   "F-023": "kepek/26.jpg",
   "F-024": "kepek/27.jpg",
   "F-025": "kepek/28.jpg",
   "F-026": "kepek/29.jpg",
   "F-027": "kepek/30.jpg",
   "F-028": "kepek/31.jpg",
   "S-029": "kepek/32.jpg",
   "S-030": "kepek/33.jpg",
   "S-031": "kepek/34.jpg",
   "S-032": "kepek/35.jpg",
   "S-033": "kepek/36.jpg",
   "D-034": "kepek/37.png",
   "D-041": "kepek/38.jpg",
   "K-042": "kepek/38.jpg",
   "K-043": "kepek/39.jpg",
   "K-044": "kepek/40.jpg",
   "K-045": "kepek/41.jpg",
   "K-046": "kepek/42.jpg",
   "Z-048": "kepek/43.jpg",
   "Z-049": "kepek/44.jpg",
   "Z-050": "kepek/45.jpg",
   "CS-051": "kepek/46.jpg",
   "CS-053": "kepek/47.jpg",
   "CS-055": "kepek/48.jpg",
   "GY-056": "kepek/49.jpg",
   "GY-057": "kepek/50.jpg",
   "GY-058": "kepek/51.jpg",
};

/* ===== SAJÁT KÉPEK A FŐOLDAL FELSŐ (hero) KÁRTYÁIN =====
   c1 = Smash Burger, c2 = Crispy Chicken, c3 = Loaded Fries, c4 = Classic Cola */
const HERO_IMG = {
  c1: "kepek/images.jpg"
  // c2: "kepek/chicken.jpg",
  // c3: "kepek/fries.jpg",
  // c4: "kepek/cola.jpg"
};

/* Pool kép (Unsplash ID VAGY teljes/helyi útvonal) */
function getImg(pool, i) {
  const arr = POOLS[pool];
  const v = arr[i % arr.length];
  if (/^(https?:)?\/\//.test(v) || v.startsWith('kepek/') || v.startsWith('./') || v.startsWith('/')) return v;
  return `${U}${v}?w=600&q=80&auto=format&fit=crop`;
}

/* Termék kép: saját (p.img), ha nincs, akkor a pool-ból */
function productImg(p, idx) {
  if (CUSTOM_IMG[p.code]) return CUSTOM_IMG[p.code];
  if (p.img) return p.img;
  return getImg(CATS[p.cat].pool, idx);
}

/* ============ TERMÉKEK ============ */
/*
  P(cat, prefix, name, nameEn, desc, descEn, price, unit, tag, img)

  Saját kép megadása: tedd a fájlt a kepek/ mappába, és írd be az útvonalat
  a LEGUTOLSÓ paraméterként. Ha nincs tag, a tag helyére írj null-t.

  Példák:
    P("burgers","B","Smash Burger",...,2490,"db","premium","kepek/smash.jpg"),
    P("burgers","B","Double Cheese",...,3190,"db",null,"kepek/double.jpg"),
*/
let _id = 0;
function P(cat, prefix, name, nameEn, desc, descEn, price, unit = "db", tag = null, img = null) {
  _id++;
  return { id: `p${_id}`, cat, code: `${prefix}-${String(_id).padStart(3,"0")}`, name, nameEn, desc, descEn, price, unit, tag, img };
}

const ALL = [
  P("burgers","B","Smash Burger","Smash Burger","Kétszer lapított marhahús, cheddar, hagyma, savanyú uborka, DNM szósz.","Double smashed beef, cheddar, onion, pickles, DNM sauce.",2490,"db","premium"),
  P("burgers","B","Double Cheese","Double Cheese","Dupla hús, dupla cheddar, karamellizált hagyma, mustáros majonéz.","Double beef, double cheddar, caramelized onion, mustard mayo.",3190,"db"),
  P("burgers","B","Bacon Burger","Bacon Burger","Füstölt bacon, cheddar, ropogós hagyma, BBQ szósz, brioche.","Smoked bacon, cheddar, crispy onion, BBQ sauce, brioche.",2890,"db"),
  P("burgers","B","Mushroom Melt","Mushroom Melt","Grillezett gomba, füstölt provolone, karamellizált hagyma, truffle majonéz.","Grilled mushrooms, smoked provolone, caramelized onion, truffle mayo.",2190,"db","vega"),
  P("burgers","B","BBQ Burger","BBQ Burger","Füstölt marhahús, jalapeño, cheddar, ropogós hagymakarika, BBQ.","Smoked beef, jalapeño, cheddar, crispy onion ring, BBQ.",2990,"db"),
  P("burgers","B","Chili Burger","Chili Burger","Marhahús, chili con carne, cheddar, tejföl, friss koriander.","Beef, chili con carne, cheddar, sour cream, fresh coriander.",3090,"db","csipos"),
  P("burgers","B","Truffle Burger","Truffle Burger","Marhahús, truffle majonéz, rukkola, parmezán, karamellizált hagyma.","Beef, truffle mayo, arugula, parmesan, caramelized onion.",3490,"db","premium"),
  P("burgers","B","Vegan Burger","Vegan Burger","Növényi pogácsa, avocado, paradicsom, saláta, vegán majonéz.","Plant-based patty, avocado, tomato, lettuce, vegan mayo.",2690,"db","vega"),
  P("burgers","B","Classic Cheeseburger","Classic Cheeseburger","Marhahús, cheddar, ketchup, mustár, hagyma, savanyú uborka.","Beef, cheddar, ketchup, mustard, onion, pickles.",1990,"db"),
  P("burgers","B","Big DNM","Big DNM","Tripla hús, tripla cheddar, bacon, hagyma, DNM szósz. Az óriás.","Triple beef, triple cheddar, bacon, onion, DNM sauce. The giant.",3990,"db"),

  P("chicken","C","Crispy Chicken","Crispy Chicken","Ropogós csirkemell, mézes-chilis glaze, coleslaw, jalapeño.","Crispy chicken breast, honey-chili glaze, coleslaw, jalapeño.",2290,"db","uj"),
  P("chicken","C","Nuggets 6 db","Nuggets 6 pcs","Ropogós csirkemell nuggets, választható szósszal. Nem dino alakú.","Crispy chicken nuggets with sauce of your choice. Not dino-shaped.",1290,"6 db"),
  P("chicken","C","Nuggets 12 db","Nuggets 12 pcs","Dupla adag, 2 szósszal. Még mindig nem dino alakú.","Double portion, 2 sauces. Still not dino-shaped.",2290,"12 db","premium"),
  P("chicken","C","Chicken Tenders 5 db","Chicken Tenders 5 pcs","Csirkemell csíkok, ropogós panír, választható szósz.","Chicken breast strips, crispy breading, sauce of choice.",1890,"5 db"),
  P("chicken","C","Spicy Chicken","Spicy Chicken","Csirkemell, sriracha majonéz, jalapeño, ropogós hagyma.","Chicken breast, sriracha mayo, jalapeño, crispy onion.",2390,"db","csipos"),
  P("chicken","C","Chicken Bucket 12","Chicken Bucket 12","12 db ropogós csirke, 4 szósz, 2 nagy fries.","12 pcs crispy chicken, 4 sauces, 2 large fries.",6990,"12 db","premium"),
  P("chicken","C","Chicken Wrap","Chicken Wrap","Csirkemell, saláta, paradicsom, tortilla, szósz.","Chicken breast, lettuce, tomato, tortilla, sauce.",1990,"db"),

  P("wings","W","Buffalo Wings 8","Buffalo Wings 8","Csirkeszárnyak buffalo szószban, blue cheese dippinggel.","Chicken wings in buffalo sauce with blue cheese dip.",2490,"8 db","csipos"),
  P("wings","W","Honey Wings 8","Honey Wings 8","Mézes-szójás csirkeszárnyak, szezámmag, snidling.","Honey-soy chicken wings, sesame, chives.",2490,"8 db"),
  P("wings","W","BBQ Wings 8","BBQ Wings 8","BBQ szószos csirkeszárnyak, ropogós hagyma.","BBQ chicken wings, crispy onion.",2590,"8 db"),
  P("wings","W","Garlic Parmesan Wings 8","Garlic Parmesan Wings 8","Fokhagymás-parmezános csirkeszárnyak.","Garlic-parmesan chicken wings.",2690,"8 db","premium"),
  P("wings","W","Wings Combo 24","Wings Combo 24","24 db wings, 3 szósz, 2 nagy fries.","24 pcs wings, 3 sauces, 2 large fries.",7490,"24 db","premium"),

  P("fries","F","Classic Fries","Classic Fries","Hasábburgonya, tengeri só, DNM fűszerkeverék.","French fries, sea salt, DNM spice mix.",890,"adag"),
  P("fries","F","Loaded Fries","Loaded Fries","Cheddar szósz, bacon morzsa, snidling, füstölt paprika.","Cheddar sauce, bacon bits, chives, smoked paprika.",1590,"adag","premium"),
  P("fries","F","Cheese Fries","Cheese Fries","Olvadt cheddar szósz, parmezán, snidling.","Melted cheddar sauce, parmesan, chives.",1290,"adag"),
  P("fries","F","Sweet Potato Fries","Sweet Potato Fries","Édesburgonya hasábok, füstölt paprikás joghurt.","Sweet potato fries, smoked paprika yogurt.",1390,"adag","vega"),
  P("fries","F","Chili Cheese Fries","Chili Cheese Fries","Hasábburgonya, chili con carne, cheddar szósz, jalapeño.","Fries, chili con carne, cheddar sauce, jalapeño.",1890,"adag","csipos"),
  P("fries","F","Wedges","Wedges","Burgonyacikkek, fűszeres panír, dipping.","Potato wedges, spiced breading, dip.",1190,"adag"),

  P("sides","S","Onion Rings 8","Onion Rings 8","Ropogós hagymakarikák, füstölt paprikás panír.","Crispy onion rings, smoked paprika breading.",1290,"8 db"),
  P("sides","S","Mozzarella Sticks 6","Mozzarella Sticks 6","Ropogós mozzarella rudak, marinara szósz.","Crispy mozzarella sticks, marinara sauce.",1490,"6 db"),
  P("sides","S","Nachos","Nachos","Tortilla chips, cheddar szósz, jalapeño, salsa.","Tortilla chips, cheddar sauce, jalapeño, salsa.",1590,"adag"),
  P("sides","S","Garlic Bread","Garlic Bread","Fokhagymás kenyér, vaj, petrezselyem.","Garlic bread, butter, parsley.",890,"adag","vega"),
  P("sides","S","Coleslaw","Coleslaw","Friss káposztasaláta, sárgarépa, majonéz.","Fresh cabbage salad, carrot, mayonnaise.",690,"adag","vega"),

  P("drinks","D","Classic Cola 0,5 l","Classic Cola 0.5 l","Jéghideg kóla. A klasszikus.","Ice-cold cola. The classic.",690,"0,5 l"),
  P("drinks","D","Zero Cola 0,5 l","Zero Cola 0.5 l","Ugyanaz az élmény, nulla cukorral.","Same experience, zero sugar.",690,"0,5 l"),
  P("drinks","D","Dirty Lemonade 0,5 l","Dirty Lemonade 0.5 l","Házi limonádé, citrom, menta, chili.","House lemonade, lemon, mint, chili.",990,"0,5 l","premium"),
  P("drinks","D","Berry Lemonade 0,5 l","Berry Lemonade 0.5 l","Házi limonádé friss bogyós gyümölcsökkel.","House lemonade with fresh berries.",1090,"0,5 l","uj"),
  P("drinks","D","Fresh Orange 0,4 l","Fresh Orange 0.4 l","Frissen facsart narancslé.","Freshly squeezed orange juice.",890,"0,4 l","vega"),
  P("drinks","D","Iced Tea 0,5 l","Iced Tea 0.5 l","Házi jeges tea citrommal.","House iced tea with lemon.",690,"0,5 l"),
  P("drinks","D","Sparkling Water 0,5 l","Sparkling Water 0.5 l","Szénsavas ásványvíz.","Sparkling mineral water.",490,"0,5 l"),
  P("drinks","D","Chocolate Shake 0,4 l","Chocolate Shake 0.4 l","Sűrű csokoládé milkshake.","Thick chocolate milkshake.",1190,"0,4 l"),

  P("shakes","K","Chocolate Shake 0,4 l","Chocolate Shake 0.4 l","Sűrű csokoládé milkshake.","Thick chocolate milkshake.",1190,"0,4 l","premium"),
  P("shakes","K","Vanilla Shake 0,4 l","Vanilla Shake 0.4 l","Klasszikus vaníliás milkshake.","Classic vanilla milkshake.",1190,"0,4 l"),
  P("shakes","K","Strawberry Shake 0,4 l","Strawberry Shake 0.4 l","Epres milkshake friss eperrel.","Strawberry milkshake with fresh strawberries.",1190,"0,4 l"),
  P("shakes","K","Oreo Shake 0,4 l","Oreo Shake 0.4 l","Oreo kekszes milkshake.","Oreo cookie milkshake.",1390,"0,4 l"),
  P("shakes","K","Milkshake 0,4 l","Milkshake 0.4 l","Sűrű, krémes milkshake.","Thick, creamy milkshake.",1190,"0,4 l"),

  P("sauces","Z","DNM Szósz","DNM Sauce","A házi titkos szószunk. Nem Big Mac szósz. Tényleg nem.","Our secret house sauce. Not Big Mac sauce. Really not.",290,"adag"),
  P("sauces","Z","Garlic Mayo","Garlic Mayo","Fokhagymás majonéz.","Garlic mayonnaise.",290,"adag"),
  P("sauces","Z","BBQ Szósz","BBQ Sauce","Füstölt BBQ szósz.","Smoked BBQ sauce.",290,"adag"),
  P("sauces","Z","Sriracha Mayo","Sriracha Mayo","Sriracha majonéz.","Sriracha mayonnaise.",290,"adag","csipos"),

  P("family","CS","Family Combo 1","Family Combo 1","4 burger + 2 nagy fries + 4 üdítő. 4 személyes.","4 burgers + 2 large fries + 4 drinks. Serves 4.",9990,"4 fő"),
  P("family","CS","Family Combo 2","Family Combo 2","2 burger + 12 nuggets + 2 nagy fries + 4 üdítő.","2 burgers + 12 nuggets + 2 large fries + 4 drinks.",10990,"4 fő","premium"),
  P("family","CS","Chicken Family","Chicken Family","12 db ropogós csirke + 2 nagy fries + 2 coleslaw + 4 üdítő.","12 pcs crispy chicken + 2 large fries + 2 coleslaw + 4 drinks.",11490,"4 fő"),
  P("family","CS","Wings Family","Wings Family","16 db buffalo wings + 2 nagy fries + 4 szósz + 4 üdítő.","16 pcs buffalo wings + 2 large fries + 4 sauces + 4 drinks.",10490,"4 fő"),
  P("family","CS","Party Box","Party Box","24 nuggets + 24 wings + 4 nagy fries + 8 üdítő. Bulira.","24 nuggets + 24 wings + 4 large fries + 8 drinks. For parties.",19990,"8 fő","premium"),

  P("kids","GY","Kids Box Nuggets","Kids Box Nuggets","4 nuggets + kis fries + kis üdítő + játék. Nem dino alakú.","4 nuggets + small fries + small drink + toy. Not dino-shaped.",2490,"gyerek"),
  P("kids","GY","Kids Box Burger","Kids Box Burger","Mini burger + kis fries + kis üdítő + játék.","Mini burger + small fries + small drink + toy.",2490,"gyerek"),
  P("kids","GY","Kids Box Tenders","Kids Box Tenders","3 tenders + kis fries + kis üdítő + játék.","3 tenders + small fries + small drink + toy.",2490,"gyerek"),
  P("kids","GY","Kids Chicken Wrap","Kids Chicken Wrap","Mini csirke wrap + kis üdítő.","Mini chicken wrap + small drink.",2290,"gyerek")
];

/* ============ ÁLLAPOT ============ */
let currentLang = localStorage.getItem('dnm-lang') || 'hu';
let currentUser = null;
let cart = [];
try { cart = JSON.parse(localStorage.getItem('dnm-cart') || '[]'); } catch(e) { cart = []; }

let activeFilter = 'all';
let searchQuery = '';

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || key;
}
function pName(p) { return currentLang === 'hu' ? p.name : p.nameEn; }
function pDesc(p) { return currentLang === 'hu' ? p.desc : p.descEn; }
function catName(key) { return t('cat.' + key); }

/* ============ FORDÍTÁS ============ */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.getAttribute('data-i18n'));
    if (v) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t(el.getAttribute('data-i18n-html'));
    if (v) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const v = t(el.getAttribute('data-i18n-placeholder'));
    if (v) el.placeholder = v;
  });
  const activeTab = document.querySelector('.auth-tab.active');
  if (activeTab) updateAuthTitles(activeTab.dataset.tab);
  renderAll();
  updateCartUI();
  updateUserUI();
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('dnm-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  document.getElementById('langLabel').textContent = lang.toUpperCase();
  applyTranslations();
}

/* ============ TÉMA ============ */
function initTheme() {
  const html = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  if (!toggle || !icon) return;
  const current = html.getAttribute('data-theme') || 'dark';
  icon.textContent = current === 'dark' ? '🌙' : '☀️';
  toggle.addEventListener('click', () => {
    const now = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', now);
    icon.textContent = now === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('dnm-theme', now);
  });
}

/* ============ NYELV ============ */
function initLang() {
  document.getElementById('langLabel').textContent = currentLang.toUpperCase();
  document.getElementById('langToggle').addEventListener('click', () => {
    setLang(currentLang === 'hu' ? 'en' : 'hu');
  });
}

/* ============ TERMÉKEK RENDERELÉSE ============ */
function renderCard(p, idx, catKey) {
  const imgSrc = productImg(p, idx);
  const tagClass = p.tag || '';
  const tagLabel = p.tag === 'vega' ? (currentLang === 'hu' ? 'VEGA' : 'VEGAN')
                 : p.tag === 'csipos' ? (currentLang === 'hu' ? 'CSÍPŐS' : 'SPICY')
                 : p.tag === 'uj' ? (currentLang === 'hu' ? 'ÚJ' : 'NEW')
                 : p.tag === 'premium' ? 'PREMIUM' : '';
  const tagHtml = p.tag ? `<span class="tag ${tagClass}">${tagLabel}</span>` : '';
  const name = pName(p);
  const desc = pDesc(p);

  return `
    <div class="menu-card" data-cat="${p.cat}" data-name="${name.toLowerCase()}" data-tag="${p.tag || ''}" data-desc="${desc.toLowerCase()}">
      <div class="card-image">
        <img src="${imgSrc}" alt="${name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
      </div>
      <div class="card-body">
        <div class="card-num">${p.code}</div>
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="card-footer">
          <div class="price">${p.price.toLocaleString('hu-HU')} Ft <span>/ ${p.unit}</span></div>
          <button class="add-btn" data-add="${p.id}" title="${currentLang === 'hu' ? 'Kosárba' : 'Add to cart'}">+</button>
        </div>
        ${tagHtml}
      </div>
    </div>
  `;
}

function renderAll() {
  const container = document.getElementById('productsContainer');
  if (!container) return;
  let html = '';
  let totalVisible = 0;

  for (const key of Object.keys(CATS)) {
    const items = ALL.filter(p => p.cat === key);
    if (items.length === 0) continue;
    totalVisible += items.length;

    html += `
      <div class="category-block" id="cat-${key}" data-category="${key}">
        <div class="category-header">
          <div class="category-title">
            <span class="icon-badge">${CATS[key].icon}</span>
            ${catName(key)}
          </div>
          <div class="category-count">// ${items.length} ${t('items')}</div>
        </div>
        <div class="menu-grid">
          ${items.map((p, i) => renderCard(p, i, key)).join('')}
        </div>
      </div>
    `;
  }
  container.innerHTML = html;
  const tc = document.getElementById('totalCount');
  if (tc) tc.textContent = `// ${totalVisible} ${t('total.products')}`;
  applyFilters();
}

/* ============ SZŰRŐK ============ */
function applyFilters() {
  const cards = document.querySelectorAll('.menu-card');
  let visibleCount = 0;
  cards.forEach(card => {
    const name = card.dataset.name;
    const desc = card.dataset.desc;
    const tag = card.dataset.tag;
    const cat = card.dataset.cat;
    const cName = catName(cat).toLowerCase();
    const matchSearch = searchQuery === '' || name.includes(searchQuery) || desc.includes(searchQuery) || cName.includes(searchQuery);
    const matchFilter = activeFilter === 'all' || tag === activeFilter;
    if (matchSearch && matchFilter) { card.style.display = ''; visibleCount++; }
    else card.style.display = 'none';
  });
  document.querySelectorAll('.category-block').forEach(block => {
    const hasVisible = Array.from(block.querySelectorAll('.menu-card')).some(c => c.style.display !== 'none');
    block.style.display = hasVisible ? '' : 'none';
  });
  const noRes = document.getElementById('noResults');
  if (noRes) noRes.classList.toggle('show', visibleCount === 0);
}

function initSearchFilter() {
  const input = document.getElementById('searchInput');
  if (input) input.addEventListener('input', e => {
    searchQuery = e.target.value.toLowerCase().trim();
    applyFilters();
  });
  const chips = document.getElementById('filterChips');
  if (chips) chips.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeFilter = chip.dataset.filter;
    applyFilters();
  });
}

/* ============ KOSÁR ============ */
function saveCart() { localStorage.setItem('dnm-cart', JSON.stringify(cart)); }
function findProduct(id) { return ALL.find(p => p.id === id); }

function addToCart(id) {
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ id, qty: 1 });
  saveCart();
  updateCartUI();
  const p = findProduct(id);
  showToast(t('toast.cart.add') + (p ? ': ' + pName(p) : ''));
  const cartBtn = document.getElementById('cartBtn');
  cartBtn.classList.remove('bump'); void cartBtn.offsetWidth; cartBtn.classList.add('bump');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); updateCartUI(); }
}

function getCartCount() { return cart.reduce((s, i) => s + i.qty, 0); }
function getCartSubtotal() {
  return cart.reduce((s, i) => {
    const p = findProduct(i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const pill = document.getElementById('cartCountPill');
  const body = document.getElementById('cartBody');
  const subtotal = document.getElementById('cartSubtotal');
  const total = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const joke = document.getElementById('cartJoke');

  const count = getCartCount();
  if (badge) badge.textContent = count;
  if (pill) pill.textContent = count;

  if (cart.length === 0) {
    if (body) body.innerHTML = `
      <div class="cart-empty">
        <div class="icon">🛒</div>
        <div class="title">${t('cart.empty.title')}</div>
        <div class="sub">${t('cart.empty.sub')}</div>
      </div>`;
    if (subtotal) subtotal.textContent = '0 Ft';
    if (total) total.textContent = '0 Ft';
    if (checkoutBtn) checkoutBtn.disabled = true;
    if (joke) joke.textContent = t('cart.joke');
    return;
  }

  if (body) body.innerHTML = cart.map(item => {
    const p = findProduct(item.id);
    if (!p) return '';
    const imgIdx = ALL.filter(x => x.cat === p.cat).indexOf(p);
    const imgSrc = productImg(p, imgIdx);
    return `
      <div class="cart-item">
        <div class="cart-item-img"><img src="${imgSrc}" alt="${pName(p)}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'"></div>
        <div class="cart-item-info">
          <div class="name">${pName(p)}</div>
          <div class="price-unit">${p.price.toLocaleString('hu-HU')} Ft / ${p.unit}</div>
          <div class="cart-item-qty">
            <button class="qty-btn minus" data-qty="${p.id}" data-delta="-1">−</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn plus" data-qty="${p.id}" data-delta="1">+</button>
          </div>
        </div>
        <div style="text-align:right;">
          <div class="cart-item-total">${(p.price * item.qty).toLocaleString('hu-HU')} Ft</div>
          <button class="cart-item-remove" data-remove="${p.id}" title="Törlés">✕</button>
        </div>
      </div>`;
  }).join('');

  const sum = getCartSubtotal();
  if (subtotal) subtotal.textContent = sum.toLocaleString('hu-HU') + ' Ft';
  if (total) total.textContent = sum.toLocaleString('hu-HU') + ' Ft';
  if (checkoutBtn) checkoutBtn.disabled = false;
  if (joke) joke.textContent = t('cart.joke');
}

function initCartPanel() {
  const overlay = document.getElementById('cartOverlay');
  const panel = document.getElementById('cartPanel');
  const openBtn = document.getElementById('cartBtn');
  const closeBtn = document.getElementById('cartClose');
  const body = document.getElementById('cartBody');
  const checkoutBtn = document.getElementById('checkoutBtn');

  function open() { overlay.classList.add('open'); panel.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close() { overlay.classList.remove('open'); panel.classList.remove('open'); document.body.style.overflow = ''; }

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);

  body.addEventListener('click', e => {
    const qtyBtn = e.target.closest('.qty-btn');
    if (qtyBtn) { changeQty(qtyBtn.dataset.qty, parseInt(qtyBtn.dataset.delta)); return; }
    const rmBtn = e.target.closest('.cart-item-remove');
    if (rmBtn) { removeFromCart(rmBtn.dataset.remove); showToast(t('toast.removed')); }
  });

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    if (!currentUser) {
      close();
      showToast(t('toast.must.login'));
      openAuthModal('login');
      return;
    }
    close();
    openCheckoutModal();
  });
}

/* ============ TOAST ============ */
let toastTimer = null;
function showToast(text) {
  const toast = document.getElementById('toast');
  const txt = document.getElementById('toastText');
  if (!toast || !txt) return;
  txt.textContent = text;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

/* ============ AUTH ============ */
const USERS_KEY = 'dnm-users';
function getUsers() { try { return JSON.parse(localStorage.getItem(USERS_KEY) || '[]'); } catch(e) { return []; } }
function saveUsers(u) { localStorage.setItem(USERS_KEY, JSON.stringify(u)); }

function isValidEmail(email) {
  if (!email || !email.includes('@')) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}
function checkPasswordRules(pw) {
  return {
    length: pw.length >= 8,
    space: /\s/.test(pw),
    upper: (pw.match(/[A-ZÁÉÍÓÖŐÚÜŰ]/g) || []).length >= 3,
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(pw)
  };
}
function isPasswordValid(pw) {
  const r = checkPasswordRules(pw);
  return r.length && r.space && r.upper && r.special;
}
function updatePwReqUI(pw) {
  const rules = checkPasswordRules(pw || '');
  document.querySelectorAll('#pwReq .pw-req').forEach(el => {
    if (rules[el.dataset.req]) el.classList.add('ok');
    else el.classList.remove('ok');
  });
}

function openAuthModal(tab) {
  document.getElementById('authModal').classList.add('open');
  switchAuthTab(tab || 'login');
}
function closeAuthModal() {
  document.getElementById('authModal').classList.remove('open');
  document.getElementById('loginForm').reset();
  document.getElementById('registerForm').reset();
  document.querySelectorAll('.field-error').forEach(e => { e.textContent = ''; e.classList.remove('show'); });
  document.querySelectorAll('.auth-error').forEach(e => { e.textContent = ''; e.classList.remove('success'); });
  document.querySelectorAll('.auth-form input').forEach(i => i.classList.remove('error','valid'));
  updatePwReqUI('');
}
function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.getElementById('loginForm').style.display = tab === 'login' ? 'flex' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? 'flex' : 'none';
  updateAuthTitles(tab);
}
function updateAuthTitles(tab) {
  const title = document.getElementById('authTitle');
  const sub = document.getElementById('authSubtitle');
  if (!title || !sub) return;
  if (tab === 'login') { title.textContent = t('auth.welcome'); sub.textContent = t('auth.welcome.sub'); }
  else { title.textContent = t('auth.register.title'); sub.textContent = t('auth.register.sub'); }
}
function setFieldError(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.classList.toggle('show', !!msg);
}
function markInput(id, state) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('error','valid');
  if (state === 'error') el.classList.add('error');
  if (state === 'valid') el.classList.add('valid');
}

function initAuth() {
  document.getElementById('authClose').addEventListener('click', closeAuthModal);
  document.getElementById('authModal').addEventListener('click', e => {
    if (e.target.id === 'authModal') closeAuthModal();
  });
  document.querySelectorAll('.auth-tab').forEach(t => {
    t.addEventListener('click', () => switchAuthTab(t.dataset.tab));
  });

  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const pw = document.getElementById('loginPassword').value;
    setFieldError('loginEmailError',''); setFieldError('loginPasswordError','');
    let ok = true;
    if (!email) { setFieldError('loginEmailError', t('err.email.empty')); markInput('loginEmail','error'); ok = false; }
    else if (!isValidEmail(email)) { setFieldError('loginEmailError', t('err.email.format')); markInput('loginEmail','error'); ok = false; }
    else markInput('loginEmail','valid');
    if (!pw) { setFieldError('loginPasswordError', t('err.password.empty')); markInput('loginPassword','error'); ok = false; }
    if (!ok) return;
    const user = getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) { setFieldError('loginEmailError', t('err.email.notfound')); markInput('loginEmail','error'); return; }
    if (user.password !== pw) { setFieldError('loginPasswordError', t('err.password.wrong')); markInput('loginPassword','error'); return; }
    currentUser = { name: user.name, email: user.email };
    localStorage.setItem('dnm-user', JSON.stringify(currentUser));
    updateUserUI();
    closeAuthModal();
    showToast(t('ok.login'));
  });

  const pwInput = document.getElementById('regPassword');
  pwInput.addEventListener('input', e => updatePwReqUI(e.target.value));

  document.getElementById('registerForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const pw = document.getElementById('regPassword').value;
    const pw2 = document.getElementById('regPassword2').value;
    ['regNameError','regEmailError','regPasswordError','regPassword2Error'].forEach(id => setFieldError(id,''));
    document.querySelectorAll('#registerForm input').forEach(i => i.classList.remove('error','valid'));
    const globalErr = document.getElementById('registerGlobalError');
    globalErr.textContent = ''; globalErr.classList.remove('success');
    let ok = true;
    if (name.length < 2) { setFieldError('regNameError', t('err.name.short')); markInput('regName','error'); ok = false; }
    else markInput('regName','valid');
    if (!email) { setFieldError('regEmailError', t('err.email.empty')); markInput('regEmail','error'); ok = false; }
    else if (!isValidEmail(email)) { setFieldError('regEmailError', t('err.email.format')); markInput('regEmail','error'); ok = false; }
    else {
      if (getUsers().some(u => u.email.toLowerCase() === email.toLowerCase())) {
        setFieldError('regEmailError', t('err.email.exists')); markInput('regEmail','error'); ok = false;
      } else markInput('regEmail','valid');
    }
    if (!pw) { setFieldError('regPasswordError', t('err.password.empty')); markInput('regPassword','error'); ok = false; }
    else if (!isPasswordValid(pw)) { setFieldError('regPasswordError', t('err.password.rules')); markInput('regPassword','error'); ok = false; }
    else markInput('regPassword','valid');
    if (!pw2) { setFieldError('regPassword2Error', t('err.password.empty')); markInput('regPassword2','error'); ok = false; }
    else if (pw !== pw2) { setFieldError('regPassword2Error', t('err.password.match')); markInput('regPassword2','error'); ok = false; }
    else markInput('regPassword2','valid');
    if (!ok) { globalErr.textContent = t('err.fill.all'); return; }
    const users = getUsers();
    users.push({ name, email, password: pw, createdAt: Date.now() });
    saveUsers(users);
    globalErr.textContent = t('ok.register');
    globalErr.classList.add('success');
    setTimeout(() => {
      switchAuthTab('login');
      document.getElementById('loginEmail').value = email;
      document.getElementById('loginPassword').value = '';
      globalErr.textContent = ''; globalErr.classList.remove('success');
    }, 1400);
  });
}

/* ============ USER UI ============ */
function updateUserUI() {
  const btn = document.getElementById('userBtn');
  const icon = document.getElementById('userIcon');
  const dd = document.getElementById('userDropdown');
  const ddName = document.getElementById('userName');
  const ddEmail = document.getElementById('userEmail');
  const ddAvatar = document.getElementById('userAvatar');
  if (!btn) return;
  if (currentUser) {
    btn.classList.add('logged-in');
    const initials = currentUser.name.split(' ').map(s => s[0]).join('').slice(0,2).toUpperCase();
    icon.textContent = initials || '👤';
    ddName.textContent = currentUser.name;
    ddEmail.textContent = currentUser.email;
    ddAvatar.textContent = initials || '?';
  } else {
    btn.classList.remove('logged-in');
    icon.textContent = '👤';
    ddName.textContent = currentLang === 'hu' ? 'Vendég' : 'Guest';
    ddEmail.textContent = '—';
    ddAvatar.textContent = '?';
  }
  dd.classList.remove('open');
}

function initUserUI() {
  const btn = document.getElementById('userBtn');
  const dd = document.getElementById('userDropdown');
  const logout = document.getElementById('userLogout');
  btn.addEventListener('click', e => {
    e.stopPropagation();
    if (!currentUser) { openAuthModal('login'); return; }
    dd.classList.toggle('open');
  });
  document.addEventListener('click', e => {
    if (!dd.contains(e.target) && e.target !== btn) dd.classList.remove('open');
  });
  logout.addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('dnm-user');
    updateUserUI();
    showToast(t('toast.logged.out'));
  });
  try {
    const saved = JSON.parse(localStorage.getItem('dnm-user') || 'null');
    if (saved) currentUser = saved;
  } catch(e) {}
  updateUserUI();
}

/* ============ PRODUCT GRID ============ */
function initProductGrid() {
  const container = document.getElementById('productsContainer');
  if (!container) return;
  container.addEventListener('click', e => {
    const btn = e.target.closest('.add-btn');
    if (!btn) return;
    addToCart(btn.dataset.add);
    btn.classList.add('added');
    btn.textContent = '✓';
    setTimeout(() => { btn.classList.remove('added'); btn.textContent = '+'; }, 800);
  });
}

/* ============ ORDER NOW / CTA ============ */
function initOrderButtons() {
  const orderNow = document.getElementById('orderNowBtn');
  const ctaOrder = document.getElementById('ctaOrderBtn');
  [orderNow, ctaOrder].forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', e => {
      if (btn.tagName === 'A') return;
      e.preventDefault();
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ============================================================
   CHECKOUT — több lépéses
   ============================================================ */

let coState = {
  step: 1,
  shipping: {},
  payment: 'card',
  card: {}
};

function loadSavedShipping() {
  try {
    const saved = JSON.parse(localStorage.getItem('dnm-shipping') || 'null');
    if (saved) {
      document.getElementById('coName').value = saved.name || '';
      document.getElementById('coPhone').value = saved.phone || '';
      document.getElementById('coZip').value = saved.zip || '';
      document.getElementById('coCity').value = saved.city || '';
      document.getElementById('coStreet').value = saved.street || '';
      document.getElementById('coFloor').value = saved.floor || '';
      document.getElementById('coBell').value = saved.bell || '';
    }
  } catch(e) {}
}

function saveShipping() {
  const data = {
    name: document.getElementById('coName').value.trim(),
    phone: document.getElementById('coPhone').value.trim(),
    zip: document.getElementById('coZip').value.trim(),
    city: document.getElementById('coCity').value.trim(),
    street: document.getElementById('coStreet').value.trim(),
    floor: document.getElementById('coFloor').value.trim(),
    bell: document.getElementById('coBell').value.trim(),
    note: document.getElementById('coNote').value.trim()
  };
  localStorage.setItem('dnm-shipping', JSON.stringify(data));
  return data;
}

function validateShipping() {
  const name = document.getElementById('coName').value.trim();
  const phone = document.getElementById('coPhone').value.trim();
  const zip = document.getElementById('coZip').value.trim();
  const city = document.getElementById('coCity').value.trim();
  const street = document.getElementById('coStreet').value.trim();

  let ok = true;
  ['coNameError','coPhoneError','coZipError','coCityError','coStreetError'].forEach(id => setFieldError(id,''));

  if (name.length < 2) { setFieldError('coNameError', t('co.err.name')); markInput('coName','error'); ok = false; }
  else markInput('coName','valid');

  const digits = phone.replace(/\D/g,'');
  if (digits.length < 7) { setFieldError('coPhoneError', t('co.err.phone')); markInput('coPhone','error'); ok = false; }
  else markInput('coPhone','valid');

  if (!/^\d{4}$/.test(zip)) { setFieldError('coZipError', t('co.err.zip')); markInput('coZip','error'); ok = false; }
  else markInput('coZip','valid');

  if (city.length < 2) { setFieldError('coCityError', t('co.err.city')); markInput('coCity','error'); ok = false; }
  else markInput('coCity','valid');

  if (street.length < 3) { setFieldError('coStreetError', t('co.err.street')); markInput('coStreet','error'); ok = false; }
  else markInput('coStreet','valid');

  return ok;
}

/* Card formatting */
function formatCardNumber(el) {
  let v = el.value.replace(/\D/g,'').slice(0, 16);
  v = v.replace(/(.{4})/g, '$1 ').trim();
  el.value = v;
}
function formatCardExp(el) {
  let v = el.value.replace(/\D/g,'').slice(0, 4);
  if (v.length >= 3) v = v.slice(0,2) + '/' + v.slice(2);
  el.value = v;
}
function formatCardCvc(el) {
  el.value = el.value.replace(/\D/g,'').slice(0, 4);
}
function formatZip(el) {
  el.value = el.value.replace(/\D/g,'').slice(0, 4);
}

function validateCard() {
  const num = document.getElementById('coCardNumber').value.replace(/\s/g,'');
  const holder = document.getElementById('coCardHolder').value.trim();
  const exp = document.getElementById('coCardExp').value.trim();
  const cvc = document.getElementById('coCardCvc').value.trim();

  let ok = true;
  ['coCardNumberError','coCardHolderError','coCardExpError','coCardCvcError'].forEach(id => setFieldError(id,''));

  if (!/^\d{16}$/.test(num)) { setFieldError('coCardNumberError', t('co.err.card.number')); markInput('coCardNumber','error'); ok = false; }
  else markInput('coCardNumber','valid');

  if (holder.length < 3) { setFieldError('coCardHolderError', t('co.err.card.holder')); markInput('coCardHolder','error'); ok = false; }
  else markInput('coCardHolder','valid');

  if (!/^\d{2}\/\d{2}$/.test(exp)) {
    setFieldError('coCardExpError', t('co.err.card.exp')); markInput('coCardExp','error'); ok = false;
  } else {
    const [mm, yy] = exp.split('/').map(s => parseInt(s,10));
    if (mm < 1 || mm > 12) { setFieldError('coCardExpError', t('co.err.card.exp')); markInput('coCardExp','error'); ok = false; }
    else {
      const now = new Date();
      const curYY = now.getFullYear() % 100;
      const curMM = now.getMonth() + 1;
      if (yy < curYY || (yy === curYY && mm < curMM)) {
        setFieldError('coCardExpError', t('co.err.card.expired')); markInput('coCardExp','error'); ok = false;
      } else markInput('coCardExp','valid');
    }
  }

  if (!/^\d{3,4}$/.test(cvc)) { setFieldError('coCardCvcError', t('co.err.card.cvc')); markInput('coCardCvc','error'); ok = false; }
  else markInput('coCardCvc','valid');

  return ok;
}

function updateStepper() {
  document.querySelectorAll('.checkout-stepper .step').forEach(el => {
    const s = parseInt(el.dataset.step, 10);
    el.classList.remove('active','done');
    if (s < coState.step) el.classList.add('done');
    else if (s === coState.step) el.classList.add('active');
  });
}

function showStep(n) {
  coState.step = n;
  [1,2,3].forEach(i => {
    const el = document.getElementById('coStep' + i);
    if (el) el.style.display = (i === n ? 'block' : 'none');
  });
  document.getElementById('coStepSuccess').style.display = 'none';
  document.getElementById('checkoutStepper').style.display = 'flex';
  updateStepper();
}

function getPaymentLabel() {
  if (coState.payment === 'card') return t('co.pay.card.summary');
  if (coState.payment === 'cash') return t('co.pay.cash.summary');
  if (coState.payment === 'szep') return t('co.pay.szep.summary');
  return '—';
}

function buildSummary() {
  const s = saveShipping();

  // Address
  const addrLines = [
    s.name,
    s.phone,
    `${s.zip} ${s.city}`,
    `${s.street}${s.floor ? ', ' + s.floor : ''}`,
    s.bell ? 'Csengő: ' + s.bell : '',
    s.note ? 'Megjegyzés: ' + s.note : ''
  ].filter(Boolean);
  document.getElementById('coSummaryAddress').textContent = addrLines.join('\n');

  // Payment
  document.getElementById('coSummaryPayment').textContent = getPaymentLabel();

  // Items
  const itemsHtml = cart.map(item => {
    const p = findProduct(item.id);
    if (!p) return '';
    return `<div class="sum-row"><span>${item.qty}× ${pName(p)}</span><strong>${(p.price * item.qty).toLocaleString('hu-HU')} Ft</strong></div>`;
  }).join('');
  document.getElementById('coSummaryItems').innerHTML = itemsHtml;
  document.getElementById('coSummaryTotal').textContent = getCartSubtotal().toLocaleString('hu-HU') + ' Ft';
}

function openCheckoutModal() {
  coState = { step: 1, shipping: {}, payment: 'card', card: {} };
  loadSavedShipping();
  // Reset formok
  ['coNameError','coPhoneError','coZipError','coCityError','coStreetError','coCardNumberError','coCardHolderError','coCardExpError','coCardCvcError'].forEach(id => setFieldError(id,''));
  document.querySelectorAll('.checkout-step input, .checkout-step textarea').forEach(i => i.classList.remove('error','valid'));
  document.querySelector('input[name="payMethod"][value="card"]').checked = true;
  document.getElementById('cardDetails').style.display = 'block';
  showStep(1);
  document.getElementById('checkoutModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.body.style.overflow = '';
}

function initCheckout() {
  // Formázások
  const coZip = document.getElementById('coZip');
  if (coZip) coZip.addEventListener('input', e => formatZip(e.target));
  const cardNum = document.getElementById('coCardNumber');
  if (cardNum) cardNum.addEventListener('input', e => formatCardNumber(e.target));
  const cardExp = document.getElementById('coCardExp');
  if (cardExp) cardExp.addEventListener('input', e => formatCardExp(e.target));
  const cardCvc = document.getElementById('coCardCvc');
  if (cardCvc) cardCvc.addEventListener('input', e => formatCardCvc(e.target));

  // Payment change
  document.querySelectorAll('input[name="payMethod"]').forEach(r => {
    r.addEventListener('change', () => {
      coState.payment = r.value;
      document.getElementById('cardDetails').style.display = (r.value === 'card') ? 'block' : 'none';
    });
  });

  // Step 1 → 2
  document.getElementById('coToStep2').addEventListener('click', () => {
    if (!validateShipping()) return;
    saveShipping();
    showStep(2);
  });

  // Step 2 → 1
  document.getElementById('coBackTo1').addEventListener('click', () => showStep(1));

  // Step 2 → 3
  document.getElementById('coToStep3').addEventListener('click', () => {
    if (coState.payment === 'card') {
      if (!validateCard()) return;
    }
    buildSummary();
    showStep(3);
  });

  // Step 3 → 2
  document.getElementById('coBackTo2').addEventListener('click', () => showStep(2));

  // Place order
  document.getElementById('coPlaceOrder').addEventListener('click', () => {
    const num = '#DNM-' + String(Math.floor(Math.random() * 9000) + 1000);
    document.getElementById('coOrderNum').textContent = num;

    const s = saveShipping();
    const details = `
      <div><strong>${t('co.confirm.shipping')}:</strong> ${s.name}, ${s.zip} ${s.city}, ${s.street}${s.floor ? ', ' + s.floor : ''}</div>
      <div><strong>${t('co.confirm.payment')}:</strong> ${getPaymentLabel()}</div>
      <div><strong>${t('co.confirm.total')}:</strong> ${getCartSubtotal().toLocaleString('hu-HU')} Ft</div>
    `;
    document.getElementById('coSuccessDetails').innerHTML = details;

    // Kosár ürítés
    cart = [];
    saveCart();
    updateCartUI();

    // Success
    document.getElementById('checkoutStepper').style.display = 'none';
    [1,2,3].forEach(i => document.getElementById('coStep' + i).style.display = 'none');
    document.getElementById('coStepSuccess').style.display = 'block';
  });

  // Close
  document.getElementById('checkoutCloseX').addEventListener('click', closeCheckoutModal);
  document.getElementById('coSuccessClose').addEventListener('click', closeCheckoutModal);
  document.getElementById('checkoutModal').addEventListener('click', e => {
    if (e.target.id === 'checkoutModal') closeCheckoutModal();
  });
}

/* ============ HERO KÉPEK ============ */
function applyHeroImages() {
  Object.entries(HERO_IMG).forEach(([cls, src]) => {
    const img = document.querySelector('.float-card.' + cls + ' img');
    if (img && src) img.src = src;
  });
}

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initSearchFilter();
  initCartPanel();
  initAuth();
  initUserUI();
  initProductGrid();
  initOrderButtons();
  initCheckout();
  applyTranslations();
  applyHeroImages();
});

console.log('✅ DNM betöltve — 64 termék, kosár, auth, nyelvváltó, több lépéses checkout, saját képek');
