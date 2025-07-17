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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_57_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MixcbiAgICAgICAgODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDUzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyLFxuICAgICAgICA0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI5LFxuICAgICAgICA0NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgODIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExLFxuICAgICAgICA0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDkzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRSbzZpS2NOUHAyQkRPUHVPSE1vbkJGNDdtNmlWemlpTEdwa0VxVW43Yzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk12ekpmdFMwUl9HT2xuekRyQTg2OUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDM2YTEzYzEtNmMyMC00MWU0LTk2NTktYzNhNWRlZDZlMWJkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NyxcbiAgICAgIDc0LFxuICAgICAgNDQsXG4gICAgICAxMTcsXG4gICAgICA1MixcbiAgICAgIDc1LFxuICAgICAgMTMyLFxuICAgICAgMjMyLFxuICAgICAgMTU0LFxuICAgICAgMjUwLFxuICAgICAgMTk2LFxuICAgICAgMjE1LFxuICAgICAgMzUsXG4gICAgICAxNzYsXG4gICAgICAxMDgsXG4gICAgICAyMTAsXG4gICAgICAxMzUsXG4gICAgICA5MSxcbiAgICAgIDEwNyxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAyMjgsXG4gICAgICAxNjksXG4gICAgICA4OCxcbiAgICAgIDIyNSxcbiAgICAgIDU3LFxuICAgICAgOTMsXG4gICAgICAyNTEsXG4gICAgICA4OCxcbiAgICAgIDE1OSxcbiAgICAgIDkzLFxuICAgICAgNzgsXG4gICAgICAyMzIsXG4gICAgICAxNTQsXG4gICAgICAxMzQsXG4gICAgICAyMjYsXG4gICAgICAxOTUsXG4gICAgICAxMDQsXG4gICAgICAyMjMsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRDA4TjBCRUttRjRzTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9YQjJJR211c3MzSGNsdGxndkU0LzNyNHpmM01nbllncjV1dzdiQndybjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN3dxd21nMXBhWEFBZ2xFRGN3Qml4U0lWYnhYYklabjZrbW5vNEJUUGMwQlhMaXpLcElkQmhDRXg3dlZ4M1FpWk9LWUVJb0l4NFRIVWdjRjZhNVRXQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaDZjTldoQmpwZU92a09JdE1EQitBSzdFR0tpaldtNkFCWk9LTk1ZQTEzaUJBWDBMZVN5UTBIMnZlbTZOanJxN3drUUJzZUd0ZkZuakxWd0ZZUXBRQnc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIzMTk3MDEwNTIxMTI2OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NzE4MzYwNjAwOTk1NTo4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMzE5NzAxMDUyMTEyNjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1MjcyODIzNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQWNBQVB6clwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHprLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZWRhODgvdnc1a05OY0IwdlFLWEUxdFdUSENhd1F4TUlJaHdMQkpXaUhEWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjUzMjA1NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MjcyMDQxNTE4NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB6bS5qc29uIjogIntcImtleURhdGFcIjpcIm9qQTJiSEViOUZOaUdaL29MamZuQ240bXY5SWdBTmNxVFhMY01UaTFjMmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY1MzIwNTYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTI3MjA0NTMwMThcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQem8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpNXB1aUd1ek1kRllGV2dGQThIV0ZGUDY2dTBUSy93MytCbWtGckhoZ0RnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NTMyMDU2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUyNzIwNDU4NTY4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHpxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVWhJc3h4T1Axc2M4WCtlNkVRSWtlRlZ0OFFNUnZFdjhUdEI2WWVleUVzZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjUzMjA1NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MjcyMDcwNjE1MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB6cy5qc29uIjogIntcImtleURhdGFcIjpcInRzK1poUjRiL2xydzlpakx1b0czNnlpVGhBbjg5OVZGMGtVSFNCWDJaTGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY1MzIwNTYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTI3MjIyNzI4NzVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQenYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1OFlkK3ZQTmJEdzBIUHpzQWJrdG1DZHZndVVDZCsvRFgwMm55M05iRE9NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NTMyMDU2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUyNzIyMzM2MDU2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBY0FBUHpsLmpzb24iOiAie1wia2V5RGF0YVwiOlwidlplMHZFVkNMTGl5MzZtdlFOb243K01rZmlJQmlNNEIvMVdsSCt4bVNjQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjUzMjA1NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDddfSxcInRpbWVzdGFtcFwiOlwiMTc1MjcyMDQzNjM5NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQWNBQVB6bi5qc29uIjogIntcImtleURhdGFcIjpcIlYveThFeDc0Q2NYd0ZXOWtxUjdKRnY4d2w4cmtrbE9JU1QxRDd6YXlWRlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY1MzIwNTYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCw3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTI3MjA0NTQxMTdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFjQUFQenAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPSzZSb0hyRkkxcVZONVc0T3l4TjVoRkJpbjBTT2M3OVArZUtLdStMUW5vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NTMyMDU2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsN119LFwidGltZXN0YW1wXCI6XCIxNzUyNzIwNTA3NjY4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBY0FBUHpyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNnRnSk1FLzhvN0tqYWgwNGprRHgyMGwyMm5nb21wVVB2bGxDQ2JhaEtZQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjUzMjA1NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDddfSxcInRpbWVzdGFtcFwiOlwiMTc1MjcyMTg2NjYyOFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQWNBQVB6dC5qc29uIjogIntcImtleURhdGFcIjpcInNMa3U1U1BvWTZXZ3VFTVEvQm5POHkyR2dibkRsbkJwck5jb0hRa3BhMkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY1MzIwNTYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCw3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTI3MjIzMzMxNTVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFjQUFQenUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzdjhkUGFKWXFQOEZyaXB0REVIRElsc0pwa25wRFlicmhLQk1qRDFHK3ZzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NTMyMDU2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsN119LFwidGltZXN0YW1wXCI6XCIxNzUyNzIyMzMzNjg4XCJ9Igp9"  // PUT your SESSION_ID 


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
