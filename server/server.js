import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import OpenAIApi from 'openai';
import cors from 'cors';
import { log } from 'console';

config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const openAi = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY,
    organizationId: process.env.ORG,
});

async function generateResponseFromOpenAI(inputText) {
  try {
    const response = await openAi.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'system', content: 'You are a legal advisor bot.' }, { role: 'user', content: inputText }],
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating response:', error.message);
    throw new Error('An error occurred while generating the response.');
  }
}

app.get('/', (req, res) => {
  res.send('Server is ONN');
});

app.get('/generate-response', (req, res) => {
  res.send('Server is ONN');
});

app.post('/generate-response', async (req, res) => {
  let inputText = req.body.inputText;
 
  inputText = inputText + "Give the response of the said query as a legal advisor bot (for india).If you think that the query is serious tell them to find contact to a laywer from the find laywer option. The answer should be strictly under 150 words";

  try {
    const openaiResponse = await generateResponseFromOpenAI(inputText);
    res.json({ response: openaiResponse });
  } catch (error) {
    console.error('Error generating response:', error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while generating the response.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
