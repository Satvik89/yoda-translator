const search = document.querySelector("#submit");
const input = document.querySelector("#text");
const result = document.querySelector("#result");
result.style.display = "none";

function fetchfunction(text) {
    fetch(`https://api.funtranslations.com/translate/yoda.json?text=${text}`)
        .then(Response => Response.json())
        .then(data => {
            const translated = data.contents.translated;
            console.log(translated);
            result.style.display = "block";
            result.innerHTML = translated;
            document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?star%20wars)";
            input.value = "";

        })

}
search.addEventListener("click", function() {
    const text = input.value;
    fetchfunction(text);
})
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        const text = input.value;
        fetchfunction(text);
    }
})