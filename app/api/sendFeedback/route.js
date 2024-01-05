import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Specify the SMTP server host
      port: 465, // Use port 465 for SSL-encrypted connections
      secure: true, // Enable SSL encryption
      auth: {
        user: "enggam729@gmail.com",
        pass: "cgoezvremvshxegu",
      },
    });

    const mailOption = {
      from: email,
      to: "enggam729@gmail.com",
      subject: "Feedback",
      html: `
        <h3>Hello Ali,</h3>
        <p><span style="font-size: 1rem; font-weight: bold;">Email:</span> ${email}</p>
        <p>${message}</p>
        `,
    };

    await transporter.sendMail(mailOption);

    // Send an automatic reply email
    const replyMailOption = {
      from: "enggam729@gmail.com",
      to: email,
      subject: "Feedback Successful",
      html: `
      <h1 style='color: #0056b3; font-weight: bold;'>Thank you for your feedback.</h1>`,
    };

    await transporter.sendMail(replyMailOption);

    return new Response(
      JSON.stringify({ message: "Email Sent Successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return new Response(JSON.stringify({ message: "Failed to Send Email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
