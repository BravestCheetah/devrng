function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function roll_collection(collection_name) {
    console.log(`Rolling Collection "${collection_name}"...`)

    const base_delay = 10;
    const max_delay = 1000;
    var magic_num;
    var chance_score;

    var result;

    for (let i = 0; i < 11; i++) {
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
        const delay = Math.min(base_delay * 2 ** i, max_delay);
        await sleep(delay);
    }

    console.log(`Final Result: ${result}`)
    addItem(result.split(".")[0], result.split(".")[1])
}