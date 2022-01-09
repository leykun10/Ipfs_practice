

let ipfs;
document.getElementById('submit').addEventListener("click",async ()=>{
const selectedFile = document.getElementById('myFile').files[0]

const hash = await ipfs.add(selectedFile)
document.getElementById('content_identifier').hidden=false;
document.getElementById('ipfs_hash').innerText=hash['cid']
console.log(hash)
})


window.onload = async ()=>{
 ipfs = await window.IpfsCore.create()
}