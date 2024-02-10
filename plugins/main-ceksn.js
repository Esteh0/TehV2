import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')

  let user = global.db.data.users[m.sender]
  const caption = `┌  • *D A T A*
│  ◦ *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
|  ◦ *Limit:* ${user.limit}
│  ◦ *Serial Number:* ${sn}
│  ◦ *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
└────────────
`.trim()
  conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: `${global.namebot}`,
body: "Data Diri",
thumbnailUrl: "https://telegra.ph/file/a20c924a5f7e7953607aa.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: false
}}})
}

handler.help = ['ceksn']
handler.tags = ['xp']
handler.command = /^(ceksn)$/i
handler.register = false
export default handler