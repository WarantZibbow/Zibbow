const Discord = require('discord.js')
const bot = new Discord.Client() 

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setActivity("ZibbowGameBOT v1");
    return bot.channels.get("613697850521681920").send("Démarrage du bot réussi")
  });

bot.on("guildMemberAdd", member => {
    
    let citynew = new Discord.RichEmbed()
    .setTitle("Nouvel utilisateur !")
    .setDescription("Nouveau membre sur City Community (" + member.guild.memberCount + ")")
    .addField("Identifiant", member.id)
    .addField("Nom d'utilisateur", member)
    .setThumbnail(member.user.displayAvatarURL)
    .addField("Date de création de compte", member.user.createdAt)
    .setFooter("A rejoint City Community ")
    .setTimestamp()
    .setColor("#eee")

    return bot.channels.get("553593817132171284").send(citynew);
});

    // Commande animation
        bot.on("message", async (message) => {
            if(message.author.bot) return;
            if(message.channel.type === "dm") return;
              if (message.content.startsWith('!') === false) return;
        
            let cityArray = message.content.split(" ");
            let cmd = cityArray[0];
            let cityanimtype = cityArray[1];
            let args = cityArray.slice(2);
            let cityanim = args.join(" ").slice(0);
        
            if(cmd === '!anim' && cityArray.length > 1){
                let cityanimembed = new Discord.RichEmbed()
                .setTitle("CityCom")
                .setDescription("Nouvelle animation !")
                .setColor("#feb063")
                .addField("Type d'animation :", cityanimtype)
                .addField("Plus d'infos :", cityanim + "\n\n - " + `${message.author}`)
                .setFooter(message.createdAt)
                .setThumbnail("https://media.discordapp.net/attachments/541297544945205258/541297575496646656/0cbede56aae5bb85168ede1da9c51261.png")
                if(message.channel.id!="544111252721500161") {
                }else {
                return bot.channels.get("544188783390883850").send(cityanimembed) == bot.channels.get("544188783390883850").send("@everyone") == bot.channels.get("544111252721500161").send("Annonce d'animation postée !")/**message.author.send("")  ===  message.delete()*/;
                }}

                // Commande test pour animation

                if(cmd === '!testanim' && cityArray.length > 1){
                    let cityanimembed = new Discord.RichEmbed()
                    .setTitle("CityCom")
                    .setDescription("Nouvelle animation !")
                    .setColor("#feb063")
                    .addField("Type d'animation :", cityanimtype)
                    .addField("Plus d'infos :", cityanim + "\n\n - " + `${message.author}`)
                    .setFooter(message.createdAt)
                    .setThumbnail("https://media.discordapp.net/attachments/541297544945205258/541297575496646656/0cbede56aae5bb85168ede1da9c51261.png")
                    if(message.channel.id!="544111252721500161") {
                    }else {
                    return bot.channels.get("544111252721500161").send(cityanimembed); //&& bot.channels.get("514457209808224259").send("@everyone") && bot.channels.get("544111252721500161").send("Annonce d'animation postée !")/**message.author.send("")  ===  message.delete()*/;
                    }}
                });

                // Commande animation avec image intégré en embed
    
                bot.on("message", async (message) => {
                    if(message.author.bot) return;
                    if(message.channel.type === "dm") return;
                      if (message.content.startsWith('!') === false) return;
                
                    let cityArray = message.content.split(" ");
                    let cmd = cityArray[0];
                    let cityanimtype = cityArray[1];
                    let cityanimimg = cityArray[2];
                    let args = cityArray.slice(3);
                    let cityanim = args.join(" ").slice(0);
                
                    if(cmd === '!animimg' && cityArray.length > 1){
                        let cityanimembed = new Discord.RichEmbed()
                        .setTitle("CityCom")
                        .setDescription("Nouvelle animation !")
                        .setColor("#feb063")
                        .addField("Type d'animation :", cityanimtype)
                        .addField("Plus d'infos :", cityanim + "\n\n - " + `${message.author}`)
                        .setImage(cityanimimg)
                        .setFooter(message.createdAt)
                        .setThumbnail("https://media.discordapp.net/attachments/541297544945205258/541297575496646656/0cbede56aae5bb85168ede1da9c51261.png")
                        if(message.channel.id!="544111252721500161") {
                        }else {
                        return bot.channels.get("544188783390883850").send(cityanimembed) == bot.channels.get("544188783390883850").send("@everyone") == bot.channels.get("546025898038788107").send("Annonce d'animation postée !");/**message.author.send("")  ===  message.delete()*/;
                        }}

                        // Commande test animation avec image intégrée en embed
                        
                        if(cmd === '!testanimimg' && cityArray.length > 1){
                            let cityanimembed = new Discord.RichEmbed()
                            .setTitle("CityCom")
                            .setDescription("Nouvelle animation !")
                            .setColor("#feb063")
                            .addField("Type d'animation :", cityanimtype)
                            .addField("Plus d'infos :", cityanim + "\n\n - " + `${message.author}`)
                            .setImage(cityanimimg)
                            .setFooter(message.createdAt)
                            .setThumbnail("https://media.discordapp.net/attachments/541297544945205258/541297575496646656/0cbede56aae5bb85168ede1da9c51261.png")
                            if(message.channel.id!="544111252721500161") {
                            }else {
                            return bot.channels.get("544111252721500161").send(cityanimembed); //&& bot.channels.get("544111252721500161").send("Annonce d'animation postée !");/**message.author.send("")  ===  message.delete()*/;
                            }}});

                            bot.on("message", async (message) => {
                                if(message.author.bot) return;
                                if(message.channel.type === "dm") return;
                                  if (message.content.startsWith('!') === false) return
                            
                                  let cityArray = message.content.split(" ");
                                  let cmd = cityArray[0];
                                  let cityanimimg = cityArray[1];
                                  let args = cityArray.slice(2);
                                  let cityanim = args.join(" ").slice(0);

                                    // Commande test pour giveaway

                            if(cmd === '!testgiveaway' && cityArray.length > 1){
                                let cityanimembed = new Discord.RichEmbed()
                                .setTitle("CityCom")
                                .setDescription("Nouvelle animation !")
                                .setColor("#feb063")
                                .addField("Type d'animation :", "Giveaway")
                                .addField("Plus d'infos :", cityanim + "\n\n - " + `${message.author}`)
                                .setImage(cityanimimg)
                                .setFooter(message.createdAt)
                                .setThumbnail("https://media.discordapp.net/attachments/541297544945205258/541297575496646656/0cbede56aae5bb85168ede1da9c51261.png")
                                if(message.channel.id!="546025898038788107") {
                                }else {
                                return bot.channels.get("546025898038788107").send(cityanimembed) == bot.channels.get("546025898038788107").send("Annonce d'animation postée !");/**message.author.send("")  ===  message.delete()*/;
                                }}

                                // Commande pour giveaway
    
                            if(cmd === '!giveaway' && cityArray.length > 1){
                                let cityanimembed = new Discord.RichEmbed()
                                .setTitle("CityCom")
                                .setDescription("Nouvelle animation !")
                                .setColor("#feb063")
                                .addField("Type d'animation :", "Giveaway")
                                .addField("Plus d'infos :", cityanim + "\n\n - " + `${message.author}`)
                                .setImage(cityanimimg)
                                .setFooter(message.createdAt)
                                .setThumbnail("https://media.discordapp.net/attachments/541297544945205258/541297575496646656/0cbede56aae5bb85168ede1da9c51261.png")
                                if(message.channel.id!="546025898038788107") {
                                }else {
                                return bot.channels.get("483726327711793156").send(cityanimembed) == bot.channels.get("483726327711793156").send("@everyone") == bot.channels.get("546025898038788107").send("Annonce d'animation postée !");/**message.author.send("")  ===  message.delete()*/;
                                }}
                            })


