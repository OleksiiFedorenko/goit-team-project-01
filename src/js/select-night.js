let selectContainerNight = document.querySelector(".select-container-night");
let selectNight = document.querySelector(".select-night");
let inputNight = document.getElementById("input-night");
let optionsNight = document.querySelectorAll(".option-night");

selectNight.onclick = () => {
    selectContainerNight.classList.toggle("active");
};

optionsNight.forEach((e) => {
    e.addEventListener("click", () => {
        inputNight.value = e.innerText;
        selectContainerNight.classList.remove("active");
        optionsNight.forEach((e) => {
            e.classList.remove("selected");
        });
        e.classList.add("selected");
    });
});