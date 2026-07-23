export type StoritevFaq = { q: string; a: string };

export type Storitev = {
  slug: string;
  nav: string;
  metaTitle: string;
  metaDescription: string;
  h1a: string;
  h1b: string;
  intro: string;
  bullets: { t: string; d: string }[];
  body: { h: string; p: string[] }[];
  useCases: string[];
  faq: StoritevFaq[];
  keywords: string[];
};

export const storitve: Storitev[] = [
  {
    slug: "umetna-inteligenca-za-podjetja",
    nav: "Umetna inteligenca za podjetja",
    metaTitle: "Umetna inteligenca za podjetja: uvedba AI rešitev v Sloveniji",
    metaDescription:
      "Uvedba umetne inteligence v slovenska podjetja: AI chatboti, AI agenti, avtomatizacija procesov in svetovanje. Brezplačen posvet, merljivi rezultati v nekaj tednih.",
    h1a: "Umetna inteligenca",
    h1b: "za podjetja.",
    intro:
      "Umetna inteligenca ni več rezervirana za velike korporacije. Slovenskim podjetjem pomagamo uvesti AI tam, kjer prinese največ: v podporo strankam, prodajo, administracijo in interne procese. Od prve analize do delujoče rešitve, brez balasta in brez dolgih projektov.",
    bullets: [
      {
        t: "Analiza procesov",
        d: "Pregledamo vaše delovne tokove in poiščemo mesta, kjer AI prihrani največ časa in denarja.",
      },
      {
        t: "Rešitev po meri",
        d: "Chatbot, AI agent, avtomatizacija ali integracija z obstoječimi sistemi (CRM, ERP, e-pošta).",
      },
      {
        t: "Slovenščina brez kompromisov",
        d: "Vse rešitve razumejo in govorijo slovensko, po potrebi tudi angleško, nemško ali hrvaško.",
      },
      {
        t: "Merljivi rezultati",
        d: "Vsak projekt zastavimo tako, da rezultate lahko izmerite: manj ur ročnega dela, hitrejši odzivi, več prodaje.",
      },
    ],
    body: [
      {
        h: "Kje umetna inteligenca prinese največ vrednosti",
        p: [
          "V praksi največji učinek dosežejo rešitve, ki prevzamejo ponavljajoče se delo: odgovarjanje na pogosta vprašanja strank, obdelava dokumentov in računov, priprava ponudb, razvrščanje e-pošte in vnos podatkov v interne sisteme. To so opravila, ki jih AI opravi v sekundah, zaposleni pa dobijo čas za delo, ki dejansko zahteva človeka.",
          "Drugi velik sklop je znanje podjetja. AI sistem, povezan z vašo dokumentacijo, ceniki in navodili (t. i. RAG), odgovarja na vprašanja zaposlenih in strank na podlagi vaših dejanskih podatkov, ne izmišljenih informacij.",
        ],
      },
      {
        h: "Kako poteka uvedba",
        p: [
          "Začnemo z brezplačnim 30-minutnim posvetom, kjer pregledamo vaše procese in ocenimo, kje se AI splača in kje ne. Sledi konkretna ponudba s fiksno ceno in časovnico. Manjše rešitve so v produkciji v 2 do 3 tednih, kompleksnejši projekti v 4 do 8 tednih.",
          "Po zagonu rešitev spremljamo, merimo rezultate in jo izboljšujemo. Celotna koda in dostopi so vaši, brez vezave na nas.",
        ],
      },
    ],
    useCases: [
      "AI podpora strankam na spletni strani in e-pošti",
      "Avtomatska obdelava računov in dokumentov",
      "AI asistent za interno znanje podjetja",
      "Priprava ponudb in predračunov z AI",
      "Analiza in razvrščanje povpraševanj",
    ],
    faq: [
      {
        q: "Ali je umetna inteligenca primerna tudi za majhna podjetja?",
        a: "Da. Ravno manjša podjetja pogosto največ pridobijo, ker AI prevzame delo, za katero ni smiselno zaposlovati. Preprost chatbot ali avtomatizacija se začne pri 1.500 €, kar se tipično povrne v nekaj mesecih.",
      },
      {
        q: "Ali AI rešitve delujejo v slovenščini?",
        a: "Da, vse naše rešitve so nastavljene za tekočo slovenščino. Sodobni modeli (Claude, GPT, Gemini) slovenščino odlično obvladajo, mi pa poskrbimo za pravilen ton in strokovno izrazoslovje vaše panoge.",
      },
      {
        q: "Kaj pa varnost podatkov in GDPR?",
        a: "Rešitve zastavimo skladno z GDPR: v AI model gre le minimalen potreben nabor podatkov, s ponudniki modelov so sklenjene pogodbe o obdelavi podatkov, vaši podatki pa se ne uporabljajo za učenje modelov.",
      },
      {
        q: "Koliko stane uvedba umetne inteligence?",
        a: "Preproste rešitve od 1.500 €, naprednejši AI agenti z integracijami od 4.000 € naprej. Pred vsakim projektom pripravimo brezplačno oceno in fiksno ponudbo.",
      },
    ],
    keywords: [
      "umetna inteligenca za podjetja",
      "uvedba umetne inteligence",
      "AI rešitve Slovenija",
      "umetna inteligenca Slovenija",
      "AI za podjetja",
    ],
  },
  {
    slug: "ai-avtomatizacija",
    nav: "AI avtomatizacija",
    metaTitle: "AI avtomatizacija poslovnih procesov za podjetja",
    metaDescription:
      "AI avtomatizacija poslovnih procesov: povezovanje sistemov, avtomatska obdelava dokumentov in delovni tokovi, ki tečejo sami. Za slovenska podjetja, od analize do zagona.",
    h1a: "AI avtomatizacija",
    h1b: "procesov.",
    intro:
      "Vsako podjetje ima procese, ki požirajo ure: prepisovanje podatkov, pošiljanje istih e-mailov, obdelava dokumentov, usklajevanje med sistemi. Postavimo avtomatizacije, ki to delo opravijo same, z umetno inteligenco v zanki, kjer je potrebna presoja.",
    bullets: [
      {
        t: "Povezovanje sistemov",
        d: "CRM, ERP, e-pošta, spletna trgovina in interna orodja končno govorijo med sabo, brez ročnega prenašanja podatkov.",
      },
      {
        t: "AI v delovnem toku",
        d: "Kjer klasična avtomatizacija odpove, AI prebere dokument, razume vsebino in se odloči, kaj narediti naprej.",
      },
      {
        t: "Delovni tokovi 24/7",
        d: "Avtomatizacije tečejo neprekinjeno: ponoči, med vikendi in dopusti, brez čakanja na prvi delovni dan.",
      },
      {
        t: "Nadzor in merjenje",
        d: "Vsak avtomatiziran korak je zabeležen in merljiv, tako da točno veste, koliko dela je bilo opravljenega.",
      },
    ],
    body: [
      {
        h: "Kaj tipično avtomatiziramo",
        p: [
          "Najpogostejši projekti: avtomatska obdelava prejetih računov in njihov vnos v računovodski sistem, razvrščanje in odgovarjanje na e-pošto, prenos naročil iz spletne trgovine v ERP, priprava poročil iz več virov ter obveščanje strank ob spremembah statusa.",
          "Razlika med klasično in AI avtomatizacijo je v presoji. Klasična pravila odpovejo, ko podatki niso popolni ali enotni. AI korak v delovnem toku razume vsebino dokumenta ali sporočila in se odloči kot človek, le hitreje in dosledneje.",
        ],
      },
      {
        h: "Tehnologija, ki ostane vaša",
        p: [
          "Avtomatizacije gradimo neposredno na uradnih API-jih vaših sistemov, brez posrednikov, ki čez leto dni ugasnejo ali podražijo storitev. Celotna rešitev, koda in dostopi so po zaključku projekta vaši.",
          "Pred vsakim projektom izračunamo, koliko ur ročnega dela avtomatizacija nadomesti. Če se ne izide, vam to povemo naravnost in projekta ne priporočimo.",
        ],
      },
    ],
    useCases: [
      "Avtomatska obdelava in knjiženje prejetih računov",
      "Sinhronizacija naročil med spletno trgovino in ERP",
      "AI razvrščanje in odgovarjanje na e-pošto",
      "Avtomatska priprava poročil in obvestil",
      "Spremljanje cen, zalog ali objav konkurence",
    ],
    faq: [
      {
        q: "Kateri procesi so najprimernejši za avtomatizacijo?",
        a: "Ponavljajoča se opravila z jasnim vzorcem: obdelava dokumentov, prenosi podatkov med sistemi, standardni odgovori strankam, priprava poročil. Če opravilo vzame več kot nekaj ur tedensko, se avtomatizacija skoraj vedno splača.",
      },
      {
        q: "Ali potrebujemo nove programe ali menjavo obstoječih sistemov?",
        a: "Ne. Avtomatizacije gradimo nad vašimi obstoječimi sistemi prek njihovih API-jev. Vaša ekipa dela naprej v okolju, ki ga pozna, ročni koraki pa postopoma izginjajo.",
      },
      {
        q: "Koliko stane avtomatizacija procesa?",
        a: "Enostavnejši delovni tokovi od 1.500 €, kompleksnejše avtomatizacije z AI koraki in več integracijami od 4.000 € naprej. Pred ponudbo vedno izračunamo pričakovani prihranek, da je odločitev enostavna.",
      },
      {
        q: "Kaj se zgodi, če avtomatizacija naleti na primer, ki ga ne zna rešiti?",
        a: "Vsako avtomatizacijo zastavimo z varovalko: nejasne primere preda človeku v potrditev, namesto da bi ugibala. S časom se delež samodejno rešenih primerov povečuje.",
      },
    ],
    keywords: [
      "AI avtomatizacija",
      "avtomatizacija poslovnih procesov",
      "avtomatizacija procesov Slovenija",
      "avtomatizacija dela",
      "poslovna avtomatizacija",
    ],
  },
  {
    slug: "ai-chatbot",
    nav: "AI chatbot",
    metaTitle: "AI chatbot za podjetja: razvoj chatbotov v slovenščini",
    metaDescription:
      "Razvoj AI chatbotov za podporo strankam, prodajo in rezervacije. Tekoča slovenščina, učenje na vaših podatkih, integracija s spletno stranjo in sistemi. Od 1.500 €.",
    h1a: "AI chatbot,",
    h1b: "ki dela zares.",
    intro:
      "Chatbot, ki pozna vaše izdelke, cene in postopke, odgovarja pa kot vaš najboljši sodelavec: takoj, vljudno in v tekoči slovenščini. Razvijamo chatbote, ki jih stranke dejansko uporabljajo in podjetju izmerljivo znižajo obremenitev podpore.",
    bullets: [
      {
        t: "Učen na vaših podatkih",
        d: "Chatbot odgovarja iz vaše baze znanja: ceniki, pogoji, navodila, zaloga. Brez izmišljevanja.",
      },
      {
        t: "Slovenščina in tuji jeziki",
        d: "Naravna slovenščina kot privzeti jezik, samodejni preklop v angleščino, nemščino, italijanščino ali hrvaščino.",
      },
      {
        t: "Predaja človeku",
        d: "Ko vprašanje preseže chatbota, pogovor preda vaši ekipi s celotnim kontekstom. Stranka ne razlaga dvakrat.",
      },
      {
        t: "Vpogled v pogovore",
        d: "Vidite, kaj stranke sprašujejo in kje se zatika. To so podatki, ki jih klasična podpora nikoli ne zbere.",
      },
    ],
    body: [
      {
        h: "Kaj zna sodoben AI chatbot",
        p: [
          "Današnji chatboti nimajo nič skupnega s togimi meniji izpred nekaj let. Pogovor teče naravno, chatbot razume kontekst in sledi niti pogovora. Poleg odgovarjanja zna tudi ukrepati: preveri status naročila, zabeleži povpraševanje, rezervira termin ali pošlje povezavo do plačila.",
          "V praksi dober chatbot prevzame 60 do 80 odstotkov ponavljajočih se vprašanj. Naš chatbot za enega od slovenskih naročnikov je obremenitev podpore zmanjšal za 70 odstotkov, odzivni čas pa s ure na sekunde.",
        ],
      },
      {
        h: "Uvedba brez tveganja",
        p: [
          "Chatbota najprej postavimo v testno okolje, kjer ga vaša ekipa preizkusi in dopolni bazo znanja. Šele ko odgovarja zanesljivo, gre v živo. Po zagonu spremljamo pogovore in bazo znanja sproti izboljšujemo.",
          "Namestitev na spletno stran je preprosta: en vrstični dodatek kode ali integracija v obstoječi sistem za klepet, ki ga že uporabljate.",
        ],
      },
    ],
    useCases: [
      "Podpora strankam na spletni strani, 24 ur na dan",
      "Chatbot za rezervacije in naročanje terminov",
      "Prodajni asistent, ki svetuje pri izbiri izdelka",
      "Interni chatbot za vprašanja zaposlenih",
      "WhatsApp in Messenger komunikacija s strankami",
    ],
    faq: [
      {
        q: "Koliko stane AI chatbot?",
        a: "Preprost chatbot za podporo strankam se začne pri 1.500 €, naprednejši z integracijami v vaše sisteme (rezervacije, naročila, CRM) pa pri 4.000 €. Mesečni strošek delovanja je tipično nekaj deset evrov.",
      },
      {
        q: "Kako dolgo traja izdelava chatbota?",
        a: "Osnovni chatbot je v živo v 2 do 3 tednih, vključno s pripravo baze znanja in testiranjem. Kompleksnejše integracije trajajo 4 do 6 tednov.",
      },
      {
        q: "Ali si chatbot lahko izmišljuje odgovore?",
        a: "Chatbota omejimo na vašo bazo znanja: če odgovora ne pozna, to pove in ponudi kontakt z vašo ekipo, namesto da bi ugibal. Vse pogovore lahko pregledujete in bazo dopolnjujete.",
      },
      {
        q: "Na katerih kanalih lahko deluje?",
        a: "Na vaši spletni strani, prek e-pošte, na WhatsAppu, Messengerju in v orodjih za klepet v živo, ki jih morda že uporabljate (npr. LiveChat). En chatbot, več kanalov, ista baza znanja.",
      },
    ],
    keywords: [
      "AI chatbot",
      "chatbot za podjetja",
      "chatbot v slovenščini",
      "razvoj chatbota",
      "chatbot za podporo strankam",
    ],
  },
  {
    slug: "ai-agenti",
    nav: "AI agenti",
    metaTitle: "AI agenti za podjetja: razvoj avtonomnih AI asistentov",
    metaDescription:
      "Razvoj AI agentov, ki samostojno opravijo delo: obdelajo dokumente, komunicirajo s strankami in upravljajo procese. Integracije z vašimi sistemi, razvoj v Sloveniji.",
    h1a: "AI agenti,",
    h1b: "ki opravijo delo.",
    intro:
      "AI agent je korak naprej od chatbota: ne le odgovarja, ampak samostojno opravi nalogo. Prebere e-pošto in pripravi odgovor, obdela dokument in podatke vnese v sistem, spremlja proces in ukrepa, ko je treba. Vaš digitalni sodelavec, ki nikoli ne izgori.",
    bullets: [
      {
        t: "Samostojno delovanje",
        d: "Agent nalogo razume, jo razbije na korake in jih izvede: brez klikanja in nadzora na vsakem koraku.",
      },
      {
        t: "Dostop do vaših orodij",
        d: "Povežemo ga z e-pošto, CRM-jem, koledarjem, bazami in API-ji, da lahko dejansko ukrepa, ne le svetuje.",
      },
      {
        t: "Človek v zanki",
        d: "Občutljive odločitve gredo v potrditev človeku. Vi določite, kaj agent sme sam in kaj potrebuje odobritev.",
      },
      {
        t: "Beleženje vsakega koraka",
        d: "Vsaka akcija agenta je zabeležena in sledljiva, tako da vedno veste, kaj je naredil in zakaj.",
      },
    ],
    body: [
      {
        h: "Razlika med chatbotom in AI agentom",
        p: [
          "Chatbot odgovarja na vprašanja, agent pa izvaja naloge. Primer iz prakse: stranka pošlje povpraševanje po e-pošti. Chatbot bi znal odgovoriti na vprašanja o ceni. Agent pa povpraševanje prebere, preveri zalogo v vašem sistemu, pripravi ponudbo po vašem ceniku, jo pošlje stranki in zabeleži priložnost v CRM.",
          "Agenti so najmočnejši tam, kjer se v procesu izmenjujeta branje in ukrepanje: obdelava dokumentov, priprava ponudb, upravljanje rezervacij, spremljanje rokov in eskalacija, ko gre kaj narobe.",
        ],
      },
      {
        h: "Zanesljivost pred vsem",
        p: [
          "Avtonomija brez nadzora je tveganje, zato agente gradimo postopoma. Najprej agent predlaga in človek potrjuje. Ko se izkaže za zanesljivega, mu pristojnosti razširimo. Vsak korak je zabeležen, vsaka odločitev sledljiva.",
          "Uporabljamo vodilne modele (Claude, GPT, Gemini) in jih povežemo z vašimi sistemi prek uradnih API-jev. Rešitev je vaša last, brez odvisnosti od tretjih platform.",
        ],
      },
    ],
    useCases: [
      "Agent za obdelavo povpraševanj in pripravo ponudb",
      "Agent za komunikacijo z gosti in rezervacije v turizmu",
      "Agent za obdelavo računov in računovodske procese",
      "Agent za spremljanje rokov, naročil in eskalacije",
      "Agent za objavljanje vsebin na družbenih omrežjih",
    ],
    faq: [
      {
        q: "Kaj je AI agent in kako se razlikuje od chatbota?",
        a: "Chatbot komunicira, agent pa poleg komunikacije tudi izvaja naloge: bere in piše po vaših sistemih, sprejema odločitve po vaših pravilih in opravi celoten proces od začetka do konca.",
      },
      {
        q: "Ali lahko agent naredi napako?",
        a: "Lahko, zato ga zastavimo z varovalkami: občutljive akcije gredo v potrditev človeku, vse akcije so zabeležene, pristojnosti pa se širijo postopoma, ko agent dokaže zanesljivost.",
      },
      {
        q: "S katerimi sistemi lahko agent dela?",
        a: "S skoraj vsemi, ki imajo API: e-pošta, CRM, ERP, koledarji, spletne trgovine, računovodski programi, rezervacijski sistemi. Kjer API-ja ni, so pogosto možne alternativne poti, ki jih ocenimo v analizi.",
      },
      {
        q: "Koliko stane razvoj AI agenta?",
        a: "Agenti z integracijami v vaše sisteme se začnejo pri 4.000 €, cena pa je odvisna od števila integracij in kompleksnosti procesa. Vsak projekt najprej brezplačno ocenimo.",
      },
    ],
    keywords: [
      "AI agenti",
      "AI agent za podjetja",
      "avtonomni AI asistent",
      "razvoj AI agentov",
      "AI asistent Slovenija",
    ],
  },
  {
    slug: "izdelava-spletnih-strani",
    nav: "Izdelava spletnih strani",
    metaTitle: "Izdelava spletnih strani in aplikacij: hitro, sodobno, SEO",
    metaDescription:
      "Izdelava sodobnih spletnih strani in aplikacij v Next.js: hitre, varne in SEO optimizirane. Od predstavitvene strani do kompleksne spletne aplikacije. Slovenija.",
    h1a: "Spletne strani,",
    h1b: "ki prodajajo.",
    intro:
      "Spletna stran je vaš najbolj priden prodajalec: dela 24 ur na dan in nikoli nima slabega dneva, če je narejena prav. Izdelujemo hitre, sodobne in SEO optimizirane spletne strani ter aplikacije, ki obiskovalce spreminjajo v stranke.",
    bullets: [
      {
        t: "Hitrost kot standard",
        d: "Strani gradimo v Next.js in gostimo na Vercelu: rezultat so odlični Core Web Vitals in boljša uvrstitev na Googlu.",
      },
      {
        t: "SEO od prvega dne",
        d: "Struktura, meta oznake, strukturirani podatki in vsebina, pripravljeni za Google in AI iskalnike.",
      },
      {
        t: "Dizajn brez šablon",
        d: "Nobenih kupljenih predlog. Vsaka stran je oblikovana zanjo, skladno z vašo znamko in ciljem strani.",
      },
      {
        t: "Več kot vizitka",
        d: "Rezervacijski sistemi, plačila, uporabniški računi, AI funkcije: kar potrebuje vaš posel, vgradimo.",
      },
    ],
    body: [
      {
        h: "Od predstavitvene strani do spletne aplikacije",
        p: [
          "Izdelujemo vse od hitrih predstavitvenih strani za storitvene dejavnosti in turizem do kompleksnih spletnih aplikacij s prijavo uporabnikov, plačili in administracijo. Skupna točka: sodoben tehnološki sklad (Next.js, React, TypeScript), ki zagotavlja hitrost, varnost in enostavno nadgrajevanje.",
          "Vse pogosteje v strani vgrajujemo tudi AI funkcije: chatbota za obiskovalce, pametno iskanje po vsebini ali samodejno večjezičnost. Stran s tem postane orodje, ne le izložba.",
        ],
      },
      {
        h: "Optimizirano za Google in AI iskalnike",
        p: [
          "Vedno več ljudi išče prek ChatGPT, Perplexityja in Googlovih AI odgovorov. Strani zato poleg klasičnega SEO pripravimo tudi za AI iskalnike: strukturirani podatki, jasna vsebinska hierarhija in tehnične datoteke, ki AI sistemom olajšajo razumevanje vaše ponudbe.",
          "Rezultat: stran, ki jo najdejo tako ljudje kot algoritmi, ne glede na to, kje iščejo.",
        ],
      },
    ],
    useCases: [
      "Predstavitvene strani za podjetja in storitve",
      "Spletne strani za turizem in nastanitve",
      "Spletne aplikacije s prijavo in plačili",
      "Landing strani za oglaševalske kampanje",
      "Prenova počasnih ali zastarelih strani",
    ],
    faq: [
      {
        q: "Koliko stane izdelava spletne strani?",
        a: "Predstavitvena stran se začne pri 1.500 €, kompleksnejše strani in spletne aplikacije od 4.000 € naprej. Cena je fiksna in znana pred začetkom projekta.",
      },
      {
        q: "Kako dolgo traja izdelava?",
        a: "Predstavitvena stran je tipično končana v 2 do 3 tednih, obsežnejše aplikacije v 4 do 8 tednih. Časovnico z mejniki določimo ob ponudbi.",
      },
      {
        q: "Ali bo stran vidna na Googlu?",
        a: "Da, SEO je vgrajen v vsak projekt: tehnična optimizacija, hitrost, meta oznake, strukturirani podatki in prijava v Google Search Console. Za konkurenčne ključne besede pripravimo tudi vsebinsko strategijo.",
      },
      {
        q: "Ali lahko stran kasneje ureja naša ekipa?",
        a: "Da. Glede na potrebe vgradimo urejevalnik vsebin (CMS) ali pripravimo preprost način za posodabljanje. Celotna koda in dostopi so vaši.",
      },
    ],
    keywords: [
      "izdelava spletnih strani",
      "izdelava spletne strani cena",
      "razvoj spletnih aplikacij",
      "Next.js razvoj",
      "spletne strani Slovenija",
    ],
  },
  {
    slug: "ai-svetovanje",
    nav: "AI svetovanje",
    metaTitle: "AI svetovanje: strategija in uvedba umetne inteligence",
    metaDescription:
      "AI svetovanje za podjetja: pregled procesov, izbira pravih AI orodij in načrt uvedbe umetne inteligence. Neodvisno, praktično in brez prodajanja megle.",
    h1a: "AI svetovanje",
    h1b: "brez megle.",
    intro:
      "Vsak teden nastane sto novih AI orodij in nemogoče je vedeti, kaj je vredno pozornosti. Pomagamo vam ločiti uporabno od modnega: pregledamo vaše procese, pokažemo, kje AI prinese merljivo vrednost, in pripravimo izvedljiv načrt uvedbe.",
    bullets: [
      {
        t: "Pregled procesov",
        d: "Skupaj z vašo ekipo popišemo delovne tokove in poiščemo mesta z največ ročnega, ponavljajočega se dela.",
      },
      {
        t: "Neodvisna ocena",
        d: "Nismo vezani na nobenega ponudnika. Priporočimo orodje ali razvoj po meri, karkoli je za vas ceneje in boljše.",
      },
      {
        t: "Konkreten načrt",
        d: "Dobite prioritiziran seznam priložnosti z oceno stroškov, prihrankov in časovnico, ne splošne prezentacije.",
      },
      {
        t: "Izobraževanje ekipe",
        d: "Vašo ekipo naučimo učinkovite in varne rabe AI orodij pri vsakdanjem delu.",
      },
    ],
    body: [
      {
        h: "Za koga je AI svetovanje",
        p: [
          "Za podjetja, ki vedo, da umetne inteligence ne smejo prespati, a ne vedo, kje začeti. Za direktorje, ki od ekipe dobivajo predloge za AI orodja in potrebujejo neodvisno oceno. In za podjetja, ki so AI že poskusila, a brez pravega rezultata.",
          "Svetovanje je smiselno tudi pred večjimi nakupi programske opreme: pogosto se izkaže, da manjša rešitev po meri opravi delo bolje in ceneje kot velika licenca.",
        ],
      },
      {
        h: "Kako poteka",
        p: [
          "Začnemo z brezplačnim uvodnim pogovorom. Sledi delavnica z vašo ekipo, kjer popišemo procese in identificiramo priložnosti. V enem do dveh tednih dobite poročilo s prioritiziranimi priložnostmi, oceno vračila investicije za vsako in priporočen vrstni red uvedbe.",
          "Če se odločite za izvedbo, jo lahko prevzamemo mi ali vaša ekipa oziroma zunanji izvajalec. Poročilo je zastavljeno tako, da je uporabno ne glede na to, kdo gradi.",
        ],
      },
    ],
    useCases: [
      "AI strategija za vodstvo podjetja",
      "Pregled in izbira AI orodij za ekipo",
      "Ocena izvedljivosti AI projekta pred investicijo",
      "Delavnice učinkovite rabe AI za zaposlene",
      "Tehnični pregled obstoječih rešitev in sistemov",
    ],
    faq: [
      {
        q: "Koliko stane AI svetovanje?",
        a: "Uvodni 30-minutni posvet je brezplačen. Celovit pregled procesov s poročilom in načrtom uvedbe je odvisen od velikosti podjetja, tipično od 900 € naprej. Pri kasnejši izvedbi znesek svetovanja odštejemo od projekta.",
      },
      {
        q: "Ali svetujete tudi podjetjem brez tehnične ekipe?",
        a: "Da, večina naših naročnikov nima lastnih razvijalcev. Poročilo in priporočila so napisana razumljivo, brez tehničnega žargona, izvedbo pa lahko v celoti prevzamemo mi.",
      },
      {
        q: "Kaj če se izkaže, da AI za nas (še) ni smiseln?",
        a: "Tudi to je koristen rezultat: prihranili ste investicijo v napačno smer. V poročilu vedno navedemo tudi, česa ne priporočamo in zakaj.",
      },
      {
        q: "Ali izvajate tudi izobraževanja za zaposlene?",
        a: "Da, praktične delavnice rabe AI orodij (ChatGPT, Claude, Copilot in druga), prilagojene vašim dejanskim nalogam, s poudarkom na varni rabi in varovanju podatkov podjetja.",
      },
    ],
    keywords: [
      "AI svetovanje",
      "AI strategija",
      "uvedba umetne inteligence",
      "digitalna transformacija",
      "AI izobraževanje za podjetja",
    ],
  },
];

export function getStoritev(slug: string): Storitev | undefined {
  return storitve.find((s) => s.slug === slug);
}
