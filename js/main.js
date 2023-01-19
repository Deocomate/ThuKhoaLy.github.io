function iGenerate() {
    console.log(1);
    let heart = document.getElementById("heart-all");
    for (let index = 0; index <= 360; index += 10) {
        heart.innerHTML += `
        <i class="bi bi-heart tran1 rotate-${index} delay-time-${index}"></i>
        `
    }
}
iGenerate()