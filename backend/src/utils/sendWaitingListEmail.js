import sendEmail from "./nodemailer.js"

export const sendWaitingListEmail = (recipientEmail) => {
    const subject = "You are on the waiting list for errandly!"
    const html = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Hello,</h2>
        <p>Thank you for your interest in <strong>Errandly</strong>! We’re excited that you want to be a part of it.</p>
        
        <p>We wanted to let you know that you’ve been added to our waiting list. We’ll reach out as soon as our services becomes available. We’ll keep you updated on any changes.</p>
        
        <p>If you have any questions, feel free to reach out to us at <a href=${process.env.EMAIL_USER}>support@yourcompany.com</a>.</p>
        
        <p>Thank you again for your patience and excitement. We’ll be in touch soon!</p>
        
        <p>Best regards,<br>Errandly Team</p>
      </div>
    `
    sendEmail(recipientEmail, subject, html, process.env.EMAIL_USER)
}