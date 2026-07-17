

const ImageKit = require("@imagekit/nodejs")
const config = require("../config/config")


const imagekit = new ImageKit({
    privateKey : config.private_key
})


module.exports = imagekit