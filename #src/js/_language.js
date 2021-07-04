const langArr = {
    menu: {
      ru: "О нас",
      ua: "Про нас",
    },
    menu2: {
      ru: "Процесс",
      ua: "Процес",
    },
    menu3: {
      ru: "Услуги",
      ua: "Послуги",
    },
    menu4: {
      ru: "Преподаватели",
      ua: "Викладачі",
    },
    menu5: {
      ru: "Отзывы",
      ua: "Відгуки",
    },
    menu6: {
      ru: "Контакты",
      ua: "Контакти",
    },
    menu7: {
      ru: "Информация",
      ua: "Інформація",
    },
    slide: {
        ru: "Хочешь поступить в университет мечты?",
        ua: "Хочеш вступити до університету мрії?",  
    },
    slide2: {
        ru: "Хочешь сдать ВНО на высокий балл?",
        ua: "Хочеш здати ЗНО на високий бал?",  
    },
    slide3: {
        ru: "Хочешь сдать ГНА высокий балл?",
        ua: "Хочеш здати ДПА на високий бал?",  
    },
    headerSubtitle: {
        ru: "Начни готовиться уже сейчас",
        ua: "Почни готуватись вже зараз",    
    },
    headerTitle: {
        ru: "Математика Физика",
        ua: "Математика Фізика",    
    },
    headerButton: {
        ru: "Запись на бесплатный урок",
        ua: "Запис на безкоштовний урок",    
    },
    aboutTitle: {
        ru: "О нас",
        ua: "Про нас",    
    },
    processTitle: {
        ru: "Процесс обучения",
        ua: "Процес навчання",    
    },
    servicesTitle: {
        ru: "Наши услуги",
        ua: "Наші послуги",    
    },
    servicesAlgebra: {
        ru: "Алгебра",
        ua: "Алгебра",    
    },
    servicesGeometry: {
        ru: "Геометрия",
        ua: "Геометрія",    
    },
    servicesPhysics: {
        ru: "Физика",
        ua: "Фізика",    
    },
    servicesZno: {
        ru: "ВНО",
        ua: "ЗНО",    
    },
    servicesDpa: {
        ru: "ГИА",
        ua: "ДПА",    
    },
    centerText: {
        ru: "Помни, что мы - не курсы, мы - репетиторский центр Math Corporation",
        ua: "Пам'ятай, що ми - не курси, ми - репетиторський центр Math Corporation",    
    },
    headerButton2: {
        ru: "Запись на бесплатный урок",
        ua: "Запис на безкоштовний урок",    
    }
}

  const burger = document.querySelector(".header__burger");
  const navBar = document.querySelector(".nav-bar");
  const headerMenue = document.querySelectorAll(".header__link");
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownList = document.querySelector(".dropdown__list");
  // const dropdownInput = document.querySelector(".dropdown_input");
  
  const allLang = ["ru", "ua"];
  // location.href = window.location.pathname + "#en";
  
  dropdownBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownList.classList.toggle("show");
  });
  
  const changeURLLanguage = (e) => {
    e.stopPropagation();
    let lang = e.target.dataset.value;
  
    location.href = window.location.pathname + "#" + lang;
  
    dropdownList.classList.toggle("show");
    console.log(event.target);
  
    changeLanguage();
  };
  
  dropdownList.addEventListener("click", changeURLLanguage);
  document.addEventListener("click", (event) => {
    if (dropdownList.classList.contains("show")) {
      dropdownList.classList.remove("show");
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab" || event.key === "Escape") {
      dropdownList.classList.remove("show");
    }
  });
  

  function changeLanguage() {
    let hash = window.location.hash;
    console.log("hash-1 ", hash);
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
      location.href = window.location.pathname + "#ru";
      location.reload();
      console.log("Error");
    }
    console.log(langArr["menu"][hash]);
  
    dropdownBtn.textContent = hash.toUpperCase();
    for (let key in langArr) {
      let element = document.querySelector(".lng-" + key);
      if (element && langArr[key][hash]) {
        element.textContent = langArr[key][hash];
      }
    }
  }
  changeLanguage();