document.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.getElementsByClassName("placeholder-label")[0]
    const origin = placeholder.textContent
    const input = document.getElementById("search-inp")
    input.addEventListener("focusin", () => {
        placeholder.textContent = "Search"
        input.addEventListener("focusout", () => {
            placeholder.textContent = origin
        })
    })

})