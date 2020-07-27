const checkboxes = document.querySelectorAll(".inbox input");

let lastChecked;

function handleCheck(e) {
    let InBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                InBetween = !InBetween;
            }
            if (InBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));