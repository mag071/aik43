/* eslint-disable prettier/prettier */
import * as fs from 'fs';
import OpenAI from 'openai';
interface Options {
  prompt?: string;
  audioFile: Express.Multer.File;
}

export const audioToTextUseCase2 = async (openai: OpenAI, options: Options) => {
  const { prompt, audioFile } = options;
  console.log({ prompt });
  const response = await openai.audio.transcriptions.create({
    model: 'whisper-1',
    file: fs.createReadStream(audioFile.path),
    prompt: prompt, // mismo idioma del audio
    language: 'es',
    // response_format: 'vtt', // 'srt',
    //response_format: 'srt',
    response_format: 'srt',
  });

  return response;
};
