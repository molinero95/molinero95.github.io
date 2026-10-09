import { ads } from './config.mjs';
export function startAds() {
  if (!ads.enabled || !ads.certifiedCmpConfigured || !ads.privacyPolicyReady || !/^ca-pub-\d{16}$/.test(ads.publisher) || !/^\d+$/.test(ads.slot)) return;
  const container = document.querySelector('#ad-space');
  container.hidden = false;
  const label = document.createElement('span'); label.textContent = 'Publicidad';
  const unit = document.createElement('ins'); unit.className = 'adsbygoogle';
  Object.assign(unit.dataset, { adClient: ads.publisher, adSlot: ads.slot, adFormat: 'auto', fullWidthResponsive: 'true' });
  unit.style.display = 'block'; container.replaceChildren(label, unit);
  const src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ads.publisher}`;
  if (!Array.from(document.scripts).some(script => script.src === src)) {
    const script = document.createElement('script'); script.async = true; script.crossOrigin = 'anonymous';
    script.src = src; document.head.append(script);
  }
  // Google's async queue works whether the account script is still loading or ready.
  (window.adsbygoogle = window.adsbygoogle || []).push({});
  document.querySelector('#ad-privacy').hidden = false;
}
