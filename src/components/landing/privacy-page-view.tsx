"use client";

import { ContactModalProvider } from "./contact-modal";
import { Footer } from "./footer";
import { LangProvider } from "./lang-provider";
import { MouseGlow } from "./mouse-glow";
import { Nav } from "./nav";
import { Privacy } from "./sections/privacy";

/**
 * Client root for the Privacy page. Reuses the same providers, nav, glow and
 * footer as the landing page so the look + behaviour stay consistent.
 */
export function PrivacyPageView() {
  return (
    <LangProvider>
      <ContactModalProvider>
        <MouseGlow />
        <Nav />
        <main id="top">
          <Privacy />
        </main>
        <Footer />
      </ContactModalProvider>
    </LangProvider>
  );
}
