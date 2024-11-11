import sendEmail from "./nodemailer.js";

export const sendContactEmail = async (userEmail, userMessage) => {
  const recipient = process.env.SUPPORT_EMAIL;
  const subject = `New Contact Message from Client`;
  const html = `
      <p><strong>From:</strong> ${"Client"} (${userEmail})</p>
      <p><strong>Message:</strong></p>
      <p>${userMessage}</p>
    `;
  await sendEmail(recipient, subject, html);

  const userConfirmationSubject = "We received your message!";
  const userConfirmationHtml = `
    <p>Hi Sir/Ma,</p>
    <p>Thank you for contacting us! We have received your message and will get back to you as soon as possible.</p>
    <p>Best regards,<br>Errandly Team</p>
  `;

  await sendEmail(userEmail, userConfirmationSubject, userConfirmationHtml);
};
