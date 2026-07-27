import type { Metadata } from "next";
import { Section } from "@/components/PolicySection";

export const metadata: Metadata = {
  title: "Account & Data Deletion — Netsafe",
  description: "How to request deletion of your Netsafe account and associated data.",
};

// Keep in sync with privacy-policy/page.tsx's CONTACT_EMAIL.
const CONTACT_EMAIL = "netsafe@bagdja.com";
const MAILTO_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Netsafe account deletion request",
)}&body=${encodeURIComponent(
  "Please delete my Netsafe account and associated data.\n\nAccount email: <the email you sign in with>\n",
)}`;

export default function DeleteAccountPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-zinc-800">
      <h1 className="text-3xl font-bold text-zinc-900">Account &amp; Data Deletion</h1>

      <p className="mt-6 leading-7">
        You can request deletion of your Netsafe account and the data associated with it at any
        time — you do not need to have the app installed to make this request.
      </p>

      <Section title="How to request deletion">
        <p>
          Send an email to{" "}
          <a className="text-blue-600 underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" "}
          from the email address you use to sign in to Netsafe, asking us to delete your account.
          Or use this pre-filled link:
        </p>
        <p>
          <a
            className="inline-block rounded-md bg-zinc-900 px-4 py-2 text-white no-underline"
            href={MAILTO_HREF}
          >
            Request account deletion
          </a>
        </p>
        <p className="text-sm text-zinc-500">
          We may ask you to confirm your identity before processing the request, so that no one
          else can delete your account on your behalf.
        </p>
      </Section>

      <Section title="What gets deleted">
        <ul className="list-disc space-y-1 pl-5">
          <li>Your profile (name, email, avatar, phone number)</li>
          <li>Your Safety Network connections and pending invitations</li>
          <li>Your timers and heartbeat/check-in history</li>
          <li>Your Safe Places and any places shared with you</li>
          <li>Your SOS event history</li>
          <li>Your push-notification token</li>
        </ul>
      </Section>

      <Section title="What may be retained, and why">
        <p>
          If you purchased additional Safety Network slots, we may retain a record of that
          transaction (not your payment card details, which Google Play handles) for a limited
          period as required for financial record-keeping. Data that other Safety Network members
          hold about interactions with you (e.g. an SOS alert you sent them) is retained under
          their own account unless they separately request its deletion.
        </p>
      </Section>

      <Section title="Timeframe">
        <p>
          We aim to process deletion requests within 30 days. This is currently a manual process
          handled by the Netsafe team, not an automated one — if it is taking longer than expected,
          feel free to follow up at the same email address.
        </p>
      </Section>
    </main>
  );
}
