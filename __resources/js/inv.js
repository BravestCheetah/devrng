function addItem(category, item) {
    const container = inv_data.sections[category];

    item_container = document.createElement("div");
    item_container.className = "inv-item";
    container.appendChild(item_container);

    item_img = document.createElement("img");
    item_img.src = `../__resources/images/items/${category}/${inv_data.items[category][item].image}`;
    item_container.appendChild(item_img);

    item_text = document.createElement("p");
    item_text.textContent = inv_data.items[category][item].name;
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