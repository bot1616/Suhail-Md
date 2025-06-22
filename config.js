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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923291408750";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_19_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NixcbiAgICAgICAgNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQyLFxuICAgICAgICA2MixcbiAgICAgICAgMjA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg4LFxuICAgICAgICA0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MixcbiAgICAgICAgMjI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDUwLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDgyLFxuICAgICAgICA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI4LFxuICAgICAgICAyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYxLFxuICAgICAgICA4NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2OSxcbiAgICAgICAgODksXG4gICAgICAgIDkwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEwLFxuICAgICAgICA1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgwLFxuICAgICAgICA3NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI4LFxuICAgICAgICA0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDYwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvRkFRUjhVL0Q4S0RKdlJVbDJYLzlVVVdjYmh1bXlvc042Z3Nxd3dGTlVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmYjByZGhzRlJ3LTl3Zkk2aXRLWUhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImUwMzVmZGQ4LTk2YmItNDBmYy1hZDk1LWY3NzViZDQ2MTQ0OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDE1MyxcbiAgICAgIDE2NCxcbiAgICAgIDIwNCxcbiAgICAgIDI0MSxcbiAgICAgIDEsXG4gICAgICAzMyxcbiAgICAgIDEzNSxcbiAgICAgIDExMyxcbiAgICAgIDIsXG4gICAgICA3LFxuICAgICAgNDIsXG4gICAgICAxODYsXG4gICAgICA5MCxcbiAgICAgIDE1MCxcbiAgICAgIDgzLFxuICAgICAgMTk2LFxuICAgICAgMTQxLFxuICAgICAgMTksXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMTcwLFxuICAgICAgMTQzLFxuICAgICAgMTQ5LFxuICAgICAgMjQsXG4gICAgICAyMDEsXG4gICAgICAyMzEsXG4gICAgICAxNDcsXG4gICAgICAxNSxcbiAgICAgIDY3LFxuICAgICAgNzQsXG4gICAgICA0LFxuICAgICAgMTMxLFxuICAgICAgNTYsXG4gICAgICA4OSxcbiAgICAgIDE3MSxcbiAgICAgIDg1LFxuICAgICAgMjM0LFxuICAgICAgMjgsXG4gICAgICAxODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPejA4TjBCRUwyazNzSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9YQjJJR211c3MzSGNsdGxndkU0LzNyNHpmM01nbllncjV1dzdiQndybjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNXU0MmZwUVNXWVM0NllsMVZ1OFB5OTBYaG16Q3pNSzhvUmQ0VnM3Qkp2bGEyTUlnSEpFMGUwSXFTVzJVSzBYS0M4dENXcS9waGo1cnZWeHpNSGY4QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwickR2akhpeGFhL3VJUzhrOTY1SkY4cjhhdytpbWNlR1RadDdGT3JHdktkRUxpZTVBbnh1ck5kWThBck5WMWRVWCtCc3c1OUpka3JxVkJoaTBsLzNVQlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyOTE0MDg3NTA6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMzg4MjcwMTU0NTcwMDoxNkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLJlcm8yZHNnM2hypHJo8ysLc+7zIjMkMay8J2QjcmWzaDKjOGvreKBsMK5wrLwn4y44pyIXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyOTE0MDg3NTA6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUwNTY5NTM2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkp3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOSncuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3aTFOaGdSU004MXAxWG8xa2ZFYXNqaTEvS2pQWkxXekZhdm5vdUZPWlVjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NTMyMDU1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUwNTY5NTQwNzg0XCJ9Igp9"  // PUT your SESSION_ID 


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
