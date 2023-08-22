//ffmpeg -i   /home/vedio/test.mp4 -ss 1 -f image2  /home/vedio/test.img

//读取当前目录下的所有文件 递归 

// const { exec } = require('child_process');
const path = require('path')
const fs = require('fs')
// imageMagick = require("imagemagick")
const sharp = require('sharp')
const { exec } = require('child_process')


const _rootDir = './work'
let dirs = fs.readdirSync(_rootDir)
console.log("所有目录:", dirs)

let index = -1

let output = {}
nextDir()

function nextDir () {
  index = index + 1
  if (index == dirs.length) {
    console.log("操作完成")
    return
  }
  let dir = dirs[index]
  if (![
    "node_modules", "package-lock.json", "package.json", "videoCompress.js", "gifCompress.js", "createGifWithMp4.js", "img2Webp.js", "imgCompress.js", "changeName.js",
  ].includes(dir)) {
    readDir(path.join(_rootDir, dir), true)
  }
  else {
    nextDir()
  }
}


async function readDir (dir, isTop = false) {
  let files = fs.readdirSync(dir)
  console.log("目录:", dir)
  console.log("文件列表:", files)
  output[
    dir.replace(/\\/g, '-')
  ] = files
  // 写进output.json
  fs.writeFileSync('./output/output.json', JSON.stringify(output))


  for (let index = 0; index < files.length; index++) {
    let file = files[index]
    let filePath = path.join(dir, file)
    let state = fs.statSync(filePath)//获取文件信息
    if (state.isFile()) {

    } else {
      await readDir(filePath)
    }
  }
  if (isTop) {
    nextDir()
  }
}







