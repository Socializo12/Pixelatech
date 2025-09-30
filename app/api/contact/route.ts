// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const { name, email, phone, message } = await req.json();

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { success: false, error: "Missing required fields" },
//         { status: 400 }
//       );
//     }
//     console.log(name, email, phone, message);
//     const data = await resend.emails.send({
//       from: "info@Pixelatech.co", // apni verified email yahan dalna
//       to: "info@Pixelatech.co", // apna recipient email yahan dalna
//       subject: `New Contact Form Submission from ${name}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone || "N/A"}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     });

// //    NEW ADDED CODE
//   return new Response(JSON.stringify({ success: true, data }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ success: false, error }), {
//       status: 500,
//     });
//   }
// }







// New Coed 
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const data = await resend.emails.send({
      from: "info@ai.Pixelatech.co", // sender tumhari domain email (verified)
      to: "info@Pixelatech.co", // 👈 Gmail inbox for receiving
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}














