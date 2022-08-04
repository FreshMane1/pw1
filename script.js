const big_Dive_pokazat = document.querySelector(".big_Dive_pokazat");
const big_uslug_cards = document.querySelector(".big_uslug_cards");
const more_btnnn = document.querySelector(".more_btnnn");
const db_drugoy_proekt = document.querySelector(".db_drugoy_proekt");

big_Dive_pokazat.style.height = "0px";
big_uslug_cards.style.height = "0px";
big_uslug_cards.style.display = "none"

more_btnnn.addEventListener("click", () => {
  if ((big_Dive_pokazat.style.height == "0px")) {
    big_Dive_pokazat.style.height = "895px";
    return (more_btnnn.innerHTML = `Свернуть <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.9192 1.08076C10.4116 0.57308 9.58844 0.57308 9.08076 1.08076L0.807612 9.35391C0.29993 9.86159 0.29993 10.6847 0.807612 11.1924C1.31529 11.7001 2.13841 11.7001 2.64609 11.1924L10 3.83848L17.3539 11.1924C17.8616 11.7001 18.6847 11.7001 19.1924 11.1924C19.7001 10.6847 19.7001 9.86159 19.1924 9.35391L10.9192 1.08076ZM11.3 27L11.3 2L8.7 2L8.7 27L11.3 27Z" fill="#120212"/>
    </svg>
    `);
  }

  if ((big_Dive_pokazat.style.height == "895px")) {
    big_Dive_pokazat.style.height = "0px";
    return (more_btnnn.innerHTML = ` Показать больше <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.08076 25.9192C9.58844 26.4269 10.4116 26.4269 10.9192 25.9192L19.1924 17.6461C19.7001 17.1384 19.7001 16.3153 19.1924 15.8076C18.6847 15.2999 17.8616 15.2999 17.3539 15.8076L10 23.1615L2.64609 15.8076C2.13841 15.2999 1.31529 15.2999 0.807613 15.8076C0.299931 16.3153 0.299931 17.1384 0.807613 17.6461L9.08076 25.9192ZM8.7 5.68249e-08L8.7 25L11.3 25L11.3 -5.68249e-08L8.7 5.68249e-08Z" fill="#120212"></path>
  </svg>
    `);
  }
});



db_drugoy_proekt.addEventListener("click", () => {
  if ((big_uslug_cards.style.height == "0px")) {
    big_uslug_cards.style.display = "flex"
    big_uslug_cards.style.height = "895px";
    db_drugoy_proekt.style.marginTop = "-198px"
    return (db_drugoy_proekt.innerHTML = `Свернуть <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.9192 1.08076C10.4116 0.57308 9.58844 0.57308 9.08076 1.08076L0.807612 9.35391C0.29993 9.86159 0.29993 10.6847 0.807612 11.1924C1.31529 11.7001 2.13841 11.7001 2.64609 11.1924L10 3.83848L17.3539 11.1924C17.8616 11.7001 18.6847 11.7001 19.1924 11.1924C19.7001 10.6847 19.7001 9.86159 19.1924 9.35391L10.9192 1.08076ZM11.3 27L11.3 2L8.7 2L8.7 27L11.3 27Z" fill="#120212"/>
    </svg>
    `);
  }

  if ((big_uslug_cards.style.height == "895px")) {
    big_uslug_cards.style.height = "0px";
    big_uslug_cards.style.display = "none"
    db_drugoy_proekt.style.marginTop = "40px"

    return (db_drugoy_proekt.innerHTML = ` Другие проекты    <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.08076 25.9192C9.58844 26.4269 10.4116 26.4269 10.9192 25.9192L19.1924 17.6461C19.7001 17.1384 19.7001 16.3153 19.1924 15.8076C18.6847 15.2999 17.8616 15.2999 17.3539 15.8076L10 23.1615L2.64609 15.8076C2.13841 15.2999 1.31529 15.2999 0.807613 15.8076C0.299931 16.3153 0.299931 17.1384 0.807613 17.6461L9.08076 25.9192ZM8.7 5.68249e-08L8.7 25L11.3 25L11.3 -5.68249e-08L8.7 5.68249e-08Z" fill="#120212"></path>
  </svg>
    `);
  }
})


const header_navbar = document.querySelector('.header_navbar');

header_navbar.style.transition = "5s"

window.addEventListener('scroll', (e) => {
  if (window.scrollY > 70) {
    header_navbar.style.position = "fixed"
    header_navbar.style.top = "0"
    header_navbar.style.left = "50%"
    header_navbar.style.transition = "5s"
    header_navbar.style.transform = "translateX(-50%)"
  }else{
    header_navbar.style.position = "absolute"
    header_navbar.style.top = "0"
    header_navbar.style.left = "50%"
    header_navbar.style.transition = "5s"
    header_navbar.style.transform = "translateX(-50%)"
  }
})