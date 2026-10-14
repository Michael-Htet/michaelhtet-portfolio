"use client";

// Static site, so there's no backend: the form opens the visitor's email client
// with everything pre-filled.
export default function ContactForm({ email, services }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget));
    const subject = `Project enquiry — ${f.service || "General"}`;
    const body = [
      `Name: ${f.name}`,
      `Email: ${f.email}`,
      f.phone && `Phone: ${f.phone}`,
      f.service && `Service: ${f.service}`,
      f.timeline && `Timeline: ${f.timeline}`,
      "",
      f.details,
    ]
      .filter((l) => l !== undefined && l !== "")
      .join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input name="name" placeholder="Full name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="phone" type="tel" placeholder="Phone number" />
      <select name="service" defaultValue="">
        <option value="" disabled>
          Service of interest
        </option>
        {services.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
      <input name="timeline" placeholder="Timeline" />
      <textarea name="details" placeholder="Project details..." rows={4} required />
      <div className="form__actions">
        <button type="submit" className="btn btn--outline">
          Send
        </button>
      </div>
    </form>
  );
}
