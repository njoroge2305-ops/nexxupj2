function sendMessage() {

    let input = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");

    let text = input.value.trim();

    if (text === "") return;

    let userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.innerText = text;

    chatBox.appendChild(userMessage);

    let botMessage = document.createElement("div");
    botMessage.className = "message bot";

    let reply = "";

    if (text.toLowerCase().includes("skills")) {
        reply = "My strongest skills are HTML, CSS, JavaScript and Python.";
    }
    else if (text.toLowerCase().includes("projects")) {
        reply = "I have developed portfolio websites, AI SaaS products and e-commerce systems.";
    }
    else if (text.toLowerCase().includes("contact")) {
        reply = "You can contact me through email or LinkedIn.";
    }
    else {
        reply = "Thanks for your question. You can integrate OpenAI API here for real AI responses.";
    }

    setTimeout(() => {
        botMessage.innerText = reply;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 700);

    input.value = "";
}