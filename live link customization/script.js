const sidebarIconsContainer = document.createElement("div");
const labels = document.querySelectorAll("label.control-label");
const targetElement = document.querySelector(".btn-sem-form-submit");
const nextStepButton = document.querySelector(".btn-sem-form-submit");
const disclaimer = document.querySelector(".form-disclaimer");
const agreement1 = document.querySelector(".terms-agreement");
const agreement = document.querySelector(".terms-agreement-2");
const input = document.getElementById("nolopath-qzip");
const button = document.querySelector(
  'button[data-label-before-last="Last Step"]'
);
const verisignImg = document.querySelector(".verisign-trust");
const sidebarSub = document.querySelector(".sidebar-sub");
const nolopathForm = document.getElementById("nolopath-form");
const phoneInput = document.getElementById("nolopath-qphone");
const emailInput = document.getElementById("nolopath-qmail");
const firstNameElement = document.getElementById("form-item-first_name");
const lastNameElement = document.getElementById("form-item-last_name");
const phoneLabel = document.querySelector(
  'label.control-label[for="nolopath-qphone"]'
);
const emailLabel = document.querySelector(
  'label.control-label[for="nolopath-qmail"]'
);
const formStep = document.querySelector(".form-step[data-form-step='step-5']");
const sidebarSubSpans = document.querySelectorAll(".sidebar-sub span");
const sidebarHeader = document.querySelector(".sidebar-header");
const captionSm = sidebarHeader.querySelector(".visible-xs");
const captionBg = sidebarHeader.querySelector(".hidden-xs");

if (window.location.href.includes("step-4")) {
  if (button) {
    agreement1.style.display = "none";
    disclaimer.style.display = "block";
    agreement.style.display = "block";
  }
}

const sidebarIconsHTML = `
  <div class="mobile-sidebar-icons">
    <div class="google-trust-reviews">
      <div class="gstars">
        <img alt="Google Icon" class="gicon" src="/path2/sem/images/icons/google-icon-larger.png">
        <img alt="" class="gstar" src="/path2/sem/images/icons/star-full.png">
        <img alt="" class="gstar" src="/path2/sem/images/icons/star-full.png">
        <img alt="" class="gstar" src="/path2/sem/images/icons/star-full.png">
        <img alt="" class="gstar" src="/path2/sem/images/icons/star-full.png">
        <img alt="" class="gstar" src="/path2/sem/images/icons/star-half.png">
      </div>
      <label>1,378 Google reviews</label>
    </div>
    <img alt="Verisign Secured" class="accredited-business" src="https://res.cloudinary.com/dakvwlgun/image/upload/v1728401157/image_4_1_z4wbxr.svg">
    <img alt="Norton Secured" class="norton-trust" src="/path2/sem/images/icons/norton-secured.png">
  </div>
`;

sidebarIconsContainer.innerHTML = sidebarIconsHTML;

if (targetElement) {
  targetElement.insertAdjacentElement("afterend", sidebarIconsContainer);
}

if (nextStepButton) {
  const mobileSubCaption = document.createElement("div");

  mobileSubCaption.textContent =
    "Join over 1M+ others who chose us to connect with a lawyer — for free.";

  mobileSubCaption.classList.add("mobile-sidebar-subcaption");

  mobileSubCaption.style.fontSize = "18px";
  mobileSubCaption.style.fontWeight = "400";
  mobileSubCaption.style.lineHeight = "21.15px";
  mobileSubCaption.style.textAlign = "left";

  // Insert the element
  nextStepButton.insertAdjacentElement("afterend", mobileSubCaption);
}

labels.forEach((label) => {
  const text = label.innerHTML;

  const match = text.match(/^(\d+)\.\s*(.*)$/);
  if (match) {
    const number = match[1];
    const questionText = match[2];

    label.innerHTML = `
      <span>${number}.</span>
      <span>${questionText}</span>
      ${label.querySelector("em") ? label.querySelector("em").outerHTML : ""}
    `;
  }
});

if (input) {
  input.removeAttribute("placeholder");
}

if (captionSm) {
  captionSm.innerText =
    "Get a 100% Free Consult for Up to $3,822/Month in Disability Benefits";
}

