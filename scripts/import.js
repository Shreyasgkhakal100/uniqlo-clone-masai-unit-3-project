let navdiv = document.getElementById("navbar")
let footerdiv = document.getElementById("footer")

console.log("FOOTER",footerdiv)

// import {navbar} from "../components/navbar.js"
// navdiv.innerHTML = navbar()

import footer from "../components/footer.js"
footerdiv.innerHTML = footer()