import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n.use(initReactI18next).init({
  lng: "en",            
  fallbackLng: "en",    
  interpolation: {
    escapeValue: false, 
  },
  resources: {
    en: {
      translation: {
        title: "Multi-language app",
        label: "Select another language!",
        about: "About",
        home: "Home",
        user: "My name is: {{name}}"
      },
    },
    es: {
      translation: {
        title: "Aplicación en varios idiomas",
        label: "Selecciona otro lenguaje!",
        about: "Sobre mí",
        home: "Inicio",
        user: "Mi nombre es: {{name}}"
      },
    },
    it: {
      translation: {
        title: "Applicazione multilingue",
        label: "Selezionare un'altra lingua ",
        about: "Su di me",
        home: "Casa",
        user: "Mi chiamo: {{name}}"
      },
    },
    hi: {
        translation: {
          title: "बहुभाषी ऐप",
          label: "दूसरी भाषा चुनें!",
          about: "बारे में",
          home: "घर",
          user: "मेरा नाम है: {{name}}"
        },
      },
      
      ne: {
        translation:{
      title: "बहुभासी एप्प",
      label: "अर्को भाषा छान्नुहोस्",
      about: "बारेमा",
      home: "घर",
      user: "मेरो नाम हो: {{name}}"
        },
      },
      
  },
});

export default i18n;






//use the initReactI18next plugin with i18next to make it easier for 
//internationalization of react app easier