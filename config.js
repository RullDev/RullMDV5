//[!] Jangan Dihapus, mending ditambahin 

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
global.sig = 'https://instagram.com/Khrl7i'
global.sgh = 'github.com/RullDev' //github
global.sgc = 'https://chat.whatsapp.com/D2NUDa6vk4I6hrS176mErV' //group whatsapp
global.sdc = '-' //discord
global.syt = 'https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw'
global.snh = 'https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw' // my youtube channel

/*============== PAYMENT ==============*/
global.pdana = '6287753812675' //dana
global.povo = '-' //ovo
global.pgopay = '6287753812675' //gopay
global.plinkaja = '-' //link aja
global.ppulsa = '087753812675' //indosat
global.pgdc = 'https://chat.whatsapp.com/D2NUDa6vk4I6hrS176mErV' //group WhatsApp 
global.ppulsa2 = '087753812675' // kalau ada kartu lain isi aja
global.psaweria = 'https://saweria.com/RullZy'

/*============== NOMOR ==============*/
global.nomorbot = '6287753812675'
global.nomorown = '6287753812675'
global.namebot = '๐๐ช๐ก๐ก๐ฝ๐๐'
global.nameown = ''๐ โ ๐๐ช๐ก๐ก๐ฝ๐๐ สแดแด แดกสแดแดsแดแดแด'

/*============== APIKEY SIMPEL ==============*/
global.zenzkey = 'b8040941f7'
global.lolkey = '8e66d0934cf741bfd2182c16' // PUNYA Jarot 357d3c85079c4e0818731e6b


