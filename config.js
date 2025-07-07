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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_08_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQxLFxuICAgICAgICAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgwLFxuICAgICAgICA3MixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzLFxuICAgICAgICA5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTExLFxuICAgICAgICA2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDkwLFxuICAgICAgICA0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDkwLFxuICAgICAgICA5NixcbiAgICAgICAgMTgxLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMixcbiAgICAgICAgODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE3LFxuICAgICAgICA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMSxcbiAgICAgICAgNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDc5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDg4LFxuICAgICAgICAxNDksXG4gICAgICAgIDc0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5LFxuICAgICAgICA2OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYW5vaC9pcE55MWVXcVJGUVNsRHk5SEZyOWMzOW5pTEpQQkFSS3YzbWxxND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQU5jZkhBOXBRVGlicFF3TFVqbzQ5d1wiLFxuICBcInBob25lSWRcIjogXCI4MGQ2OTUxMy1lNGVhLTRiNjUtYmE4Yi1hZGE3NWI5MTFkODJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgMjMzLFxuICAgICAgNTYsXG4gICAgICAyMTksXG4gICAgICAxMTQsXG4gICAgICAxMzQsXG4gICAgICAxNzQsXG4gICAgICAyNDgsXG4gICAgICAzNixcbiAgICAgIDk5LFxuICAgICAgMjE1LFxuICAgICAgMjAsXG4gICAgICAyMTUsXG4gICAgICAyNTAsXG4gICAgICAxMDMsXG4gICAgICAyNDMsXG4gICAgICAxNjgsXG4gICAgICAxMjQsXG4gICAgICAxMjAsXG4gICAgICAxMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgOTYsXG4gICAgICAyMzQsXG4gICAgICAxNTYsXG4gICAgICAyMzIsXG4gICAgICAyMzgsXG4gICAgICA3NCxcbiAgICAgIDkwLFxuICAgICAgMjcsXG4gICAgICA3NixcbiAgICAgIDI0MixcbiAgICAgIDQsXG4gICAgICAxNDIsXG4gICAgICAxMixcbiAgICAgIDk1LFxuICAgICAgMjAsXG4gICAgICA2MixcbiAgICAgIDg3LFxuICAgICAgMTEyLFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlMzcGZJR0VQelhyTU1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrckpPM2JJeko1Qk5IMDB3TjBNeGRUa2ZkWHJPY2hpOVYrUit0Y0pFM3pnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInYrYmtNZUVHQnRndkJhQ3FVVFQzWTR6L0g5dXh1ZDNuOHJobVh4dXFBemlDRWp5VDJnQmtPYnVkRWhHYVpOVjMrMTgwMzk4SzZwR2NJTHNQUDZCMEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitYbTgxVzJnMm9tYmlzWUk2ZS9hTktnQXV1cm9zRHlPanIwbk5rdmhPdnBIMkRJaUt3RE96QmZhekNqRXFMRzByQ21HakFmMG9qT2p5ay9zT00wb2hRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDE0MDQ3NDY3OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTAxNTY4MjE0MTgwMTM6NDhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MTQwNDc0Njc6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1MTg1NDA4MFxufSIKfQ=="  // PUT your SESSION_ID 


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
