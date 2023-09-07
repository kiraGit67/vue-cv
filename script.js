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
    };
  },
}).mount("#app");
