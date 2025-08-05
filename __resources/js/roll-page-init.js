const collections = roll_data.collections;
const coll_container = collections.container;

for (const [key, val] of Object.entries(collections)) {
    if (key == "container") continue;

    console.log(`Loading Collection "${key}"...`);

    collection_container = document.createElement("div")
}