// I am so sorry for this horrible code, its my first web dev project :sob:
// oh yeah i like whitespace in variables / objects, so you know, thats why there are so many linebreaks

const inv = {

    sections: {
        "os":document.getElementById("inv-os"),
        "lang":document.getElementById("inv-lang"),
    },



    items: {

        os: {
            arch: {
                rarity: "rare",
                name: "Arch Linux",
                image: "arch-linux.png"
            }
        },

        lang: {
            python: {
                rarity: "rare",
                name: "Python",
                image: "arch-linux.png"
            }
        }
    }

}



function addItem(item) {
    const container = inv.sections.os;
    item_container = document.createElement("div");

    
}