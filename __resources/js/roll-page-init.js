const collections = roll_data.collections;
const collection_root_container = collections.container;

for (const [key, val] of Object.entries(collections)) {
    if (key == "container") continue;

    console.log(`Loading Collection "${key}"...`);

    const collection_container = document.createElement("div");
    collection_container.className = "roll-content";
    collection_root_container.appendChild(collection_container);

    const collection_image = document.createElement("img");
    collection_image.src = `../__resources/images/collections/${key}.png`;
    collection_container.appendChild(collection_image);

    const collection_button = document.createElement("button");
    collection_button.textContent = key;
    collection_button.onclick = () => roll_collection(key);
    collection_container.appendChild(collection_button)
}