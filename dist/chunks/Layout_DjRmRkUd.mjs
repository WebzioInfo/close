import { c as createComponent, a as addAttribute, r as renderTemplate, d as createAstro, m as maybeRenderHead, b as renderComponent, e as renderHead, f as renderSlot } from './astro/server_h6W8EYBe.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/siinaan/Desktop/close-1/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { label: "Learner", href: "/#learner", id: "learner" },
    { label: "Practice", href: "/#practice", id: "practice" },
    { label: "Projects", href: "/#projects", id: "projects" },
    { label: "Notes", href: "/#notes", id: "notes" },
    { label: "Office", href: "/#office", id: "office" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 inset-x-0 z-50 pointer-events-none w-full pt-3 sm:pt-5 px-4 sm:px-8 lg:px-12 transition-all duration-300" data-astro-cid-pux6a34n> <div class="max-w-[1400px] mx-auto bg-white border border-neutral-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-full h-12 sm:h-14 px-4 sm:px-6 flex items-center justify-between pointer-events-auto transition-all duration-300" data-astro-cid-pux6a34n> <!-- Left: Close Wordmark Signature --> <a href="/" class="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-black/20 rounded-full transition-opacity hover:opacity-80 shrink-0" aria-label="Close — Home" data-astro-cid-pux6a34n> <span class="font-display text-xs sm:text-sm font-semibold tracking-tight text-neutral-900 leading-none uppercase" data-astro-cid-pux6a34n>
CLOSE COMMUNICATIONS
</span> </a> <!-- Center: Desktop Navigation --> <nav class="hidden md:flex items-center gap-1" aria-label="Main Navigation" data-astro-cid-pux6a34n> ${navLinks.map((link, i) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(link.id, "data-nav-id")}${addAttribute(`nav-pill-item text-[13px] font-sans font-medium rounded-full px-3.5 py-1.5 transition-all duration-200 ${i === 0 ? "is-active" : "text-neutral-700 hover:text-black hover:bg-neutral-100/70"}`, "class")} data-astro-cid-pux6a34n> ${link.label} </a>`)} </nav> <!-- Center: Mobile Navigation --> <nav class="flex md:hidden items-center gap-0.5 max-w-[160px] overflow-x-auto scrollbar-none" aria-label="Mobile Navigation" data-astro-cid-pux6a34n> ${navLinks.map((link, i) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(link.id, "data-nav-id")}${addAttribute(`nav-pill-item text-[11px] font-sans font-medium whitespace-nowrap rounded-full px-2.5 py-1 transition-all duration-200 ${i === 0 ? "is-active" : "text-neutral-700 hover:text-black"}`, "class")} data-astro-cid-pux6a34n> ${link.label} </a>`)} </nav> <!-- Right: Location Indicator --> <div class="flex items-center gap-2 font-mono text-[11px] text-neutral-600 uppercase tracking-wider shrink-0" data-astro-cid-pux6a34n> <span class="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-slow-pulse" data-astro-cid-pux6a34n></span> <span class="hidden sm:inline" data-astro-cid-pux6a34n>Calicut</span> </div> </div> </header>  `;
}, "C:/Users/siinaan/Desktop/close-1/src/components/Navigation.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="w-full border-t border-brand-border/30 bg-brand-black px-6 sm:px-10 lg:px-16 py-14 sm:py-20"> <div class="max-w-[1400px] mx-auto"> <!-- Top row --> <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14"> <!-- Wordmark + tagline --> <div class="lg:col-span-4"> <div class="flex items-center gap-2.5 mb-3"> <span class="w-1.5 h-1.5 bg-white"></span> <span class="font-display text-lg font-semibold tracking-tight text-white">Close</span> </div> <p class="font-sans text-xs text-neutral-500 leading-relaxed max-w-xs">
A quiet branding practice rooted in observation, learning, and thoughtful communication.
</p> </div> <!-- Navigation --> <div class="lg:col-span-4"> <span class="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-4">Navigation</span> <div class="space-y-2"> <a href="/#learner" class="block font-sans text-sm text-neutral-400 hover:text-white transition-colors">Learner</a> <a href="/#practice" class="block font-sans text-sm text-neutral-400 hover:text-white transition-colors">Practice</a> <a href="/#projects" class="block font-sans text-sm text-neutral-400 hover:text-white transition-colors">Projects</a> <a href="/#notes" class="block font-sans text-sm text-neutral-400 hover:text-white transition-colors">Notes</a> <a href="/#office" class="block font-sans text-sm text-neutral-400 hover:text-white transition-colors">Office</a> </div> </div> <!-- Contact --> <div class="lg:col-span-4"> <span class="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-4">Contact</span> <div class="space-y-2"> <a href="mailto:hello@closecommunications.com" class="block font-sans text-sm text-neutral-400 hover:text-white transition-colors">hello@closecommunications.com</a> <span class="block font-sans text-xs text-neutral-500">Calicut, Kerala, India</span> </div> <div class="flex items-center gap-4 mt-4"> <a href="#" class="font-mono text-[10px] text-neutral-500 hover:text-white transition-colors uppercase tracking-widest">Instagram</a> <a href="#" class="font-mono text-[10px] text-neutral-500 hover:text-white transition-colors uppercase tracking-widest">LinkedIn</a> </div> </div> </div> <!-- Bottom row --> <div class="border-t border-brand-border/20 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"> <span class="font-mono text-[10px] text-neutral-600 tracking-wider">
&copy; ${currentYear} Close Communications. All rights reserved.
</span> <span class="font-mono text-[10px] text-neutral-600 tracking-wider">
Designed with quiet intention.
</span> </div> </div> </footer>`;
}, "C:/Users/siinaan/Desktop/close-1/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Close \u2014 Branding Practice",
    description = "Close is a quiet branding practice built around observation, learning, and thoughtful communication. Calicut, Kerala.",
    image = "/logo.jpg"
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site || "https://closecommunications.com");
  return renderTemplate`<html lang="en" class="bg-brand-black text-brand-light antialiased selection:bg-white selection:text-black scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#050505"><meta name="color-scheme" content="dark"><link rel="canonical"${addAttribute(canonicalURL, "href")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/logo.jpg"><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, canonicalURL), "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, canonicalURL), "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-brand-black text-brand-light font-sans min-h-screen flex flex-col antialiased"> <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black font-mono text-xs uppercase tracking-widest">
Skip to main content
</a> ${renderComponent($$result, "Navigation", $$Navigation, {})} <main id="main-content" class="flex-grow w-full"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/Users/siinaan/Desktop/close-1/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
