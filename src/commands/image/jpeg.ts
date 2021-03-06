import { Command, Arguments, Permission, defaultErrorHandler, ArgumentKind, discordErrorHandler, imageFrom, processImage, imageAsAttachment } from "../../defs";
import { Message } from "discord.js";
import Jimp from "jimp";

export default <Command>{
	async run(msg: Message, args: Arguments, raw: string[]) {
		let img: string | Jimp | undefined = imageFrom(msg, args);

		if (!img) {
			msg.reply("manda uma imagem po").catch(discordErrorHandler);
			return;
		}

		processImage(img, (image: Jimp) => {
			image.quality(4)
				.getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
					if (err) {
						defaultErrorHandler(err);
						msg.reply("deu ruim");
						return;
					}

					msg.channel.send(`${msg.author} olha`, imageAsAttachment(buffer, "jpg"))
						.catch(discordErrorHandler);
				});
		}).catch(err => {
			defaultErrorHandler(err);
			msg.reply("tem certeza que isso é uma imagem?")
				.catch(discordErrorHandler);
		});
	},
	aliases: ["jpeg", "jpg"],
	syntaxes: ["[link | attachment]"],
	description: "Precisa que uma imagem seja... \"JPEGed\"?",
	help: "Diminui drasticamente a qualidade de uma imagem",
	examples: ["https://algum.link/para/imagem.png"],
	permissions: Permission.SHITPOST
}