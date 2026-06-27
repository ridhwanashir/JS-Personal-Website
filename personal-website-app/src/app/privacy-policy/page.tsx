import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Ridhwan Nashir — explains what data is collected, how it is used, and your rights.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'June 27, 2026';
  const ownerName = 'Ridhwan Nashir';
  const ownerEmail = 'ridhwannashir@gmail.com';
  const websiteUrl = 'https://ridhwanashir.my.id';

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-10">
          <a
            href="/"
            className="text-sm text-blue-600 hover:underline mb-6 inline-block"
          >
            ← Back to Home
          </a>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </header>

        {/* Introduction */}
        <Section title="1. Introduction">
          <p>
            This Privacy Policy describes how {ownerName} (&quot;I&quot;, &quot;me&quot;, or
            &quot;my&quot;) collects, uses, and protects information in connection with the
            website <a href={websiteUrl} className="text-blue-600 hover:underline">{websiteUrl}</a>{' '}
            and any associated applications or services (collectively, the &quot;Service&quot;).
          </p>
          <p className="mt-3">
            By using the Service you agree to the practices described in this Privacy Policy.
            If you do not agree, please discontinue use of the Service.
          </p>
        </Section>

        {/* Information Collected */}
        <Section title="2. Information I Collect">
          <p className="mb-3">
            I collect only the minimum information necessary to operate and improve the Service:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Usage data</strong> — browser type, pages visited, time spent, and
              referring URL, collected automatically via standard web server logs or
              analytics tools. This data is anonymous and aggregated.
            </li>
            <li>
              <strong>Contact information</strong> — name and email address that you
              voluntarily provide when submitting the contact form.
            </li>
            <li>
              <strong>Google account information</strong> — if you sign in or authorize
              access through a Google OAuth flow, I receive only the scopes you explicitly
              approve (e.g., your email address and public profile). I do not request
              access to your Gmail, Drive, or any other Google product beyond what is
              required for the stated feature.
            </li>
          </ul>
          <p className="mt-3">
            I do <strong>not</strong> sell, rent, or trade any personal information to
            third parties.
          </p>
        </Section>

        {/* How Information Is Used */}
        <Section title="3. How I Use Your Information">
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to messages or inquiries you send me.</li>
            <li>To understand how visitors use the Service so I can improve it.</li>
            <li>
              To enable features that require authentication via Google OAuth (limited
              strictly to the approved scopes).
            </li>
            <li>To comply with applicable legal obligations.</li>
          </ul>
        </Section>

        {/* Google API Services */}
        <Section title="4. Google API Services — Limited Use Disclosure">
          <p>
            The Service&apos;s use of information received from Google APIs adheres to the{' '}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
          <p className="mt-3">
            Specifically:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              Google user data is used only to provide or improve user-facing features
              that are visible in the Service&apos;s user interface.
            </li>
            <li>
              Google user data is never transferred to third parties except as necessary
              to provide or improve the stated features, comply with applicable law, or
              as part of a merger or acquisition where users are notified in advance.
            </li>
            <li>
              Google user data is never used for serving advertisements.
            </li>
            <li>
              Google user data is never used for training machine-learning or AI models
              outside of the feature for which the data was originally collected.
            </li>
          </ul>
        </Section>

        {/* Data Retention */}
        <Section title="5. Data Retention">
          <p>
            Contact form submissions are retained only as long as necessary to respond to
            your inquiry and for a reasonable period thereafter. Anonymous usage data may
            be retained for up to 12 months. You may request deletion of your data at any
            time by contacting me (see Section 9).
          </p>
        </Section>

        {/* Cookies */}
        <Section title="6. Cookies and Tracking Technologies">
          <p>
            The Service may use cookies or similar technologies for session management and
            to gather anonymous analytics. You can configure your browser to refuse cookies;
            however, some features of the Service may not function correctly if cookies are
            disabled.
          </p>
          <p className="mt-3">
            I do not use third-party advertising cookies or cross-site tracking.
          </p>
        </Section>

        {/* Third-Party Services */}
        <Section title="7. Third-Party Services">
          <p>
            The Service may embed links to external websites or use third-party services
            (e.g., analytics providers, hosting platforms). These third parties have their
            own privacy policies and I am not responsible for their practices. I encourage
            you to review their policies before providing any information.
          </p>
        </Section>

        {/* Security */}
        <Section title="8. Security">
          <p>
            I implement reasonable technical and organizational measures to protect your
            information against unauthorized access, alteration, disclosure, or destruction.
            However, no method of transmission over the Internet is 100% secure, and I
            cannot guarantee absolute security.
          </p>
        </Section>

        {/* Your Rights */}
        <Section title="9. Your Rights and Choices">
          <p className="mb-3">
            Depending on your location, you may have the following rights regarding your
            personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access</strong> — request a copy of data I hold about you.</li>
            <li><strong>Correction</strong> — request correction of inaccurate data.</li>
            <li><strong>Deletion</strong> — request erasure of your data.</li>
            <li>
              <strong>Revoke Google authorization</strong> — you can revoke any Google
              OAuth permissions at any time via{' '}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Google Account Permissions
              </a>
              .
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact me at{' '}
            <a href={`mailto:${ownerEmail}`} className="text-blue-600 hover:underline">
              {ownerEmail}
            </a>
            .
          </p>
        </Section>

        {/* Children */}
        <Section title="10. Children's Privacy">
          <p>
            The Service is not directed at children under the age of 13. I do not
            knowingly collect personal information from children. If you believe a child
            has provided me with personal information, please contact me and I will
            promptly delete it.
          </p>
        </Section>

        {/* Changes */}
        <Section title="11. Changes to This Policy">
          <p>
            I may update this Privacy Policy from time to time. The &quot;Last updated&quot;
            date at the top of this page will reflect any changes. Continued use of the
            Service after any changes constitutes acceptance of the revised policy.
          </p>
        </Section>

        {/* Contact */}
        <Section title="12. Contact">
          <p>
            If you have any questions or concerns about this Privacy Policy, please
            contact me:
          </p>
          <address className="mt-3 not-italic space-y-1 text-gray-700">
            <p><strong>{ownerName}</strong></p>
            <p>
              Email:{' '}
              <a href={`mailto:${ownerEmail}`} className="text-blue-600 hover:underline">
                {ownerEmail}
              </a>
            </p>
            <p>
              Website:{' '}
              <a href={websiteUrl} className="text-blue-600 hover:underline">
                {websiteUrl}
              </a>
            </p>
          </address>
        </Section>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed text-sm">{children}</div>
    </section>
  );
}
