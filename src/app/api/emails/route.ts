import Email from "emails";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async () => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "kevinagyemann@gmail.com",
    subject: "hello world",
    react: Email(),
  });
};