bot.on("message", async (message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  	if (message.content.startsWith('!') === false) return

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let citysay = args.join(" ").slice(0);

    
    // Commande pour sondage rapide

    if (cmd === '!quickpoll' && messageArray.length > 1) {
        if (message.channel.id!="440971248017604619" && 
            message.channel.id!="537576681054011392" && 
            message.channel.id!="506050543471558656" && 
            message.channel.id!="529292858331758612" && 
            message.channel.id!="440979146269786112" && 
            message.channel.id!="440980180971028490"){

        } else {
          
        message.react("✅") 
        message.react("❌");
    }

    }

    // Commande pour event

    if(cmd === '!event'){
        let eventembed = new Discord.RichEmbed()
        .setTitle("Événement !")
        .setImage("https://i.imgur.com/6eToGRs.png")
		.setDescription("Un événement dans l'hôtel s'annonce...")
        .setColor("#C72C48")
		//.setThumbnail("https://i.imgur.com/UIogEz0.png")
        .addField("Informations", citysay, true)
        .addField("Lancé par", `${message.author}`, true)
        .addField("Accès direct au théâtre", "https://www.habbocity.me/room/1553778", true)
        //.setFooter(`${message.author}` + " " + message.createdAt)
        if(message.channel.id!="542666830326530048") {
        }else {
        return bot.channels.get("440971248017604619").send(eventembed) === bot.channels.get("440971248017604619").send("@everyone")/**message.author.send("")  ===  message.delete()*/;
        }
    }

    // Commande test pour event

    if(cmd === '!testevent'){
        let eventembed = new Discord.RichEmbed()
        .setTitle("Événement !")
        .setImage("https://i.imgur.com/6eToGRs.png")
		.setDescription("Un événement dans l'hôtel s'annonce...")
        .setColor("#C72C48")
		//.setThumbnail("https://i.imgur.com/UIogEz0.png")
        .addField("Informations", citysay, true)
        .addField("Lancé par", `${message.author}`, true)
        .addField("Accès direct au théâtre", "https://www.habbocity.me/room/1553778", true)
        //.setFooter(`${message.author}` + " " + message.createdAt)
        if(message.channel.id!="542666830326530048") {
        }else {
        return bot.channels.get("542666830326530048").send(eventembed)/**message.author.send("")  ===  message.delete()*/;
        }
    }

    // Commande pour annoncer nouveauté sur le discord

    if(cmd === '!citycomnews'){
        let newsembed = new Discord.RichEmbed()
        .setTitle("CityCom")
		.setDescription("Nouveauté sur discord !")
        .setColor("#feb063")
		.setThumbnail("https://media.discordapp.net/attachments/541297544945205258/541297575496646656/0cbede56aae5bb85168ede1da9c51261.png")
        .addField("Informations", citysay, true)
        .setFooter(message.createdAt)
        if(message.channel.id!="546025898038788107") {
        }else {
        return bot.channels.get("440596306835275776").send(newsembed) === bot.channels.get("546025898038788107").send("La commande !citycomnews a bien été envoyée " + `${message.author}`) + " ✔";
        }
    }

    // Commande pour annoncer du changement sur le discord

    if(cmd === '!citycomchange'){
        let newsembed = new Discord.RichEmbed()
        .setTitle("CityCom")
		.setDescription("Du changement sur discord !")
        .setColor("#feb063")
		.setThumbnail("https://media.discordapp.net/attachments/541297544945205258/541297575496646656/0cbede56aae5bb85168ede1da9c51261.png")
        .addField("Informations", citysay, true)
        .setFooter(message.createdAt)
        if(message.channel.id!="546025898038788107") {
        }else {
        return bot.channels.get("440596306835275776").send(newsembed) === bot.channels.get("546025898038788107").send("La commande !citycomchange a bien été envoyée " + `${message.author}` + " ✔");
        }
    }

    // Commande pour annoncer le status du rétro

    if(cmd === '!citystatus'){
        let newsembed = new Discord.RichEmbed()
        .setTitle("HabboCity")
		.setDescription("Status du serveur HabboCity")
        .setColor("#feb063") 
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Informations", citysay + " \n\n- " + `${message.author}`, true)
        .setFooter(message.createdAt)
        if(message.channel.id!="546025898038788107") {
        }else {
        return bot.channels.get("440971248017604619").send(newsembed) === bot.channels.get("440971248017604619").send("@everyone") === bot.channels.get("546025898038788107").send("La commande !citystatus a bien été envoyée " + `${message.author}` + " ✔");
        }
    }

    // Commande test pour annoncer le stats du rétro

    if(cmd === '!testcitystatus'){
        let newsembed = new Discord.RichEmbed()
        .setTitle("HabboCity")
		.setDescription("Status du serveur HabboCity")
        .setColor("#feb063")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Informations", citysay + " \n\n- " + `${message.author}`, true)
        .setFooter(message.createdAt)
        if(message.channel.id!="546025898038788107") {
        }else {
        return bot.channels.get("546025898038788107").send(newsembed) /*===  message.delete() === message.send("@everyone")*/;
        }
    }

    // Commande blagues aléatoires

    if(cmd === '!cityblague'){
        if(message.channel.id!="441255435408900096") {
        }else{
        random()
        if (citymdr == 1){
            message.reply("\n\nQu'es qui est bleu, et qui descend ?\n Marseille dans le classement")
        }

        if (citymdr == 2){
            message.reply("\n\nQue fait un crocodile quand il rencontre une superbe femelle ? \nIl lacoste !");
        }

        if (citymdr == 3){
            message.reply("\n\nQu'est ce qui n'est pas un steak ? \nUne pastèque !")
        }

        if (citymdr == 4){
            message.reply("\n\nQuelle est la mamie qui fait peur aux voleurs ? \nMamie trailette")
        }

        if (citymdr == 5){
            message.reply("\n\nQuel est le pays le plus cool du monde ? \nLe Yémen")
        }

        if (citymdr == 6){
            message.reply("\n\nC’est l’histoire d’un schtroumpf qui tombe, et qui se fait un bleu")
        }

        if (citymdr == 7){
            message.reply("\n\nPourquoi les vaches ferment elles les yeux pendant la traite de lait ?\nPour faire du lait concentré !")
        }

        if (citymdr == 8){
            message.reply("\n\nPourquoi il y a pas de ballon sur le plateau de question pour un champion ? \nCar Julien Lepers")
        }

        if (citymdr == 9){
            message.reply("\n\nC’est l’histoire d’un cheval qui s’appelle terus et chaque fois qu’on monte dessus ça fait Huuuuuu terus….")
        }

        if (citymdr == 10){
            message.reply("\n\nComment appelle-t-on une chauve-souris qui a des cheveux ? \nUne souris")
        }

        if (citymdr == 11){
            message.reply("\n\nDeux amis contemplent le ciel:\n- Tu crois que la lune est habitée, demande l’un d’eux? \n–Bien sûr, répond l’autre, c’est allumé tous les soirs !")
        }

        if (citymdr == 12){
            message.reply("\n\nComment appelle-t-on une chauve-souris qui a des cheveux ? \nUne souris")
        }

        if (citymdr == 13){
            message.reply("\n\nVous saviez que les girafes n’existent pas ? \nC’est un coup monté !")
        }

        if (citymdr == 14){
            message.reply("\n\nUne carotte veut se suicider, elle échoue, elle dit quoi ? \nZut c’est râpé !")
        }

        if (citymdr == 15){
            message.reply("\n\nVoulez-vous que je vous raconte une blague à l’envers ? \nCommencez par rigoler !")
        }

        if (citymdr == 16){
            message.reply("\n\nC’est un clown qui arrive chez le docteur et dit : \n–Docteur vite! Je me sens tout drôle !")
        }

        if (citymdr == 17){
            message.reply("\n\nC’est l’histoire de deux volcans. L’un dit à l’autre : \nÇa te déranges pas si je fume ?")
        }

        if (citymdr == 18){
            message.reply("\n\nComment appelle-t-on une cigogne pas intelligente ? \n– Une si conne !")
        }

        if (citymdr == 19){
            message.reply("\n\nL’instit : Dis-moi, ton père t’a aidé pour ton devoir ? \nL’élève : Non, il l’a fait tout seul !")
        }

        if (citymdr == 20){
            message.reply("\n\nJ'ai une blague sur les magasins \nMais elle a pas supermarché")
        }

        if (citymdr == 21){
            message.reply("\n\nPourquoi est-ce c'est difficile de conduire dans le Nord ? \nParce que les voitures arrêtent PAS DE CALER")
        }

        if (citymdr == 22){
            message.reply("\n\nPourquoi est-ce qu'on met tous les crocos en prison ? \nParce que les crocos dealent.")
        }

        if (citymdr == 23){
            message.reply("\n\nPourquoi dit-on que les poissons travaillent illégalement ? \nParce qu’ils n’ont pas de FISH de paie.")
        }

        if (citymdr == 23){
            message.reply("\n\nPourquoi est-ce que les mexicains mangent-ils aux toilettes ? \nParce qu’ils aiment manger épicé")
        }

        if (citymdr == 23){
            message.reply("\n\nPourquoi est-ce que les livres ont-ils toujours chaud ? \nParce qu’ils ont une couverture")
        }

    }    
        function random(min, max) {
            min = Math.ceil(1);
            max = Math.floor(23);
            citymdr = Math.floor(Math.random() * (max - min +1) + min);
        }﻿
    }
})

    // Auto censure noms de rétros

    bot.on("message", async (message) => {
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;
                
        if (message.content.toLowerCase().includes("habbox") || 
        message.content.toLowerCase().includes("habboalpha") ||
        message.content.toLowerCase().includes("habbix") ||
        message.content.toLowerCase().includes("habbo-alpha") ||
        message.content.toLowerCase().includes("jabbo") ||
        message.content.toLowerCase().includes("wibbo") ||
        message.content.toLowerCase().includes("yourhabbo") ||
        message.content.toLowerCase().includes("habbolove") ||
        message.content.toLowerCase().includes("hlove") ||
        message.content.toLowerCase().includes("halpha") ||
        message.content.toLowerCase().includes("trouveretro") ||
        message.content.toLowerCase().includes("hlove") ||
        message.content.toLowerCase().includes("hobbac") ||
        message.content.toLowerCase().includes("habbostar") ||
        message.content.toLowerCase().includes("hstar") ||
        message.content.toLowerCase().includes("habbow") ||
        message.content.toLowerCase().includes("bobba") ||
        message.content.toLowerCase().includes("adow") ||
        message.content.toLowerCase().includes("adohotel") ||
        message.content.toLowerCase().includes("hazbo") ||
        message.content.toLowerCase().includes("zobba") ||
        message.content.toLowerCase().includes("habbobeta") ||
        message.content.toLowerCase().includes("hbeta") ||
        message.content.toLowerCase().includes("nlbobba") ||
        message.content.toLowerCase().includes("newlifebobba") ||
        message.content.toLowerCase().includes("rhabbo") ||
        message.content.toLowerCase().includes("habboz") ||
        message.content.toLowerCase().includes("zibbo")
         === true){
        message.delete()
        message.author.send("Votre message a été supprimé pour citation d'un rétro serveur habbo");
        }
    });
    



bot.login('NjEzNjg5Njg2OTIxMTgzMjUz.XV0lGQ.CsZnu0_mzq9WLinUD1XJrgCNAs4')
