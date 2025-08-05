console.log("loading inventory data...")

items = load_stored_data();

items.forEach(item => {
    console.log(`  - loading item "${item}"...`)
    addItem(item.split(".")[0], item.split(".")[1])
});