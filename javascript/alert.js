window.addEventListener("beforeunload", (e) => {
  const message = "Are you sure you want to leave?";
  e.preventDefault();
  e.returnValue = message;
  return message;
});
