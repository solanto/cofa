const fetch = require("node-fetch");

module.exports = async () => {
    const request = await fetch("https://raw.githubusercontent.com/solanto/cabildummy-datos/master/representantes.json");
    const data = await request.json()

    return data;
}
