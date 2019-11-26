"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var definitions_1 = require("../../definitions");
var images = [
    "https://cdn.discordapp.com/attachments/553933292542361601/633732233156362270/Danki_Boude.png",
    "https://cdn.discordapp.com/attachments/553933292542361601/633732285547544605/gamedev.png",
    "https://tenor.com/view/danki-danki-code-danki-cry-curso-danki-gif-15268437",
    "https://tenor.com/view/danki-dankicode-gif-15270906"
];
var dankiImageCurrent = 0;
exports.default = {
    run: function (msg, args) {
        dankiImageCurrent = (dankiImageCurrent + 1) % images.length;
        msg.channel.send(msg.author + " " + images[dankiImageCurrent]);
    },
    staff: false,
    aliases: ["danki"],
    shortHelp: "Envia um meme da danki",
    longHelp: "Envia um meme da danki",
    example: definitions_1.Server.prefix + "danki"
};
