items = load_stored_data();

items.forEach(item => {
    addItem(item.split(".")[0], item.split(".")[1])
});