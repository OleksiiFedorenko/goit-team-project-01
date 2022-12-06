let selectContainer1 = document.querySelector(".select-container1");
let select1 = document.querySelector(".select1");
let input1 = document.getElementById("input1");
let options1 = document.querySelectorAll(".option1");

select1.onclick = () => {
    selectContainer1.classList.toggle("active");
};

options1.forEach((e) => {
    e.addEventListener("click", () => {
        input1.value = e.innerText;
        selectContainer1.classList.remove("active");
        options1.forEach((e) => {
            e.classList.remove("selected");
        });
        e.classList.add("selected");
    });
});