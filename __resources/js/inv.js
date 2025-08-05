// I am so sorry for this horrible code, its my first web dev project :sob:
// oh yeah i like whitespace in variables / objects, so you know, thats why there are so many linebreaks


function addItem(category, item) {
    const container = inv.sections[category];

    item_container = document.createElement("div");
    item_container.className = "inv-item";
    container.appendChild(item_container);

    item_img = document.createElement("img");
    item_img.src = `../__resources/images/items/${category}/${inv.items[category][item].image}`;
    item_container.appendChild(item_img);

    item_text = document.createElement("p");
    item_text.textContent = inv.items[category][item].name;
    item_container.appendChild(item_text);
}