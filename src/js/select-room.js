let selectContainerRoom = document.querySelector(".select-container-room");
let selectRoom = document.querySelector(".select-room");
let inputRoom = document.getElementById("input-room");
let optionsRoom = document.querySelectorAll(".option-room");

selectRoom.onclick = () => {
    selectContainerRoom.classList.toggle("active");
};

optionsRoom.forEach((e) => {
    e.addEventListener("click", () => {
        inputRoom.value = e.innerText;
        selectContainerRoom.classList.remove("active");
        optionsRoom.forEach((e) => {
            e.classList.remove("selected");
        });
        e.classList.add("selected");
    });
});