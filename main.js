'use strict'
const { spawn } = require('child_process');
//electron process
const child = spawn(require('electron'), 
                    ['./src/electron/index.js'], 
                    {stdio:['ipc']});
//接收electron子进程发过来的消息
child.on("message", (m) => {
    console.log(`接收到的消息：${m.a}`)
});
//监听进程是否关闭
child.on('close', (code, signal) => {
    console.log(`程序已退出：${signal}`);
});