export const handleWspMessage = () => {
  const phone = "+549111111111";
  const message = "Hola, me comunico del gimnasio X";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url);
};
export const handleEmailMessage = () => {
  const recipient = "destinatario@example.com";
  const subject = "Asunto";
  const body = "Hola, me comunico del gimnasio X";
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};
