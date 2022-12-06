let selectContainerRoomExit = document.querySelector(".select-container-exit");
let selectRoomExit = document.querySelector(".select-exit");
let inputRoomExit = document.getElementById("input-exit");
let optionsRoomExit = document.querySelectorAll(".option-exit");

selectRoomExit.onclick = () => {
    selectContainerRoomExit.classList.toggle("active");
};

optionsRoomExit.forEach((e) => {
    e.addEventListener("click", () => {
        inputRoomExit.value = e.innerText;
        selectContainerRoomExit.classList.remove("active");
        optionsRoomExit.forEach((e) => {
            e.classList.remove("selected");
        });
        e.classList.add("selected");
    });
});