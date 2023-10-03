import fs from "fs";

export const saveImage = async (url: string, file: Blob): Promise<void> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.promises
      .writeFile(url, buffer)
      .then(() => {
        console.log("Изображение успешно сохранено");
      })
      .catch((err) => {
        console.log(`Не удалось сохранить изображение ${err}`);
      });
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Ошибка при загрузке изображения, ${err}`);
    }
  }
};
