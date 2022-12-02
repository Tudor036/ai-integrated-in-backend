import fs from "fs";
import createHttpError from "http-errors";

// interface imageInfoInterface {
//     fieldname: string,
//     originalname: string,
//     encoding: string,
//     mimetype: string,
//     destination: string,
//     filename: string,
//     path: string,
//     size: number
// }

export async function saveImageInFileSystem(imageInfo: any) {
    if (imageInfo === undefined) {
        return console.log("No file was sent");
    } else {
        try {
            fs.renameSync(imageInfo.path, `${imageInfo.path}.jpg`);
        } catch (err) {
            return console.error(err);
        }

        console.log('File renamed successfully!');
    }
}

export function deleteImageFromFileSystem(imageInfo: any) {
    if (imageInfo === undefined) {
        return console.log("No file was sent");
    } else {
        fs.stat(`${imageInfo.path}.jpg`, (err) => {
            if (err) {
                return console.log(err);
            }

            fs.unlink(`${imageInfo.path}.jpg`, (err) => {
                if (err) {
                    return console.log(err);
                }

                return console.log('File deleted successfully!');
            })
        })
    }
}