const app = require("./index")
const connect = require("./configs/db")

app.listen(2345, async function () {
    console.log("mainapp");
    await connect();
    console.log("mainapp1");
    console.log("listening on port 2345");
})