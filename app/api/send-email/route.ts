import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: body.email,
    to: process.env.CONTACT_EMAIL,
    subject: `Portfolio Contact Form — ${body.fullName}`,
    text: `
Name: ${body.fullName}
Email: ${body.email}
Contact: ${body.contact || "N/A"}
Message: ${body.message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    console.log("Email error:", e);
    return new Response(JSON.stringify({ error: true }), { status: 500 });
  }
}
