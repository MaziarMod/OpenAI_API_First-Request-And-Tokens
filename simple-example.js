const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

(async () => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Say this is a test',
  });

  const completion_text = completion.data.choices[0].text;
  console.log(completion_text);
})();
