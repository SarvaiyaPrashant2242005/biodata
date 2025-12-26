// Function to calculate age based on date of birth
const calculateAge = (dob) => {
  const birthDate = new Date(dob.split('/').reverse().join('-')) // Convert DD/MM/YYYY to YYYY-MM-DD
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  
  return age
}

const dateOfBirth = "22/04/2005"
const currentAge = calculateAge(dateOfBirth)

export const content = {
  english: {
    name: "Prashant Gopalbhai Sarvaiya",
    phone: "9316163578",
    hero: {
      title: "Prashant Gopalbhai Sarvaiya",
      subtitle: "Junior Software Developer"
    },
    nav: {
      about: "About",
      personal: "Personal Details",
      family: "Family Members",
      nature: "Nature/Personality",
      hobbies: "Hobbies & Interests",
      maternal: "Maternal Details",
      address: "Address"
    },
    about: {
      title: "About",
      job: "Working as Junior Software Developer (Allysoft Solutions, Rajkot)",
      degree: "B.Tech Engineer",
      skin: "wheatish (medium brown)"
    },
    personal: {
      title: "Personal Details",
      dob: dateOfBirth,
      age: currentAge.toString(),
      birthPlace: "Gondal",
      rashi: "Kanya",
      religion: "Hindu",
      caste: "Kumbhar",
      subCaste: "Prajapati",
      height: "",
      weight: "",
      education: "B.Tech Engineering (ICT)",
      occupation: "Junior Software Developer"
    },
    family: {
      title: "Family Members",
      grandfather: "Ambabhai Shamjibhai Sarvaiya",
      grandmother: "Champaben Sarvaiya",
      father: "Gopalbhai Sarvaiya",
      mother: "Harshidaben Sarvaiya",
      uncle: "Sanjaybhai Sarvaiya",
      aunty: "Ritaben Sarvaiya",
      sister: "Devanshi Sarvaiya",
      brother: "Cousin Brother",
      sis: "Cousin Sister"
    },
    nature: {
      title: "Nature / Personality",
      traits: [
        "Honest and responsible",
        "Family-oriented",
        "Positive thinking"
      ]
    },
    hobbies: {
      title: "Hobbies & Interests",
      list: [
        "Travelling",
        "Listening Music",
        "Learning about culture, traditions, and history",
        "Watching cricket"
      ]
    },
    maternal: {
      title: "Maternal Details - (Junagadh)",
      grandfather: "JadavBhai Lakhabhai Gondaliy",
      grandmother: "Kantaben Jadavbhai Gondaliy",
      uncle1: "Khodabhai(Tinubhai) Gondaliya",
      aunt: "Jayshreeben Gondaliya",
      uncle2: "Divyeshbhai Gondaliya"
    },
    address: {
      title: "Address",
      houseName: "\"Randal Krupa\"",
      area: "Geeta Nagar",
      street: "Jetpur Road",
      city: "Gondal",
      district: "Rajkot",
      state: "Gujarat",
      pincode: "360311",
      country: "India"
    }
  },
  gujarati: {
    name: "પ્રશાંત ગોપાલભાઈ સરવૈયા",
    phone: "9316163578",
    hero: {
      title: "પ્રશાંત ગોપાલભાઈ સરવૈયા",
      subtitle: "જુનિયર સોફ્ટવેર ડેવલપર"
    },
    nav: {
      about: "વિશે",
      personal: "વ્યક્તિગત વિગતો",
      family: "પરિવાર",
      nature: "સ્વભાવ",
      hobbies: "શોખ",
      maternal: "મોસાળ - (જુનાગઢ)",
      address: "સરનામું"
    },
    about: {
      title: "વિશે",
      job: "જુનિયર સોફ્ટવેર ડેવલપર (Allysoft Solutions, Rajkot)",
      degree: "બી.ટેક એન્જિનિયર (ICT)",
      skin: "wheatish (medium brown)"
    },
    personal: {
      title: "વ્યક્તિગત વિગતો",
      dob: dateOfBirth,
      age: `${currentAge} વર્ષ`,
      birthPlace: "ગોંડલ",
      rashi: "કન્યા",
      religion: "હિન્દુ",
      caste: "કુંભાર",
      subCaste: "પ્રજાપતિ",
      height: "",
      weight: "",
      education: "બી.ટેક એન્જિનિયરિંગ (ICT)",
      occupation: "જુનિયર સોફ્ટવેર ડેવલપર"
    },
    family: {
      title: "પરિવાર",
      grandfather: "આંબાભાઈ શામજીભાઈ સરવૈયા\n9979384236",
      grandmother: "ચંપાબેન આંબાભાઈ સરવૈયા",
      father: "ગોપાલભાઈ આંબાભાઈ સરવૈયા  \n 8401018206",
      mother: "હર્ષિદાબેન ગોપાલભાઈ સરવૈયા",
      uncle: "સંજયભાઈ આંબાભાઈ સરવૈયા \n 8401658206 ",
      aunty: "રીતાબેન સંજયભાઈ સરવૈયા",
      sister: "દેવાંશી ગોપાલભાઈ સરવૈયા",
      sis: "નમ્રતા સંજયભાઈ સરવૈયા",
      brother: "હેમાંગ સંજયભાઈ સરવૈયા",
    },
    nature: {
      title: "સ્વભાવ / વ્યક્તિત્વ",
      traits: [
        "પ્રામાણિક અને જવાબદાર",
        "કુટુંબ-લક્ષી",
        "સકારાત્મક વિચારધારા"
      ]
    },
    hobbies: {
      title: "શોખ અને રુચિઓ",
      list: [
        "પ્રવાસ",
        "સંગીત સાંભળવું",
        "સંસ્કૃતિ, પરંપરાઓ અને ઇતિહાસ વિશે શીખવું",
        "ક્રિકેટ જોવું"
      ]
    },
    maternal: {
      title: "મોસાળ - (જુનાગઢ)",
      grandfather: "સ્વ. જાદવભાઈ લાખાભાઈ ગોંડલિયા",
      grandmother: "કાંતાબેન જાદવભાઈ ગોંડલીય",
      uncle1: "ખોડાભાઈ(ટિનુભાઈ) ગોંડલીયા",
      aunt: "જયશ્રીબેન ખોડાભાઈ ગોંડલીયા",
      uncle2: "દિવ્યેશભાઈ ગોંડલીયા"
    },
    address: {
      title: "સરનામું",
      location: "\"રાંદલ કૃપા\", ગીતા નગર, જેતપુર રોડ, ગોંડલ"
    }
  }
}

export const heroImages = ['/Myself/1.jpeg', '/Myself/2.jpeg', '/Myself/3.jpeg', '/Myself/4.jpeg']