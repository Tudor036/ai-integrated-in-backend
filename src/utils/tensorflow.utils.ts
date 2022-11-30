import tf = require("@tensorflow/tfjs-node");
import mobilenet = require('@tensorflow-models/mobilenet');
import fs = require("fs");
import path = require("path");

function readImage(imagePath: string) {
    const imageBuf = fs.readFileSync(path.resolve(`${__dirname}/../assets/img/`, imagePath));
    const image = tf.node.decodeJpeg(imageBuf);

    return image;
}

export default async function classifyImage(imagePath: string) {
    const image = readImage(imagePath);
    const mobilenetModel = await mobilenet.load(); // @ts-ignore
    const predictions = await mobilenetModel.classify(image)
    return predictions;
}