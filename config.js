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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_40_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDczLFxuICAgICAgICA2MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAxLFxuICAgICAgICA3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDU3LFxuICAgICAgICA4NixcbiAgICAgICAgMTA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMjAwLFxuICAgICAgICA4NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDc0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyLFxuICAgICAgICA2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMjIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODQsXG4gICAgICAgIDcyLFxuICAgICAgICA3LFxuICAgICAgICAyMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc1LFxuICAgICAgICA5MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmekZ6N3lmeWRJejdjVWNNait4cEtCenBtaW8xcHZmTjdnNjMyd3pDMUE0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOQlpQUExBUFJBdXh6WW95NzIxdERnXCIsXG4gIFwicGhvbmVJZFwiOiBcImVjZDg4OGQ3LTYwMTgtNDExMS1iOTIwLTdhMjBjM2YxNTU0N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDI0OSxcbiAgICAgIDIwOSxcbiAgICAgIDEzOCxcbiAgICAgIDEwMCxcbiAgICAgIDE4OSxcbiAgICAgIDgzLFxuICAgICAgMjUyLFxuICAgICAgNyxcbiAgICAgIDIxMSxcbiAgICAgIDMwLFxuICAgICAgMTkzLFxuICAgICAgOTQsXG4gICAgICAxMDcsXG4gICAgICA5OSxcbiAgICAgIDIzNixcbiAgICAgIDIxMCxcbiAgICAgIDE1MCxcbiAgICAgIDExMyxcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICA5NCxcbiAgICAgIDE3NSxcbiAgICAgIDIxMSxcbiAgICAgIDE4MCxcbiAgICAgIDIyOSxcbiAgICAgIDIxMyxcbiAgICAgIDYwLFxuICAgICAgMjM2LFxuICAgICAgNDcsXG4gICAgICAxOTUsXG4gICAgICAxMTEsXG4gICAgICA0MyxcbiAgICAgIDIwOSxcbiAgICAgIDE3NixcbiAgICAgIDExMSxcbiAgICAgIDExNyxcbiAgICAgIDEyNyxcbiAgICAgIDE1MSxcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzMwOE4wQkVLbTY4OElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPWEIySUdtdXNzM0hjbHRsZ3ZFNC8zcjR6ZjNNZ25ZZ3I1dXc3YkJ3cm40PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtOektpUE9nWmV5VDF2WlFmc01RaEhFa0s4VWZ6eGJjQUovMERSYnFySlAwOEZ4MDRaR3ROTi83QktwdlNhYTRPOHRUMlhBaG1uWmlmcGVQNzJuZ0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJSeFpkY05IZ082aVNQQkgxTDI5ZWJ1bmI2cEVBakdjbXpUU1RQcnFqTmpHS2l5SndGeXdqdUFqNGFVNUNTbk1rZDlOZ0JuRzYwa2taQlc5bVc3T0RBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjkxNDA4NzUwOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDM4ODI3MDE1NDU3MDA6MTdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiyZXJvMmRzZzNocqRyaPMrC3Pu8yIzJDGsvCdkI3Jls2gyozhr63igbDCucKy8J+MuOKciFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjkxNDA4NzUwOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1MDkxNjM5NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU11ZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXVmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWFdiTG1iN2o5VE9Eam1DUlFtVllJZ2o2OGwzcHAycjBpd3c5cTQ1QnNaTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjUzMjA1NTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDkxNjQwMDY4M1wifSIKfQ=="  // PUT your SESSION_ID 


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
