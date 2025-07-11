const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923414047467";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_35_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTExLFxuICAgICAgICA4OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDYzLFxuICAgICAgICA1MixcbiAgICAgICAgMTk0LFxuICAgICAgICA3OCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjksXG4gICAgICAgIDI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODksXG4gICAgICAgIDExMixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAzLFxuICAgICAgICAyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1LFxuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQyLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDksXG4gICAgICAgIDMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDQyLFxuICAgICAgICA2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDczLFxuICAgICAgICA3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE3LFxuICAgICAgICA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA4OCxcbiAgICAgICAgMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgODksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDkxLFxuICAgICAgICA1NixcbiAgICAgICAgMTcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk0LFxuICAgICAgICA0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRk5rSENsazI2Qi8xMDI1TzQzL1dicW9jendWS2NPMi81Ym94VC8zV1c1ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLXJuVG9lNDRSQnUteGpyTmhBMUlKZ1wiLFxuICBcInBob25lSWRcIjogXCJkNDFmYTQwYi1jMmM3LTRjNmMtYjhlYS1hNmQ1M2U0Y2JkNGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAzNCxcbiAgICAgIDIxOSxcbiAgICAgIDE5MyxcbiAgICAgIDE4NCxcbiAgICAgIDE0NSxcbiAgICAgIDE3OSxcbiAgICAgIDYxLFxuICAgICAgMTM5LFxuICAgICAgMTYxLFxuICAgICAgMjEyLFxuICAgICAgMjM2LFxuICAgICAgMjIxLFxuICAgICAgMjAzLFxuICAgICAgMTg2LFxuICAgICAgMTAxLFxuICAgICAgMjMyLFxuICAgICAgMTQ3LFxuICAgICAgMzksXG4gICAgICAxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzgsXG4gICAgICA0NCxcbiAgICAgIDI3LFxuICAgICAgMTM0LFxuICAgICAgMzksXG4gICAgICAxNTMsXG4gICAgICA2MCxcbiAgICAgIDExNSxcbiAgICAgIDIyMixcbiAgICAgIDIyMyxcbiAgICAgIDIyLFxuICAgICAgMTk2LFxuICAgICAgMTM5LFxuICAgICAgNzUsXG4gICAgICAyMTcsXG4gICAgICA5NCxcbiAgICAgIDY0LFxuICAgICAgMTc1LFxuICAgICAgMzcsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYTNwZklHRVBPTXdzTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtySk8zYkl6SjVCTkgwMHdOME14ZFRrZmRYck9jaGk5VitSK3RjSkUzemc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWk5HWXFCUWRmMlhCU3VaTnJqOUVKT3ptN2NIS2N6QjlSU1daSllNNHY4R2ovMVJ4UU5iamtabitzTkYxQlN0K1YyZzJHUjUyek53akMyTk9vWFFtQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVGRFVGZmZ1kraE5BbExyWnBtWFBMZGEwOFF6NFZPdHRBTlBlTW5zZmZ1ZkNUUkVkbkdDczdpVzc0VEZPQkgvZkcwbEVrcVp6cGhobnhuS2xxdWRHZ2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTQwNDc0Njc6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MDE1NjgyMTQxODAxMzo1MEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxNDA0NzQ2Nzo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUyMjA0OTMyXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🌸ضـ۬ـۧۛـ𝆊۬ـ۬ــــ۬ـۧۛـ𝆊۬دی مــّْ͢ـْــلـ۬ـۧۛـ𝆊۬ک⁰¹²🩷03247116683🤌🏻",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
