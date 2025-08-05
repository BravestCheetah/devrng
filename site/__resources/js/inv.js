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
    const owned = loadOwnedItems();
    return owned.includes(`${category}.${item}`);
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