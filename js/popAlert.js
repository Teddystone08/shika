
const test_btn = document.querySelector(".test_btn")
test_btn.click = function() {
	alert("Button clicked!");
	createAllowanceGroup();
}

// Function to create the input group
export function createAllowanceGroup() {
    const container_test = document.querySelector("#container-text")
    // Create a wrapper div for the group
    const groupDiv = document.createElement("div");
    groupDiv.classList.add("input-group");

    // Define input labels and types
    const fields = [
        { label: "Afternoon Shift:", type: "number", id: "ashift" },
        { label: "Night Shift:", type: "number", id: "nshift" },
        { label: "Canteen:", type: "number", id: "food" }
    ];

    // Loop to create inputs and labels
    fields.forEach(field => {
        const label = document.createElement("label");
        label.setAttribute("for", field.id);
        label.textContent = field.label;
        label.classList.add("allowance-label");

        const input = document.createElement("input");
        input.setAttribute("type", field.type);
        input.setAttribute("id", field.id);
        input.setAttribute("name", field.id);
        input.classList.add("allowance-field");
        
        // Append label and input to group
        groupDiv.appendChild(label);
        groupDiv.appendChild(input);
    });

    // Append the group to the container
    container_test.appendChild(groupDiv);
}

/*
// Function to enable/disable the input group
function toggleInputs() {
    const inputs = document.querySelectorAll(".input-field");
    inputs.forEach(input => {
        input.disabled = !input.disabled; // Toggle between enabled and disabled
    });
}

// Call the function to create the input group when the page loads
document.addEventListener("DOMContentLoaded", createAllowanceGroup);
*/