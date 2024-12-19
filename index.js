const clientRadio = document.getElementById("client");
const freelancerRadio = document.getElementById("freelancer");
const clientBox = document.getElementById("client-box");
const freelancerBox = document.getElementById("freelancer-box");
const applyButton = document.getElementById("apply-button");

document.body.addEventListener("change", () => {
  if (clientRadio.checked) {
    clientBox.classList.add("selected");
    freelancerBox.classList.remove("selected");
    applyButton.textContent = "Join as a Client";
    applyButton.onclick = () => (
      window.location.href = "https://www.youtube.com/@vicerhatech?sub_confirmation=1"
    )
  } else if (freelancerRadio.checked) {
    freelancerBox.classList.add("selected");
    clientBox.classList.remove("selected");
    applyButton.textContent = "Apply as a Freelancer";
    applyButton.onclick = () => (
      window.location.href = "https://www.youtube.com/@vicerhatech?sub_confirmation=1"
    )
  }
});
