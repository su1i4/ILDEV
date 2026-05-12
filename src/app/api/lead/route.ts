import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  console.log("KEY:", process.env.RESEND_API_KEY?.slice(0, 8));
  try {
    const formData = await req.formData();

    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const description = String(formData.get("description") ?? "");
    const file = formData.get("file") as File | null;

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const attachments = [];
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    const { error } = await resend.emails.send({
      from: process.env.LEAD_EMAIL_FROM!,
      to: process.env.LEAD_EMAIL_TO!,
      subject: `🔔 Новая заявка от ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; line-height: 1.6;">
          <h2>Новая заявка с сайта</h2>
          <p><b>Имя:</b> ${escapeHtml(name)}</p>
          <p><b>Телефон:</b> <a href="tel:${phone}">${escapeHtml(phone)}</a></p>
          ${description ? `<p><b>Сообщение:</b><br/>${escapeHtml(description)}</p>` : ""}
          ${file ? `<p><b>Файл:</b> ${escapeHtml(file.name)} (во вложении)</p>` : ""}
        </div>
      `,
      attachments,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Email send failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Lead API error:", e);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}