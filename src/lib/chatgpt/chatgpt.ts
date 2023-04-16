import { ChatGPTAPI } from 'chatgpt';

import { importDynamic } from '../../util/dynamicImport';

const getChatGpt = async (): Promise<ChatGPTAPI> => {
  const { ChatGPTAPI } = await importDynamic('chatgpt');

  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY not found');
  }

  const chatgpt = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  return chatgpt;
};

export const sendMessage = async (message: string): Promise<string> => {
  try {
    const chatgpt = await getChatGpt();
    const res = await chatgpt.sendMessage(message);
    return res.text;
  } catch (error) {
    console.log(error);
    throw new Error('Error sending message');
  }
};
