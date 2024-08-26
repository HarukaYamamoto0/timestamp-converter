const resultButtonGetCurrentTimestamp = document.getElementById(
  "result-button-get-current-timestamp"
);
const timestampInput = document.getElementById(
  "input-convert-timestamp-to-date"
);
const resultButtonConvertTimestampToDate = document.getElementById(
  "result-button-convert-timestamp-to-date"
);

function getCurrentTimestamp() {
  return Math.floor(Date.now() / 1000);
}

function convertTimestampToDate(timestamp) {
  const date = new Date(parseInt(timestamp || timestampInput.value) * 1000);
  const localizedDate = date
    .toLocaleString("sv", { timeZoneName: "short" })
    .replace(",", "");
  return localizedDate;
}

const resultButtons = document.querySelectorAll(".result-button");

resultButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = button.querySelector(".result-text").textContent;
    copyTextToClipboard(result);
  });
});

function copyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

setInterval(() => {
  const currentTimestamp = getCurrentTimestamp();
  resultButtonGetCurrentTimestamp.textContent = currentTimestamp;

  if (timestampInput.value == "") {
    resultButtonConvertTimestampToDate.textContent = convertTimestampToDate(
      getCurrentTimestamp()
    );
  }
}, 1000);
