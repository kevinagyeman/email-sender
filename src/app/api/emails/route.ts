import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: Request) => {
  const { email, firstName } = await request.json();

  try {
    await resend.emails.send({
      from: `${process.env.RESEND_EMAIL}`,
      to: email,
      subject: "hello world",
      react: "d",
    });
  } catch (error) {
    console.error(error);
  }
};
