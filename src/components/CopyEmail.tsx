import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

type Props = {
  email: string;
};

export default function CopyEmail({ email }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: mailto
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm font-medium text-[var(--text)] transition hover:border-emerald-400/40"
    >
      {copied ? <Check size={16} aria-hidden className="text-emerald-300" /> : <Copy size={16} aria-hidden />}
      {copied ? 'Copied' : 'Copy email address'}
    </button>
  );
}