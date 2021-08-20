const navLineBottom = document.getElementById("navLineBottom");
const sectionModal = document.querySelector("section.modal");
let buttonMenuClicked = false;

function lineBottomNavMenu(e, left) {
  const anchorNavMenu = document.querySelectorAll("header .menu");
  const width = e.offsetWidth;
  for (menu of anchorNavMenu) {
    menu.style.color = "#777";
  }
  navLineBottom.style.left = `${left}px`;
  navLineBottom.style.width = `${width}px`;
  e.style.color = "#0180ff";
}

document.onscroll = function () {
  const scroll = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.getElementById("header");
  const logo = document.querySelector("header .logo");
  const navMenu = document.querySelectorAll("header .menu");
  if (!buttonMenuClicked) {
    if (scroll > 100) {
      header.classList.add("header-scroll");
      logo.style.width = "140px";
      navLineBottom.style.top = "45px";
    } else {
      header.classList.remove("header-scroll");
      logo.style.width = "180px";
      navLineBottom.style.top = "40px";
    }
  }
  const aboutSection = document.getElementById("about");
  const featureSection = document.getElementById("feature");
  const testimonialSection = document.getElementById("testimonial");
  const downloadSection = document.getElementById("download");
  if (scroll <= aboutSection.offsetTop - 150) {
    lineBottomNavMenu(navMenu[0], 0);
  } else if (
    scroll > aboutSection.offsetTop - 150 &&
    scroll <= featureSection.offsetTop - 150
  ) {
    lineBottomNavMenu(navMenu[1], 88);
  } else if (
    scroll > featureSection.offsetTop - 150 &&
    scroll <= testimonialSection.offsetTop - 100
  ) {
    lineBottomNavMenu(navMenu[2], 193);
  } else if (
    scroll > testimonialSection.offsetTop - 100 &&
    scroll <= downloadSection.offsetTop - 150
  ) {
    lineBottomNavMenu(navMenu[3], 270);
  } else if (scroll > downloadSection.offsetTop - 150) {
    lineBottomNavMenu(navMenu[4], 385);
  }
};

function showModalTestimoni() {
  sectionModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function hideModalTestimoni() {
  sectionModal.style.display = "none";
  document.body.style.overflow = "visible";
  clearInputValue();
}

function clearInputValue() {
  document.getElementById("testiName").value = "";
  document.getElementById("testiPhoto").value = "";
  document.getElementById("testiJob").value = "";
  document.getElementById("testiContent").value = "";
}

function addTestimonialToStorage() {
  let name = document.getElementById("testiName").value;
  let photo = document.getElementById("testiPhoto").value;
  let job = document.getElementById("testiJob").value;
  let content = document.getElementById("testiContent").value;
  if (name === "" || photo === "" || job === "" || content === "") {
    return alert("Isi semua form  terlebih dahulu!");
  }
  if (content.length > 200) {
    return alert("Testimoni maksimal 200 karakter!");
  }
  const dataTesti = {
    name: name,
    photo: photo,
    job: job,
    content: content,
  };
  putTestimonial(dataTesti);
  clearInputValue();
  hideModalTestimoni();
  renderTestimonial();
}

function clickNavMenu(e) {
  const header = document.querySelector("header");
  const menu = document.querySelector("header nav");
  if (buttonMenuClicked) {
    buttonMenuClicked = false;
    e.setAttribute("src", "assets/images/menu.png");
    menu.style.display = "none";
    header.style.height = "75px";
    header.classList.remove("bg-white");
  } else {
    buttonMenuClicked = true;
    e.setAttribute("src", "assets/images/close.png");
    menu.style.display = "block";
    header.style.height = "100px";
    header.classList.add("bg-white");
  }
}
