import { Configuration, OpenAIApi } from "azure-openai";
import * as dotenv from "dotenv";
import config from "./config";
import createContext from "./context/context";
import { Context } from "./models/context";
dotenv.config();

export default class ChatGPT {
  private openai: OpenAIApi;
  private context: Context[];
  constructor() {
    const configuration = new Configuration({
      apiKey: config.apiKey,
      azure: {
        apiKey: config.apiKey,
        endpoint: config.endpoint,
        deploymentName: config.model,
      },
    });
    this.context = createContext();
    this.openai = new OpenAIApi(configuration);
  }

  public ask = async (question: string) => {
    try {
      this.context.push({
        content: question,
        role: "user",
      });
      const response = await this.openai.createChatCompletion({
        model: "model-gpt-test",
        messages: this.context,
        n: 1,
        max_tokens: 800,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      const [choice] = response.data.choices;
      return choice.message!;
    } catch (e) {
      console.error(e);
      throw new Error("Error during use of chatgpt");
    }
  };
}
