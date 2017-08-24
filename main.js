'use strict'
const { spawn } = require('child_process');
//electron process
const child = spawn(require('electron'), 
                    ['./src/electron/index.js'], 
                    {stdio:['ipc']});
//
child.on("message", (m) => {
    console.log(`接收到的消息：${m.a}`)
});
//
child.on('close', (code, signal) => {
    console.log(`程序已退出：${signal}`);
});