// Create section
const section = document.createElement("section");
section.id = "section";

// Create paragraph
const title = document.createElement("p");
title.id = "title";
title.textContent = "This is the title paragraph";

// Add paragraph to section using appendChild
section.appendChild(title);

// Create another paragraph using append
const para1 = document.createElement("p");
para1.textContent = "This paragraph is added using append()";
section.append(para1);

// Create paragraph using prepend
const para2 = document.createElement("p");
para2.textContent = "This paragraph is added using prepend()";
section.prepend(para2);

// Create remove button
const removeButton = document.createElement("button");
removeButton.textContent = "Remove Top Most Element";

// Remove logic
removeButton.addEventListener("click", function () {
    const firstElement = section.firstElementChild;

    // Prevent removing the button itself
    if (firstElement && firstElement !== removeButton) {
        firstElement.remove();
    }
});

// Add button using append
section.append(removeButton);

// Add section to body
document.body.append(section);


// replace all existing children