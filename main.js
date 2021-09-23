let inputEl = document.querySelector("#formId");



inputEl.addEventListener("submit",function(btn){
    console.log("salom")
    
    btn.preventDefault()

    let search = document.querySelector(".searchInput").value;

    fetch("https://api.github.com/users/" + search)
    .then((result) => result.json())
    .then((data) => {
        
    let repoEl = document.querySelector(".repository");

        repoEl.innerHTML = `
        <img src = "${data.avatar_url}"> 
        <a href="https://github.com/${search}">https://api.github.com/users/${search}</a>`
        
    });
    inputEl.value = ''
});
