function addItem(category, item) {
    const container = inv_data.sections[category];

    item_container = document.createElement("div");
    item_container.className = "inv-item";
    item_container.style.borderColor = inv_data.rarities[inv_data.items[category][item].rarity]
    container.appendChild(item_container);

    item_img = document.createElement("img");
    item_img.src = `../__resources/images/items/${category}/${inv_data.items[category][item].image}`;
    item_container.appendChild(item_img);

    item_text = document.createElement("p");
    item_text.textContent = inv_data.items[category][item].name;
    item_text.style.color = inv_data.rarities[inv_data.items[category][item].rarity]
    item_container.appendChild(item_text);
}



function check_if_owned(category, item) {
    const container = inv_data.sections[category];
    const divs = container.querySelectorAll("div");

    for (const item_div of divs) {
        const item_name = item_div.querySelector("p").textContent;
        if (inv_data.items[category][item].name == item_name) {
            return true;
        }

    };

    return false;
}


function get_owned() {

    let owned_items = [];

    Object.keys(inv_data.items).forEach(category => {

        const container = inv_data.sections[category];
        const divs = container.querySelectorAll("div");

        for (const item_div of divs) {
            const item_name = item_div.querySelector("p").textContent;
            
            for (const [id, data] of Object.entries(inv_data.items[category])) {
                if (data.name === item_name) {
                    var item_id = `${category}.${id}`
                    break;
                }
            }

        owned_items.push(item_id)
        };
    });
    return owned_items
}


function load_stored_data() {
    const data = localStorage.getItem("inventory_data");
    return data ? JSON.parse(data) : [];
}


function add_item_to_save(category, item) {
    const data = load_stored_data();
    const item_id = `${category}.${item}`;

    if (!data.includes(item_id)) {
        data.push(item_id);
        localStorage.setItem("inventory_data", JSON.stringify(data));
    }
}