/*============== STAFF ==============*/
global.owner = [
  ['6287753812675', '๐๐ช๐ก๐ก๐ฝ๐๐', true],
  ['6287753812675', '๐๐ช๐ก๐ก๐ฝ๐๐', true],
  ['6287753812675', '๐๐ช๐ก๐ก๐ฝ๐๐', true],
  ['6287753812675', '๐๐ช๐ก๐ก๐ฝ๐๐', true] //Ganti jd nomormu sama Namamu
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/', 
  violetics : 'https://violetics.pw',
  ziy : 'https://ziy.herokuapp.com',
  males : 'https://malesin.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'ebb6251cc00f9c63',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'e54205a4ca2caa368cc067bb',// 8e66d0934cf741bfd2182c16
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'melcantik',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Apikeymu',
  'https://hardianto.xyz': 'hardianto',
  'https://violetics.pw': 'beta',
  'https://ziy.herokuapp.com' : 'xZiyy'
}
// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/
global.wm = '                ใ ๐๐ช๐ก๐ก๐ฝ๐๐ ใ' //Main Watermark
global.wm2 = '   ๐๐ช๐ก๐ก๐ฝ๐๐ X ยฉแตสฐสธแถปแถปหฃสธแตแตแตแต'
global.wm3 = 'โซนโซบ ๐๐ช๐ก๐ก๐ฝ๐๐ '
global.botdate = `โซนโซบ DATE: ${week} ${date}\nโซนโซบ ๐ง๐ถ๐บ๐ฒ: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
global.titlebot = `โซนโซบ WhatsApp Bot | By ๐๐ฉ ๐๐ช๐ก๐ก๐๐`
global.author = '                ใ ๐๐๐ ๐๐ถ๐ญ๐ต๐ช๐๐ฆ๐ท๐ช๐ค๐ฆ  ใใ'


/*============== LOGO ==============*/
global.thumb = 'https://telegra.ph/file/bf291b01f624b6dc01b05.jpg' //Main Thumbnail
global.imagebot = 'https://telegra.ph/file/bf291b01f624b6dc01b05.jpg'
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'
global.thumbs = ['https://telegra.ph/file/bf291b01f624b6dc01b05.jpg']
global.fla = 'https://i.ibb.co/XZrK6yQ/transformers.jpg'
global.flaaa2 = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

/*============== HENTAI ==============*/ 
//OPTIONS
global.optsnsfw = true // Untuk mematikan Dan Menyalakan Nsfw
global.premnsfw = true // Nsfw Mode Premium?


//Ini cuma simpenan owner kok :v
global.hoppai = ['https://telegra.ph/file/f34d76df4a2065af1a5ba.jpg','https://telegra.ph/file/05c1b22ee83bcd7723b4d.jpg','https://telegra.ph/file/1d886f66a44871205335f.jpg','https://telegra.ph/file/54d19a9094dc509370bf9.jpg','https://telegra.ph/file/e649475bcde78a9977ee5.jpg','https://telegra.ph/file/32ba20b6139b129c559c8.jpg','https://telegra.ph/file/948434cda49e4af5d9f11.jpg','https://telegra.ph/file/6f353c68533283fe79871.jpg','https://telegra.ph/file/de268ca9b01101acf2b8a.jpg','https://telegra.ph/file/fc6c5b2ae9a20c4256e7f.jpg', 'https://telegra.ph/file/efb70bb0988640f841742.jpg', 'https://telegra.ph/file/77d03fff530a2bcff3bf7.jpg','https://telegra.ph/file/6e4623464a659dd8d902b.jpg','https://telegra.ph/file/685aa39f0cb0f2c4fd85b.jpg','https://telegra.ph/file/10454b9ad693e1eefea58.jpg','https://telegra.ph/file/7de8ce5c290c3d8be0856.jpg','https://telegra.ph/file/8d7c4eadb7a4722747074.jpg','https://telegra.ph/file/ccc5f8eaac0f30919ef6c.jpg','https://telegra.ph/file/95f4b43439d7888f15ea5.jpg','https://telegra.ph/file/9c2a750db555bd2fad1f3.jpg', 'https://telegra.ph/file/efc5f7e637744fd6bfec2.jpg','https://telegra.ph/file/3a5231aade245665633bd.jpg','https://telegra.ph/file/2ecfc76feb26ec1eab99b.jpg','https://telegra.ph/file/dabb70983b4e833d98344.jpg','https://telegra.ph/file/75193a893e38fc580afe6.jpg','https://telegra.ph/file/217aa0f4ec76273808aa4.jpg','https://telegra.ph/file/8a35d3446b97ae22c7b23.jpg','https://telegra.ph/file/092df720701575a7ceaaa.jpg','https://telegra.ph/file/a65184a676cd648de34c3.jpg',
'https://telegra.ph/file/180e28807e78419d45537.jpg','https://telegra.ph/file/140eff27be983e0cd6781.jpg','https://telegra.ph/file/1581b791e16d0029e16b5.jpg','https://telegra.ph/file/6a4b36372b4f265bae3bc.jpg','https://telegra.ph/file/093caff422f194f00bc6c.jpg','https://telegra.ph/file/2294b7ab49eca8a8046b2.jpg','https://telegra.ph/file/869224d1c417e8b5c8ff1.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg','https://telegra.ph/file/1889878933264d16c58bf.jpg','https://telegra.ph/file/735aeb47d9c4aa87aaaf3.jpg','https://telegra.ph/file/fcf861516db09dda164e0.jpg','https://telegra.ph/file/355d96d7e06d109435f67.jpg']
global.hwaifu = ['https://telegra.ph/file/a3bd959e8cf3131be2213.jpg']
global.hyuri = ['https://telegra.ph/file/5d908f4a17515a15c6202.jpg']
global.hLokun = ['https://telegra.ph/file/8902f4fc550727a62e99f.jpg','https://telegra.ph/file/6a6a40e924c16a8f0de03.jpg', 'https://telegra.ph/file/b035d3038a0b124f1d846.jpg', 'https://telegra.ph/file/9d475f7852bf6f6193c80.jpg']
global.hloli = ['https://telegra.ph/file/872c360a7104d86752650.jpg', 'https://telegra.ph/file/f6bbb53620374257bfa51.jpg','https://telegra.ph/file/9b76375f3869440818d57.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg']
global.hneko = ['https://telegra.ph/file/805a37b1e9a963e7d7ecf.jpg', 'https://telegra.ph/file/f9c4d97477b647cf57a2b.jpg','https://telegra.ph/file/b6905b77e6c7732592a13.jpg', 'https://telegra.ph/file/9f82c432d0ba4cfffda9a.png', 'https://telegra.ph/file/484083949d4bfd763b8cf.jpg']
global.hbunny = ['https://telegra.ph/file/2b71a8d46d29351479fbc.jpg', 'https://telegra.ph/file/ae610571b62b5ab876e9c.jpg', 'https://telegra.ph/file/cc8255d5b989eef587af2.jpg','https://telegra.ph/file/30d2e7375996abd9cfee3.jpg', 'https://telegra.ph/file/78980c90c44a95a1d30fa.jpg', 'https://telegra.ph/file/2ac5d8ccf23e73eaa5bfa.jpg']
global.hbeach = ['https://telegra.ph/file/14ae0ba2da77d74e6b80c.jpg', 'https://telegra.ph/file/b6905b77e6c7732592a13.jpg','https://telegra.ph/file/9da45a352eb4c40e5d641.jpg', 'https://telegra.ph/file/59e78846ee365975ee6e3.jpg','https://telegra.ph/file/1bf7dee46b83eb4c41d7d.jpg','https://telegra.ph/file/0525a7929f819cb8278f3.jpg']

/*============== TEXT ==============*/
global.wait = '```ใโฐโฐโฐโฑโฑโฑโฑโฑโฑโฑใLoading...```'
global.eror = '```404 ๐๏ธ๐ก๏ธ๐ก๏ธ๐๏ธ๐ก๏ธ```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/537edd58e7f8849a7dc50.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '564588643' // default 10TB
global.fpagedoc = '444'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'เฌโโโโโโฉ' //top
global.dmenub = 'โโช' //body
global.dmenub2 = 'โ' //body for info cmd on Default menu
global.dmenuf = 'โโโโโโโโโโโโฆ' //footer

// COMMAND MENU
global.dashmenu = 'โโโโโ *DASHBOARD* โโโโโ'
global.cmenut = 'โโโโโโโใ' //top
global.cmenuh = 'ใโโโโโโ' //header
global.cmenub = 'โโ' //body
global.cmenuf = 'โโโโโโโโโโโโเน\n' //footer
global.cmenua = '\nโ โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ โ\n     ' //after
global.pmenus = 'โ' //pembatas menu selector

global.htki = 'โโโโโโใ' // Hiasan Titile (KIRI)
global.htka = 'ใโโโโโโ' // Hiasan Title  (KANAN)
global.lopr = 'โ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'โ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = 'โ'    //hiasan Doang :v
global.hsquere = ['โถ','โ','โซนโซบ']

/*============== STICKER WM ==============*/
global.stickpack = '๐๐ข๐ณ๐ฐ๐ต ๐๐ง๐ง๐ค'
global.stickauth = `๐๐ก๐๐ฌ๐ญ๐๐ฉ๐ฉ ๐๐จ๐ญ๐ณ`

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '๐คธโโ๏ธ',
      arc: '๐น',
      armor: '๐ฅผ',
      bank: '๐ฆ',
      bibitanggur: '๐',
      bibitapel: '๐',
      bibitjeruk: '๐',
      bibitmangga: '๐ฅญ',
      bibitpisang: '๐',
      bow: '๐น',
      bull: '๐',
      cat: '๐',
      chicken: '๐',
      common: '๐ฆ',
      cow: '๐',
      crystal: '๐ฎ',
      darkcrystal: 'โ?๏ธ',
      diamond: '๐',
      dog: '๐',
      dragon: '๐',
      elephant: '๐',
      emerald: '๐',
      exp: 'โ๏ธ',
      fishingrod: '๐ฃ',
      fox: '๐ฆ',
      gems: '๐',
      giraffe: '๐ฆ',
      gold: '๐',
      health: 'โค๏ธ',
      horse: '๐',
      intelligence: '๐ง?',
      iron: 'โ๏ธ',
      keygold: '๐',
      keyiron: '๐๏ธ',
      knife: '๐ช',
      legendary: '๐๏ธ',
      level: '๐งฌ',
      limit: '๐',
      lion: '๐ฆ',
      magicwand: 'โ๏ธ',
      mana: '๐ช',
      money: '๐ต',
      mythic: '๐ณ๏ธ',
      pet: '๐',
      petFood: '๐',
      pickaxe: 'โ๏ธ',
      pointxp: '๐ง',
      potion: '๐ฅค',
      rock: '๐ชจ',
      snake: '๐',
      stamina: 'โก',
      strength: '๐ฆนโโ๏ธ',
      string: '๐ธ๏ธ',
      superior: '๐ผ',
      sword: 'โ๏ธ',
      tiger: '๐',
      trash: '๐',
      uncommon: '๐',
      upgrader: '๐งฐ',
      wood: '๐ชต'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
