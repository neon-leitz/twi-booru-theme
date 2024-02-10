
function hide_nav(nav, others, body) {
    nav.classList.add("hide-nav");
    nav.classList.remove("show-nav");
    // Remove overlay
    others.forEach(x => {
        x.classList.remove("nav-background-filter");
    })
    body.style.position = "static";
}

function show_nav(nav, others, body) {
    // let nav = document.querySelector("nav");
    nav.classList.add("show-nav");
    nav.classList.remove("hide-nav");
    // Add overlay
    others.forEach(x => {
        x.classList.add("nav-background-filter");
    })

    body.style.position = "fixed";
}

if (window.matchMedia("(max-width: 1000px) or (max-aspect-ratio: 4/5)").matches) {
    console.log("MOBILE MODE");
    let h1 = document.querySelector("header > h1");
    let div = document.createElement("div");
    div.classList.add("nav-button-overlay");


    let others = document.querySelectorAll("body > *:not(nav, header)");
    div.addEventListener("click", e => {
        console.log("NAVBAR ACTIVATE!")
        let nav = document.querySelector("nav");
        let body = document.querySelector("body");
        if (nav.classList.contains("show-nav")) {
            hide_nav(nav, others, body);
        } else {
            show_nav(nav, others, body);
        }
    });

    others.forEach(ele => ele.addEventListener("click", e => {
        let nav = document.querySelector("nav");
        let body = document.querySelector("body");
        if (nav.classList.contains("show-nav")) {
            hide_nav(nav, others, body);
        }
    }));

    h1.appendChild(div);
}
