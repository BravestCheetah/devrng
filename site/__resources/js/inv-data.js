const inv_data = {

    sections: {
        "os": document.querySelector("#inv-os .inv-item-section"),
        "lang": document.querySelector("#inv-lang .inv-item-section"),
    },

    rarities: {
        "uncommon": "#23f01f",
        "rare": "#0a84f0",
        "legendary": "#e0f00a",
        "divine": "#f00a30"
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
                rarity: "uncommon",
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
                image: "holyc.png"
            },

            php: {
                rarity: "uncommon",
                name: "PHP",
                image: "php.png"
            },

            rust: {
                rarity: "rare",
                name: "Rust",
                image: "rust.png"
            },
        }
    }

}