const app = Vue.createApp({
  data() {
    return {
      h1text: "Lebenslauf",
      h2positions: "Beruflicher Werdegang",
      navItems: [
        {
          id: 1,
          name: "Beruflicher Werdegang",
          anchorID: "positions",
        },
        {
          id: 2,
          name: "Ausbildung",
          anchorID: "education",
        },
        {
          id: 3,
          name: "Schulbildung",
          anchorID: "schools",
        },
        {
          id: 4,
          name: "Sprachen",
          anchorID: "languages",
        },
        {
          id: 5,
          name: "Skills",
          anchorID: "skills",
        },
        {
          id: 6,
          name: "Profile",
          anchorID: "profiles",
        },
        {
          id: 7,
          name: "Projekte",
          anchorID: "projects",
        },
        {
          id: 8,
          name: "Interessen",
          anchorID: "hobbies",
        },
      ],
      personalData: {
        title: "Web-Anwendungsentwicklerin (Frontend/Backend)",
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
          certificate: "img/certificates/work/StadtspiegelDortmund.pdf",
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
          certificate: "img/certificates/work/BusinessPartnerSystems.pdf",
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
          certificate: "img/certificates/work/HilpertGmbH&CoKG.pdf",
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
          certificate: "img/certificates/work/PadaRii.pdf",
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
          certificate: "img/certificates/work/W+B.pdf",
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
          certificate: "img/certificates/work/BergmannsheilBochum.pdf",
        },
      ],
      h2education: "Ausbildung",
      h3apprenticeship: "Berufs-Ausbildung",
      apprenticeships: [
        {
          id: 1,
          duration: "09/1987 - 05/1990",
          title: "Druckvorlagenherstellerin, Fachrichtung Reproretusche",
          company: "Hilpert GmbH & Co.KG",
          address: "Girardetstraße 58-64, 45131 Essen",
          finalNote: 2.0,
          certificate: "img/certificates/apprenticeship/GesellenBrief.pdf",
        },
      ],
      h3study: "Weiterbildung",
      studies: [
        {
          id: 1,
          duration: "seit 2015",
          title: "Autodidaktische Weiterbildung",
          institute: "durch Online-Kurse",
          finalNote: "",
          skills: [
            "PHP",
            "mySQL",
            "Python",
            "JavaScript",
            "HTML",
            "CSS",
            "XML",
            "Search Engine Optimization (SEO)",
            "WordPress",
            "Elementor",
            "Copywriting",
            "Rhetorik",
          ],
        },
        {
          id: 2,
          duration: "01/2023 - 08/2023",
          title: "Web-Anwendungsentwicklerin",
          institute: "Coding Bootcamps Europe",
          finalNote: "",
          skills: [
            "HTML, CSS",
            "JavaScript, Vue.js",
            "NPM, Node",
            "Git / GitHub",
            "Testing",
            "Accessibility",
            "Agile Projektorganisation",
          ],
          certificate:
            "img/certificates/apprenticeship/CodingBootcampsEurope_Zertifikat_Kirsten-Anders.pdf",
        },
        {
          id: 3,
          duration: "10/2011 - 06/2012",
          title: "Fachkraft für Büromanagement (XB)",
          institute: "Volkshochschule Essen",
          finalNote: "1.87",
          skills: [
            "Verhandlungstechniken",
            "Konflikt-, Projekt-, Büro-Management",
            "Wirtschafts-Recht",
            "Brief-Gestaltung",
            "Tabellen-Kalkulation",
            "E-Mail-, Termin- und Kontakt-Management",
          ],
          certificate: "img/certificates/apprenticeship/Gesamt_Zertifikat#.pdf",
        },
        {
          id: 4,
          duration: "09/2010 - 02/2011",
          title: "ProfiTrain-Lehrgang",
          institute: "Euro-Schulen Bochum",
          finalNote: "",
          skills: [
            "EDV, KHK Sage/Classic Line",
            "Sekretariat/Office-Management",
            "Rechnungswesen",
            "Auftragsbearbeitung",
            "Personalwesen",
          ],
          certificate: "img/certificates/apprenticeship/ProfiTrain#.pdf",
        },
        {
          id: 5,
          duration: "02/2011 - 03/2011",
          title: "LCCI-Zertifikat Wirtschafts-Englisch",
          institute: "Euro-Schulen Bochum",
          finalNote: "",
          skills: [
            "Grammar (Englische Grammatik)",
            "Business Writing",
            "Conversation in Business",
            "Telephoning",
          ],
          certificate:
            "img/certificates/apprenticeship/WirtschaftsEnglisch#.pdf",
        },
        {
          id: 6,
          duration: "01/2008 - 07/2008",
          title: "Web-Developer: Programmierung und Design",
          institute: "WBS Training AG, Bochum",
          finalNote: "sehr gut (92%)",
          skills: [
            "Photoshop, CS2",
            "HTML, DHTML",
            "PHP, mySQL",
            "Javascript",
            "Bildanimation mit GL Flash",
          ],
          certificate:
            "img/certificates/apprenticeship/WBSTraining_WebDeveloper#.pdf",
        },
        {
          id: 7,
          duration: "05/2001 - 05/2002",
          title: "Medienentwickler Bild und Grafik",
          institute: "Technische Akademie Wuppertal e. V. (TAW), Bochum",
          finalNote: "",
          skills: [
            "MS Word, MS Excel",
            "HTML/Javascript",
            "Dreamweaver, Director, Flash, Freehand",
            "Premiere",
            "AutoCAD, 3D Studio Max",
            "Grundlagen Printdesign mit Corel Draw",
            "Bildbearbeitung mit Photoshop",
            "Medienrecht",
          ],
          certificate:
            "img/certificates/apprenticeship/TAWBochum_MedienEntwickler_BildGrafik#.pdf",
        },
        {
          id: 8,
          duration: "03/1999 - 06/1999",
          title: "Screen-Designer und Web-Master",
          institute:
            "Akademie für Informations- und Telekommunikationstechnik GmbH (AIT), Essen",
          finalNote: "",
          skills: [
            "Grundlagen Internet",
            "Nutzung der Dienste im Internet",
            "Administration",
            "Web-Design",
          ],
          certificate:
            "img/certificates/apprenticeship/AIT_ScreenDesigner_WebMaster.pdf",
        },
        {
          id: 9,
          duration: "12/1996 - 06/1997",
          title: "Desktop Publishing für das Druckvorstufengewerbe",
          institute: "InMedia Bildung GmbH, Köln",
          finalNote: "1.0",
          skills: [
            "Grundlagen EDV",
            "Macintosh Betriebssystem 7.5",
            "PageMaker 6.0",
            "Illustrator 6.0",
            "Freehand 5.0",
            "QuarkXPress 3.32",
            "Photoshop 3.05",
          ],
          certificate:
            "img/certificates/apprenticeship/InMedia_Koeln_DTP-Druckvorstufengewerbe.pdf",
        },
        {
          id: 10,
          duration: "08/1994 - 06/1996",
          title: "Staatlich geprüfte Drucktechnikerin",
          institute:
            "Albrecht-Dürer-Schule, Düsseldorf, Fachschule für Drucktechnik",
          finalNote: "gut(1.6)",
          skills: [
            "Druckvorstufentechnik, Druck- und Druckverarbeitungstechnik",
            "Automatisierungstechnik",
            "Betriebswirtschaft, Betriebsorganisation",
            "Qualitätsmanagement",
            "Finanzbuchhaltung, Betriebliches Rechnungs- und Kostenwesen",
            "Personalwirtschaft und Soziologie / Politik",
            "Fach-Englisch, Kommunikation",
          ],
          certificate:
            "img/certificates/apprenticeship/ADS_TechnikerSchule.pdf",
        },
        {
          id: 11,
          duration: "12/1991 - 04/1994",
          title: "Geprüfte Industriemeisterin Druck",
          institute: "Berufsförderung im Grafischen Gewerbe e. V., Essen",
          finalNote: "",
          skills: [
            "Grundlagen für kostenbewusstes Handeln",
            "Grundlagen für rechtsbewusstes Handeln",
            "Grundlagen für Zusammenarbeit im Betrieb",
            "Technologie der Werk- und Hilfsstoffe",
            "Betriebstechnik",
            "Allgemeine Fertigungstechnik, Spezielle Fertigungstechnik",
            "Kalkulation",
          ],
          certificate: "img/certificates/apprenticeship/Meisterbrief.pdf",
        },
        {
          id: 12,
          duration: "02/1991 - 11/1991",
          title: "Ausbildereignungsprüfung",
          institute: "Berufsförderung im Grafischen Gewerbe e. V., Essen",
          finalNote: "",
          skills: [
            "Grundfragen der Berufsbildung",
            "Planung und Durchführung der Ausbildung",
            "Der Jugendliche in der Ausbildung",
            "Rechtsgrundlagen in der Berufsbildung",
            "Praktisch durchzuführende Unterweisung",
          ],
          certificate: "img/certificates/apprenticeship/AusbilderSchein.pdf",
        },
      ],
      h2school: "Schulbildung",
      schools: [
        {
          id: 1,
          duration: "08/1985 - 06/1987",
          school: "Gymnasialer Zweig der Höheren Handelsschule",
          title: "Allgemeine Hochschulreife (Abitur)",
          finalNote: 2.2,
        },
        {
          id: 2,
          duration: "08/1984 - 07/1985",
          school:
            "Kaufmännische Schule I der Stadt Essen, Höhere Handelsschule",
          title: "",
          finalNote: "",
        },
        {
          id: 3,
          duration: "08/1978 - 06/1984",
          school: "Städt. Realschule - Helene-Lange-Schule, Essen-Steele",
          title: "Fachoberschulreife (FOS)",
          finalNote: 1.2,
        },
      ],
      h2lang: "Sprachen",
      languages: [
        {
          id: 1,
          language: "Deutsch",
          ger: "C1 - Kompetente Sprachverwendung",
          description: [
            "kann ein breites Spektrum anspruchsvoller Texte verstehen",
            "hohes Maß an grammatikalischer Korrektheit",
            "beherrschst einen großen Wortschatz",
            "kann beim Lesen komplexe Texte im Detail verstehen, auch wenn diese nicht dem eigenen Spezialgebiet angehören",
            "kann gesprochene Sprache verstehen, auch wenn diese nicht klar strukturiert ist und wenn Zusammenhänge nicht explizit ausgedrückt sind",
          ],
          certificate:
            "img/certificates/languages/Sprachtest-Certificate-Deutsch-Kirsten-Anders.pdf",
        },
        {
          id: 2,
          language: "Englisch",
          ger: "B1 - Selbständige Sprachverwendung",
          description: [
            "kann sich in der Regel in vertrauten Situationen ausreichend korrekt verständigen",
            "passable Beherrschung grammatikalischer Strukturen",
            "solider Wortschatz",
            "kann beim Lesen unkomplizierte Sachtexte und Korrespondenz recht gut verstehen, in denen sehr gebräuchliche Alltags- oder Berufssprache vorkommt, z. B. Briefe oder Informationsbroschüren",
            "kann in der Regel bei Gesprächen oder Radionachrichten die Hauptpunkte verstehen, sofern deutlich gesprochen wird",
          ],
          certificate:
            "img/certificates/languages/Sprachtest-Certificate-Englisch-Kirsten-Anders.pdf",
        },
      ],
      h2skills: "Besondere Kenntnisse",
      skills: [
        {
          id: 1,
          name: "Video-Schnitt und Bearbeitung",
          description:
            "Erstellung von Musik-Videos mit Hilfe des Videoschnitt-Programms DaVinci17 für eigenen YouTube-Kanal",
          link: "https://www.youtube.com/c/RelaxMusic21",
        },
        {
          id: 2,
          name: "Fotorealistisches Malen und Zeichnen",
          description:
            "mit Blei- und Buntstift- sowie Aquarell-Technik von Landschaften, Blumen, Tieren und Gebäuden",
          link: "",
        },
      ],
      h2profiles: "Profile",
      profiles: [
        {
          id: 1,
          name: "GitHub",
          link: "https://github.com/kiraGit67?tab=repositories",
        },
        {
          id: 2,
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/kirsten-anders/",
        },
      ],
      h2hobbies: "Interessen & Hobbies",
      hobbies: [
        {
          id: 1,
          duration: "seit 07/2018",
          name: "Jazz Dance & Jazz Ballett",
          description:
            "Im Ballett-Studio Dance-City, Am Markt 10, 44575 Castrop-Rauxel",
        },
      ],
      h2projects: "Projekte",
      projects: [
        {
          id: 1,
          imgSource: "img/logos/capp-logo.svg",
          name: "CAPP Car Sharing App",
          description:
            "Abschlussprojekt im Rahmen meiner Fortbildung bei den Coding Bootcamps Europe, \nerstellt mit Vue.js, Pinia Store, Supabase Datenbank-Technik, \n gemeinsam mit 3 weiteren Bootcamp-Kollegen",
          link: "https://capp-app.netlify.app/",
        },
        {
          id: 2,
          imgSource: "img/logos/sgev-logo.svg",
          name: "Seniorenglück e.V. - Lebenshilfe Dortmund",
          description:
            "Webseite für den gemeinnützigen Verein Seniorenglück e.V., der bedürftige Seniorinnen und Senioren finanziell und sozial unterstützt, \nerstellt mit WordPress 6.0, GREYD.Suite und Gutenberg Editor",
          link: "https://seniorenglueck-lebenshilfe.de/",
        },
        {
          id: 3,
          imgSource: "img/logos/amelie-logo-black.png",
          name: "Amélie Brautmoden GmbH",
          description:
            "Webshop für die Amélie Brautmoden GmbH, \nerstellt mit WordPress 6.0, WooCommerce",
          link: "https://www.ameliebridal.de/",
        },
      ],
    };
  },
  computed: {
    mailto() {
      return "mailto:" + this.personalData.email;
    },
  },
}).mount("#app");
