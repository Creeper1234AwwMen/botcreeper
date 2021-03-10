const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;

client.on("ready", () => {
   console.log(`Pspsppspspsp Boom! I'm Ready`);
});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'creep')) {
    message.channel.send(`Boom!`);

  } else
  if(message.content.startsWith(prefix + 'creeper')) { 
     message.channel.send(`Aww man`);

  }

});

client.login(config.token);

if (!message.content.startsWith(prefix)) return; 
if (message.author.bot) return;
message.channel.send({embed: {
  color: 3447003,
  author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
  },
  title: "Pague",
  url: "https://github.com/Creeper1234AwwMen",
  description: "GitHub and download the code",
  fields: [{
      name: "Version",
      value: "This Bot is a Beta"
    },
    {
      name: "My GitHub",
      value: "GitHub https://github.com/Creeper1234AwwMen"
    },
    {
      name: "Read me",
      value: "This bot is replace my other bot Cheems R.I.P Cheems 2020 - 2021 this bot is a hacked and deleted the code :'("
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL(),
    text: "github.com/Creeper1234AwwMen"
  }
}
});

const mentioned = message.mentions.users.first();

let id = mentioned.id;
let name = mentioned.username;
let avatar = mentioned.avatarURL();
