import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactFormState = {
    name: string;
    email: string;
    subject?: string;
    message: string;
};

const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure = process.env.SMTP_SECURE === "true"; // true for 465, false for 587
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const contactEmail = process.env.CONTACT_EMAIL;

if (!smtpUser || !smtpPass || !contactEmail) {
    // Keep this check during development to catch missing envs early.
    console.warn("SMTP_USER, SMTP_PASS or CONTACT_EMAIL not set — email sending will fail.");
}

const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
        user: smtpUser,
        pass: smtpPass,
    },
    logger: false,
    debug: false,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
});

// Optional in dev to verify credentials (uncomment when debugging)
// transporter.verify().then(() => console.log("SMTP verified")).catch(err => console.error("SMTP verify failed", err));

function escapeHtml(unsafe: string) {
    return unsafe
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildContactEmail(payload: ContactFormState) {
    const name = escapeHtml(String(payload.name || "Unknown"));
    const email = escapeHtml(String(payload.email || ""));
    const subject = escapeHtml(String(payload.subject || "No subject"));
    const messagePlain = String(payload.message || "");
    const messageHtmlSafe = escapeHtml(messagePlain).replace(/\n/g, "<br/>");

    const mailSubject = `[Contact] ${subject}`;

    const text = [
        `Subject: ${subject}`,
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        messagePlain,
    ].join("\n");

    const html = `<!doctype html>
  <html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <style>
      @media only screen and (max-width:600px){
        .container{width:100% !important;padding:12px !important}
        .btn{width:100% !important;display:block !important}
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background:#f6f7fb;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
      New contact message from ${name} — ${subject}
    </div>

    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center" style="padding:20px 10px;">
          <table class="container" width="600" cellpadding="0" cellspacing="0" role="presentation"
                 style="width:600px;max-width:600px;background:#ffffff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.06);overflow:hidden;">
            <tr>
              <td style="padding:20px 24px;border-bottom:1px solid #eef0f6;">
                <h1 style="margin:0;font-size:20px;color:#111827;">New contact form message</h1>
                <p style="margin:8px 0 0;color:#6b7280;font-size:14px;">You received a new message via your site contact form.</p>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 24px;">
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td style="padding:6px 0;"><strong style="color:#111827;">Name:</strong> ${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;"><strong style="color:#111827;">Email:</strong> <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;"><strong style="color:#111827;">Subject:</strong> ${subject}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0 0;color:#374151;">
                      <strong style="display:block;margin-bottom:6px;color:#111827;">Message</strong>
                      <div style="background:#f8fafc;border:1px solid #eef2ff;padding:12px;border-radius:6px;color:#374151;line-height:1.4;">
                        ${messageHtmlSafe}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 24px;border-top:1px solid #eef0f6;text-align:center;">
                <a class="btn" href="mailto:${email}" style="display:inline-block;padding:10px 18px;border-radius:6px;background:#2563eb;color:#ffffff;text-decoration:none;font-weight:600;">
                  Reply to ${name}
                </a>
                <p style="margin:12px 0 0;color:#9ca3af;font-size:12px;">This message was sent from your website contact form.</p>
              </td>
            </tr>

            <tr>
              <td style="padding:12px 20px;background:#fafafa;text-align:center;color:#9ca3af;font-size:12px;">
                © ${new Date().getFullYear()} Your Company — contact form
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;

    return { subject: mailSubject, text, html };
}

export async function POST(request: NextRequest) {
    try {
        const data = (await request.json()) as ContactFormState;

        if (!data || typeof data !== "object") {
            return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
        }

        const name = String(data.name || "").trim();
        const email = String(data.email || "").trim();
        const subject = String(data.subject || "No subject").trim();
        const message = String(data.message || "").trim();

        if (!name || name.length < 2) {
            return NextResponse.json({ error: "Name is required" }, { status: 400 });
        }
        if (!email || !isValidEmail(email)) {
            return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
        }
        if (!message || message.length < 5) {
            return NextResponse.json({ error: "Message is required" }, { status: 400 });
        }
        if (!smtpUser || !smtpPass || !contactEmail) {
            return NextResponse.json({ error: "Mail server not configured" }, { status: 500 });
        }

        const {
            subject: mailSubject,
            text,
            html,
        } = buildContactEmail({ name, email, subject, message });

        const mailOptions = {
            from: smtpUser,
            to: contactEmail,
            replyTo: `${name} <${email}>`,
            subject: mailSubject,
            text,
            html,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ status: "success" }, { status: 200 });
    } catch (err) {
        console.error("Contact API error:", err);
        const isDev = process.env.NODE_ENV !== "production";
        return NextResponse.json(
            { status: "error", message: isDev ? String(err) : "Failed to send message" },
            { status: 500 }
        );
    }
}
