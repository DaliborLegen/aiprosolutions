export type CenikPostavka = {
  ime: string;
  od: number;
  enota: string;
  opis: string;
  vkljuceno: string[];
  href?: string;
};

// En sam vir resnice za cene. Uporablja ga stran /cene, strukturirani podatki
// in llms.txt, da se navedbe med seboj ne razhajajo.
export const cenik: CenikPostavka[] = [
  {
    ime: "AI chatbot za podporo strankam",
    od: 1500,
    enota: "projekt",
    opis:
      "Chatbot na spletni strani, ki odgovarja v slovenščini na podlagi vaših vsebin in pogostih vprašanj.",
    vkljuceno: [
      "Priprava baze znanja iz vaših gradiv",
      "Vgradnja na spletno stran",
      "Predaja pogovorov človeku",
      "Pregled pogovorov in poročilo",
    ],
    href: "/storitve/ai-chatbot",
  },
  {
    ime: "Avtomatizacija enega procesa",
    od: 1500,
    enota: "proces",
    opis:
      "En konkreten proces od začetka do konca: zajem podatkov, obdelava, zapis v vaš sistem, obveščanje.",
    vkljuceno: [
      "Popis obstoječega procesa",
      "Povezava dveh sistemov",
      "Ravnanje ob napakah in beleženje",
      "Meritev prihranjenih ur",
    ],
    href: "/storitve/avtomatizacija-poslovnih-procesov",
  },
  {
    ime: "AI agent z integracijami",
    od: 4000,
    enota: "projekt",
    opis:
      "Agent, ki samostojno opravi nalogo v vaših sistemih: prebere, presodi, zapiše in obvesti.",
    vkljuceno: [
      "Povezava z več sistemi prek API",
      "Pravila odločanja in omejitve",
      "Nadzorna plošča nad opravljenim delom",
      "Testno obdobje pod nadzorom",
    ],
    href: "/storitve/ai-agenti",
  },
  {
    ime: "Interni AI asistent",
    od: 2500,
    enota: "projekt",
    opis:
      "Asistent za zaposlene, ki odgovarja iz vaših pravilnikov, navodil in cenikov, z navedbo vira.",
    vkljuceno: [
      "Zajem in ureditev dokumentov",
      "Iskanje z navedbo vira",
      "Nadzor dostopa po vlogah",
      "Dostop prek brskalnika ali Slacka in Teamsov",
    ],
    href: "/storitve/interni-ai-asistent",
  },
  {
    ime: "Predstavitvena spletna stran",
    od: 1500,
    enota: "projekt",
    opis:
      "Hitra, odzivna in za iskalnike pripravljena stran z vsebino, ki jo lahko urejate sami.",
    vkljuceno: [
      "Oblikovanje po meri",
      "Vsebinska struktura za iskalnike",
      "Obrazec in merjenje obiska",
      "Postavitev in domena",
    ],
    href: "/storitve/izdelava-spletnih-strani",
  },
  {
    ime: "Spletna aplikacija po meri",
    od: 3000,
    enota: "projekt",
    opis:
      "Interno orodje, portal ali nadzorna plošča z uporabniškimi računi in povezavami na vaše sisteme.",
    vkljuceno: [
      "Podatkovni model po vašem procesu",
      "Prijava in vloge uporabnikov",
      "Povezave prek API",
      "Predaja izvorne kode",
    ],
    href: "/storitve/izdelava-spletnih-aplikacij",
  },
  {
    ime: "Avtomatizacija računovodstva",
    od: 2500,
    enota: "projekt",
    opis:
      "Samodejno branje prejetih računov in dokumentov s predlogom kontiranja in pripravo za vpis.",
    vkljuceno: [
      "Zajem iz e-pošte ali mape",
      "Branje podatkov in postavk",
      "Predlog konta in stroškovnega mesta",
      "Priprava datoteke za vaš program",
    ],
    href: "/storitve/avtomatizacija-racunovodstva",
  },
  {
    ime: "AI video za družbena omrežja",
    od: 300,
    enota: "video",
    opis:
      "Krajši video oglas ali predstavitev, pripravljen z generativnimi orodji, v vseh potrebnih velikostih.",
    vkljuceno: [
      "Scenarij in razrez po prizorih",
      "Glasovna pripoved in glasba",
      "Vse velikosti za objavo",
      "Čista različica brez napisov",
    ],
    href: "/storitve/ai-video-produkcija",
  },
  {
    ime: "AI svetovanje in pregled procesov",
    od: 900,
    enota: "pregled",
    opis:
      "Pregled procesov s poročilom, oceno prihrankov in načrtom uvedbe. Znesek odštejemo od kasnejšega projekta.",
    vkljuceno: [
      "Razgovori z ekipo",
      "Popis procesov in ozkih grl",
      "Ocena prihrankov po procesu",
      "Načrt uvedbe po prednostnem vrstnem redu",
    ],
    href: "/storitve/ai-svetovanje",
  },
  {
    ime: "Mesečno vzdrževanje in podpora",
    od: 90,
    enota: "mesec",
    opis:
      "Nadzor delovanja, varnostne posodobitve, manjše izboljšave in tehnična podpora po zagonu.",
    vkljuceno: [
      "Nadzor delovanja in obvestila",
      "Varnostne posodobitve",
      "Manjše izboljšave",
      "Odzivni čas po dogovoru",
    ],
  },
];

export const cenikFaq = [
  {
    q: "Koliko stane AI rešitev za podjetje?",
    a: "Preprost AI chatbot ali avtomatizacija enega procesa se začne pri 1.500 €, AI agent z integracijami v poslovne sisteme pri 4.000 €, spletna aplikacija po meri pri 3.000 €. Mesečni stroški delovanja so tipično od 20 do 150 € na mesec, odvisno od obsega uporabe.",
  },
  {
    q: "Ali je cena fiksna?",
    a: "Da. Po brezplačnem posvetu in popisu zahtev pripravimo ponudbo s fiksno ceno in rokom. Doplačilo je možno le, če med projektom sami razširite obseg, in vedno po predhodni potrditvi.",
  },
  {
    q: "Kakšni so mesečni stroški po zagonu?",
    a: "Ločimo dvoje. Stroški delovanja (gostovanje, baza, uporaba AI modelov) so pri manjših rešitvah tipično od 20 do 150 € na mesec in jih plačujete neposredno ponudnikom. Vzdrževanje pri nas je neobvezno in se začne pri 90 € na mesec.",
  },
  {
    q: "Kdaj se naložba povrne?",
    a: "Pri avtomatizaciji procesa, ki danes vzame pet ur na teden, gre za okoli 250 ur letno. Pri interni ceni ure 25 € to pomeni približno 6.000 € letno, zato se rešitev za 1.500 do 3.000 € tipično povrne v treh do šestih mesecih.",
  },
  {
    q: "Ali zaračunavate uvodni posvet?",
    a: "Ne. Prvi 30-minutni posvet in okvirna ocena sta brezplačna in brez obveznosti. Plačljiv je šele podrobnejši pregled procesov s poročilom, ki se začne pri 900 € in ga pri kasnejši izvedbi odštejemo od projekta.",
  },
  {
    q: "Kako poteka plačilo?",
    a: "Praviloma v dveh ali treh obrokih: ob potrditvi ponudbe, ob vmesnem mejniku in ob predaji. Za manjše projekte je možno tudi plačilo v celoti ob predaji.",
  },
];
