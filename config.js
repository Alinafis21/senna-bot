import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['212681951915', 'ALI NAFIS', true],
  ['212681951915']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['212681951915', '212681951915']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'Tomi-bot' 
global.author = 'alinafis0' 

//--info FG
global.botName = 'Tomi-bot'
global.fgig = 'https://instagram.com/alinafis0' 
global.fgsc = 'https://github.com/Alinafis21' 
global.fgyt = 'https://youtube.com/'
global.fgpyp = 'https://paypal.me/alinafis2005'
global.fglog = 'https://ibb.co/StkQRgv' 

//--- Grupos WA
global.id_canal = '120363177092661333@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://chat.whatsapp.com/G2i7LNcN9z2GHttX2pFfV4'
global.bgp = 'https://chat.whatsapp.com/G2i7LNcN9z2GHttX2pFfV4'
global.bgp2 = 'https://chat.whatsapp.com/G2i7LNcN9z2GHttX2pFfV4'
global.bgp3 = 'https://chat.whatsapp.com/G2i7LNcN9z2GHttX2pFfV4' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
