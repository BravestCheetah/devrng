function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function roll_collection(collection_name) {

    const roll_overlay = document.getElementById("roll-overlay");
    const overlay_collection_name = roll_overlay.querySelector("#roll-name");
    const overlay_result = roll_overlay.querySelector("#roll-result");
    const overlay_rarity = roll_overlay.querySelector("#roll-rarity");
    const overlay_progress = roll_overlay.querySelector("#roll-progress");

    overlay_result.style.fontSize = "16px";

    roll_overlay.style.display = "block";
    roll_overlay.classList.remove("visible");

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            roll_overlay.classList.add("visible");
        });
    });

    overlay_progress.style.display = "inline-block";

    console.log(`Rolling Collection "${collection_name}"...`);
    overlay_collection_name.textContent = collection_name;

    const base_delay = 10;
    const max_delay = 1000;
    var magic_num;
    var chance_score;

    var result;

    for (let i = 0; i < 26; i++) {
        magic_num = Math.random();
        chance_score = 0;
        
        for (const [item, chance] of Object.entries(roll_data.collections[collection_name].items))  {
            chance_score += chance;
            if (magic_num <= chance_score) {
                result = item;
                break
            }
        }

        console.log(result);
        overlay_result.textContent = inv_data.items[result.split(".")[0]][result.split(".")[1]].name;
        overlay_rarity.textContent = inv_data.items[result.split(".")[0]][result.split(".")[1]].rarity.toUpperCase();
        overlay_rarity.style.color = inv_data.rarities[inv_data.items[result.split(".")[0]][result.split(".")[1]].rarity];
        overlay_progress.value = i;

        const delay = Math.min(base_delay * 1.2 ** i, max_delay);
        await sleep(delay);
    }

    console.log(`Final Result: ${result}`);
    if (!check_if_owned(result.split(".")[0], result.split(".")[1])) {
        addItem(result.split(".")[0], result.split(".")[1]);
        overlay_collection_name.textContent = "Added To Invetory!";
    }
    else {
        overlay_collection_name.textContent = "Already Owned";
    }

    overlay_progress.style.display = "none";
    overlay_result.style.fontSize = "32px";
    overlay_result.style.fontSize = "26px";

    await sleep(1000);

    roll_overlay.classList.remove("visible");
    await sleep(500);
    roll_overlay.style.display = "none";

}