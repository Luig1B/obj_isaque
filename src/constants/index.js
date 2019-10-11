const specialInvite = 'MbFMYVJ';
const prefix = '!!';
const roleToAdd = "630917234826543105";
const roleToAddAnyway = "630936042224222229";
const shitpostChannel = "playground";
const sintaxErrorMessage = "Sintaxe do comando incorreta. Consulte o !!help para confirmar a sintaxe deste comando. Caso você tenha certeza que o comando está sendo usado do jeito certo, contate um Moderador ou um Administrador!";
const helpMessage = "```markdown\n< help >    Comandos do Bot\n< mute >    Mutar um usuário (Staff Only)\n< unmute >  Desmutar um usuário (Staff Only)\n< ban >     Banir um usuário (Staff Only)\n< kick >    Kickar um usuário (Staff Only)\n< ping >    Pong!\n< ulon >    ULOOOOOOOON\n< curso >   Envia um link com cupom de desconto do curso do NoNe\n< emoji >   Envia um emoji por você\n< nonetube > Envia o link do canal no Youtube do NoNe\n< register > Te registra no Banco!\n< semanal >  Resgate uma quantidade de dinheiro semanalmente!\n< punish >   Puna um membro confiscando parte de seu dinheiro (Staff Only)\n< loteria >  Inicie uma loteria! (Staff Only)\n< bilhete >  Compre bilhetes para participar da loteria. Quanto mais você compra, maiores as suas chances!\n< resultado >Finalize uma loteria e anuncie o vencedor!\n< saldo >    Veja quanto dinheiro você tem em sua conta!\n< transfer > Transfira dinheiro para outro usuário.```";
const helpCommands = {
    mute: `(Staff Only) Muta um ou mais usuários no servidor. Uso: \`\`\`\n${prefix}mute @user\n${prefix}mute 30m @user\n${prefix}mute @user1 @user2...\n${prefix}mute 1h @user1 @user2...\n\`\`\``,
    unmute: `(Staff Only) Desmuta um ou mais usuários no servidor. Uso: \`\`\`\n${prefix}unmute @user\n${prefix}unmute @user1 @user2...\n\`\`\``,
    ban: `(Staff Only) Bane um ou mais usuários do servidor. Uso: \`\`\`\n${prefix}ban @user\n${prefix}ban @user1 @user2...\n\`\`\``,
    kick: `(Staff Only) Kicka um ou mais usuários do servidor. Uso: \`\`\`\n${prefix}kick @user\n${prefix}kick @user1 @user2...\n\`\`\``,
    ping: "Pong! Pong!",
    ulon: `Use \`${prefix}ulon\` para ver quantos O's você consegue! <:Jebaited:575786620368977940>`,
    curso: "Envia um link com cupom de desconto do curso do NoNe",
    nonetube: `Envia o link do canal no Youtube do NoNe. Uso: \`\`\`${prefix}nonetube\`\`\``,
    help: "!!help help help",
    emoji: `Envia um emoji por ti no discord. Uso: \`\`\`${prefix}emoji nomeDoEmoji\`\`\``,
    register: `Com este comando, você irá se registrar no Banco do servidor. Este é o primeiro passo para participar de eventos como a loteria. Uso: \`\`\`${prefix}register\`\`\``,
    semanal: `Resgate uma certa quantidade de dinheiro semanalmente. Uso: \`\`\`${prefix}semanal\`\`\``,
    punish: `(Staff Only) Puna um membro confiscando um pouco de seu dinheiro (ou todo seu dinheiro). Uso: \`\`\`${prefix}punish quantidade @membro\`\`\``,
    loteria: `(Staff Only) Inicie uma loteria. Uso: \`\`\`${prefix}loteria valorDeCadaBilhete\`\`\``,
    bilhete: `Compre biletes para participar da loteria. Quantos mais você comprar, maiores as suas chances de vencer. Uso \`\`\`${prefix}bilhete quantidade\`\`\``,
    resultado: `(Staff Only) Finalize uma loteria e revele o resultado. Uso: \`\`\`${prefix}resultado\`\`\``,
    saldo: `Veja quanto saldo há em sua conta. Uso: \`\`\`${prefix}saldo\n${prefix}saldo @membro\`\`\``,
    transfer: `Transfira dinheiro para outro usuário. Uso: \`\`\`${prefix}transfer quantidade @membro\`\`\``
};

const cursoLink = "http://bit.ly/35iBP6O";
const youtubeLink = "https://www.youtube.com/channel/UCHJPSW9FgSoXGVFV489XXag";

module.exports = {
    specialInvite,
    prefix,
    roleToAdd,
    roleToAddAnyway,
    cursoLink,
    shitpostChannel,
    helpMessage,
    helpCommands,
    sintaxErrorMessage,
    youtubeLink,
}
