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
      },
    };
  },
}).mount("#app");
