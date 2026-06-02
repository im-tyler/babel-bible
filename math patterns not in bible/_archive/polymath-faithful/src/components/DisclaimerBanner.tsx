import styles from "./DisclaimerBanner.module.css";

/** Standing banner for pages whose content is unproven / post-hoc / metaphysical. */
export default function DisclaimerBanner({ children }: { children?: unknown }) {
  return (
    <div class={styles.banner} role="note">
      <span class={styles.mark} aria-hidden="true" />
      <div>
        {children ?? (
          <>
            <strong>Unverified claims.</strong> Everything below is presented per Grant's framework. It is not
            established science, and several statements are demonstrably false or unprovable. We reproduce it
            so it can be examined, clearly labelled — not endorsed.
          </>
        )}
      </div>
    </div>
  );
}
