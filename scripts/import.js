let navdiv = document.getElementById("navbar")
let footerdiv = document.getElementById("footer")

console.log("FOOTER",footerdiv )

//  import {navbar} from "../components/navbar_full.js"
// navdiv.innerHTML = navbar()

import footer from "../components/footer.js";
footerdiv.innerHTML = footer();