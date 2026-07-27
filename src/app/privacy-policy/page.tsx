import type { Metadata } from "next";
import { Section, SubTitle } from "@/components/PolicySection";

export const metadata: Metadata = {
  title: "Privacy Policy — Netsafe",
  description: "Privacy Policy for the Netsafe personal safety app.",
};

const EFFECTIVE_DATE = "27 July 2026";
// TODO: replace with a real, monitored support address before this page goes live —
// left as an obvious placeholder on purpose rather than guessing a domain that may not exist.
const CONTACT_EMAIL = "netsafe@bagdja.com";

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-zinc-800">
      <h1 className="text-3xl font-bold text-zinc-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-zinc-500">Effective date: {EFFECTIVE_DATE}</p>

      <p className="mt-6 leading-7">
        Netsafe (&quot;we&quot;, &quot;us&quot;) is a personal safety app that helps you share
        check-ins, timers, and emergency alerts with people you trust (your &quot;Safety
        Network&quot;). This policy explains what information Netsafe collects, why, and who it is
        shared with.
      </p>

      <Section title="1. Information we collect">
        <SubTitle>Account information</SubTitle>
        <p>
          Email address, display name, and profile photo, obtained when you sign in through the
          Bagdja Platform identity service.
        </p>

        <SubTitle>Location data</SubTitle>
        <p>
          GPS coordinates captured when you manually check in, when the app sends an automatic
          background heartbeat (at the interval you set), during an active timer, and when you
          create or view a Safe Place. Location is the core mechanism the app uses to reassure your
          Safety Network that you are safe, or to alert them if you are not.
        </p>

        <SubTitle>Safety Network &amp; emergency data</SubTitle>
        <p>
          Who you are connected to in your Safety Network, invitations sent/received, ping
          requests, SOS alerts you send (including any optional message you attach), and
          confirmations from members responding to your SOS.
        </p>

        <SubTitle>Contact &amp; device information</SubTitle>
        <p>
          Phone number (used to match incoming emergency alerts addressed to you), device
          identifier, device model/OS info, IP address, and a push-notification token (used to
          deliver alerts to your phone).
        </p>

        <SubTitle>Purchase information</SubTitle>
        <p>
          If you buy additional Safety Network slots, Google Play processes the payment and shares
          a purchase token with us so we can verify the purchase and grant the extra slot. We do
          not receive or store your payment card details — Google Play handles that directly.
        </p>

        <SubTitle>What we do NOT collect</SubTitle>
        <p>
          Your app PIN (used to protect sending an SOS by accident) is stored only on your device
          and is never sent to our servers.
        </p>
      </Section>

      <Section title="2. How we use this information">
        <ul className="list-disc space-y-1 pl-5">
          <li>To operate the core features of the app: check-ins, timers, SOS alerts, Safety Network, and Safe Places.</li>
          <li>To notify your Safety Network if a timer expires without a check-in, or when you send an SOS.</li>
          <li>To send you push notifications about network activity (invites, pings, SOS alerts addressed to you).</li>
          <li>To verify in-app purchases and grant the corresponding entitlement.</li>
          <li>To maintain the security and reliability of the service (e.g. rate-limiting abuse, debugging failed alert delivery).</li>
        </ul>
      </Section>

      <Section title="3. Who we share information with">
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>Your Safety Network members</strong> — your check-in status, location during an active timer/SOS, and Safe Places you choose to share, are visible only to members you have explicitly connected with.</li>
          <li><strong>Service providers</strong> we use to run the app: Supabase (database and backend hosting), Google Firebase (push notifications), Google Play Billing (in-app purchases), and the Bagdja Platform identity service (sign-in).</li>
          <li>We do not sell your personal information to third parties.</li>
        </ul>
      </Section>

      <Section title="4. Data retention">
        <p>
          We retain your account and activity data for as long as your account is active. Heartbeat
          and check-in history is used to power the in-app history view and may be retained for a
          limited period for that purpose. You can request deletion of your account and associated
          data at any time (see Section 6).
        </p>
      </Section>

      <Section title="5. Security">
        <p>
          We use industry-standard measures (encrypted connections, access controls, row-level
          database security policies) to protect your information. No method of transmission or
          storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="6. Your rights">
        <p>
          You can review and update most of your information from within the app (Menu → Account).
          To request access to or correction of your data, contact us at{" "}
          <a className="text-blue-600 underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          To request deletion of your account and associated data, see our{" "}
          <a className="text-blue-600 underline" href="/delete-account">Account &amp; Data Deletion</a> page.
        </p>
      </Section>

      <Section title="7. Children's privacy">
        <p>
          Netsafe is not directed at children under 13, and we do not knowingly collect information
          from children under 13. If you believe a child has provided us with personal information,
          contact us and we will remove it.
        </p>
      </Section>

      <Section title="8. Changes to this policy">
        <p>
          We may update this policy from time to time. Material changes will be reflected by
          updating the effective date above.
        </p>
      </Section>

      <Section title="9. Contact us">
        <p>
          Questions about this policy or your data can be sent to{" "}
          <a className="text-blue-600 underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </Section>
    </main>
  );
}
