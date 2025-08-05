const collections = roll_data.collections;
const collection_root_container = collections.container;

console.log("Loading collections...")

for (const [key, val] of Object.entries(collections)) {
    if (key == "container") continue;

    console.log(`  - Loading Collection "${key}"...`);

    console.log(`    - loading collection container...`)
    const collection_container = document.createElement("div");
    collection_container.className = "roll-content";
    collection_root_container.appendChild(collection_container);

    console.log(`    - loading collection image...`)
    const collection_image = document.createElement("img");
    collection_image.src = `../__resources/images/collections/${key}.png`;
    collection_container.appendChild(collection_image);

    console.log(`    - loading collection button...`)
    const collection_button = document.createElement("button");
    collection_button.textContent = roll_data.collections[key].name;
    collection_button.onclick = () => roll_collection(key);
    collection_container.appendChild(collection_button)
}