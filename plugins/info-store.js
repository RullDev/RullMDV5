let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '15'
let info = `

*โซนโซบ Halo Kak Welcome Store Oscar*
 โซนโซบ ๐๐ฆ๐ฎ๐ฆ๐ฏ๐ต๐ข๐ณ๐ข ๐๐ต๐ฐ๐ณ๐ฆ ๐๐ด๐ค๐ข๐ณ-๐๐ฅ ๐ฉ๐ข๐ฏ๐บ๐ข ๐ช๐ฏ๐ช
 โซนโซบ Di Jamin Amanah kok
`
const sections = [
   {
	title: `โซนโซบ  Store Oscar`,
	rows: [
	    {title: "๐ TutorJadibot", rowId: '.order *Paket:* TutorJadibot', description: 'Tutor Jadibot/belajar ngebot' },
	    {title: "โฝ NORMAL", rowId: '.order *Paket:* NORMAL โข Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	]
    }, {
    title: `โซนโซบ Suport Store Oscar-Md`,
	rows: [
	   {title: "๐ฎDonasi", rowId: ".donasi"},
	  {title: "๐ Iklan Oscar-Md", rowId: ".sosialmedia"},
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "๐ Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['store']
handler.tags = ['main']
handler.command = /^(store(oscar)?|storeoscar)$/i

export default handler
