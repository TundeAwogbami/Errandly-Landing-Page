import sendEmail from "./nodemailer";

export const sendVerification = (
  recipientEmail,
  recipientName,
  verificationLink
) => {
  const subject = "Verify Your Email Address";
  const html = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Hello ${recipientName},</h2>
        <p>Thank you for signing up with <strong>Errandly</strong>! To complete your registration, please verify your email address by clicking the link below:</p>
        
        <p style="text-align: center; margin: 20px 0;">
          <a href="${verificationLink}" 
             style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
            Verify Email
          </a>
        </p>
        
        <p>If the button above doesn’t work, you can also copy and paste the following link into your browser:</p>
        <p style="word-break: break-all;">${verificationLink}</p>
        
        <p>If you didn’t create an account with us, please disregard this email.</p>
        
        <p>Thank you, <br>Your Company Team</p>
      </div>
    `;

  sendEmail(recipientEmail, subject, html);
};
