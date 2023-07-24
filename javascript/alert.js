window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  const message = "Are you sure you want to leave?";
  e.returnValue = message;
  return message;
});
