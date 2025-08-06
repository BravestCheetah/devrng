function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}


function get_random_item_of_rarity(items, rarity) {
    console.log(items)
    while (true) {
        const index = Math.floor(Math.random() * items.length);
        const item = items[index];
        if (inv_data.items[item.split(".")[0]][item.split(".")[1]].rarity == rarity) {
            return item;
        }
    }
}


async function animate_progress(progressEl, duration, max) {
    const start = performance.now();
    
    return new Promise(resolve => {
        function update(now) {
            const elapsed = now - start;
            const t = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(t);

            progressEl.value = eased * max;

            if (t < 1) {
                requestAnimationFrame(update);
            } else {
                resolve();
            }
        }
        requestAnimationFrame(update);
    });
}


async function roll_collection(collection_name) {

    const roll_overlay = document.getElementById("roll-overlay");
    const overlay_collection_name = roll_overlay.querySelector("#roll-name");
    const overlay_result = roll_overlay.querySelector("#roll-result");
    const overlay_rarity = roll_overlay.querySelector("#roll-rarity");
    const overlay_progress = roll_overlay.querySelector("#roll-progress");

    overlay_result.style.fontSize = "16px";

    roll_overlay.style.display = "block";
    overlay_progress.classList.add("visible");
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

    const delays = Array.from({ length: 26 }, (_, i) => Math.min(base_delay * 1.18 ** i, max_delay));
    const total_roll_time = delays.reduce((a, b) => a + b, 0);
    animate_progress(overlay_progress, total_roll_time, 25);

    for (let i = 0; i < 26; i++) {
        magic_num = Math.random();
        chance_score = 0;
        
        for (const [rarity, chance] of Object.entries(roll_data.rarities[collection_name]))  {
            chance_score += chance;
            if (magic_num <= chance_score) {
                result = get_random_item_of_rarity(roll_data.collections[collection_name].items, rarity);
                break
            }
        }

        console.log(result);
        overlay_result.textContent = inv_data.items[result.split(".")[0]][result.split(".")[1]].name;
        overlay_rarity.textContent = inv_data.items[result.split(".")[0]][result.split(".")[1]].rarity.toUpperCase();
        overlay_rarity.style.color = inv_data.rarities[inv_data.items[result.split(".")[0]][result.split(".")[1]].rarity];
        overlay_progress.value = i;

        const delay = Math.min(base_delay * 1.18 ** i, max_delay);
        await sleep(delay);
    }

    console.log(`Final Result: ${result}`);

    overlay_progress.classList.remove("visible");

    if (!check_if_owned(result.split(".")[0], result.split(".")[1])) {
        addItem(result.split(".")[0], result.split(".")[1]);
        overlay_collection_name.textContent = "Added To Invetory!";
    }
    else {
        overlay_collection_name.textContent = "Already Owned";
    }


    overlay_result.style.fontSize = "24px";

    await sleep(1000);

    roll_overlay.classList.remove("visible");

    await sleep(800);
    roll_overlay.style.display = "none";

}