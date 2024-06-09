 
let handler = async (m, { conn }) => {

m.reply(`
≡  *${botName}ᴮᴼᵀ ┃ SUPPORT*

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Canal
${fgcanal}

▢ Grupo *1*
${bgp}

▢ Grupo *2*
${bgp2}

▢ Grupo *NSFW* 🔞
${bgp3}

▢ 𝐌𝐘 - 𝐌𝐚𝐲𝐥𝐮𝐱 | ᴮᴼᵀ⚡
https://chat.whatsapp.com/G2i7LNcN9z2GHttX2pFfV4

▢ 📲💻ANDROID WORLD🎬🎮
https://chat.whatsapp.com/Ly4I2LObSvW8VgOnJjofgA

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ *Telegram*
• https://t.me/
 ▢ *PayPal*
• https://paypal.me/alinafis2005
▢ *YouTube*
• https://www.youtube.com/aliali`)

}
handler.help = ['support']
handler.tags = ['main']
handler.command = ['grupos', 'groups', 'support'] 

export default handler
