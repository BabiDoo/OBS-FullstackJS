export function copy (ev) {
    let resultInput = document.getElementById("result"); //Input do tipo texto que mostra o resultado da operação
    const button = ev.currentTarget;
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
    }
    button.classList.add("success");
    navigator.clipboard.writeText(resultInput.value);
}