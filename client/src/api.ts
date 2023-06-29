import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

export default class Api {
  public static ask = async (question: string): Promise<string> => {
    return (await axios.post('/ask', { question })).data
  }
}
