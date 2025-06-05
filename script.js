const API_KEY =
  "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";

async function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  const chatBox = document.getElementById("chat-box");

  chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
  document.getElementById("user-input").value = "";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userInput }],
    }),
  });

  const data = await response.json();
  const botReply = data.choices[0].message.content;

  chatBox.innerHTML += `<p><strong>AI:</strong> ${botReply}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}
