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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "994403613420";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_57_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMzLFxuICAgICAgICA5OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI4LFxuICAgICAgICA5MSxcbiAgICAgICAgNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDkwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3LFxuICAgICAgICA5NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgMjE4LFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMjA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcwLFxuICAgICAgICA4MixcbiAgICAgICAgMjE2LFxuICAgICAgICAzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDcxLFxuICAgICAgICA2MixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaTVjU0t6Z283YkhFQ2lnNERxRml0dVg2UlloclVaNUFwS0o2T3RTaW85VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZWM1QlZ3RXZST2lzaEZvczZtRmRyd1wiLFxuICBcInBob25lSWRcIjogXCI2NGMwMjYxYS0zNjZmLTRjMmMtOTY4OC1iYmMzOWJjZTExZmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAxNTMsXG4gICAgICA2MixcbiAgICAgIDgyLFxuICAgICAgMTU0LFxuICAgICAgMTg5LFxuICAgICAgMjQzLFxuICAgICAgMjUsXG4gICAgICAxODMsXG4gICAgICA2LFxuICAgICAgMjQwLFxuICAgICAgMjQ3LFxuICAgICAgMjEwLFxuICAgICAgMzgsXG4gICAgICA1OCxcbiAgICAgIDI0OCxcbiAgICAgIDI0OCxcbiAgICAgIDkwLFxuICAgICAgMTUyLFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk0LFxuICAgICAgMTUyLFxuICAgICAgMzQsXG4gICAgICAxOTMsXG4gICAgICAyMjQsXG4gICAgICAxNDIsXG4gICAgICA3NCxcbiAgICAgIDc1LFxuICAgICAgNjgsXG4gICAgICA0MixcbiAgICAgIDI1LFxuICAgICAgODUsXG4gICAgICA2MSxcbiAgICAgIDEsXG4gICAgICAxMjksXG4gICAgICA1NCxcbiAgICAgIDYyLFxuICAgICAgMjM4LFxuICAgICAgMTg1LFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOajk1SUFDRUs2ZTVNTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRSVUVsV0ZtQktVQUQ0RUcwYlMwYTR4UzZWOXNOdi9jTndUekNtSVA5Qkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ1hKZTh0VFBnMU1zQktyeFI2NE9VakRSNG9SMG92TkdkYzUvZ0RwVGR5OHhLOFQ0NlNRaHgwR3FhYWh1Z0RIMEdHejRqSWI5MzV0c0NPTHkreGFsQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiKy9Ka3hrRzNsMGJTTEpCS1NtdHp3M2llUjhPS0pkUmk1WXEzdXdHUXJJMGZYWEk1R3kxazZNS2ZibzdDMkxmOUwvOGUyTVZpZVA0OC9vZHpHTnhSaGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNDYzMTY1MDA6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBbGhhbWR1bGlsbGFoXCIsXG4gICAgXCJsaWRcIjogXCIyMDEwMzkzOTk2MjkwNTE6MjdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNDYzMTY1MDA6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTI3NjQyMTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCRkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJGTC5qc29uIjogIntcImtleURhdGFcIjpcIjJXdVRPS2FnbDQ5MitVeG1mVWQyck5BT2t4anAyNTRRR09PM0tlSnMwRXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTM4NTI1NDAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTI3NjQyMTg2NjhcIn0iCn0="  // PUT your SESSION_ID 


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
