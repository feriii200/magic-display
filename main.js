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
      //client.user.setActivity(`π total mic | ${count}`, { type: "LISTENING" })
      targetguild.me.setNickname(`π πππππ πππππ : ${count}`)
      


  }; setInterval(AliveVoice, 20000)
});





//client.on('ready', async () => {
  //const GUILD_ID = '775358378561503244';
  //const guild = await client.guilds.fetch(GUILD_ID);
  //let name7 = '- ππππππππ';
  //let name8 = '- ππππππππ ππππππ ';
  //let name9 = '- +1π πππ¦πππ« ';

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
     let π¦π²πΏππ²πΏIn = client.guilds.size;
     let guild = client.guilds.cache.get("705679075158523914")
     console.log(client.user.tag + ' has logged in!');

     function pickStatus() {
       let status = ['πππππ π¦π²πΏππ²πΏ',`${guild.memberCount} πππ¦πππ« ππ§ πππ«π―ππ«`];
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
  const voiceChannel = client.channels.cache.get("876034441653411880");
    if (!voiceChannel) return console.error("The channel does not exist!");
    voiceChannel.join()
  .then(connection => {
      connection.voice.setSelfDeaf(true);
  });
  console.log("[*] Logged in ")
})

setInterval(async function() {
  const voiceChannel = client.channels.cache.get("876034441653411880");
  if (!voiceChannel) return console.error("The channel does not exist!");
  voiceChannel.join()
  .then(connection => {
      connection.voice.setSelfDeaf(true);
  });
}, 60000)







client.login(process.env.token);