if (captionBg) {
  captionBg.innerText =
    "Get a 100% Free Consult for Up to $3,822/Month in Disability Benefits";
}

if (captionBg) {
  const underlineDiv = document.createElement("div");

  underlineDiv.classList.add("caption-underline");
  underlineDiv.style.backgroundColor = "#2376FF";
  underlineDiv.style.width = "68px";
  underlineDiv.style.height = "4px";
  underlineDiv.style.borderRadius = "3px 0px 0px 0px";
  underlineDiv.style.marginTop = "8px";
  underlineDiv.style.opacity = "1";

  captionBg.parentNode.insertBefore(underlineDiv, captionBg.nextSibling);
}

sidebarSubSpans.forEach((span) => {
  if (window.location.href.includes("step-5")) {
    span.innerText = "Enter your details for a free consult.";
  } else {
    span.innerText = "Answer a few questions to get started.";
  }
});

const subNotification = document.createElement("h3");

subNotification.classList.add("mobile-subNotification");
subNotification.innerText = "We found 1 SSDI lawyer in your area!";

sidebarSubSpans[0].insertAdjacentElement("afterend", subNotification);

if (nolopathForm) {
  const headingNotification = document.createElement("h3");
  headingNotification.classList.add("lg-subNotification");
  headingNotification.innerText = "We found 1 SSDI lawyer in your area!";
  headingNotification.style.textAlign = "center";

  nolopathForm.insertAdjacentElement("afterbegin", headingNotification);
}

const newParagraph = document.createElement("p");

newParagraph.innerText =
  "Join over 1M+ others who chose us to connect with a lawyer — for free.";

newParagraph.classList.add("sidebar-subcaption");

sidebarSub.parentNode.insertBefore(newParagraph, sidebarSub.nextSibling);

if (verisignImg) {
  verisignImg.src =
    "https://res.cloudinary.com/dakvwlgun/image/upload/v1728401157/image_4_1_z4wbxr.svg";

  verisignImg.classList.add("accredited-business");

  verisignImg.classList.remove("verisign-trust");
}

// Check if the elements exist, then remove them from the DOM
if (firstNameElement) {
  firstNameElement.remove();
}

if (lastNameElement) {
  lastNameElement.remove();
}

// Define the new "Full Name" container
const fullNameContainer = document.createElement("div");
fullNameContainer.id = "form-item-full_name";
fullNameContainer.className =
  "form-item clearfix form-item-column form-group required not-answered";

// Add a single label for the full name
const fullNameLabel = document.createElement("label");
fullNameLabel.className = "control-label";
fullNameLabel.setAttribute("for", "nolopath-qfirst_name");
fullNameLabel.innerText = "What's your full name?";
fullNameContainer.appendChild(fullNameLabel);

// Create a wrapper for the two input boxes
const inputWrapper = document.createElement("div");
inputWrapper.className = "input-box";
inputWrapper.classList.add("input-name-step-5");

// Add the "First Name" input
const firstNameInput = document.createElement("input");
firstNameInput.id = "nolopath-qfirst_name";
firstNameInput.name = "first_name";
firstNameInput.type = "text";
firstNameInput.className = "form-control form-text";
firstNameInput.placeholder = "First Name";
inputWrapper.appendChild(firstNameInput);

// Add the "Last Name" input
const lastNameInput = document.createElement("input");
lastNameInput.id = "nolopath-qlast_name";
lastNameInput.name = "last_name";
lastNameInput.type = "text";
lastNameInput.className = "form-control form-text";
lastNameInput.placeholder = "Last Name";
inputWrapper.appendChild(lastNameInput);

// Append the wrapper with inputs to the container
fullNameContainer.appendChild(inputWrapper);

// Insert the "Full Name" container into form-step-5

if (formStep) {
  formStep.insertBefore(fullNameContainer, formStep.firstChild);
}

if (phoneLabel) {
  phoneLabel.innerText = "What’s your telephone number?";
}

if (emailLabel) {
  emailLabel.innerText = "What’s your email address?";
}

if (phoneInput) {
  phoneInput.removeAttribute("placeholder");
}

if (emailInput) {
  emailInput.removeAttribute("placeholder");
}
