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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_01_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1LFxuICAgICAgICA1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgODUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDksXG4gICAgICAgIDgyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY2LFxuICAgICAgICAzNixcbiAgICAgICAgMTM0LFxuICAgICAgICA0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTExLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDYwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3LFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICA1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDQzLFxuICAgICAgICA3MixcbiAgICAgICAgMTczLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk2LFxuICAgICAgICA3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDksXG4gICAgICAgIDc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA1LFxuICAgICAgICA1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJzckJoMHFxMDVKdEVPajQ0YU12eWV3TEd6UWp1SzNxMFdCVTVrRVNDMGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdQUkJ3SFpSUmpPUEhxWXF6d0RDWVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjY5MmQ5YmEtZDQ3Yy00OWM1LTg0NWQtMDlmZDA2YWIxOWI1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDEwMSxcbiAgICAgIDEyNixcbiAgICAgIDE0NixcbiAgICAgIDExOCxcbiAgICAgIDIzNixcbiAgICAgIDEwMyxcbiAgICAgIDE3OCxcbiAgICAgIDE1NyxcbiAgICAgIDI0LFxuICAgICAgMjAzLFxuICAgICAgMjA0LFxuICAgICAgMTIxLFxuICAgICAgMTg4LFxuICAgICAgMTQ2LFxuICAgICAgMTk1LFxuICAgICAgMTYsXG4gICAgICAxMjksXG4gICAgICAxODAsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOSxcbiAgICAgIDExMSxcbiAgICAgIDIxOCxcbiAgICAgIDE5OSxcbiAgICAgIDUsXG4gICAgICA4MixcbiAgICAgIDIzOCxcbiAgICAgIDE1MSxcbiAgICAgIDEwLFxuICAgICAgNzgsXG4gICAgICAyNTMsXG4gICAgICAzLFxuICAgICAgMTE4LFxuICAgICAgMTI4LFxuICAgICAgNDMsXG4gICAgICAxMixcbiAgICAgIDE4NSxcbiAgICAgIDYsXG4gICAgICAxNDAsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNS2Q5TzRGRUlHMzZNTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInV6blMyZjZDMDFBcnJFNlNjUTZpNjJxN3Nqa2p0eFIwYW1vNndmay9qQnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaE0xWGI1K3ZhSDJOT3VMMGZ3em41TlFKSGI0TGtRdVo1TWgyN0ZCaUxYNlMrejJYSEpqalJKNGpjUWZUK1NoTUdpdUIwVTdlSXExS1l5Y2JGSHkvQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZTMxK3M5UHEwaVY3Mi9zMndWTDVqZC9meWtBT3piN2RaY1JYODBlcHFLZkVPSFRpNldsaXZyQ3QxRW5tRk84cXNTazNaZFpqTnh2MitNZzhkOUFEaWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNDcwNzU3NzM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjgzMzM1ODQwMTU1Nzk6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCIuXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNDcwNzU3NzM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTI4MzI5MDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQOE9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA4Ty5qc29uIjogIntcImtleURhdGFcIjpcIjJnSW55b0huU0RWdEhzWjB1YzZGVmV0Z2NnZ09YMkpuZk9HTUliSHRGM1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU3NDc2ODMyMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUyNzYzOTQzNDc3XCJ9Igp9"  // PUT your SESSION_ID 


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
