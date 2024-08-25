document.addEventListener("DOMContentLoaded", () => {
  // Select all the steps and next step buttons
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
        dropdown.classList.remove("invalid"); // Remove the invalid class when a value is selected
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
      console.log("Clicked outside. Dropdown closed.");
    }
  });

  // Keep track of the current step
  let currentStep = 0;

  // Function to show the current step and hide the others
  const showStep = (index: number): void => {
    steps.forEach((step, i) => {
      if (i === index) {
        step.style.display = "flex";
      } else {
        step.style.display = "none";
      }
    });
  };

  // Initial display of the first step
  showStep(currentStep);

  // Function to validate the current step
  const validateStep = (stepIndex: number): boolean => {
    const currentStepElement = steps[stepIndex];
    const inputs = currentStepElement.querySelectorAll(
      "input, textarea, select"
    );
    let isValid = true;

    // Track the groups of radio buttons we've checked
    const radioGroupsChecked = new Set<string>();

    inputs.forEach(input => {
      if (input instanceof HTMLInputElement && input.type === "radio") {
        // If we've already checked this radio button group, skip
        if (radioGroupsChecked.has(input.name)) return;

        const radioGroup = currentStepElement.querySelectorAll(
          `input[name="${input.name}"]`
        ) as NodeListOf<HTMLInputElement>;

        const isChecked = Array.from(radioGroup).some(radio => radio.checked);

        if (!isChecked) {
          isValid = false;
          radioGroup.forEach(radio => radio.classList.add("invalid"));
        } else {
          radioGroup.forEach(radio => radio.classList.remove("invalid"));
        }

        // Mark this radio button group as checked
        radioGroupsChecked.add(input.name);
      } else if (
        (input instanceof HTMLInputElement ||
          input instanceof HTMLTextAreaElement ||
          input instanceof HTMLSelectElement) &&
        input.type === "text" &&
        input.classList.contains("dropdown-toggle")
      ) {
        // Custom validation for the dropdown
        if (input.value === "" || input.value === input.placeholder) {
          isValid = false;
          input.classList.add("invalid");
        }
      } else if (
        input instanceof HTMLInputElement &&
        (input.type === "text" || input.type === "number")
      ) {
        // Validation for text and number inputs (like First Name, Last Name, Phone, etc.)
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

  // Add event listeners to the "Next Step" buttons
  nextButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (validateStep(currentStep)) {
        if (currentStep < steps.length - 1) {
          currentStep++;
          showStep(currentStep);
        } else {
          console.log("All steps completed. Form can be submitted.");
          // Optionally, submit the form here if this is the last step
          // form.submit();
        }
      } else {
        alert("Please fill out all required fields before proceeding.");
      }
    });
  });
});
