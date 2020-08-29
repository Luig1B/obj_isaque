import { Command, Arguments, Permission, discordErrorHandler, Time, Emojis, ArgumentKind } from "../../defs";
import { Message } from "discord.js";

const audios = {
	ola: "ola-pessoal",
	conseguiram: "conseguiram"
};

type Key = keyof typeof audios;
const keys = <Key[]>Object.keys(audios);

export default <Command>{
	async run(msg: Message, args: Arguments, raw: string[]) {
		if (!msg.member || !msg.member.voice.channel || msg.client.voice?.connections.size) {
			msg.react(Emojis.no);
			return;
		}

		msg.react(Emojis.yes);
		const key = keys[Math.floor(Math.random() * keys.length)];
		let audio = audios[key];

		if (args.length > 1 && args[1].kind === ArgumentKind.STRING) {
			audio = audios[<Key>args[1].value] ?? audio;
		}

		msg.member.voice.channel.join().then(connection => {
			const dispatcher = connection.play(`assets/${audio}.ogg`);

			const action = () => setTimeout(() => connection.disconnect(), Time.second);
			dispatcher.on("finish", action);
			dispatcher.on("error", action);
		}).catch(discordErrorHandler);
	},
	aliases: ["none", "isaque"],
	syntaxes: ["[audio = random]"],
	description: "Imagina só ouvir o none te dar um \"olá\".",
	help: "Já ouvi isso tantas vezes que não sei se é da minha cabeça ou se esqueci de sair de uma call <:pepe_surrender:745960957552885772>\n\nÁudios: "
		+ `\`${keys.join('`, `')}\``,
	examples: [""],
	permissions: Permission.NONE
}