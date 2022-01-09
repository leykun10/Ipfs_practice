const IPFS = require('ipfs-core')
const fs = require('fs')
async function name(){
let file
fs.readFile('website/index.html',async (err, data)=> {
    const ipfs =  await IPFS.create()
    const {cid} = await ipfs.add(data)
    console.log(cid)
})




}
name()
