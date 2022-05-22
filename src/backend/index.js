const { ipcMain } = require("electron");

ipcMain.on("process-subtitles", (event, paths) => {
  console.log(paths);
  event.reply('process-subtitles',[
      {name: 'she', amount: 1844},
      {name: 'our', amount: 123},
      {name: 'house', amount: 43},
  ]);
});
