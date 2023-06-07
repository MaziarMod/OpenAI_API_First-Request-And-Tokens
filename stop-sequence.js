const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

(async () => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Generate a list of the best movies of all time ',
    max_tokens: 200,
    stop: '11.',
  });

  const completion_text = completion.data.choices[0].text;
  console.log(completion_text);
})();
