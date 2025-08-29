import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6287865843362', 'Joshy', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6287865843362'
global.packname = 'anu - MD by'
global.author = '© Xyroinee'
global.namebot = '​anu - MD'
global.wm = '© anu By Joshy'
global.stickpack = 'anu - MD by'
global.stickauth = '© Joshy'
global.fotonya = 'https://telegra.ph/file/83b522fd80b660705d1cd.jpg'
// Link Sosmed
global.sig = ''
global.sgh = ''
global.sgc = ''
// Donasi
global.psaweria = ''
global.ptrakterr = ''
global.povo = ''
// Info Wait
global.wait = 'Sedang Di Proses, Mohon Tunggu....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'b3923d4b'
global.rose = 'b3923d4b'
global.xyro = 'b3923d4b'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/Apikey/
global.APIKeys = {
    "https://api.xyroinee.xyz": "b3923d4b",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
})

