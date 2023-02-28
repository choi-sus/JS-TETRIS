// DOM
const nicknameInput = document.querySelector(".nickname-input");
const sendButton = document.querySelector(".send-button");

// event handler
sendButton.addEventListener("click", () => {
  const nickname = nicknameInput.value;
  sessionStorage.setItem("nickname", nickname);
});
