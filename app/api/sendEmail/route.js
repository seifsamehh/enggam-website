import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const {
      firstname,
      lastname,
      email,
      phone,
      products,
      price,
      payment,
      message,
    } = await request.json();

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
      subject: "Order Details",
      html: `
        <h3>Hello Ali,</h3>
        <div style="padding: 20px; border-radius: 5px;">
          <p><span style="font-size: 1rem; font-weight: bold;">First Name:</span> ${firstname}</p>
          <p><span style="font-size: 1rem; font-weight: bold;">Last Name:</span> ${lastname}</p>
          <p><span style="font-size: 1rem; font-weight: bold;">Email:</span>${email}</p>
          <p><span style="font-size: 1rem; font-weight: bold;">Phone:</span> ${phone}</p>
          <p><span style="font-size: 1rem; font-weight: bold;">Products:</span> ${products}</p>
          <p><span style="font-size: 1rem; font-weight: bold;">Price:</span> ${price}</p>
          <p><span style="font-size: 1rem; font-weight: bold;">Payment Method:</span> ${payment}</p>
          <p><span style="font-size: 1rem; font-weight: bold;">Message:</span> ${message}</p>
        </div>
        `,
    };

    await transporter.sendMail(mailOption);

    // Send an automatic reply email
    const replyMailOption = {
      from: "enggam729@gmail.com",
      to: email,
      subject: "Order Successful",
      html: `
      <h1 style='color: #0056b3; font-weight: bold;'>Thank you for your order. We will process it shortly.</h1>`,
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
