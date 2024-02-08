import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
 ]

let { key } = await conn.sendMessage(m.chat, {text: '*Sabar Beb*'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
pengalihan isu
`;
 conn.sendMessage(m.chat, {
      text: 'ᴀᴍ ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ sʏsᴛᴇᴍ ᴡʜᴀᴛsᴀᴘᴘ sɪx 𝟶.𝟸 ʙᴏᴛ ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴘ ᴛᴏ ᴅᴏ sᴏᴍᴇᴛʜɪɴɢ. sᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ ɪɴғᴏʀᴍᴀsɪ ᴏɴʟʏ ᴛʜʀᴏᴜɢʜ ᴡʜᴀᴛsᴀᴘᴘ\n\n ➦ *.ᴀʟʟᴍᴇɴᴜ* (semua fitur)',
      gifPlayback: true,
      contextInfo: {
      externalAdReply: {
      title: `sɪx 𝟶.𝟸`,
      body: global.author,
      thumbnailUrl: 'https://ik.imagekit.io/lui/2024-01-06_04_01_36__0000_UTC',
      sourceUrl: `usaha sendiri, kau kira bikin bot gampang apa? `,
      mediaType: 1,
      renderLargerThumbnail: false
      }}})
}
handler.command = /^(menu|helo|help)$/i;

export default handler;