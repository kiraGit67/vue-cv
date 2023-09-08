const app = Vue.createApp({
  data() {
    return {
      h1text: "Lebenslauf",
      h2positions: "Beruflicher Werdegang",
      personalData: {
        title: "Full Stack Web Developer (Frontend/Backend)",
        firstName: "Kirsten",
        lastName: "Anders",
        phone: "0231 / 33 00 53 18",
        mobile: "+49 179 / 4 72 99 23",
        email: "kirsten@sais.de",
        address: {
          street: "Klarastraße 11",
          zipcode: "44388",
          city: "Dortmund",
        },
        dateOfBirth: "03.02.1967",
        locationOfBirth: "Essen",
        nationality: "deutsch",
        photoSrc: "img/kirsten_mail.jpg",
      },
      h3jobs: "Angestellte Tätigkeiten",
      dependentJobs: [
        {
          id: 1,
          duration: "05/2018 - 11/2018",
          position: "Medien-Beraterin",
          company: "Stadtspiegel Dortmund",
          address: "Westerfilder Straße 22, 44239 Dortmund",
          tasks: [
            "Telefon-Akquise von Zeitungsanzeigen",
            "Versenden von Angeboten",
          ],
        },
        {
          id: 2,
          duration: "04/2018",
          position: "Büro-Aushilfskraft",
          company: "H.W. Nowak",
          address: "Aplerbecker Straße 432, 44287 Dortmund",
          tasks: [
            "Rechnungen und Angebote schreiben",
            "Telefonische Kundenberatung",
          ],
        },
        {
          id: 3,
          duration: "12/2004 - 11/2007",
          position: "Hotline-Mitarbeiterin / Bürofachkraft",
          company: "Business-Partner-System GmbH",
          address: "Duisburger Straße 375, 46049 Oberhausen",
          tasks: [
            "Kundenbetreuung an der Hotline",
            "Auswertung des Schriftverkehrs",
            "Entwurf von Marketing-Materialien",
          ],
        },
        {
          id: 4,
          duration: "06/1987 - 07/1994",
          position: "Druckvorlagenherstellerin",
          company: "Hilpert GmbH & Co. KG",
          address: "Girardetstraße 58-64, 45131 Essen",
          tasks: [
            "Bild-Text-Composing",
            "Bildbearbeitung",
            "Farbkorrekturen",
            "Originalmontage bis zum Endfilm",
          ],
        },
      ],
      h3free: "Freiberufliche Tätigkeiten",
      freeJobs: [
        {
          id: 1,
          duration: "seit 2008",
          position: "Erstellung von Websites und Webshops unter Einsatz von ",
          company: "",
          tasks: [
            "WordPress und WooCommerce",
            "Elementor",
            "Gutenberg Editor",
            "GREYD Suite",
          ],
        },
        {
          id: 2,
          duration: "05/2003 - 07/2004",
          position: "Gestaltung und Erstellung von Foldern, Katalogen u. ä.",
          company:
            "MIIX - Merchandising, Incentives, Internet Exchange, Bottrop-Kirchhellen",
          tasks: [],
        },
        {
          id: 3,
          duration: "1998 - 2004",
          position: "regelmäßige Gestaltung der Clubzeitschrift",
          company: "Tanzsportclub Rot-Silber Witten",
          tasks: [
            "Bildeingabe und –bearbeitung",
            "Erstellung von Grafiken und Logos",
            "Seitenlayout",
          ],
        },
        {
          id: 4,
          duration: "09/1998 - 10/1998",
          position: "DTP-Kraft",
          company: "Werbeagentur Pada rii, Essen",
          tasks: [
            "Gestaltung und Layout von Reiseprospekten",
            "Bildbearbeitung",
            "Seitenlayout",
          ],
        },
      ],
      h3practica: "Betriebs-Praktika",
      praktika: [
        {
          id: 1,
          duration: "01/1998 - 02/1998",
          title: "Ausbildungsbegleitendes Praktikum",
          company: "W+B GmbH",
          address: "Grafenberger Allee 32, 40237 Düsseldorf",
          tasks: ["Bildbearbeitung", "Bild-Text-Composing", "Layout"],
        },
        {
          id: 2,
          duration: "05/2002",
          title: "Ausbildungsbegleitendes Praktikum",
          company:
            "Abteilung Fotografie und Mediendesign, Berufsgenossenschaftliche Kliniken Bergmannsheil, Universitätsklinik",
          address: "Bürkle-de-la-Camp-Platz 1, 44789 Bochum",
          tasks: [
            "Bildbearbeitung mit Photoshop",
            "Layout und Setzen von Postern, Faltblättern, Flyern mit PageMaker",
            "Anfertigen von Illustrationen und Logos als Vektorgrafik",
            "Erstellen von Präsentationen mit Powerpoint",
            "Videofilm, Videonachbearbeitung für medizinische Dokumentationen",
            "Webdesign mittels Dreamweaver",
          ],
        },
      ],
      h3apprenticeship: "Berufs-Ausbildung",
      apprenticeships: [
        {
          id: 1,
          duration: "09/1987 - 05/1990",
          title: "Druckvorlagenherstellerin, Fachrichtung Reproretusche",
          company: "Hilpert GmbH & Co.KG",
          address: "Girardetstraße 58-64, 45131 Essen",
          finalNote: 2.0,
        },
      ],
    };
  },
}).mount("#app");
