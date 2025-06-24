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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_11_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNixcbiAgICAgICAgMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIzLFxuICAgICAgICA3NixcbiAgICAgICAgNyxcbiAgICAgICAgODUsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY2LFxuICAgICAgICA5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDkxLFxuICAgICAgICAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc4LFxuICAgICAgICA4MixcbiAgICAgICAgMTMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDc4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcwLFxuICAgICAgICA2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWdTJ1MkJhZG0zYTQvN0o1OHlaVFUrZWFaS2dDTXJUdkY2MXQwaUdxQ3dZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDUzBORF9hY1RueTFYZUM2S1J6YTZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMxZGQ4ZTUyLTczZTYtNGZkYS05NmQ3LTBmNzZlYzZlNzEzM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDE1NixcbiAgICAgIDE3MCxcbiAgICAgIDI0OCxcbiAgICAgIDc5LFxuICAgICAgMTk0LFxuICAgICAgMjE4LFxuICAgICAgMjE1LFxuICAgICAgMjQ1LFxuICAgICAgNzMsXG4gICAgICAxNjUsXG4gICAgICA2OCxcbiAgICAgIDE2LFxuICAgICAgOTMsXG4gICAgICAxMzUsXG4gICAgICA4NyxcbiAgICAgIDExMSxcbiAgICAgIDIwMCxcbiAgICAgIDE3OCxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICA2MCxcbiAgICAgIDIwNSxcbiAgICAgIDI0NixcbiAgICAgIDE2NixcbiAgICAgIDE5NixcbiAgICAgIDMxLFxuICAgICAgMjQ0LFxuICAgICAgMTQzLFxuICAgICAgOTAsXG4gICAgICAxOTYsXG4gICAgICAxMCxcbiAgICAgIDQxLFxuICAgICAgMTk1LFxuICAgICAgMTM4LFxuICAgICAgMTk5LFxuICAgICAgMjUwLFxuICAgICAgNjUsXG4gICAgICA1MixcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ011M3BmSUdFSTJENmNJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3JKTzNiSXpKNUJOSDAwd04wTXhkVGtmZFhyT2NoaTlWK1IrdGNKRTN6Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpSXJOd1ZibDRNTmxUdHQ0UVNVMUFlUmd5NllIUGh0ams2MlhaV3JtMENSei9MQlNUK3JocG82TTYyZWR4OEFRb0VhRFFsRnVET0l4bWVTbUxzWUZDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwWkg4bWl1LzFpaG9QczJWYlRkMlo0MWlSeVNGUVUrelhuRGV6bHNrejhkeFhJMFFKZDFLMTBiSUxMblpabTA3QlYrK01VVGovMFByTmtlUTVFUCtqQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxNDA0NzQ2NzozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUwMTU2ODIxNDE4MDEzOjM5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE0MDQ3NDY3OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTA3NDU0ODlcbn0iCn0="  // PUT your SESSION_ID 


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
