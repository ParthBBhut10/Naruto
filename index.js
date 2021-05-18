const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'ODM5NTA5MTEwODYwNjc3MTQw.YJKryQ.2BspShDhpZ_8NsdQU2CEDcxtTdI';

const PREFIX = '';


bot.on('ready',() =>{
     console.log ('NarutoOp is Online!');  
})

bot.on('message', message=>{

       let args = message.content.substring(PREFIX.length).split(" ");
	   
	   switch(args[0]){
		   case 'ping': 
		        message.channel.send('pong!')
		        break;
		   
		   case 'website' :
		        message.channel.send('youtube.com')
			    break;
				
		   case 'info':
			    message.channel.send('Real Name' + ' ' + ':' + ' ' + 'ParthBBhut \n' +  
                                                 'In-Game Name' + ' ' + ':' + ' ' + 'NarutoBTC \n' +
												 'Content' + ' ' + ':' + ' ' + 'Student/Gamer \n' +
												 'Age' + ' ' + ':' + ' ' + '18yrs \n' +
												 'Date Of Birth' + ' ' + ':' + ' ' + '18 June 2002 \n' + 
												 'Education' + ' ' + ':' + ' ' +'Diploma in Computer Engineering \n' +
												 'HomeTown' + ' ' + ':' + ' ' + 'Vasai,Palghar,Maharashtra,Inda \n' +
												 'Nationality' + ' ' + ':' + ' ' +'Indian \n'  												 
												 )
                 break;		
            
			case 'specs' : 
                 message.channel.send('Device' + ' ' + ':' + ' ' + 'ASUS ROG GT531 \n' + 
                                      'Processor' + ' ' + ':' + ' ' + 'i5 9th Gen \n' +
                                      'RAM' + ' ' + ':' + ' ' + '8 GB RAM \n' + 
                                      'SSD' + ' ' + ':' + ' ' + '256 GB \n' +
                                      'HDD' + ' ' + ':' + ' ' + '1 TB \n' +
                                      'Graphics Card' + ' ' + ':' + ' ' + 'GTX 1650 4GB RAM ' 
  									 )
                  break ;									 
	   }   
})

bot.login(token);