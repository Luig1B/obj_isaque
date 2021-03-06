import { Command, Arguments, Server, Permission, ArgumentKind, Emojis, defaultEmbed, notNull, discordErrorHandler, emptyEmbed, Channels } from "../../defs";
import * as Moderation from "../../moderation";
import { Message } from "discord.js";

export default <Command>{
	async run(msg: Message, args: Arguments) {
		if (args.length < 2) {
			msg.channel.send("é pra banir quem?").catch(discordErrorHandler);
			return;
		}
		args.shift(); // consume command

		let final = `${msg.author}\n`;
		for (const arg of args) {
			if (arg.kind === ArgumentKind.MEMBER) {
				const result = Moderation.ban(arg.value);

				if (!result.success) {
					final += `o(a) ${arg.value} é muito forte para mim. ${result.error}\n`;
					continue;
				}

				final += `SINTA O PESO DO MARTELO ${arg.value}!\n`;
			}
		}

		if (final === "")
			final = "você precisa marcar o maluco";
		else if (final.length > 2000)
			final = `eita, você baniu tanta gente que passou do limite de 2000 chars do discord ${Emojis.surrender.repeat(3)}`;

		let embed = emptyEmbed();
		embed.description = final;
		Channels.logObject.send(embed).catch(discordErrorHandler);
		msg.react(Emojis.yes).catch(discordErrorHandler);
	},
	syntaxes: ["<@user...>"],
	permissions: Permission.MOD,
	aliases: ["ban", "banir"],
	description: "Banir usuários",
	help: "Bane um ou mais usuários do servidor",
	examples: [`@user`, `@user1 @user2...`]
};