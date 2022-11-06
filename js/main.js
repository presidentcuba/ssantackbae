function showMenu(key) {
  let listMenu = document.getElementById("listMenu");
  let mask = document.getElementById("maskM");
  switch (key) {
    case 1:
      listMenu.classList.add("show-menu");
      mask.classList.add("active-mask");
      break;
    case 2:
      listMenu.classList.remove("show-menu");
      mask.classList.remove("active-mask");
      break;
    default:
      break;
  }
}
let banner = document.getElementById("bannerSlide");
let slide = document.getElementById("slideMobile");
if (banner && window.innerWidth < 576) {
  banner.classList.add("owl-carousel");
  banner.classList.add("owl-theme");
}
if (slide && window.innerWidth < 576) {
  slide.classList.add("owl-carousel");
  slide.classList.add("owl-theme");
}

function openModal(idModal, isOpen, classActive) {
  let modal = document.getElementById(`${idModal}`).classList;
  let listMenu = document.getElementById("listMenu");
  let mask = document.getElementById("maskM");

  switch (isOpen) {
    case true:
      modal.add("active-modal");
      listMenu.classList.remove("show-menu");
      mask.classList.remove("active-mask");
      break;
    case false:
      modal.remove("active-modal");
      break;
    default:
      break;
  }
}

function handleTabActive(id) {
  const tabOne = document.getElementById(`tabOne`).classList;
  const tabTwo = document.getElementById(`tabTwo`).classList;
  const tabContentOne = document.getElementById(`tabContentOne`).classList;
  const tabContentTwo = document.getElementById(`tabContentTwo`).classList;
  switch (id) {
    case "tabOne":
      tabOne.add("active");
      tabTwo.remove("active");
      tabContentOne.add("show");
      tabContentTwo.remove("show");
      break;
    case "tabTwo":
      tabTwo.add("active");
      tabOne.remove("active");
      tabContentTwo.add("show");
      tabContentOne.remove("show");
      break;

    default:
      break;
  }
}

function showModalPage(id, isClose = false, idParent) {
  let slide = document.getElementById(`${id}`);

  switch (isClose) {
    case false:
      slide.classList.add("active-slide");

      break;
    case true:
      slide.classList.remove("active-slide");
      break;
    default:
      break;
  }
}

function goBack() {
  window.history.back();
}
function goNextPage(route) {
  window.location = route;
}

function handleChangeWeight() {
  let weight = document.querySelector('input[name="weight"]:checked').value;
  let weightOne = document.querySelectorAll(".weightOne");
  let weightTwo = document.querySelectorAll(".weightTwo");
  if (weight == "false") {
    weightTwo[0].classList.add("active");
    weightTwo[1].classList.add("active");
    weightOne[0].classList.remove("active");
    weightOne[1].classList.remove("active");
  } else {
    weightTwo[0].classList.remove("active");
    weightTwo[1].classList.remove("active");
    weightOne[0].classList.add("active");
    weightOne[1].classList.add("active");
  }
}
function handleChangePackage() {
  let package = document.querySelector('input[name="package"]:checked').value;
  let textHide = document.querySelectorAll(".text-des");
  console.log(package);
  console.log(textHide);
  if (package == "true") {
    textHide[0].classList.add("show-text-radio");
    textHide[1].classList.add("show-text-radio");
  } else {
    textHide[0].classList.remove("show-text-radio");
    textHide[1].classList.remove("show-text-radio");
  }
}

let listItemPlus = document.querySelectorAll("#listItemPlus .item");
console.log(listItemPlus);
for (let i = 0; i < listItemPlus.length; i++) {
  listItemPlus[i].onclick = function () {
    let item = document.querySelector("#listItemPlus .item.item-active");
    if (item) {
      item.classList.remove("item-active");
      listItemPlus[i].classList.add("item-active");
    } else {
      listItemPlus[i].classList.add("item-active");
    }
  };
}
