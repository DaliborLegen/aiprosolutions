import type { Storitev } from "./storitve";

// Druga skupina storitvenih strani. Ciljajo poizvedbe, ki so v Search Console
// prinašale prikaze brez klikov, ker zanje ni bilo namenske strani.
export const storitve2: Storitev[] = [
  {
    slug: "avtomatizacija-poslovnih-procesov",
    nav: "Avtomatizacija poslovnih procesov",
    metaTitle: "Avtomatizacija poslovnih procesov: kje začeti in koliko stane",
    metaDescription:
      "Avtomatizacija procesov v podjetju: povezovanje sistemov, odprava ročnih vnosov in avtomatizirani delovni tokovi. Prvi proces v produkciji v 2 do 3 tednih, od 1.500 €.",
    h1a: "Avtomatizacija",
    h1b: "poslovnih procesov.",
    intro:
      "Avtomatizacija poslovnih procesov pomeni, da ponavljajoče se korake v podjetju namesto zaposlenih opravi programska oprema: prepiše podatke med sistemi, pripravi dokument, pošlje obvestilo, sproži naslednji korak. Slovenskim podjetjem pomagamo najti procese, kjer se to najhitreje povrne, in jih spraviti v delovanje v nekaj tednih.",
    bullets: [
      {
        t: "Popis procesa",
        d: "Skupaj popišemo, kdo kaj dela, v katerih orodjih in koliko ur na teden. Brez tega je avtomatizacija ugibanje.",
      },
      {
        t: "Povezovanje sistemov",
        d: "CRM, ERP, e-pošta, e-računi, spletna trgovina, Excel in interne baze se povežejo prek API-jev, da podatki tečejo sami.",
      },
      {
        t: "Delovni tokovi s pravili",
        d: "Jasna pravila, kdaj se kaj zgodi, kdo potrdi in kaj se zgodi ob napaki. Človek ostane tam, kjer je odločitev pomembna.",
      },
      {
        t: "Merjenje učinka",
        d: "Pred zagonom izmerimo, koliko ur proces stane danes, po zagonu pa, koliko jih stane potem.",
      },
    ],
    body: [
      {
        h: "Kateri procesi se najbolj splačajo",
        p: [
          "Najboljši kandidati za avtomatizacijo so opravila, ki se ponavljajo, imajo jasna pravila in jih opravlja več ljudi. Tipično so to prepisovanje podatkov iz e-pošte ali PDF v interni sistem, priprava ponudb in predračunov po vzorcu, razvrščanje in odgovarjanje na standardna povpraševanja, usklajevanje podatkov med dvema programoma ter priprava rednih poročil.",
          "Nasprotno se ne splača avtomatizirati procesov, ki se izvedejo nekajkrat letno, so vsakič drugačni ali pa niso nikjer zapisani. V takih primerih to tudi povemo in predlagamo, da se najprej uredi sam proces, šele nato avtomatizira.",
        ],
      },
      {
        h: "Klasična avtomatizacija ali umetna inteligenca",
        p: [
          "Velik del avtomatizacije sploh ne potrebuje umetne inteligence. Če so pravila jasna in vhodni podatki strukturirani, je klasična integracija cenejša, hitrejša in bolj predvidljiva. Umetna inteligenca pride v poštev tam, kjer je vhod nestrukturiran: prosto besedilo, skenirani dokumenti, e-pošta strank, opisi izdelkov.",
          "V praksi je najboljša kombinacija obojega. Umetna inteligenca prebere in razume vhod, klasična logika pa poskrbi, da se podatek vedno zapiše na pravo mesto in da je rezultat preverljiv.",
        ],
      },
      {
        h: "Kako poteka projekt",
        p: [
          "Začnemo z brezplačnim 30-minutnim posvetom in popisom enega samega procesa. Prvi proces spravimo v produkcijo v 2 do 3 tednih, da učinek vidite hitro in brez velikega tveganja. Šele nato se odločamo o širitvi na druge procese.",
          "Cene se začnejo pri 1.500 € za posamezen proces, kompleksnejše integracije z več sistemi pa pri 4.000 €. Ponudba je fiksna, koda in dostopi ostanejo vaši.",
        ],
      },
    ],
    useCases: [
      "Avtomatizacija administrativnih procesov in ročnih vnosov",
      "Avtomatizacija delovnih procesov med CRM, ERP in e-pošto",
      "Avtomatizacija nabave: povpraševanja, naročilnice, potrditve",
      "Sistem za avtomatizacijo procesa poročanja",
      "Avtomatizacija prodaje: razvrščanje povpraševanj in priprava ponudb",
      "Avtomatizacija proizvodnih procesov in sledljivosti",
    ],
    faq: [
      {
        q: "Kaj je avtomatizacija poslovnih procesov?",
        a: "Avtomatizacija poslovnih procesov je zamenjava ročnih, ponavljajočih se korakov s programsko opremo, ki jih opravi samodejno. Namesto da zaposleni podatke prepisuje med programi, pripravlja iste dokumente in pošilja ista obvestila, to opravi sistem, človek pa potrdi ali obravnava izjeme.",
      },
      {
        q: "Koliko stane avtomatizacija enega procesa?",
        a: "Avtomatizacija posameznega procesa se začne pri 1.500 €, kompleksnejše integracije z več sistemi pri 4.000 €. Pred začetkom pripravimo fiksno ponudbo, tako da končna cena ni presenečenje.",
      },
      {
        q: "Kako hitro se naložba povrne?",
        a: "Če proces danes vzame pet ur na teden, to pomeni okoli 250 ur na leto. Pri interni ceni ure 25 € je to približno 6.000 € letno, zato se avtomatizacija za 1.500 do 3.000 € tipično povrne v treh do šestih mesecih.",
      },
      {
        q: "Ali se je treba odreči obstoječim programom?",
        a: "Ne. Avtomatizacija se gradi nad obstoječimi sistemi in jih poveže. Zamenjavo programa predlagamo le, če resnično nima nobene možnosti povezave, kar je danes redko.",
      },
      {
        q: "Kaj se zgodi, ko avtomatizacija naleti na napako?",
        a: "Vsak delovni tok ima določeno ravnanje ob napaki: primer se označi, odgovorna oseba dobi obvestilo, podatek pa se ne zapiše napol. Vsi koraki se beležijo, tako da je vedno razvidno, kaj se je zgodilo.",
      },
    ],
    keywords: [
      "avtomatizacija procesov",
      "avtomatizacija poslovnih procesov",
      "avtomatizacija poslovanja",
      "avtomatizacija delovnih procesov",
      "avtomatizacija administrativnih procesov",
      "poslovna avtomatizacija",
      "povezovanje sistemov",
    ],
  },
  {
    slug: "avtomatizacija-kadrovskih-procesov",
    nav: "Avtomatizacija kadrovskih procesov",
    metaTitle: "Avtomatizacija kadrovskih procesov in zaposlovanja",
    metaDescription:
      "Program za avtomatizacijo procesa zaposlovanja in kadrovske administracije: obdelava prijav, razvrščanje kandidatov, uvajanje in odhod zaposlenih. Od 1.500 €.",
    h1a: "Avtomatizacija",
    h1b: "kadrovskih procesov.",
    intro:
      "Kadrovska služba porabi velik del časa za administracijo: pregledovanje prijav, prepisovanje podatkov, usklajevanje razgovorov, pripravo pogodb in obrazcev ter uvajanje novih sodelavcev. To so procesi z jasnimi pravili, zato so med najboljšimi kandidati za avtomatizacijo.",
    bullets: [
      {
        t: "Obdelava prijav",
        d: "Življenjepisi se preberejo samodejno, podatki se zapišejo v tabelo ali kadrovski sistem, kandidat dobi potrditev prejema.",
      },
      {
        t: "Razvrščanje kandidatov",
        d: "Prijave se razvrstijo po vnaprej dogovorjenih kriterijih, odločitev pa vedno ostane pri vas.",
      },
      {
        t: "Uvajanje in odhod",
        d: "Ob zaposlitvi ali odhodu se sprožijo vsi koraki: dostopi, oprema, obrazci, obvestila oddelkom.",
      },
      {
        t: "Kadrovska evidenca",
        d: "Dopusti, bolniške, potni nalogi in opomniki o rokih na enem mestu, brez ročnega prepisovanja.",
      },
    ],
    body: [
      {
        h: "Zaposlovanje od prijave do odločitve",
        p: [
          "Pri objavi prostega delovnega mesta prispejo prijave po e-pošti, prek portalov in prek obrazca na spletni strani, vsaka v svoji obliki. Sistem prijave zbere na enem mestu, iz življenjepisa izlušči ključne podatke, jih zapiše v enotno tabelo in kandidatu pošlje potrditev prejema. Kadrovik tako namesto prebiranja poštnega predala dobi pregleden seznam.",
          "Razvrščanje poteka po kriterijih, ki jih določite sami: delovne izkušnje, znanja, lokacija, jeziki. Pomembno je, da sistem kandidatov ne zavrača samodejno. Pripravi razvrstitev in povzetek, končno presojo pa opravi človek, kar je tudi edino skladno s pošteno kadrovsko prakso.",
        ],
      },
      {
        h: "Uvajanje, spremembe in odhod zaposlenega",
        p: [
          "Ob prihodu novega sodelavca je treba urediti pogodbo, dostope do sistemov, opremo, uvajalni načrt in prijavo v evidence. Vsak od teh korakov ima svojega lastnika in svoj rok. Avtomatiziran potek poskrbi, da se ob podpisu pogodbe naloge razdelijo same in da nič ne ostane pozabljeno.",
          "Enako velja ob odhodu, kjer je ključno, da se dostopi pravočasno odvzamejo, oprema vrne in dokumentacija zaključi. Prav ta del se v praksi najpogosteje zalomi, posledice pa so varnostne in ne le administrativne.",
        ],
      },
    ],
    useCases: [
      "Program za avtomatizacijo procesa zaposlovanja",
      "Samodejna obdelava življenjepisov in prijav",
      "Razvrščanje kandidatov po dogovorjenih kriterijih",
      "Avtomatiziran uvajalni postopek za nove sodelavce",
      "Opomniki o poteku pogodb, zdravniških pregledov in izobraževanj",
      "Avtomatizacija procesa zaposlovanja in odhoda zaposlenih",
    ],
    faq: [
      {
        q: "Ali lahko umetna inteligenca sama izbere kandidata?",
        a: "Ne in tega tudi ne priporočamo. Sistem prijave uredi, izlušči podatke in pripravi razvrstitev, odločitev o kandidatih pa ostane pri kadrovski službi. Tako ohranite nadzor in se izognete tveganju pristranskih samodejnih odločitev.",
      },
      {
        q: "Ali je obdelava življenjepisov skladna z GDPR?",
        a: "Da, če je zastavljena pravilno. Podatki kandidatov se hranijo v vašem sistemu, v jezikovni model gre le toliko besedila, kolikor je potrebno za izlušček, s ponudnikom modela pa je sklenjena pogodba o obdelavi podatkov. Roke hrambe prijav nastavimo po vaši kadrovski politiki.",
      },
      {
        q: "Ali se rešitev poveže z našim kadrovskim programom?",
        a: "Praviloma da. Če ima program API ali omogoča uvoz datotek, se poveže. Kjer povezave ni, podatke pripravimo v obliki, ki jo program sprejme, tako da ročnega prepisovanja vseeno ni.",
      },
      {
        q: "Se avtomatizacija splača tudi pri malo zaposlitvah na leto?",
        a: "Pri nekaj zaposlitvah letno se najbolj splača avtomatizirati uvajanje, evidence in opomnike, ne pa selekcije. Prav ti deli namreč tečejo skozi vse leto, medtem ko je zaposlovanje občasno.",
      },
    ],
    keywords: [
      "avtomatizacija kadrovskih procesov",
      "program za avtomatizacijo procesa zaposlovanja",
      "avtomatizacija HR procesov",
      "avtomatizacija zaposlovanja",
      "kadrovska avtomatizacija",
    ],
  },
  {
    slug: "avtomatizacija-racunovodstva",
    nav: "Avtomatizacija računovodstva in dokumentov",
    metaTitle: "Avtomatizirano računovodstvo in AI obdelava dokumentov",
    metaDescription:
      "Računovodska avtomatizacija z umetno inteligenco: samodejno branje prejetih računov, pogodb in dokumentov, predlog kontiranja in vpis v ERP. Od 1.500 €.",
    h1a: "Avtomatizirano",
    h1b: "računovodstvo.",
    intro:
      "Prejeti računi, pogodbe, dobavnice in potrdila prihajajo v podjetje po e-pošti, v PDF, kot skeni in na papirju. Vsak dokument nekdo prebere, prepiše in razvrsti. Umetna inteligenca ta korak prevzame: dokument prebere, izlušči podatke, predlaga kontiranje in vse skupaj pripravi za vpis v vaš računovodski ali ERP sistem.",
    bullets: [
      {
        t: "Samodejni zajem",
        d: "Dokumenti se poberejo neposredno iz e-poštnega predala, mape ali portala, brez ročnega shranjevanja.",
      },
      {
        t: "Branje vsebine",
        d: "Iz računa se izluščijo dobavitelj, številka, datumi, zneski, DDV in postavke, tudi iz slabo skeniranih dokumentov.",
      },
      {
        t: "Predlog kontiranja",
        d: "Sistem se nauči vaših pravil in za vsak dokument predlaga konto in stroškovno mesto. Zadnjo besedo ima računovodja.",
      },
      {
        t: "Vpis v sistem",
        d: "Potrjeni podatki gredo v računovodski program ali ERP, dokument pa se arhivira z vsemi oznakami.",
      },
    ],
    body: [
      {
        h: "Kje avtomatizirano računovodstvo prihrani največ",
        p: [
          "Največji zalogaj ni knjiženje samo po sebi, ampak pot dokumenta do knjiženja: prenos iz e-pošte, preimenovanje, prepis glave računa, iskanje pravega dobavitelja v šifrantu, usklajevanje z naročilnico in lovljenje potrditev. Pri sto prejetih računih mesečno gre hitro za nekaj delovnih dni na mesec.",
          "Avtomatiziran zajem ta čas skrajša na pregled in potrditev. Računovodja ne tipka, ampak preverja. Napake zaradi tipkanja izginejo, dokumenti pa so v sistemu isti dan, ko prispejo, kar olajša tudi spremljanje likvidnosti.",
        ],
      },
      {
        h: "Pogodbe in drugi dokumenti",
        p: [
          "Ista tehnologija zna prebrati tudi pogodbe, dobavnice, naročilnice in zapisnike. Iz pogodbe se izluščijo pogodbene stranke, obdobje veljavnosti, odpovedni rok, znesek in posebna določila, sistem pa vas pravočasno opozori na iztek ali podaljšanje.",
          "Za podjetja z večjo količino dokumentov postavimo iskanje po vsebini, tako da lahko zaposleni vprašajo v naravnem jeziku in dobijo odgovor s sklicem na konkreten dokument, namesto da brskajo po mapah.",
        ],
      },
      {
        h: "Natančnost in nadzor",
        p: [
          "Nobena samodejna obdelava ni stoodstotna, zato je sistem zastavljen tako, da negotove primere označi in jih pošlje v ročni pregled, namesto da bi ugibal. Pri tipičnih prejetih računih se v praksi pravilno prebere velika večina dokumentov, ostanek pa gre skozi človeka.",
          "Vse obdelave se beležijo, tako da je za vsak zapis razvidno, iz katerega dokumenta izhaja in kdo ga je potrdil. To je pomembno tako za notranji nadzor kot za revizijo.",
        ],
      },
    ],
    useCases: [
      "Avtomatska obdelava prejetih računov in vpis v ERP",
      "Avtomatsko branje pogodb in opomniki na roke",
      "Razvrščanje in arhiviranje poslovne dokumentacije",
      "Usklajevanje računov z naročilnicami in dobavnicami",
      "Priprava podatkov za obračun DDV",
      "Avtomatizacija finančnih procesov v ERP",
    ],
    faq: [
      {
        q: "Kaj je avtomatizirano računovodstvo?",
        a: "Avtomatizirano računovodstvo pomeni, da programska oprema prevzame zajem in pripravo knjigovodskih podatkov: dokumente prebere, izlušči zneske in stranke, predlaga kontiranje ter podatke pripravi za vpis v računovodski program. Računovodja preverja in potrjuje, namesto da vse prepisuje.",
      },
      {
        q: "Ali zna sistem brati slovenske račune in skene?",
        a: "Da. Sodobni modeli berejo slovenske dokumente, vključno s skeniranimi in fotografiranimi, prepoznajo pa tudi tuje račune v angleščini, nemščini in italijanščini.",
      },
      {
        q: "Ali se poveže z našim računovodskim programom ali ERP?",
        a: "Povezava je odvisna od programa. Kjer obstaja API ali uvoz datotek (na primer eSlog e-račun, XML ali CSV), podatke zapišemo neposredno. Kjer tega ni, pripravimo datoteko v obliki, ki jo program sprejme.",
      },
      {
        q: "Kaj se zgodi, če sistem kaj prebere narobe?",
        a: "Dokumenti z nizko gotovostjo se ne knjižijo samodejno, ampak gredo v vrsto za pregled. Vsak zapis ima povezavo do izvornega dokumenta, tako da je preverjanje hitro.",
      },
      {
        q: "Ali gredo naši računi v tuje oblake?",
        a: "Obdelava poteka prek ponudnikov jezikovnih modelov, s katerimi so sklenjene pogodbe o obdelavi podatkov in ki podatkov ne uporabljajo za učenje modelov. Kadar je zahteva strožja, zasnujemo rešitev tako, da se občutljivi deli dokumenta pred obdelavo zakrijejo.",
      },
    ],
    keywords: [
      "računovodska avtomatizacija",
      "avtomatizirano računovodstvo",
      "AI za račune avtomatizacija",
      "AI obdelava dokumentov",
      "avtomatsko branje pogodb",
      "avtomatizacija upravljanja dokumentov",
    ],
  },
  {
    slug: "izdelava-spletnih-aplikacij",
    nav: "Izdelava spletnih aplikacij",
    metaTitle: "Izdelava spletnih aplikacij po meri: od zamisli do produkcije",
    metaDescription:
      "Izdelava spletnih aplikacij in internih orodij po meri v Next.js in TypeScript: portali, nadzorne plošče, rezervacijski sistemi, API povezave. Prva različica v 4 do 8 tednih.",
    h1a: "Izdelava",
    h1b: "spletnih aplikacij.",
    intro:
      "Ko obstoječi programi ne pokrijejo vašega procesa, Excel pa je prerasel svojo vlogo, je čas za spletno aplikacijo po meri. Gradimo interna orodja, portale za stranke, nadzorne plošče in rezervacijske sisteme, ki tečejo v brskalniku, delujejo na telefonu in se povežejo z vašimi obstoječimi sistemi.",
    bullets: [
      {
        t: "Aplikacija po meri procesa",
        d: "Zaslon in podatkovni model sledita vašemu procesu, ne obratno. Brez odvečnih polj in brez prilagajanja tujim predlogam.",
      },
      {
        t: "Hitrost in odzivnost",
        d: "Aplikacije v Next.js se naložijo hitro in delujejo enako dobro na računalniku, tablici in telefonu.",
      },
      {
        t: "Povezave z drugimi sistemi",
        d: "Prijava z obstoječimi računi, povezava s CRM, ERP, e-pošto in plačilnimi ponudniki prek API-jev.",
      },
      {
        t: "Vaša koda",
        d: "Po predaji dobite celotno izvorno kodo in dostope. Nadaljnji razvoj lahko prevzame kdorkoli.",
      },
    ],
    body: [
      {
        h: "Kdaj se splača aplikacija po meri",
        p: [
          "Aplikacija po meri se splača, ko ima proces svoja pravila, ko podatke danes vodite v več razpredelnicah hkrati ali ko bi za isto stvar morali kupiti tri različne programe in jih med seboj še povezati. Splača se tudi, ko je treba strankam ali partnerjem ponuditi dostop do podatkov, ki jih imate interno.",
          "Ne splača pa se, kadar obstaja standardna rešitev, ki pokrije devetdeset odstotkov potreb. V takem primeru je pogosto ceneje kupiti program in avtomatizirati le tisto, kar manjka. To povemo odkrito, tudi če to pomeni manjši projekt za nas.",
        ],
      },
      {
        h: "Kako gradimo",
        p: [
          "Delo razdelimo na kratke korake. Najprej postavimo osnovno različico s tistim, kar je nujno za uporabo v praksi, in jo damo v roke prvim uporabnikom. Šele nato dodajamo funkcije, ki se izkažejo za potrebne. Tako se izognemo mesecem razvoja za zaslone, ki jih nihče ne odpre.",
          "Uporabljamo Next.js, React in TypeScript, podatke vodimo v PostgreSQL ali Supabase, aplikacije pa tečejo na Vercelu. Gre za preverjene tehnologije s širokim krogom razvijalcev, kar pomeni, da niste odvisni od ene same ekipe.",
        ],
      },
      {
        h: "Umetna inteligenca v aplikaciji",
        p: [
          "Kjer se izplača, v aplikacijo vgradimo tudi jezikovni model: iskanje po vsebini v naravnem jeziku, samodejne povzetke, predloge besedil ali pomočnika, ki uporabnika vodi skozi vnos. Ta del ni nujen, je pa pogosto tisti, ki prihrani največ časa.",
        ],
      },
    ],
    useCases: [
      "Interna orodja in nadzorne plošče za vodenje podjetja",
      "Portali za stranke in partnerje z omejenim dostopom",
      "Rezervacijski in naročniški sistemi",
      "Katalogi in konfiguratorji izdelkov",
      "Aplikacije za terensko delo na telefonu",
      "Zamenjava razpredelnic z resnično bazo podatkov",
    ],
    faq: [
      {
        q: "Koliko stane izdelava spletne aplikacije?",
        a: "Manjša aplikacija z enim jasnim procesom se začne pri 3.000 €, obsežnejše aplikacije z več vlogami uporabnikov in integracijami pa se gibljejo od 8.000 € naprej. Ceno pripravimo po popisu zahtev in je fiksna.",
      },
      {
        q: "Kako dolgo traja izdelava?",
        a: "Prvo uporabno različico tipično predamo v 4 do 8 tednih. Manjša orodja so lahko končana prej, obsežnejši sistemi pa se gradijo v več zaporednih fazah.",
      },
      {
        q: "V čem se spletna aplikacija razlikuje od spletne strani?",
        a: "Spletna stran predstavlja podjetje in vsebino, spletna aplikacija pa opravlja delo: uporabniki se prijavijo, vnašajo in spreminjajo podatke, sistem pa jih obdela. Če potrebujete predstavitev, preberite stran o izdelavi spletnih strani.",
      },
      {
        q: "Ali aplikacijo lahko pozneje vzdržuje nekdo drug?",
        a: "Da. Kodo predamo skupaj z dokumentacijo in dostopi, tehnologije pa so standardne, zato jo lahko prevzame katerakoli ekipa. Vzdrževanje pri nas je možnost, ne pogoj.",
      },
      {
        q: "Kdo skrbi za gostovanje in varnost?",
        a: "Aplikacije tečejo na Vercelu s samodejnim varnostnim certifikatom, podatkovna baza pa na Supabase ali drugi evropski infrastrukturi. Po dogovoru prevzamemo tudi redne posodobitve in nadzor delovanja.",
      },
    ],
    keywords: [
      "izdelava spletnih aplikacij",
      "izdelava spletne aplikacije",
      "izdelava spletnih strani in aplikacij",
      "izdelava internetnih aplikacij",
      "spletna aplikacija po meri",
      "razvoj spletnih aplikacij",
    ],
  },
  {
    slug: "poslovna-inteligenca",
    nav: "Poslovna inteligenca in analitika",
    metaTitle: "Poslovna inteligenca: rešitve za analitiko in poročanje",
    metaDescription:
      "Rešitve za poslovno inteligenco in analitiko: združevanje podatkov iz ERP, CRM in spletne trgovine, nadzorne plošče in samodejna poročila z AI povzetki.",
    h1a: "Poslovna",
    h1b: "inteligenca.",
    intro:
      "Poslovna inteligenca je zbiranje, povezovanje in prikaz podatkov podjetja tako, da so iz njih razvidne odločitve. V praksi to pomeni, da podatke iz ERP, CRM, spletne trgovine in razpredelnic združimo na enem mestu ter jih prikažemo v nadzorni plošči, ki jo razume tudi nekdo, ki ni analitik.",
    bullets: [
      {
        t: "En vir resnice",
        d: "Podatki iz različnih sistemov se združijo in uskladijo, tako da vsi gledajo iste številke.",
      },
      {
        t: "Nadzorne plošče",
        d: "Pregled prodaje, marž, zalog, likvidnosti in učinkovitosti v realnem času, po oddelkih in obdobjih.",
      },
      {
        t: "Samodejna poročila",
        d: "Tedensko ali mesečno poročilo pride po e-pošti samo, brez ročnega sestavljanja v Excelu.",
      },
      {
        t: "AI povzetki",
        d: "Jezikovni model iz podatkov izlušči, kaj se je spremenilo in kje je odstopanje, v nekaj stavkih.",
      },
    ],
    body: [
      {
        h: "Od razpredelnic do nadzorne plošče",
        p: [
          "Večina podjetij ima podatke, nima pa pregleda. Prodaja je v ERP, povpraševanja v CRM, oglaševanje v drugem orodju, mesečno poročilo pa nekdo vsak mesec ročno sestavi iz treh izvozov. Rezultat je poročilo, ki je zastarelo že ob nastanku, in številke, o katerih se na sestanku razpravlja, namesto da bi se na njihovi podlagi odločalo.",
          "Rešitev je podatkovni sloj, v katerega se podatki prenašajo samodejno, in nad njim prikaz, ki se osvežuje sam. Ko je to postavljeno, so nova poročila stvar nekaj ur dela, ne novega projekta.",
        ],
      },
      {
        h: "Napredna analitika in umetna inteligenca",
        p: [
          "Ko so podatki urejeni, se odprejo možnosti, ki so bile prej nedosegljive: napoved prodaje in porabe zalog, prepoznavanje strank s tveganjem odhoda, odkrivanje odstopanj v stroških in razumevanje, kje se proces zatakne. Za manjša podjetja so pogosto dovolj preprosti modeli, ki pa so bistveno boljši od občutka.",
          "Jezikovni model doda razlago: namesto da si graf vsak razlaga po svoje, dobite napisan povzetek, kaj se je spremenilo in katere postavke to pojasnjujejo. Vodstvo tako bere stavke, ne preglednic.",
        ],
      },
    ],
    useCases: [
      "Nadzorna plošča prodaje, marž in zalog",
      "Rešitve za poslovno inteligenco in analitiko nad ERP podatki",
      "Samodejna tedenska in mesečna poročila",
      "Spremljanje likvidnosti in terjatev",
      "Analiza donosnosti strank in izdelkov",
      "Napoved povpraševanja in zalog",
    ],
    faq: [
      {
        q: "Kaj je poslovna inteligenca?",
        a: "Poslovna inteligenca je zbiranje in povezovanje podatkov iz poslovnih sistemov ter njihov prikaz v obliki, ki podpira odločanje. Obsega podatkovni sloj, nadzorne plošče in poročila, danes pa vse pogosteje tudi napovedne modele in samodejne povzetke.",
      },
      {
        q: "Ali potrebujemo velik ERP, da se to splača?",
        a: "Ne. Tudi podjetje, ki podatke vodi v manjšem programu in razpredelnicah, hitro pridobi, ko se ti viri povežejo. Velikost sistema ni pogoj, urejeni podatki so.",
      },
      {
        q: "Katera orodja uporabljate?",
        a: "Kjer to zadošča, postavimo nadzorne plošče po meri v spletni aplikaciji, ki jo že uporabljate. Kjer je smiselno, uporabimo uveljavljena orodja za poročanje. Izbira je odvisna od tega, kdo bo poročila bral in kako pogosto.",
      },
      {
        q: "Kako dolgo traja postavitev?",
        a: "Prvo delujočo nadzorno ploščo z enim virom podatkov tipično postavimo v dveh do treh tednih. Povezovanje več sistemov in urejanje podatkov traja dlje, odvisno od stanja virov.",
      },
    ],
    keywords: [
      "poslovna inteligenca",
      "napredna poslovna inteligenca",
      "rešitve za poslovno inteligenco in analitiko",
      "poslovno inteligentni sistem",
      "poslovna analitika",
      "nadzorne plošče",
    ],
  },
  {
    slug: "interni-ai-asistent",
    nav: "Interni AI asistent",
    metaTitle: "Interni chatbot in AI pomočnik za zaposlene v slovenščini",
    metaDescription:
      "Interni AI asistent, ki odgovarja na vprašanja zaposlenih iz vaših pravilnikov, navodil in cenikov. Slovenski chatbot z navedbo vira, brez izmišljenih odgovorov.",
    h1a: "Interni",
    h1b: "AI asistent.",
    intro:
      "Interni AI asistent je chatbot, ki ga uporabljajo vaši zaposleni, ne stranke. Povezan je z vašo dokumentacijo, pravilniki, navodili in ceniki ter odgovarja na vprašanja na podlagi teh dokumentov, s sklicem na vir. Novi sodelavci tako ne sprašujejo vedno istih vprašanj, izkušeni pa ne ponavljajo istih odgovorov.",
    bullets: [
      {
        t: "Vaši dokumenti kot vir",
        d: "Pravilniki, navodila, ceniki, pogodbe in zapisniki. Odgovor temelji na njih, ne na splošnem znanju modela.",
      },
      {
        t: "Sklic na vir",
        d: "Pri vsakem odgovoru je navedeno, iz katerega dokumenta izhaja, tako da je trditev mogoče preveriti.",
      },
      {
        t: "Nadzor dostopa",
        d: "Kdor nima pravice do dokumenta, iz njega ne dobi odgovora. Pravice sledijo vaši obstoječi ureditvi.",
      },
      {
        t: "Tekoča slovenščina",
        d: "Asistent razume in odgovarja v slovenščini, po potrebi pa tudi v angleščini, hrvaščini ali nemščini.",
      },
    ],
    body: [
      {
        h: "Zakaj interni asistent in ne zgolj iskalnik",
        p: [
          "Iskalnik po dokumentih vrne seznam datotek, med katerimi mora zaposleni še sam najti odgovor. Interni asistent vrne odgovor in povezavo do mesta, kjer piše. Razlika je največja pri vprašanjih, ki zahtevajo sestavljanje več virov, na primer kaj velja za določeno vrsto naročila pri določeni stranki.",
          "Drugi učinek je razbremenitev ljudi. V vsakem podjetju obstaja nekaj posameznikov, ki vedo vse in jih zato ves čas nekdo prekinja. Asistent prevzame prav ta ponavljajoča se vprašanja.",
        ],
      },
      {
        h: "Da odgovori ne bodo izmišljeni",
        p: [
          "Asistent deluje po načelu iskanja z navedbo vira. Model ne odgovarja iz spomina, ampak dobi ustrezne odlomke vaših dokumentov in odgovor sestavi iz njih. Kadar v dokumentih ni podlage, to pove, namesto da bi ugibal.",
          "Kakovost je odvisna od urejenosti gradiva. Pri postavitvi zato pomagamo tudi pri tem, kateri dokumenti so še veljavni in katere je treba umakniti, saj asistent sicer zvesto ponavlja zastarela navodila.",
        ],
      },
      {
        h: "Kje živi",
        p: [
          "Asistent je lahko dosegljiv v brskalniku, na intranetu ali neposredno v orodju, ki ga ekipa že uporablja, na primer v Slacku, Teamsih ali WhatsAppu. Cilj je, da zaposlenemu ni treba odpreti novega programa, da bi dobil odgovor.",
        ],
      },
    ],
    useCases: [
      "Odgovori na vprašanja o pravilnikih in internih postopkih",
      "Pomoč prodaji pri cenikih, popustih in pogojih",
      "Tehnična navodila za servis in terensko ekipo",
      "Uvajanje novih sodelavcev brez stalnega spraševanja",
      "Iskanje po pogodbah in zapisnikih z navedbo vira",
      "Notranji AI pomočnik v Slacku ali Teamsih",
    ],
    faq: [
      {
        q: "Kaj je interni chatbot?",
        a: "Interni chatbot je AI asistent za zaposlene, povezan z internim gradivom podjetja. Za razliko od chatbota na spletni strani, ki streže strankam, ta odgovarja na vprašanja o postopkih, pravilih, izdelkih in strankah, in to le tistim, ki imajo do podatkov pravico.",
      },
      {
        q: "Ali gredo naši interni dokumenti v učenje modela?",
        a: "Ne. Uporabljamo poslovne dostope ponudnikov, pri katerih se vsebina ne uporablja za učenje modelov, s ponudnikom pa je sklenjena pogodba o obdelavi podatkov. V model gre ob vsakem vprašanju le odlomek, potreben za odgovor.",
      },
      {
        q: "Kaj, če asistent česa ne ve?",
        a: "Pove, da v razpoložljivih dokumentih odgovora ni, in po potrebi vprašanje preusmeri na odgovorno osebo. To je namerno: bolje je priznati vrzel kot ponuditi izmišljen odgovor.",
      },
      {
        q: "Koliko dokumentov lahko zajame?",
        a: "Od nekaj deset do več deset tisoč dokumentov. Pri večjih količinah je pomembnejše od števila to, kako so dokumenti urejeni in ali so označene veljavne različice.",
      },
      {
        q: "Koliko stane postavitev?",
        a: "Interni asistent z omejenim naborom dokumentov se začne pri 2.500 €, obsežnejše postavitve z nadzorom dostopa in povezavo na več virov pa pri 5.000 €. Mesečni stroški delovanja so odvisni od števila vprašanj.",
      },
    ],
    keywords: [
      "interni chatbot",
      "notranji AI pomočnik",
      "interni AI pomočnik",
      "slovenski chatbot",
      "AI asistent za zaposlene",
      "iskanje po internih dokumentih",
    ],
  },
  {
    slug: "ai-video-produkcija",
    nav: "AI video produkcija",
    metaTitle: "AI video za podjetja: izdelava videov z umetno inteligenco",
    metaDescription:
      "Izdelava AI videov za podjetja v Sloveniji: oglasi, predstavitve izdelkov, vsebine za družbena omrežja in zaslone. Brez snemalne ekipe, prvi osnutek v nekaj dneh.",
    h1a: "AI video",
    h1b: "produkcija.",
    intro:
      "Video oglase, predstavitve izdelkov in vsebine za družbena omrežja danes izdelamo z generativnimi orodji, brez snemalne ekipe in studia. Za podjetja to pomeni vsebino v nekaj dneh namesto v nekaj tednih in strošek, ki je razred pod klasično produkcijo.",
    bullets: [
      {
        t: "Od zamisli do posnetka",
        d: "Pripravimo scenarij, prizore, glasovno pripoved in glasbo ter vse sestavimo v končni video.",
      },
      {
        t: "Prave fotografije, kjer štejejo",
        d: "Pri resničnih objektih in izdelkih uporabimo vaše fotografije in jih oživimo, da rezultat ostane verodostojen.",
      },
      {
        t: "Vse velikosti hkrati",
        d: "Isti video v pokončni obliki za družbena omrežja, ležeči za splet in v meri za oglasni zaslon ali totem.",
      },
      {
        t: "Slovenska pripoved",
        d: "Glasovna pripoved in napisi v slovenščini, po potrebi tudi v drugih jezikih.",
      },
    ],
    body: [
      {
        h: "Kaj je z AI videom mogoče in kaj ne",
        p: [
          "Generativna orodja so danes odlična pri kratkih prizorih, ozračju, animiranih razlagah, predstavitvah izdelkov in oglasih za družbena omrežja. Manj zanesljiva so pri dolgih neprekinjenih kadrih z ljudmi in pri vsebinah, kjer mora biti prikazana točno določena resnična lokacija.",
          "Zato se v praksi obnese kombinacija. Kjer gre za konkreten objekt, izdelek ali prostor, izhajamo iz vaših fotografij in posnetkov, generativna orodja pa uporabimo za gibanje, prehode, ozadja in končno podobo. Kjer prizor ni vezan na resničnost, ga ustvarimo v celoti.",
        ],
      },
      {
        h: "Kako poteka izdelava",
        p: [
          "Najprej se dogovorimo za namen videa, dolžino in mesto objave, saj je oglas za zaslon v trgovini nekaj drugega kot petnajstsekundna vsebina za družbena omrežja. Sledi scenarij in razrez po prizorih, ki ga potrdite, preden nastane prvi posnetek.",
          "Prvi osnutek pripravimo v nekaj dneh, nato sledi krog popravkov. Poleg končne različice z napisi vedno pripravimo tudi čisto različico brez besedila, da jo lahko pozneje uporabite za druge namene.",
        ],
      },
    ],
    useCases: [
      "Video oglasi za Facebook, Instagram in TikTok",
      "Predstavitve izdelkov in storitev",
      "Vsebine za oglasne zaslone in totem",
      "Animirane razlage storitev in postopkov",
      "Video za spletno stran in predstavitve",
      "Redna serija objav za družbena omrežja",
    ],
    faq: [
      {
        q: "Kdo izdeluje AI videe za podjetja v Sloveniji?",
        a: "AI PRO SOLUTIONS d.o.o. izdeluje video vsebine z generativnimi orodji za slovenska podjetja: oglase, predstavitve izdelkov, vsebine za družbena omrežja in oglasne zaslone. Delo poteka na daljavo po vsej Sloveniji, komunikacija pa v slovenščini.",
      },
      {
        q: "Koliko stane AI video?",
        a: "Krajši video za družbena omrežja se začne pri 300 €, obsežnejši oglas s scenarijem, glasovno pripovedjo in več različicami pa pri 800 €. Redno mesečno objavljanje pokrijemo s paketom.",
      },
      {
        q: "Kako hitro je video pripravljen?",
        a: "Prvi osnutek tipično v treh do petih delovnih dneh po potrditvi scenarija, končna različica pa po enem krogu popravkov.",
      },
      {
        q: "Ali je iz videa razvidno, da je nastal z umetno inteligenco?",
        a: "Pri dobro pripravljenem gradivu praviloma ne moti nikogar, vendar smo do tega odkriti. Kjer gre za resnične izdelke, nepremičnine ali prostore, vedno izhajamo iz pravih posnetkov, saj ustvarjena podoba v takih primerih zavaja.",
      },
      {
        q: "Ali lahko uporabimo obraz našega zaposlenega ali znane osebe?",
        a: "Obraz zaposlenega da, z njegovim pisnim soglasjem. Podobe znanih oseb brez dovoljenja ne uporabljamo, saj gre za poseg v pravico do lastne podobe.",
      },
    ],
    keywords: [
      "AI video za podjetja",
      "izdelava AI videov",
      "AI video produkcija Slovenija",
      "generativni video oglas",
      "video za družbena omrežja",
    ],
  },
];
