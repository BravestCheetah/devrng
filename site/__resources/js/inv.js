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

    sort_inv();
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


function get_item(category, name) {
    return Object.keys(inv_data.items[category]).find(id => inv_data.items[category][id].name === name);
}


function sort_inv() {
    const save_data = load_stored_data()

    const data = save_data.sort(function(a, b) {

        const rarities = {};
        Object.keys(inv_data.rarities).forEach((value, index) => {
            rarities[value] = index;
        });

        const a_item_value = rarities[inv_data.items[a.split(".")[0]][a.split(".")[1]].rarity]
        const b_item_value = rarities[inv_data.items[b.split(".")[0]][b.split(".")[1]].rarity]

        return b_item_value - a_item_value
    });

    data.forEach(item_id => {

        const [category, item] = item_id.split(".");
        const container = inv_data.sections[category];
        if (!container) return;

        const divs = container.querySelectorAll("div.inv-item");

        for (const div of divs) {

            const item_name = div.querySelector("p").textContent;
            const div_item = get_item(category, item_name);

            if (div_item === item) {
                container.appendChild(div);
                break;
            }
        }
    });
}


function get_category_completion(category) {
    const data = load_stored_data()
    var owned_item_count = 0

    data.forEach(item_id => {
        if (item_id.split(".")[0] == category) { owned_item_count++; }
    });

    total_item_count = Object.keys(inv_data.items[category]).length

    percentage = Math.floor((100 / total_item_count) * owned_item_count)

    return `${percentage}% ( ${owned_item_count} / ${total_item_count} )`
}


function update_category_completion() {
    categories = Object.keys(inv_data.items);

    categories.forEach(category => {
        category_container = inv_data.sections[category];
    });
}