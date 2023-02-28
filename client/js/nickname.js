// DOM
const nicknameInput = document.querySelector(".nickname-input");
const sendButton = document.querySelector(".send-button");

// event handler
nicknameInput.addEventListener(
  "keyup",
  (event) => (sendButton.disabled = event.target.value ? false : true)
);

sendButton.addEventListener("click", () => {
  const nickname = nicknameInput.value;
  sessionStorage.setItem("nickname", nickname);
});
