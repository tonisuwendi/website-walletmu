const CACHE_KEY = "testimonial";

function checkForStorage() {
  return typeof Storage !== undefined;
}

function putTestimonial(data) {
  if (checkForStorage()) {
    let testimonialData = null;
    if (localStorage.getItem(CACHE_KEY) === null) {
      testimonialData = [];
    } else {
      testimonialData = JSON.parse(localStorage.getItem(CACHE_KEY));
    }
    testimonialData.push(data);
    if (testimonialData.length > 3) {
      testimonialData.shift();
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify(testimonialData));
  }
}

function showTestimonial() {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
  } else {
    return [];
  }
}

function loopElm(data) {
  return `<div class="testi-item">
  <div>
    <img
      src="${data.photo}"
      alt="photo"
      class="img-thumb"
    />
    <h4 class="name">${data.name}</h4>
    <small class="job">${data.job}</small>
    <p class="testi">
    ${data.content}
    </p>
  </div>
</div>`;
}

function renderTestimonial() {
  const testiStorage = showTestimonial();
  const testimonialWrapper = document.getElementById("testimonialWrapper");
  let divItem = "";
  for (let testi of dummyTesti) {
    divItem += loopElm(testi);
  }
  for (let testi of testiStorage) {
    divItem += loopElm(testi);
  }
  testimonialWrapper.innerHTML = divItem;
}

renderTestimonial();
