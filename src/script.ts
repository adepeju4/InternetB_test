document.addEventListener("DOMContentLoaded", () => {
  const steps: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".content-wrapper");

  const nextButtons: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".next-step-button");
  const dropdown = document.querySelector(
    ".dropdown-toggle"
  ) as HTMLInputElement;

  const dropdownMenu = document.querySelector(".dropdown-menu") as HTMLElement;
  const dropdownItems = dropdownMenu?.querySelectorAll("li");

  if (dropdownItems && dropdown) {
    dropdown.addEventListener("click", function () {
      dropdownMenu.classList.toggle("show");
    });

    dropdownItems.forEach(function (item) {
      item.addEventListener("click", function () {
        const value = item.innerText || "";
        dropdown.value = value;
        dropdown.classList.remove("invalid");
        dropdownMenu.classList.remove("show");
      });
    });
  }

  document.addEventListener("click", function (event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    if (
      !dropdown.contains(targetElement) &&
      !dropdownMenu.contains(targetElement)
    ) {
      dropdownMenu.classList.remove("show");
    }
  });

  // Keep track of the current step
  let currentStep = 0;

  const showStep = (index: number): void => {
    steps.forEach((step, i) => {
      if (i === index) {
        step.style.display = "flex";
      } else {
        step.style.display = "none";
      }
    });
  };

  showStep(currentStep);

  const validateStep = (stepIndex: number): boolean => {
    const currentStepElement = steps[stepIndex];
    const inputs = currentStepElement.querySelectorAll(
      "input, textarea, select"
    );
    let isValid = true;

    const radioGroupsChecked = new Set<string>();

    inputs.forEach(input => {
      if (input instanceof HTMLInputElement && input.type === "radio") {
        if (radioGroupsChecked.has(input.name)) return;

        const radioGroup = currentStepElement.querySelectorAll(
          `input[name="${input.name}"]`
        ) as NodeListOf<HTMLInputElement>;

        const isChecked = Array.from(radioGroup).some(radio => radio.checked);

        if (!isChecked) {
          isValid = false;
          radioGroup.forEach(radio => {
            radio.classList.add("invalid");
            const customRadio = radio.nextElementSibling as HTMLElement;
            customRadio.classList.add("invalid");
          });
        } else {
          radioGroup.forEach(radio => {
            radio.classList.remove("invalid");
            const customRadio = radio.nextElementSibling as HTMLElement;
            customRadio.classList.remove("invalid");
          });
        }

        radioGroupsChecked.add(input.name);
      } else if (
        (input instanceof HTMLInputElement ||
          input instanceof HTMLTextAreaElement ||
          input instanceof HTMLSelectElement) &&
        input.type === "text" &&
        input.classList.contains("dropdown-toggle")
      ) {
        if (input.value === "" || input.value === input.placeholder) {
          isValid = false;
          input.classList.add("invalid");
        }
      } else if (
        input instanceof HTMLInputElement &&
        (input.type === "text" || input.type === "number")
      ) {
        if (input.value.trim() === "") {
          isValid = false;
          input.classList.add("invalid");
        } else {
          input.classList.remove("invalid");
        }
      } else if (
        input instanceof HTMLTextAreaElement &&
        (input.name === "zipCode" || input.name === "healthConditions")
      ) {
        if (input.value.trim() === "") {
          isValid = false;
          input.classList.add("invalid");
        } else {
          input.classList.remove("invalid");
        }
      } else if (
        (input instanceof HTMLInputElement ||
          input instanceof HTMLTextAreaElement ||
          input instanceof HTMLSelectElement) &&
        !input.checkValidity()
      ) {
        isValid = false;
        input.classList.add("invalid");
      } else {
        input.classList.remove("invalid");
      }
    });

    return isValid;
  };

  const gatherFormData = (): void => {
    const formData: Record<string, string> = {};
    const formElements = document.querySelectorAll("input, textarea, select");

    formElements.forEach(element => {
      if (element instanceof HTMLInputElement) {
        if (element.type === "radio" || element.type === "checkbox") {
          if (element.checked) {
            formData[element.name] = element.value;
          }
        } else if (element.type === "text" || element.type === "number") {
          formData[element.name] = element.value;
        }
      } else if (
        element instanceof HTMLTextAreaElement ||
        element instanceof HTMLSelectElement
      ) {
        formData[element.name] = element.value;
      }
    });

    console.log("Form Data:", formData);
  };

  nextButtons.forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();

      if (validateStep(currentStep)) {
        if (currentStep < steps.length - 1) {
          currentStep++;
          showStep(currentStep);
        } else {
          gatherFormData();
          alert("Form successfully submitted!");
        }
      } else {
        alert("Please fill out all required fields before proceeding.");
      }
    });
  });
});
