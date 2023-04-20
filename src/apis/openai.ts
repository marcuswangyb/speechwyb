export default async function sendRequest(
  messages: string[],
  openaiApiKey: string,
  openaiHost: string,
  callback: (data: any) => void
) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: messages,
    }),
  };
  console.log("json:");
  console.log(JSON.stringify({model: 'gpt-3.5-turbo',messages: messages}));

  const chatHostAddress = import.meta.env.DEV?
    'remote':
    'https://www.wybstudio.net';

  console.log("mode:",import.meta.env.MODE)

  fetch(chatHostAddress + '/api/speech/chat', requestOptions)
    .then(response => response.json())
    .then(data => {
      callback(data);
    })
    .catch(err => {
      return err;
    });
}
