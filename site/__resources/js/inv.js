// idk why my function naming changed for only this one, but im too lazy to change it
function addItem(category, item) {
    add_item_to_save(category, item);

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
    const data = load_stored_data();
    return data.includes(`${category}.${item}`);
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


function sort_inv() {
    const order_by_rarity = Object.keys(inv_data.rarities);

    Object.entries(inv_data.sections).forEach(([category, container]) => {
        const item_containers = Array.from(container.children);

        item_containers.sort((a, b) => {
            const aName = a.querySelector("p").textContent;
            const bName = b.querySelector("p").textContent;

            const aId = getItemIdFromName(category, aName);
            const bId = getItemIdFromName(category, bName);

            const aRarity = inv_data.items[category][aId].rarity;
            const bRarity = inv_data.items[category][bId].rarity;

            return order_by_rarity.indexOf(aRarity) - order_by_rarity.indexOf(bRarity);
        });

        item_containers.forEach(div => container.appendChild(div)); // Reattach in new order
    });
}
