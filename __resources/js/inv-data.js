const inv_data = {

    sections: {
        "os": document.querySelector("#inv-os .inv-item-section"),
        "lang": document.querySelector("#inv-lang .inv-item-section"),
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
                image: "python.png"
            },

            javascript: {
                rarity: "uncommon",
                name: "javaScript",
                image: "javascript.png"
            },

            clang: {
                rarity: "rare",
                name: "C",
                image: "clang.png"
            },

            cpp: {
                rarity: "rare",
                name: "C++",
                image: "cpp.png"
            },

            cs: {
                rarity: "uncommon",
                name: "C#",
                image: "cs.png"
            },

            holyc: {
                rarity: "legendary",
                name: "Holy C",
                image: "clang.png"
            },
        }
    }

}