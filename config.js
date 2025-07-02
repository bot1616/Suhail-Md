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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_26_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMxLFxuICAgICAgICA5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MixcbiAgICAgICAgMTk4LFxuICAgICAgICA0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgODMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NixcbiAgICAgICAgMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxODksXG4gICAgICAgIDYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDkzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDc3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcyLFxuICAgICAgICA3NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImlMZllaNlIxSTU4enc1dlNEdGpkZzY2QllSbUN2SERSaHNyMWJJemlJbzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInptbnF2SVU5VERLRktDX0kzRzBxSXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTQxM2FlNTktMzYyOC00MjlkLThjMGMtZmRjZWY0ZjYzYzZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY1LFxuICAgICAgMTIsXG4gICAgICAxMzksXG4gICAgICAxNTUsXG4gICAgICAyMTMsXG4gICAgICAyNTEsXG4gICAgICAxMzcsXG4gICAgICAyMDEsXG4gICAgICA5NixcbiAgICAgIDIzNCxcbiAgICAgIDExNixcbiAgICAgIDEwNyxcbiAgICAgIDcsXG4gICAgICAyMTUsXG4gICAgICAxMTUsXG4gICAgICAyMTEsXG4gICAgICA1NCxcbiAgICAgIDE1OCxcbiAgICAgIDEyMSxcbiAgICAgIDI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICA2MixcbiAgICAgIDMwLFxuICAgICAgMjIwLFxuICAgICAgNDMsXG4gICAgICAxNTEsXG4gICAgICAyMjcsXG4gICAgICAxNDYsXG4gICAgICAxMjUsXG4gICAgICAyMzMsXG4gICAgICAxODksXG4gICAgICAxNTgsXG4gICAgICAyNDMsXG4gICAgICAyMDYsXG4gICAgICA2NixcbiAgICAgIDE2NSxcbiAgICAgIDM3LFxuICAgICAgMTE1LFxuICAgICAgMTUyLFxuICAgICAgMTQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTSszcGZJR0VNak5rc01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrckpPM2JJeko1Qk5IMDB3TjBNeGRUa2ZkWHJPY2hpOVYrUit0Y0pFM3pnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFCRWRxclRBanJTaENJMm1nUlZHR0J0bFRkQjZuejN0blFXMEtRQndsY3FkZ25zVTVtc29qSFNNRGJiME13RHhMdkVmaUFJVlduS2NjdHNqRFVZR0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxHZFI5STFpL3FNUTFEa0s5Qkx4R2JoYmFNbGZzOFJSWU81Mk9vRVB6SGF4SWxGSFVqWnM1aWVnS2NYNmt1K1BqeUpiR1h2Yld4TktTYW8rSzQzTkFBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDE0MDQ3NDY3OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTAxNTY4MjE0MTgwMTM6NDNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MTQwNDc0Njc6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1MTQyNjc2OFxufSIKfQ=="  // PUT your SESSION_ID 


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
