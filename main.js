const { clear } = require('console');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'd';
const fs = require('fs');




client.on("ready", () => {
  function AliveVoice() {
      const targetguild = client.guilds.cache.get("705679075158523914")
      const voiceChannels = targetguild.channels.cache.filter(c => c.type === 'voice');
      let count = 0;

      for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      //client.user.setActivity(`🔊 total mic | ${count}`, { type: "LISTENING" })
      targetguild.me.setNickname(`🔊 𝐌𝐀𝐆𝐈𝐂 𝐀𝐋𝐈𝐕𝐄 : ${count}`)
      


  }; setInterval(AliveVoice, 20000)
});





//client.on('ready', async () => {
  //const GUILD_ID = '775358378561503244';
  //const guild = await client.guilds.fetch(GUILD_ID);
  //let name7 = '- 𝐄𝐌𝐌𝐀𝐍𝐔𝐄𝐋';
  //let name8 = '- 𝐄𝐌𝐌𝐀𝐍𝐔𝐄𝐋 𝐒𝐄𝐑𝐕𝐄𝐑 ';
  //let name9 = '- +1𝐊 𝐌𝐞𝐦𝐛𝐞𝐫 ';

  //console.log('Bot is connected...');

  //setInterval(() => {

    //guild.me.setNickname(name7);
   // guild.me.setNickname(name8);
   // guild.me.setNickname(name9);
    
  //},15000);

//});



  
  
  client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "idle",  // You can show online, idle... Do not disturb is dnd
        game: {
            name: "-help",  // The message shown
            type: "PLAYING" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
 });

  



client.on('ready', async () => {
  try {
     let 𝗦𝗲𝗿𝘃𝗲𝗿In = client.guilds.size;
     let guild = client.guilds.cache.get("705679075158523914")
     console.log(client.user.tag + ' has logged in!');

     function pickStatus() {
       let status = ['𝐌𝐀𝐆𝐈𝐂 𝗦𝗲𝗿𝘃𝗲𝗿',`${guild.memberCount} 𝐌𝐞𝐦𝐛𝐞𝐫 𝐈𝐧 𝐒𝐞𝐫𝐯𝐞𝐫`];
       let Status = Math.floor(Math.random() * status.length);

       client.user.setActivity(status[Status], {
         type: "PLAYING"
       });
    };
     setInterval(pickStatus, 10000);
   } catch (err) {
     console.log(err);
   }
  
});




client.on("ready", function() {
  const voiceChannel = client.channels.cache.get("886259184969076736");
    if (!voiceChannel) return console.error("The channel does not exist!");
    voiceChannel.join()
  .then(connection => {
      connection.voice.setSelfDeaf(true);
  });
  console.log("[*] Logged in ")
})

setInterval(async function() {
  const voiceChannel = client.channels.cache.get("886259184969076736");
  if (!voiceChannel) return console.error("The channel does not exist!");
  voiceChannel.join()
  .then(connection => {
      connection.voice.setSelfDeaf(true);
  });
}, 60000)







client.login(process.env.token);
