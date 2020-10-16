const fs = require("fs");
const YAML = require("yaml");
const folder = process.argv[2];

let count = 0;

if (!fs.existsSync(`./${folder}`) || !fs.statSync(`./${folder}`).isDirectory()) {
    console.error(`"${folder}" doesn't exist or is not a directory.`);
} else {
    manage(`./en-US`, fs.readdirSync(`./en-US`));

    console.log(`Done! Processed ${count} file(s).`)
}

/**
 * @param {string[]} directory 
 */
function manage(currentdir, directory) {
    let path = `${currentdir}`
    for (let file of directory) {
        const tdir = `${path}/${file}`.replace("en-US", folder);
        if (fs.statSync(`${path}/${file}`).isDirectory()) {
            if (!fs.existsSync(tdir))
                fs.mkdirSync(tdir)
            manage(`${path}/${file}`, fs.readdirSync(`${path}/${file}`))
        } else {
            let translated, original;
            t: {
                let raw = fs.readFileSync(`${path}/${file}`).toString();
                original = YAML.parse(raw);
            }
            o: {
                try {
                    let raw = fs.readFileSync(tdir).toString();
                    translated = YAML.parse(raw);
                } catch (e) {
                    fs.writeFileSync(tdir, YAML.stringify(original))
                    translated = original;

                    count++;

                    continue;
                }
            }

            fs.writeFileSync(tdir, YAML.stringify({ ...original, ...translated }));

            count++;
        }
    }
}