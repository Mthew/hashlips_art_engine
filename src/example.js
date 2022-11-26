const canvasGif = require("canvas-gif");
const fs = require("fs");
const path = require("path");

const options = {};


const callBack = (context, width, height, totalFrames, currentFrame) => {
  // Edit the frame
  if (currentFrame !== totalFrames) {
    console.log(`CALL CALBACK ${totalFrames} ${currentFrame}`);
    return;
  }
  
  console.log("Calback :ingres callback");
  context.fillStyle = "#FFA500";
  context.font = '30px "Fira Code Retina"';
  context.fillText("Edited by Eze!", 40, 80);
};

console.log("INICIA");
fs.readFile(path.join(__dirname, "../layers/BgGIF/bg10#9.gif"), (err, data) => {
  if (err) {
    console.log("ERROR");
    throw err;
  } // Fail if the file can't be read.

  console.log("LEE LA IMAGEN");
  var oldData = data;

  console.log("inicia la conversion a base 64");
  let str = data.toString("base64");

  console.log("INICIA CREACION DE BUFFER");
  data = Buffer.from(str, "base64");

  console.log("INICIA EL CANVAS");
  canvasGif(data, callBack, options)
    .then((buffer) =>
      fs.writeFileSync(path.resolve(__dirname, "output1.gif"), buffer)
    )
    .catch((error) => {
      console.log("ERROR", error);
    });
});
