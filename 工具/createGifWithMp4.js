//ffmpeg -i   /home/vedio/test.mp4 -ss 1 -f image2  /home/vedio/test.img





//读取当前目录下的所有文件 递归 

// const { exec } = require('child_process');
const path = require('path')
const fs = require('fs')
// imageMagick = require("imagemagick")
const webp = require("webp-converter")
const { exec } = require('child_process')


const _rootDir = './work'
let dirs = fs.readdirSync(_rootDir)
console.log("所有目录:", dirs)

let index = -1
nextDir()

function nextDir () {
    index = index + 1
    if (index == dirs.length) {
        console.log("操作完成")
        return
    }
    let dir = dirs[index]
    if (dir != 'img2Webp.js' && dir != "node_modules"
        && dir != "package-lock.json" && dir != "package.json" && dir != "videoCompress.js" && dir != "gifCompress.js" && dir != 'createGifWithMp4.js') {
        // if (dir == '交通工具-处理完') {
        readDir(path.join(_rootDir, dir), true)
    } else {
        nextDir()
    }
}


async function readDir (dir, isTop = false) {
    let files = fs.readdirSync(dir)
    console.log("目录:", dir)
    console.log("文件列表:", files)
    for (let index = 0; index < files.length; index++) {
        let file = files[index]
        let filePath = path.join(dir, file)
        let state = fs.statSync(filePath)
        if (state.isFile()) {
            //进行压缩
            await compress(filePath, file)
        } else {
            await readDir(filePath)
        }
    }
    if (isTop) {
        nextDir()
    }
}

function compress (filePath, file) {
    console.log("compress", filePath, file)
    return new Promise((r, j) => {
        let reg = new RegExp(/.mp4$/)
        if (!reg.test(filePath)) {
            r()
        } else {

            exec(`ffmpeg -i ${filePath} ${filePath.replace(".mp4", ".gif")}`, (err, stdout, stderr) => {
                if (err) {
                    console.log("err", err)
                    return
                }
                console.log("处理完成-> 下一个")
                r()
            })
        }
    })
}






