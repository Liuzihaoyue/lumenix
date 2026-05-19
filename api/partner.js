const RECIPIENT_EMAIL = "contact@lumenix.live";

function clean(value) {
  return String(value || "").trim();
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function textRow(label, value) {
  return `${label}: ${value || "-"}`;
}

function htmlRow(label, value) {
  return `<p><strong>${label}:</strong> ${escapeHtml(value || "-")}</p>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const fullName = clean(request.body?.fullName);
  const email = clean(request.body?.email);
  const messagingContact = clean(request.body?.messagingContact);
  const marketRegion = clean(request.body?.marketRegion);
  const partnershipType = clean(request.body?.partnershipType);
  const message = clean(request.body?.message);

  if (!fullName || !email || !marketRegion || !partnershipType) {
    return response.status(400).json({ error: "Please complete all required fields." });
  }

  if (!isEmail(email)) {
    return response.status(400).json({ error: "Please enter a valid email address." });
  }

  if (!process.env.RESEND_API_KEY) {
    return response.status(503).json({
      error: "Email delivery is not configured yet. Please email contact@lumenix.live directly.",
    });
  }

  const subject = `New Lumenix partnership inquiry from ${fullName}`;
  const rows = [
    ["Full Name", fullName],
    ["Email", email],
    ["Messaging Contact", messagingContact],
    ["Market / Region", marketRegion],
    ["Partnership Type", partnershipType],
    ["Message", message],
  ];

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.MAIL_FROM || "Lumenix Website <onboarding@resend.dev>",
      to: RECIPIENT_EMAIL,
      reply_to: email,
      subject,
      text: rows.map(([label, value]) => textRow(label, value)).join("\n"),
      html: rows.map(([label, value]) => htmlRow(label, value)).join(""),
    }),
  });

  const result = await resendResponse.json().catch(() => ({}));

  if (!resendResponse.ok) {
    return response.status(502).json({
      error: result.message || "Email delivery failed. Please email contact@lumenix.live directly.",
    });
  }

  return response.status(200).json({ ok: true });
}
