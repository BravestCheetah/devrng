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