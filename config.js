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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_30_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM0LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDExLFxuICAgICAgICA1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc1LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNixcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1LFxuICAgICAgICAyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRDb2NTOG0xN1dGRmNIcElXWEl4ZHJyaGZYM1FxNnROZ2U3L3M4Ujk3KzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInQtRTQyMGR0VHRPWjd5MFA2NEVvMEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWZmZTRjY2YtZTAzNC00NDhhLThkMWItNjM3MmRlOTM5MmYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDEzOCxcbiAgICAgIDIwOCxcbiAgICAgIDIwOSxcbiAgICAgIDE2LFxuICAgICAgMzUsXG4gICAgICA5MCxcbiAgICAgIDEwNSxcbiAgICAgIDg5LFxuICAgICAgMTgwLFxuICAgICAgMTA4LFxuICAgICAgMTk1LFxuICAgICAgMjA0LFxuICAgICAgMTU2LFxuICAgICAgMTksXG4gICAgICAxLFxuICAgICAgMjM2LFxuICAgICAgODUsXG4gICAgICAxMTIsXG4gICAgICAxMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NixcbiAgICAgIDIzNCxcbiAgICAgIDE0OCxcbiAgICAgIDEwNSxcbiAgICAgIDU5LFxuICAgICAgMjMzLFxuICAgICAgODQsXG4gICAgICAyNDQsXG4gICAgICAyNTEsXG4gICAgICA4MCxcbiAgICAgIDIzNSxcbiAgICAgIDIzMyxcbiAgICAgIDIxLFxuICAgICAgMTczLFxuICAgICAgMTc1LFxuICAgICAgMTYwLFxuICAgICAgMjQyLFxuICAgICAgMTgyLFxuICAgICAgMTA0LFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmkzcGZJR0VKL2swc01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrckpPM2JJeko1Qk5IMDB3TjBNeGRUa2ZkWHJPY2hpOVYrUit0Y0pFM3pnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndKNGNYYVorUXhKWUVkbkw0alVSNG9PNVRGNHlPYjUvNWl3a2c2SFFqK0E5cTFRZzQzR2dwenozTzl4ZlBUbU5LZkZ6TUlvTDgrREt1WEczakxxN0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhETE96Y2FGcDdkU2gvSW9MKzFMNkR2V01QWHVJSFFUUWFqSGR2OXBQckpyL0xwQ3V0NmRiZ0RjdUFlQ0tRQ0ZTTEVCanJNcS9kTHJ6OTVTYzU4MGh3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDE0MDQ3NDY3OjUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTAxNTY4MjE0MTgwMTM6NTJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MTQwNDc0Njc6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1MjQ3ODI0MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9tVVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT21TLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR0Z1THUyVTljZ3lnR2VBdXZ3a0NVSDhzdkl5Um5uL0J2VmxQZGYzUlZkND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODUwMzAxMzk5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTI0NzgxOTAwNDdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPbVQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6ckljV2NHMUt0VWZDKzI0NytCeUNUZXVrRDJqMzdmQ1dnbGJQVkpDVXNjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NTAzMDEzOTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTI0NzgyMzI0NjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPbVUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1UFU4dXkzQlhuOWtObkxUZ2hqSnZsQVN1b3V5Zi9xQVZsTStxN3FxSVJBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NTAzMDE0MDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTI0NzgyNDAxMDZcIn0iCn0="  // PUT your SESSION_ID 


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
