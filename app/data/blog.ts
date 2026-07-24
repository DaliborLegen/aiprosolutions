export type Block =
  | { t: "p"; c: string }
  | { t: "h2"; c: string }
  | { t: "h3"; c: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "quote"; c: string }
  | { t: "cta"; c: string; href: string; label: string };

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string; // ISO
  dateLabel: string;
  readMin: number;
  category: string;
  keywords: string[];
  related?: { label: string; href: string }[];
  blocks: Block[];
  faq: { q: string; a: string }[];
};

export const articles: Article[] = [
  {
    slug: "koliko-stane-ai-chatbot",
    title: "Koliko stane AI chatbot za podjetje leta 2026?",
    metaTitle: "Koliko stane AI chatbot za podjetje? Cene 2026",
    metaDescription:
      "Koliko stane AI chatbot za podjetje: razpon cen izdelave, mesečni stroški delovanja, kaj vpliva na ceno in kdaj se naložba povrne. Konkretne številke za slovenska podjetja.",
    excerpt:
      "Razpon cen, mesečni stroški delovanja in glavni dejavniki, ki določajo, koliko boste plačali za chatbota, ki dejansko dela.",
    date: "2026-07-24",
    dateLabel: "24. julij 2026",
    readMin: 7,
    category: "AI chatboti",
    keywords: [
      "koliko stane ai chatbot",
      "cena chatbota",
      "ai chatbot cena",
      "razvoj chatbota cena",
      "chatbot za podjetja",
    ],
    related: [
      { label: "AI chatbot", href: "/storitve/ai-chatbot" },
      { label: "AI agenti", href: "/storitve/ai-agenti" },
    ],
    blocks: [
      {
        t: "p",
        c: "Ko podjetje razmišlja o AI chatbotu, je prvo vprašanje skoraj vedno enako: koliko to stane. Pošten odgovor je, da je odvisno, a to ni izgovor. Razponi cen so povsem predvidljivi, ko enkrat veste, kaj vpliva nanje. V tem članku razložimo, koliko stane izdelava chatbota, koliko stane njegovo delovanje vsak mesec in kdaj se naložba dejansko povrne.",
      },
      { t: "h2", c: "Kratek odgovor: razponi cen" },
      {
        t: "p",
        c: "Za slovenski trg se cene izdelave AI chatbota gibljejo približno takole:",
      },
      {
        t: "ul",
        items: [
          "Preprost chatbot za podporo strankam, ki odgovarja na pogosta vprašanja iz vaše baze znanja: od 1.500 do 3.000 EUR.",
          "Naprednejši chatbot z integracijami (rezervacije, naročila, preverjanje statusa, povezava s CRM): od 4.000 do 8.000 EUR.",
          "Kompleksen AI agent, ki poleg pogovora tudi samostojno izvaja naloge v vaših sistemih: od 8.000 EUR naprej.",
        ],
      },
      {
        t: "p",
        c: "Poleg izdelave je tu še mesečni strošek delovanja, ki je pri večini podjetij presenetljivo nizek: tipično od 20 do 150 EUR na mesec, odvisno od količine pogovorov in uporabljenega AI modela. Ta znesek pokriva stroške AI modela, gostovanja in osnovnega vzdrževanja.",
      },
      { t: "h2", c: "Kaj vpliva na ceno" },
      {
        t: "p",
        c: "Razlika med chatbotom za 1.500 EUR in tistim za 8.000 EUR ni v kakovosti pogovora, sodobni modeli tekoče govorijo slovensko v obeh primerih. Razlika je v tem, koliko chatbot zna narediti poleg odgovarjanja. Glavni dejavniki cene so:",
      },
      { t: "h3", c: "1. Obseg baze znanja" },
      {
        t: "p",
        c: "Chatbot odgovarja iz vaših podatkov: cenikov, pogojev, navodil, pogostih vprašanj. Če imate te informacije zbrane in urejene, je priprava hitra. Če jih je treba izluščiti iz razpršenih dokumentov, e-pošte in glave zaposlenih, to vzame več časa.",
      },
      { t: "h3", c: "2. Integracije z vašimi sistemi" },
      {
        t: "p",
        c: "Chatbot, ki samo odgovarja, je ceneje kot tisti, ki mora preveriti zalogo v vašem sistemu, rezervirati termin v koledarju ali zabeležiti povpraševanje v CRM. Vsaka integracija doda vrednost, a tudi delo. Zato vedno priporočamo, da začnete z integracijami, ki prinesejo največ, in ostale dodate kasneje.",
      },
      { t: "h3", c: "3. Število kanalov" },
      {
        t: "p",
        c: "Isti chatbot lahko deluje na spletni strani, WhatsAppu, Messengerju in v orodju za klepet v živo. Prvi kanal je glavnina dela, dodatni kanali so tipično manjši prirastek, saj baza znanja ostane ista.",
      },
      { t: "h3", c: "4. Jeziki" },
      {
        t: "p",
        c: "Slovenščina je privzeta, a če potrebujete tekoč preklop v angleščino, nemščino, italijanščino ali hrvaščino, je smiselno to predvideti od začetka. Sodobni modeli večjezičnost obvladajo, poskrbeti je treba le za pravilen ton in strokovno izrazje v vsakem jeziku.",
      },
      { t: "h2", c: "Skriti stroški, na katere bodite pozorni" },
      {
        t: "p",
        c: "Pri ponudbah bodite pozorni na tri stvari, ki znajo pozneje neprijetno presenetiti:",
      },
      {
        t: "ul",
        items: [
          "Vezava na platformo (vendor lock-in): nekateri ponudniki vas priklenejo na svojo naročnino, brez katere chatbot neha delovati. Vprašajte, ali po plačilu dobite celotno kodo in dostope.",
          "Cena na pogovor: nekatere platforme zaračunavajo po številu pogovorov, kar pri rasti hitro naraste. Preverite, kako se strošek obnaša, ko se promet podvoji.",
          "Vzdrževanje: baza znanja ni enkratno opravilo. Ceniki in postopki se spreminjajo, chatbot pa mora slediti. Preverite, ali je vzdrževanje vključeno ali doplačilo.",
        ],
      },
      { t: "h2", c: "Kdaj se chatbot povrne" },
      {
        t: "p",
        c: "Najlažji način za oceno donosnosti je pogledati, koliko ur podpore chatbot prihrani. Če vaša ekipa dnevno odgovarja na iste vrste vprašanj eno uro, in chatbot prevzame 70 odstotkov teh, to pomeni približno 15 ur na mesec. Že pri skromni ceni dela se chatbot za 2.000 EUR povrne v nekaj mesecih, potem pa dela zastonj.",
      },
      {
        t: "quote",
        c: "Naš chatbot za enega od slovenskih naročnikov je obremenitev podpore zmanjšal za 70 odstotkov, odzivni čas strankam pa z nekaj ur na nekaj sekund.",
      },
      {
        t: "p",
        c: "Poleg prihranka časa je tu še težje merljiva, a resnična korist: stranka dobi odgovor takoj, ob katerikoli uri, tudi ponoči in med vikendom. Marsikatero povpraševanje, ki bi se sicer izgubilo, se tako spremeni v priložnost.",
      },
      { t: "h2", c: "Kako pridete do konkretne cene" },
      {
        t: "p",
        c: "Ker je razpon širok, splošna ocena ne pomaga veliko. Zato pri vsakem projektu najprej pregledamo, kaj chatbot dejansko potrebuje, in pripravimo fiksno ponudbo, tako da ni presenečenj. Uvodni 30-minutni posvet je brezplačen in brez obveznosti.",
      },
      {
        t: "cta",
        c: "Želite oceno za vaš primer? Povejte nam, kaj naj chatbot počne, in pripravimo fiksno ponudbo.",
        href: "/#kontakt",
        label: "Brezplačen posvet",
      },
    ],
    faq: [
      {
        q: "Koliko stane najpreprostejši AI chatbot?",
        a: "Preprost chatbot za podporo strankam, ki odgovarja na pogosta vprašanja iz vaše baze znanja, se začne pri približno 1.500 EUR, mesečni strošek delovanja pa je tipično od 20 do 50 EUR.",
      },
      {
        q: "Ali je mesečni strošek chatbota visok?",
        a: "Pri večini podjetij ne. Tipičen mesečni strošek je od 20 do 150 EUR, odvisno od količine pogovorov in modela. Pokriva AI model, gostovanje in osnovno vzdrževanje.",
      },
      {
        q: "Kaj je vendor lock-in in kako se mu izognem?",
        a: "Vendor lock-in pomeni, da ste priklenjeni na ponudnikovo naročnino, brez katere chatbot neha delovati. Izognete se mu tako, da izberete izvajalca, ki vam po plačilu preda celotno kodo in vse dostope.",
      },
    ],
  },
  {
    slug: "ai-avtomatizacija-primeri",
    title: "AI avtomatizacija poslovnih procesov: 8 primerov, ki se splačajo",
    metaTitle: "AI avtomatizacija: 8 primerov za podjetja, ki se splačajo",
    metaDescription:
      "8 konkretnih primerov AI avtomatizacije poslovnih procesov: obdelava računov, e-pošta, ponudbe, naročila in poročila. Kateri procesi se splača avtomatizirati in koliko prihranite.",
    excerpt:
      "Osem konkretnih procesov, ki jih slovenska podjetja najpogosteje avtomatizirajo, in kako oceniti, kateri se najbolj splača začeti.",
    date: "2026-07-25",
    dateLabel: "25. julij 2026",
    readMin: 8,
    category: "AI avtomatizacija",
    keywords: [
      "ai avtomatizacija",
      "avtomatizacija poslovnih procesov",
      "avtomatizacija procesov primeri",
      "avtomatizacija dela",
      "poslovna avtomatizacija",
    ],
    related: [
      { label: "AI avtomatizacija", href: "/storitve/ai-avtomatizacija" },
      { label: "AI agenti", href: "/storitve/ai-agenti" },
    ],
    blocks: [
      {
        t: "p",
        c: "Vsako podjetje ima procese, ki požirajo ure, ne prinašajo pa nič novega: prepisovanje podatkov med sistemi, pošiljanje istih e-mailov, obdelava dokumentov. To je natanko delo, ki ga AI avtomatizacija opravi hitreje, ceneje in brez napak zaradi utrujenosti. Spodaj je osem primerov, ki jih slovenska podjetja najpogosteje avtomatizirajo, in kako presoditi, kateri se pri vas najbolj splača.",
      },
      { t: "h2", c: "1. Obdelava prejetih računov" },
      {
        t: "p",
        c: "Prejeti račun v PDF ali sliki AI prebere, izlušči dobavitelja, znesek, datum in postavke ter podatke pripravi za vnos v računovodski sistem. Namesto ročnega prepisovanja vsak račun obdela v nekaj sekundah. To je eden najbolj hvaležnih procesov za avtomatizacijo, ker je pogost, ponavljajoč in dovzeten za napake pri ročnem delu.",
      },
      { t: "h2", c: "2. Razvrščanje in odgovarjanje na e-pošto" },
      {
        t: "p",
        c: "AI prebere prihajajočo e-pošto, jo razvrsti po vsebini (povpraševanje, reklamacija, račun, splošno vprašanje) in usmeri pravemu človeku ali oddelku. Pri standardnih sporočilih lahko pripravi tudi osnutek odgovora, ki ga zaposleni le pregleda in pošlje. Rezultat je urejen nabiralnik in hitrejši odzivi.",
      },
      { t: "h2", c: "3. Priprava ponudb in predračunov" },
      {
        t: "p",
        c: "Iz povpraševanja stranke AI izlušči, kaj želi, preveri cenik in pripravi ponudbo v vaši predlogi. Prodajnik namesto pol ure zgolega sestavljanja porabi nekaj minut za pregled in prilagoditev. Ponudbe gredo iz podjetja hitreje, kar neposredno vpliva na verjetnost sklenitve posla.",
      },
      { t: "h2", c: "4. Sinhronizacija naročil med sistemi" },
      {
        t: "p",
        c: "Naročilo iz spletne trgovine samodejno pripotuje v ERP ali sistem za odpremo, brez ročnega prepisovanja. Enako velja za posodobitve zalog v obratni smeri. To odpravi tip napake, ki najbolj jezi stranke: prodano, a dejansko ni na zalogi.",
      },
      { t: "h2", c: "5. Samodejna priprava poročil" },
      {
        t: "p",
        c: "Podatke iz več virov (prodaja, oglaševanje, računovodstvo) AI zbere, poveže in pripravi tedensko ali mesečno poročilo z izpostavljenimi ključnimi številkami. Namesto da nekdo v petek popoldne kopira podatke v preglednico, je poročilo pripravljeno samo in vedno ob istem času.",
      },
      { t: "h2", c: "6. Onboarding novih strank ali zaposlenih" },
      {
        t: "p",
        c: "Ob novi stranki ali zaposlenem je treba sprožiti vrsto korakov: ustvariti račune, poslati dobrodošlico, pripraviti dokumente, dodeliti dostope. Avtomatizacija te korake izvede v pravem vrstnem redu in nič se ne pozabi, tudi ko je gneča.",
      },
      { t: "h2", c: "7. Spremljanje cen, zalog ali objav" },
      {
        t: "p",
        c: "AI redno preverja cene konkurence, razpoložljivost izdelkov ali nove objave na določenih spletnih mestih in vas obvesti ob spremembi. Namesto ročnega preverjanja dobite obvestilo takrat, ko se nekaj dejansko premakne.",
      },
      { t: "h2", c: "8. Komunikacija s strankami ob spremembah statusa" },
      {
        t: "p",
        c: "Ko naročilo spremeni status (potrjeno, odposlano, dostavljeno), stranka samodejno dobi jasno obvestilo. To zmanjša število vprašanj tipa kje je moje naročilo in dvigne zadovoljstvo, ne da bi kdorkoli karkoli tipkal.",
      },
      { t: "h2", c: "Kako presoditi, kaj avtomatizirati prvo" },
      {
        t: "p",
        c: "Ni treba avtomatizirati vsega naenkrat. Najboljši prvi projekt je tisti, ki izpolni tri pogoje:",
      },
      {
        t: "ol",
        items: [
          "Proces je pogost in ponavljajoč, torej se dogaja vsak dan ali vsak teden.",
          "Ima jasen vzorec, tako da je pravila mogoče opisati (tudi če vmes potrebuje presojo, ki jo prevzame AI).",
          "Trenutno vzame merljivo količino časa, tako da je prihranek očiten.",
        ],
      },
      {
        t: "p",
        c: "Razlika med klasično in AI avtomatizacijo je ravno v presoji. Klasična pravila odpovejo, ko podatki niso popolni ali enotni. AI korak razume vsebino dokumenta ali sporočila in se odloči kot človek, le hitreje in dosledneje. Kjer je odločitev občutljiva, jo avtomatizacija preda človeku v potrditev, namesto da bi ugibala.",
      },
      {
        t: "quote",
        c: "Pravilo palca: če opravilo vaši ekipi vzame več kot nekaj ur na teden in ima jasen vzorec, se avtomatizacija skoraj vedno splača.",
      },
      { t: "h2", c: "Tehnologija, ki ostane vaša" },
      {
        t: "p",
        c: "Avtomatizacije gradimo neposredno na uradnih API-jih vaših sistemov, brez posrednikov, ki čez leto dni ugasnejo ali podražijo storitev. Pred vsakim projektom izračunamo, koliko ur ročnega dela avtomatizacija nadomesti. Če se ne izide, vam to povemo naravnost.",
      },
      {
        t: "cta",
        c: "Kateri proces vam požira največ časa? Povejte nam ga in ocenimo, ali se avtomatizacija splača.",
        href: "/#kontakt",
        label: "Brezplačen posvet",
      },
    ],
    faq: [
      {
        q: "Kateri proces je najboljši za prvo avtomatizacijo?",
        a: "Tisti, ki je pogost in ponavljajoč, ima jasen vzorec in trenutno vzame merljivo količino časa. Pogosti dobri kandidati so obdelava računov, razvrščanje e-pošte in priprava ponudb.",
      },
      {
        q: "Ali moramo za avtomatizacijo zamenjati obstoječe sisteme?",
        a: "Ne. Avtomatizacije gradimo nad vašimi obstoječimi sistemi prek njihovih API-jev. Vaša ekipa dela naprej v okolju, ki ga pozna, ročni koraki pa postopoma izginjajo.",
      },
      {
        q: "Kaj se zgodi, če avtomatizacija naleti na primer, ki ga ne zna rešiti?",
        a: "Vsako avtomatizacijo zastavimo z varovalko: nejasne primere preda človeku v potrditev, namesto da bi ugibala. Delež samodejno rešenih primerov se s časom povečuje.",
      },
    ],
  },
  {
    slug: "umetna-inteligenca-za-mala-podjetja",
    title: "Umetna inteligenca za mala in srednja podjetja: vodnik za začetek",
    metaTitle: "Umetna inteligenca za mala podjetja: praktičen vodnik",
    metaDescription:
      "Praktičen vodnik, kako mala in srednja podjetja uvedejo umetno inteligenco: kje začeti, katere napake se izogniti in prvi koraki. Brez tehničnega žargona.",
    excerpt:
      "Kje naj malo ali srednje podjetje sploh začne z umetno inteligenco, katere napake se izogniti in kako narediti prvi korak brez velike naložbe.",
    date: "2026-07-26",
    dateLabel: "26. julij 2026",
    readMin: 9,
    category: "Umetna inteligenca",
    keywords: [
      "umetna inteligenca za podjetja",
      "umetna inteligenca za mala podjetja",
      "ai za podjetja",
      "uvedba umetne inteligence",
      "umetna inteligenca slovenija",
    ],
    related: [
      { label: "Umetna inteligenca za podjetja", href: "/storitve/umetna-inteligenca-za-podjetja" },
      { label: "AI svetovanje", href: "/storitve/ai-svetovanje" },
    ],
    blocks: [
      {
        t: "p",
        c: "Umetna inteligenca ni več rezervirana za velike korporacije z velikimi proračuni. Ravno mala in srednja podjetja pogosto največ pridobijo, ker AI prevzame delo, za katero se ne splača zaposlovati. Težava ni v tem, ali se splača, ampak kje začeti. Ta vodnik je namenjen podjetjem, ki vedo, da AI ne smejo prespati, a ne vedo, kam narediti prvi korak.",
      },
      { t: "h2", c: "Prva napaka: začeti pri tehnologiji, ne pri problemu" },
      {
        t: "p",
        c: "Najpogostejša napaka je vprašanje kako bi lahko uporabili AI. To vodi v drage projekte, ki nikomur ne olajšajo dela. Boljše vprašanje je: katero opravilo nas vsak teden najbolj utruja in ne prinaša nič novega. AI je orodje, ne cilj. Ko najdete pravi problem, se rešitev skoraj ponudi sama.",
      },
      { t: "h2", c: "Kje AI prinese največ v malem podjetju" },
      {
        t: "p",
        c: "V praksi največji učinek dosežejo tri vrste rešitev:",
      },
      { t: "h3", c: "Podpora strankam in komunikacija" },
      {
        t: "p",
        c: "Chatbot na spletni strani, ki odgovarja na pogosta vprašanja, prevzame 60 do 80 odstotkov ponavljajočih se povpraševanj. Za majhno ekipo, kjer isti človek prodaja, svetuje in odgovarja, je to pogosto prva stvar, ki se izplača. Več o tem v našem članku o cenah chatbota.",
      },
      { t: "h3", c: "Obdelava dokumentov in administracija" },
      {
        t: "p",
        c: "Računi, ponudbe, pogodbe in obrazci: AI jih prebere, izlušči podatke in pripravi za vaše sisteme. To je delo, ki ga nihče ne mara, in prav zato prvi kandidat za avtomatizacijo.",
      },
      { t: "h3", c: "Znanje podjetja na enem mestu" },
      {
        t: "p",
        c: "AI sistem, povezan z vašo dokumentacijo, ceniki in navodili, odgovarja na vprašanja zaposlenih in strank na podlagi vaših dejanskih podatkov. Novi sodelavec ne rabi vsakič vprašati izkušenega, odgovor dobi takoj in pravilen.",
      },
      { t: "h2", c: "Druga napaka: prevelik prvi projekt" },
      {
        t: "p",
        c: "Skušnjava je zastaviti velik, celovit sistem, ki reši vse naenkrat. To je najhitrejša pot do projekta, ki se vleče mesece in nikoli ne zaživi. Boljši pristop je majhen, jasno omejen prvi korak, ki v nekaj tednih pokaže rezultat. Ko ta deluje in prinaša vrednost, ga razširite. Uspeh v majhnem zgradi zaupanje in razumevanje, ki ga za večje korake potrebujete.",
      },
      {
        t: "quote",
        c: "Manjša rešitev po meri pogosto opravi delo bolje in ceneje kot velika licenca za programsko opremo, ki jo potem uporabljate le desetino.",
      },
      { t: "h2", c: "Tretja napaka: skrb za napačne stvari" },
      {
        t: "p",
        c: "Dve pomisleka slišimo najpogosteje, oba pa sta obvladljiva:",
      },
      {
        t: "ul",
        items: [
          "Ali AI govori slovensko? Da, sodobni modeli slovenščino odlično obvladajo. Poskrbeti je treba le za pravilen ton in strokovno izrazje vaše panoge, kar je del postavitve.",
          "Kaj pa varnost podatkov in GDPR? Rešitve se da zastaviti skladno z GDPR: v model gre le minimalen potreben nabor podatkov, s ponudniki so sklenjene pogodbe o obdelavi, vaši podatki pa se ne uporabljajo za učenje modelov.",
        ],
      },
      {
        t: "p",
        c: "Resnično tveganje ni v tem, da bi AI naredil kaj narobe, saj ga zastavimo z varovalkami in nadzorom. Večje tveganje je, da konkurenca prihrani ure in odgovarja hitreje, vi pa ne.",
      },
      { t: "h2", c: "Prvi koraki v praksi" },
      {
        t: "p",
        c: "Če želite začeti, ni treba veliko. Priporočamo naslednje zaporedje:",
      },
      {
        t: "ol",
        items: [
          "Popišite, kaj vaši ekipi vsak teden vzame največ časa in ne prinaša nič novega.",
          "Izberite eno opravilo z jasnim vzorcem, ki se pogosto ponavlja.",
          "Ocenite, koliko ur na mesec bi prihranili, če bi to opravilo izginilo.",
          "Postavite majhno, omejeno rešitev za ta en primer in jo preizkusite v praksi.",
          "Ko deluje in prinaša vrednost, jo razširite na naslednje opravilo.",
        ],
      },
      {
        t: "p",
        c: "Ta pristop je namenoma počasen v prvem koraku in hiter v vseh naslednjih. Zgradi razumevanje, prepreči drage napake in poskrbi, da AI dejansko olajša delo, namesto da postane še en sistem, ki ga nihče ne uporablja.",
      },
      { t: "h2", c: "Kje dobiti neodvisen nasvet" },
      {
        t: "p",
        c: "Vsak teden nastane sto novih AI orodij in nemogoče je vedeti, kaj je vredno pozornosti. Če želite neodvisno oceno, kje se pri vas AI splača in kje ne, začnemo z brezplačnim 30-minutnim posvetom. Če se izkaže, da AI za vas še ni smiseln, vam to povemo, tudi to je koristen rezultat.",
      },
      {
        t: "cta",
        c: "Niste prepričani, kje začeti? Na brezplačnem posvetu skupaj poiščemo prvi korak, ki se pri vas najbolj splača.",
        href: "/#kontakt",
        label: "Brezplačen posvet",
      },
    ],
    faq: [
      {
        q: "Je umetna inteligenca primerna tudi za majhna podjetja?",
        a: "Da. Ravno manjša podjetja pogosto največ pridobijo, ker AI prevzame delo, za katero se ne splača zaposlovati. Ključ je začeti z majhnim, jasno omejenim projektom, ki hitro pokaže rezultat.",
      },
      {
        q: "Koliko denarja potrebujem za prvi AI projekt?",
        a: "Preprost prvi projekt, na primer chatbot za podporo strankam ali avtomatizacija enega opravila, se začne pri približno 1.500 EUR. Priporočljivo je začeti majhno in razširiti, ko rešitev dokaže vrednost.",
      },
      {
        q: "Ali AI rešitve delujejo v slovenščini?",
        a: "Da. Sodobni modeli slovenščino odlično obvladajo. Pri postavitvi poskrbimo za pravilen ton in strokovno izrazje vaše panoge.",
      },
    ],
  },
  {
    slug: "gdpr-in-umetna-inteligenca",
    title: "GDPR in umetna inteligenca: kaj mora vedeti podjetje",
    metaTitle: "GDPR in umetna inteligenca: vodnik za podjetja",
    metaDescription:
      "Kako uskladiti umetno inteligenco z GDPR: vloge upravljavca in obdelovalca, pravna podlaga, minimizacija podatkov, prenos v ZDA (DPA in SCC) ter praktični koraki za podjetja.",
    excerpt:
      "GDPR ne prepoveduje umetne inteligence, zahteva pa, da veste, kaj se dogaja z osebnimi podatki. Praktičen pregled vlog, obveznosti in konkretnih korakov.",
    date: "2026-07-27",
    dateLabel: "27. julij 2026",
    readMin: 10,
    category: "Skladnost",
    keywords: [
      "gdpr umetna inteligenca",
      "gdpr in ai",
      "varstvo osebnih podatkov ai",
      "ai gdpr skladnost",
      "obdelava osebnih podatkov ai",
    ],
    related: [
      { label: "AI svetovanje", href: "/storitve/ai-svetovanje" },
      { label: "Umetna inteligenca za podjetja", href: "/storitve/umetna-inteligenca-za-podjetja" },
    ],
    blocks: [
      {
        t: "p",
        c: "Ko podjetje razmišlja o umetni inteligenci, se skoraj vedno pojavi pomislek: kaj pa GDPR. Dobra novica je, da GDPR umetne inteligence ne prepoveduje. Zahteva pa, da veste, kateri osebni podatki se obdelujejo, kam potujejo in na kateri pravni podlagi. V tem članku razložimo, kako AI uskladiti z GDPR, brez pravniškega žargona in s koraki, ki jih lahko dejansko izvedete.",
      },
      {
        t: "p",
        c: "Pomembno opozorilo takoj na začetku: ta članek je splošna informacija in ne nadomešča pravnega nasveta. Za formalno oceno skladnosti se posvetujte s pravnikom ali pooblaščeno osebo za varstvo podatkov.",
      },
      { t: "h2", c: "Mit: umetna inteligenca in GDPR se izključujeta" },
      {
        t: "p",
        c: "Najpogostejša zmota je, da uporaba AI samodejno pomeni kršitev zasebnosti. To ne drži. AI je le orodje za obdelavo podatkov, tako kot je to preglednica ali CRM. Če osebne podatke obdelujete zakonito v teh sistemih, jih lahko tudi v AI, dokler upoštevate ista načela: jasen namen, pravno podlago, minimizacijo in varnost. Ključno vprašanje ni ali smete uporabljati AI, ampak kako jo nastavite.",
      },
      { t: "h2", c: "Kdo je kdo: upravljavec, obdelovalec, pod-obdelovalec" },
      {
        t: "p",
        c: "GDPR razlikuje med vlogami, in prav razumevanje teh vlog je temelj skladnosti:",
      },
      {
        t: "ul",
        items: [
          "Upravljavec (controller) je tisti, ki določa, zakaj in kako se podatki obdelujejo. Če zbirate podatke svojih strank, ste upravljavec vi.",
          "Obdelovalec (processor) obdeluje podatke v imenu upravljavca. Če za AI rešitev najamete zunanjega izvajalca, je ta vaš obdelovalec.",
          "Pod-obdelovalec (sub-processor) je storitev, ki jo obdelovalec uporabi naprej. Ponudnik AI modela (na primer Anthropic ali OpenAI), gostovanje in baza podatkov so tipični pod-obdelovalci.",
        ],
      },
      {
        t: "p",
        c: "Za skladnost potrebujete pisne dogovore vzdolž te verige: pogodbo o obdelavi podatkov (DPA) med vami in izvajalcem ter DPA-je izvajalca z vsemi pod-obdelovalci. Resni ponudniki AI modelov imajo DPA že pripravljen kot standardni del pogojev.",
      },
      { t: "h2", c: "Pravna podlaga: zakaj sploh smete obdelovati" },
      {
        t: "p",
        c: "Vsaka obdelava osebnih podatkov potrebuje pravno podlago. V praksi so za AI rešitve najpogostejše tri:",
      },
      {
        t: "ul",
        items: [
          "Izvajanje pogodbe: kadar je obdelava potrebna za storitev, ki jo je stranka naročila, na primer chatbot, ki obravnava njeno povpraševanje ali rezervacijo.",
          "Zakoniti interes: kadar imate utemeljen poslovni razlog, ki ne prevlada nad pravicami posameznika, na primer razvrščanje prejete e-pošte. Zahteva presojo in dokumentacijo.",
          "Privolitev: za obdelave, ki niso nujne za storitev, na primer trženje in upsell. Mora biti prostovoljna, konkretna in preklicljiva.",
        ],
      },
      { t: "h2", c: "Minimizacija: najmočnejši ukrep, ki ga imate" },
      {
        t: "p",
        c: "Najboljši način za obvladovanje tveganja je preprost: v AI pošljite čim manj osebnih podatkov. Pogosto se izkaže, da model za svojo nalogo sploh ne potrebuje imena, telefona ali naslova. Če chatbot odgovarja na vprašanje o izdelku, potrebuje besedilo vprašanja, ne pa celotnega profila stranke.",
      },
      {
        t: "quote",
        c: "Podatek, ki ga v AI nikoli ne pošljete, ne more uiti, biti napačno shranjen ali zlorabljen. Minimizacija je hkrati najcenejši in najučinkovitejši ukrep.",
      },
      {
        t: "p",
        c: "V praksi to pomeni, da rešitve gradimo tako, da se v model pošlje le tisto, kar je za nalogo nujno. Občutljivi podatki (ime, kontakt, zdravstvene informacije) ostanejo v vaših sistemih in se v prompt ne prepišejo. To je odločitev pri načrtovanju, ne naknadni popravek.",
      },
      { t: "h2", c: "Prenos podatkov v ZDA: DPA in standardne pogodbene klavzule" },
      {
        t: "p",
        c: "Večina vodilnih AI modelov teče na ameriški infrastrukturi, kar sproža vprašanje prenosa podatkov iz EU v ZDA. GDPR takega prenosa ne prepoveduje, zahteva pa ustrezno zaščito. Standardni instrument so standardne pogodbene klavzule (SCC), ki so pri resnih ponudnikih samodejno del pogodbe o obdelavi.",
      },
      {
        t: "p",
        c: "Poleg tega je pri načrtovanju vredno preveriti tri nastavitve, ki znatno znižajo tveganje:",
      },
      {
        t: "ul",
        items: [
          "Hramba podatkov (retention): pri poslovni rabi vsebina promptov privzeto ni uporabljena za učenje modela, hrani pa se le kratek čas ali sploh ne. Preverite privzete nastavitve ponudnika.",
          "Ničelna hramba (Zero Data Retention): nekateri ponudniki omogočajo način, pri katerem se vsebina po obdelavi ne shrani niti začasno. Za občutljive obdelave je to močan dodaten ukrep.",
          "Lokacija obdelave (data residency): pri nekaterih ponudnikih je mogoče obdelavo omejiti na strežnike v EU, kar dodatno poenostavi vprašanje prenosov.",
        ],
      },
      {
        t: "p",
        c: "Te možnosti niso vklopljene same od sebe. Del dobre postavitve je, da jih glede na občutljivost podatkov nastavimo ustrezno, ne da bi po nepotrebnem zapletli delovanje.",
      },
      { t: "h2", c: "Kaj mora vedeti posameznik" },
      {
        t: "p",
        c: "GDPR zahteva preglednost. Če v komunikaciji ali obdelavi sodeluje AI, morajo biti stranke o tem obveščene v vaši politiki zasebnosti. Obvestilo naj na razumljiv način pove, da se uporablja AI-podprta obdelava, s katerimi obdelovalci sodelujete in kako lahko posameznik uveljavlja svoje pravice (dostop, popravek, izbris). To obvestilo ni birokratska formalnost, ampak gradi zaupanje.",
      },
      { t: "h2", c: "Praktični koraki za skladnost" },
      {
        t: "p",
        c: "Če uvajate AI in želite biti skladni z GDPR, priporočamo naslednje zaporedje:",
      },
      {
        t: "ol",
        items: [
          "Popišite, kateri osebni podatki bi šli v AI rešitev, in preverite, ali so vsi res potrebni.",
          "Zmanjšajte nabor na nujni minimum in občutljive podatke obdržite zunaj modela.",
          "Določite pravno podlago za vsako obdelavo (pogodba, zakoniti interes ali privolitev).",
          "Uredite pogodbe o obdelavi (DPA) z izvajalcem in preverite SCC ter pod-obdelovalce.",
          "Nastavite hrambo, ničelno hrambo ali lokacijo obdelave glede na občutljivost podatkov.",
          "Dopolnite politiko zasebnosti z informacijo o AI-podprti obdelavi in obdelovalcih.",
          "Vodite evidenco dejavnosti obdelave in poskrbite za osnovno varnost (dostopi, šifriranje, skrivnosti v okolju, ne v kodi).",
        ],
      },
      {
        t: "p",
        c: "Videti je veliko, a pri dobro zastavljenem projektu je večina teh korakov opravljena že s pravilnim načrtovanjem. Skladnost ni ovira za AI, je del kakovostne izvedbe.",
      },
      { t: "h2", c: "Kje začeti" },
      {
        t: "p",
        c: "Če načrtujete AI rešitev, ki bo obdelovala osebne podatke, se splača skladnost premisliti že pri zasnovi, ne šele ob zagonu. Na brezplačnem posvetu pregledamo, kateri podatki bi bili vključeni, in predlagamo postavitev, ki tveganje zniža na minimum. Za formalno pravno oceno vas po potrebi usmerimo k ustreznemu strokovnjaku.",
      },
      {
        t: "cta",
        c: "Načrtujete AI rešitev z osebnimi podatki? Pomagamo jo zastaviti tako, da je skladnost vgrajena od začetka.",
        href: "/#kontakt",
        label: "Brezplačen posvet",
      },
    ],
    faq: [
      {
        q: "Ali GDPR prepoveduje uporabo umetne inteligence?",
        a: "Ne. GDPR umetne inteligence ne prepoveduje. Zahteva le, da osebne podatke obdelujete zakonito: z jasnim namenom, pravno podlago, minimizacijo podatkov in ustrezno varnostjo. AI je orodje za obdelavo, za katero veljajo ista pravila kot za druge sisteme.",
      },
      {
        q: "Ali smem osebne podatke pošiljati v AI model v ZDA?",
        a: "Da, če je prenos ustrezno zaščiten. Standardni instrument so standardne pogodbene klavzule (SCC), ki so pri resnih ponudnikih del pogodbe o obdelavi. Tveganje dodatno znižate z minimizacijo podatkov, ničelno hrambo in po možnosti obdelavo v EU.",
      },
      {
        q: "Kaj je najpomembnejši ukrep za skladnost AI z GDPR?",
        a: "Minimizacija. V AI pošljite čim manj osebnih podatkov, po možnosti brez imena, kontaktov in občutljivih podatkov. Podatek, ki v model sploh ne gre, ne more biti izpostavljen tveganju, zato je minimizacija hkrati najcenejši in najučinkovitejši ukrep.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
