import { tiktok } from '../lib/tiktok.js'

let handler = async(m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) return m.reply(`Masukan URL!\n\nContoh:\n${usedPrefix + command} https://vt.tiktok.com/ZS8oHC5Ka/`)
    if (!/^http(s)?:\/\/(www|v(t|m)).tiktok.com\/[-a-zA-Z0-9@:%._+~#=]/i.test(args[0])) return m.reply('Invalid urls')
    await m.reply('_In Progress Please Wait..._\n_Note: Fitur ini berbasis vn_')
    let { music, duration} = await tiktok(args[0])
    if (music.length > 2049) return m.reply('File too large, please download it by your own way via this URL: ' + music)
    conn.sendFile(m.chat, music, 'tiktok.mp3', `*Title:* ${duration}\n*Size:* ${music.length / 1024 / 1024} MB` , m)

}

handler.help = ['tiktokaudio']
handler.tags = ['downloader']
handler.command = /^(tta|tiktokaudio)$/i
handler.limit = true
export default handler