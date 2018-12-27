const Discord = require('discord.js');
const config = require('./config.json');
const disco = new Discord.Client();
const prefix = -
const allowedUsers = config.allowedUsers;
const roles = Disco

disco.on("ready", () => {
    disco.user.setPresence({ game: { name: `Disco Roles! Created by i am 𝕄𝕠𝟛𝔾𝕫ℤ𝕒` }, type: 0 });
    console.log("Disco role bot online! Created by i am toast.");
});

disco.on("message", message => {

  function discoRole() {
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      theRole.edit({color: random}).catch(e => {
        return message.channel.send(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
      });
    });
  }

  if(message.content.startsWith(prefix + "startdisco")) {
    if(allowedUsers.includes(message.author.id)) {
    setInterval(() => { discoRole(); }, config.ms);
    message.channel.send("```css\nDiscoing...```");
    message.channel.send("Please make sure you read the README, you could get IP banned from discord because of ratelimits.");
  } else {
    message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
} else

if(message.content.startsWith(prefix + "stopdisco")) {
  if(allowedUsers.includes(message.author.id)) {
  message.channel.send("I've stopped discoing.");
  setTimeout(() => { console.log(process.exit(0)); }, 300);
} else {
  message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
}

});

disco.login(NTI3Nzg1MjQ1OTI4NTg3MjY3.DwYyEw.LV7CE2F3VfgmH_X8-qGh3pktEUI);
