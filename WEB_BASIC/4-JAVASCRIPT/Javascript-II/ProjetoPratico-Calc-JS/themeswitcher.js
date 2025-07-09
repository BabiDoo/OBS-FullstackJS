export function themeswitcher () { 
  const main = document.querySelector("main"); // Main container
  const root = document.querySelector(":root"); // Root element for CSS variables
  if (main.dataset.theme === "dark") { //  se o tema estiver escuro, muda o root style e set theme = light
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    main.dataset.theme = "light"
  } else { //  se o tema estiver claro, muda o root style e set theme = light
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    main.dataset.theme = "dark"
  }

}