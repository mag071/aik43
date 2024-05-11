/* eslint-disable prettier/prettier */
import OpenAI from 'openai';


interface Options {
  threadId: string;
  assistantId?: string;
}



export const createRunUseCase = async( openai: OpenAI, options: Options ) => {
//asst_qr92NDNG3egmcNUIaoB6XdAv   roimar
  const { threadId, assistantId = 'asst_UposvPBcJ4MTOCrsInOldp5y' } = options;

  const run = await openai.beta.threads.runs.create( threadId, {
    assistant_id: assistantId,
    // instructions; // OJO! Sobre escribe el asistente
  });

  console.log({run});

  return run;

}