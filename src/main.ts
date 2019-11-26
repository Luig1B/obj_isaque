import { Client, Message, GuildMember, TextChannel } from "discord.js";
import { Command, Arguments, Roles, Server, Time, Channels } from "./definitions";
import { Bank } from "./Cassino";
import Moderation from "./Moderation";
import cmds from './Commands';

const wait = require('util').promisify(setTimeout);

const client = new Client();

const invites: any = {};
const prefix = "!!";

function onUserMessage(msg: Message) {
    let chn: TextChannel = <TextChannel>msg.channel;
    if (chn.id === Channels.shitpost || chn.id === Channels.music) return;
    const result = Bank.userMessage(msg.author.id);
    if (result > 0) {
        (<TextChannel>msg.guild.channels.find(a => a.id === Channels.shitpost))
            .send(`${msg.author} Parabéns! Você ganhou \`$${result}\``);
    }
}

client.on("ready", () => {
    wait(3000);

    client.guilds.forEach(g => {
        g.fetchInvites().then(guildInvites => {
            invites[g.id] = guildInvites;
        });
    });

    console.log("Online");
    client.user.setPresence({ game: { name: "o curso do NoNe!", url: "", type: "WATCHING" }, status: "online" })
        .catch(console.error);

    const curr = Date.now();
    //setTimeout(Moderation.autoUnmute, Time.minute - (curr % Time.minute), client);
});

client.on("guildMemberAdd", (member: GuildMember) => {
    if (member.user.bot) {
        member.addRole(Roles.Bot);
        return;
    }

    if (Moderation.isMuted(member.user.id))
        member.addRole(Roles.Muted);

    member.guild.fetchInvites().then(guildInvites => {
        const ei = invites[member.guild.id];
        invites[member.guild.id] = guildInvites;
        const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
        //const inviter = invite.inviter.id;

        if (invite !== null && invite.code === Server.specialInvite) {
            member.addRole(Roles.Aluno);
        } else {
            member.addRole(Roles.Default);
        }
    });
});

client.on("message", (msg: Message) => {
    if (msg.author.id === client.user.id || msg.author.bot) return;
    onUserMessage(msg);
    if (msg.content.slice(0, prefix.length) != prefix) return;

    const args: Arguments = msg.content.slice(prefix.length, msg.content.length).split(' ');
    const run: Command | undefined = cmds.find((v: Command) => v.aliases.includes(args[0]));

    if (run == undefined || (run.staff && !Moderation.isAdmin(msg.member))) return;

    run.run(msg, args);
})

client.login('NjMwODkyNjY5Mzg3OTMxNjQ5.XZvwgA.giplHaiI73t62ThkYwMqKygpgIM');