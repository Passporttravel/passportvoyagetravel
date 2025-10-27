import React, { useState } from "react";

// ENLACES (pon los tuyos reales)
const CIVITATIS_LINK = "https://www.civitatis.com/";
const VIATOR_LINK = "https://www.viator.com/";
const FACEBOOK = "https://www.facebook.com/PassportVoyageTravel";
const INSTAGRAM = "https://www.instagram.com/PassportVoyageTravel";
const TIKTOK = "https://www.tiktok.com/@PassportVoyageTravel";
const WHATSAPP = "https://wa.me/34600000000";
const EMAIL = "mailto:info@mypassporttravel.com";

// TEXTOS ES/EN
const copy = {
  es: {
    brand: "Passportvoyagetravel",
    domainHint: "Dominio recomendado: mypassporttravel.com",
    nav: { routes: "Rutas Sagradas", usa: "EE. UU. Costa Este", spain: "Norte de España", posts: "Artículos", contact: "Contacto", book: "Reservar" },
    hero: {
      kicker: "Viajes con identidad",
      title: "Explora destinos fascinantes con un toque cosmopolita",
      subtitle: "Rutas sagradas del norte de España y sur de Francia, y experiencias navideñas en Nueva York, además de escapadas por la Costa Este de Estados Unidos.",
      ctaPrimary: "Ver experiencias",
      ctaSecondary: "Habla con un asesor",
    },
    sacredRoutes: { title: "Rutas Sagradas del Norte", blurb: "Fe, cultura y paisajes: Camino de Santiago, Lourdes y Covadonga con gastronomía y patrimonio en cada etapa.", cta: "Ver circuitos" },
    spainNorth: { title: "Norte de España", subtitle: "Navarra, Asturias, Galicia, País Vasco francés, La Rioja y Aragón: naturaleza, historia y cocina atlántica.", more: "Ver detalles" },
    usaEast: { title: "Costa Este de Estados Unidos", subtitle: "Nueva York, Orlando, Miami y más. Navidad en NYC, parques temáticos y playas vibrantes.", more: "Explorar" },
    posts: { title: "Artículos y guías", more: "Leer artículo" },
    contact: { title: "¿List@ para viajar?", subtitle: "Hablamos español e inglés y conectamos con Civitatis y Viator.", bookCivitatis: "Ver en Civitatis", bookViator: "Ver en Viator", talk: "Escríbenos" },
    footer: { rights: "Todos los derechos reservados" },
  },
  en: {
    brand: "Passportvoyagetravel",
    domainHint: "Suggested domain: mypassporttravel.com",
    nav: { routes: "Sacred Routes", usa: "USA East Coast", spain: "Northern Spain", posts: "Articles", contact: "Contact", book: "Book" },
    hero: {
      kicker: "Travel with identity",
      title: "Explore remarkable places with a cosmopolitan touch",
      subtitle: "Sacred routes across Northern Spain & Southern France, Christmas in New York, and vibrant East Coast getaways.",
      ctaPrimary: "See experiences",
      ctaSecondary: "Talk to an advisor",
    },
    sacredRoutes: { title: "Sacred Routes of the North", blurb: "Faith, culture and scenery: Camino de Santiago, Lourdes and Covadonga with gastronomy and heritage along the way.", cta: "View tours" },
    spainNorth: { title: "Northern Spain", subtitle: "Navarre, Asturias, Galicia, the French Basque Country, La Rioja and Aragón: nature, history and Atlantic cuisine.", more: "Details" },
    usaEast: { title: "USA East Coast", subtitle: "New York, Orlando, Miami and more. Christmas in NYC, theme parks and vibrant beaches.", more: "Explore" },
    posts: { title: "Articles & Guides", more: "Read guide" },
    contact: { title: "Ready to go?", subtitle: "We work in Spanish & English and connect through Civitatis and Viator.", bookCivitatis: "See on Civitatis", bookViator: "See on Viator", talk: "Message us" },
    footer: { rights: "All rights reserved" },
  },
};

// DESTINOS (cámbialos cuando quieras)
  const DESTINATIONS = {
  spain: [
    {
      id: "navarra",
      name: { es: "Navarra", en: "Navarre" },
      image: "/navarra.jpg",
      desc: {
        es: "Bosques y monasterios. Pamplona, Olite y el Pirineo. Enoturismo y patrimonio románico.",
        en: "Forests and monasteries. Pamplona, Olite and the Pyrenees. Wine routes and Romanesque heritage."
      },
      sections: [
        {
          id: "baztan",
          title: { es: "Valle de Baztán", en: "Baztán Valley" },
          text: {
            es: "Cascadas, caseríos y senderos entre brumas. Elizondo como base; cuevas de Zugarramurdi cerca.",
            en: "Waterfalls, farmhouses and misty trails. Base in Elizondo; Zugarramurdi caves nearby."
          },
          image: "/baztan.jpg"
        },
        {
          id: "pamplona",
          title: { es: "Pamplona y Sanfermines", en: "Pamplona & San Fermín" },
          text: {
            es: "Casco histórico, murallas y gastronomía de barra. En julio, encierros y ambiente mundial.",
            en: "Old town, ramparts and pintxos culture. In July, world-famous bull runs."
          },
          image: "/pamplona.jpg"
        },
        {
          id: "irati",
          title: { es: "Selva de Irati", en: "Irati Forest" },
          text: {
            es: "Hayedo-abetal de referencia. Otoños dorados y rutas señalizadas.",
            en: "Renowned beech-fir forest. Golden autumns and marked trails."
          },
          image: "/irati.jpg"
        },
        {
          id: "olite",
          title: { es: "Olite y su Palacio", en: "Olite & its Palace" },
          text: {
            es: "Arquitectura palaciega y vinos D.O. Navarra.",
            en: "Fair-tale palace and Navarra D.O. wines."
          },
          image: "/olite.jpg"
        }
      ]
    },
    {
      id: "asturias",
      name: { es: "Asturias", en: "Asturias" },
      image: image: "https://raw.githubusercontent.com/Passporttravel/passportvoyagetravel/main/public/asturias.jpg",
      desc: {
        es: "Picos de Europa, Covadonga y sidra. Acantilados verdes y villas marineras.",
        en: "Picos de Europa, Covadonga and cider culture. Green cliffs and fishing towns."
      }
    },
    {
      id: "galicia",
      name: { es: "Galicia", en: "Galicia" },
      image: "/galicia.jpg",
      desc: {
        es: "Camino de Santiago, rías y faros. Marisco y tradición.",
        en: "Camino de Santiago, rías and lighthouses. Seafood and tradition."
      }
    },
    {
      id: "basque-fr",
      name: { es: "País Vasco francés", en: "French Basque Country" },
      image: "/basque-fr.jpg",
      desc: {
        es: "Biarritz y Bayona. Gastronomía atlántica y belle époque.",
        en: "Biarritz and Bayonne. Atlantic cuisine and belle époque."
      }
    },
    {
      id: "rioja",
      name: { es: "La Rioja", en: "La Rioja" },
      image: "/rioja.jpg",
      desc: {
        es: "Bodegas icónicas, arquitectura de autor y viñedos.",
        en: "Iconic wineries, signature architecture and vineyards."
      }
    },
    {
      id: "aragon",
      name: { es: "Aragón", en: "Aragon" },
      image: "/aragon.jpg",
      desc: {
        es: "Zaragoza mudéjar, Pirineo salvaje y pueblos de piedra.",
        en: "Mudejar Zaragoza, wild Pyrenees and stone villages."
      }
    }
  ],
  usa: [
    {
      id: "nyc",
      name: { es: "Nueva York", en: "New York City" },
      image: "/nyc.jpg",
      desc: {
        es: "Navidad en Rockefeller, Broadway y miradores.",
        en: "Christmas at Rockefeller, Broadway shows and observatories."
      }
    },
    {
      id: "orlando",
      name: { es: "Orlando", en: "Orlando" },
      image: "/orlando.jpg",
      desc: {
        es: "Parques temáticos y compras.",
        en: "Theme parks and shopping."
      }
    },
    {
      id: "miami",
      name: { es: "Miami", en: "Miami" },
      image: "/miami.jpg",
      desc: {
        es: "Art Deco y playas infinitas.",
        en: "Art Deco and endless beaches."
      }
    }
  ]
};
function Badge({ children }) {
  return <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur bg-white/60 border-white/30 shadow-sm">{children}</span>;
}
function SectionTitle({ overline, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {overline && <p className="uppercase tracking-widest text-xs text-neutral-500 mb-2">{overline}</p>}
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-neutral-600">{subtitle}</p>}
    </div>
  );
}
function DestinationCard({ item, lang, onOpen }) {
  return (
    <button onClick={() => onOpen(item)} className="group relative overflow-hidden rounded-2xl shadow hover:shadow-lg transition ring-1 ring-black/5 text-left">
      <img src={item.image} alt={item.name[lang]} className="h-56 w-full object-cover group-hover:scale-105 transition" />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{item.name[lang]}</h3>
        <p className="text-sm text-neutral-600 line-clamp-2">{item.desc[lang]}</p>
      </div>
    </button>
  );
}
function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-xl overflow-hidden">
        <button onClick={onClose} className="absolute right-3 top-3 rounded-full bg-neutral-100 hover:bg-neutral-200 w-9 h-9 grid place-items-center">×</button>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("es"); // Cambia a "en" si quieres empezar en inglés
  const t = copy[lang];
  // --- DIAGNÓSTICO TEMPORAL DE IMAGENES ---
// Muestra 3 intentos: (A) desde /public en Vercel, (B) desde GitHub RAW, (C) un fallback
const TEST_PUBLIC = "/asturias.jpg?v=5";
const TEST_GITHUB_RAW = "https://raw.githubusercontent.com/Passporttravel/passportvoyagetravel/main/public/asturias.jpg"; // tu repo público
const TEST_FALLBACK = "https://images.unsplash.com/photo-1558980664-10b1e1c6e0d1?q=80&w=1600&auto=format&fit=crop";

  const [openItem, setOpenItem] = useState(null);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500" />
            <div>
              <p className="font-semibold leading-tight">{t.brand}</p>
              <p className="text-[10px] text-neutral-500">{t.domainHint}</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#routes" className="hover:text-indigo-600">{t.nav.routes}</a>
            <a href="#spain" className="hover:text-indigo-600">{t.nav.spain}</a>
            <a href="#usa" className="hover:text-indigo-600">{t.nav.usa}</a>
            <a href="#posts" className="hover:text-indigo-600">{t.nav.posts}</a>
            <a href="#contact" className="hover:text-indigo-600">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="text-xs rounded-full border px-3 py-1 hover:bg-neutral-100" onClick={() => setLang(lang === "es" ? "en" : "es")} aria-label="Toggle language">
              {lang === "es" ? "EN" : "ES"}
            </button>
            <a href="#contact" className="hidden md:inline-flex items-center rounded-full bg-neutral-900 text-white text-sm px-4 py-2 hover:bg-neutral-800">
              {t.nav.book}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=2400&auto=format&fit=crop" alt="City & nature montage" className="w-full h-[62vh] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-10 md:pt-28 md:pb-16">
          <Badge>{t.hero.kicker}</Badge>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold max-w-4xl leading-tight">{t.hero.title}</h1>
          <p className="mt-4 text-neutral-700 max-w-3xl">{t.hero.subtitle}</p> {/* BLOQUE TEMPORAL DE PRUEBA (luego lo quitamos) */}
<div style={{marginTop: 12, padding: 12, background: "#fff", borderRadius: 12, boxShadow: "0 0 0 1px rgba(0,0,0,.08)"}}>
  <strong>Prueba de imágenes:</strong>
  <div style={{display: "grid", gap: 8, marginTop: 8}}>
    <div>
      <div>👉 A) /public en Vercel: <code>{TEST_PUBLIC}</code></div>
      <img src={TEST_PUBLIC} alt="test-public" style={{height: 120, objectFit: "cover", width: "100%", borderRadius: 8}} />
    </div>
    <div>
      <div>👉 B) GitHub RAW directo:</div>
      <img src={TEST_GITHUB_RAW} alt="test-raw" style={{height: 120, objectFit: "cover", width: "100%", borderRadius: 8}} />
    </div>
    <div>
      <div>👉 C) Fallback (Unsplash):</div>
      <img src={TEST_FALLBACK} alt="test-fallback" style={{height: 120, objectFit: "cover", width: "100%", borderRadius: 8}} />
    </div>
  </div>
</div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#routes" className="rounded-full bg-neutral-900 text-white px-5 py-3 text-sm hover:bg-neutral-800">{t.hero.ctaPrimary}</a>
            <a href="#contact" className="rounded-full border px-5 py-3 text-sm hover:bg-neutral-100">{t.hero.ctaSecondary}</a>
          </div>
        </div>
      </section>

      {/* RUTAS SAGRADAS */}
      <section id="routes" className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle overline={t.nav.routes} title={t.sacredRoutes.title} subtitle={t.sacredRoutes.blurb} />
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1474218861938-d6b14818c8c1?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1521109464564-2fa2faa95858?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
            ].map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl h-64">
                <img src={src} alt="Sacred route" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <a href={CIVITATIS_LINK} target="_blank" rel="noreferrer" className="rounded-full bg-neutral-900 text-white px-5 py-3 text-sm hover:bg-neutral-800">{t.sacredRoutes.cta} · Civitatis</a>
            <a href={VIATOR_LINK} target="_blank" rel="noreferrer" className="rounded-full border px-5 py-3 text-sm hover:bg-neutral-100">{t.sacredRoutes.cta} · Viator</a>
          </div>
        </div>
      </section>

      {/* NORTE DE ESPAÑA */}
      <section id="spain" className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle overline={t.nav.spain} title={t.spainNorth.title} subtitle={t.spainNorth.subtitle} />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS.spain.map((d) => (
              <DestinationCard key={d.id} item={d} lang={lang} onOpen={setOpenItem} />
            ))}
          </div>
        </div>
      </section>

      {/* USA EAST COAST */}
      <section id="usa" className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle overline={t.nav.usa} title={t.usaEast.title} subtitle={t.usaEast.subtitle} />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS.usa.map((d) => (
              <DestinationCard key={d.id} item={d} lang={lang} onOpen={setOpenItem} />
            ))}
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section id="posts" className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle overline={t.nav.posts} title={t.posts.title} />
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              { id: "post-sagrado", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop", title: { es: "El Norte Sagrado: guía rápida para tu primera ruta", en: "The Sacred North: a quick first-timer guide" }, excerpt: { es: "Cómo combinar Camino de Santiago, Covadonga y Lourdes con etapas gastronómicas y alojamientos con encanto.", en: "How to combine Santiago, Covadonga and Lourdes with foodie stages and charming stays." } },
              { id: "post-nyc", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop", title: { es: "Navidad en Nueva York: 5 momentos imprescindibles", en: "Christmas in NYC: 5 must-do moments" }, excerpt: { es: "Del árbol de Rockefeller a los mercados invernales y el patinaje nocturno.", en: "From the Rockefeller tree to winter markets and night skating." } },
            ].map((p) => (
              <article key={p.id} className="overflow-hidden rounded-2xl ring-1 ring-black/5 bg-white">
                <img src={p.image} alt="Post" className="h-56 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{p.title[lang]}</h3>
                  <p className="mt-2 text-neutral-600">{p.excerpt[lang]}</p>
                  <a href="#contact" className="mt-4 inline-block text-sm font-medium text-indigo-700 hover:underline">{t.posts.more}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-emerald-600 text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold">{t.contact.title}</h3>
              <p className="mt-2 text-white/90">{t.contact.subtitle}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={CIVITATIS_LINK} target="_blank" rel="noreferrer" className="rounded-full bg-white text-neutral-900 px-5 py-3 text-sm hover:bg-neutral-100">{t.contact.bookCivitatis}</a>
                <a href={VIATOR_LINK} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm hover:bg-white/10">{t.contact.bookViator}</a>
                <a href={EMAIL} className="rounded-full border border-white/30 px-5 py-3 text-sm hover:bg-white/10">{t.contact.talk}</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
              <a href={FACEBOOK} target="_blank" rel="noreferrer" className="rounded-2xl bg-white/10 hover:bg-white/20 p-4 text-center">Facebook</a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="rounded-2xl bg-white/10 hover:bg-white/20 p-4 text-center">Instagram</a>
              <a href={TIKTOK} target="_blank" rel="noreferrer" className="rounded-2xl bg-white/10 hover:bg-white/20 p-4 text-center">TikTok</a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-2xl bg-white/10 hover:bg-white/20 p-4 text-center">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} {t.brand}. {t.footer.rights}.</p>
          <div className="text-xs text-neutral-500"><span>ES / EN</span></div>
        </div>
      </footer>

      {/* MODAL DETALLE */}
      <Modal open={!!openItem} onClose={() => setOpenItem(null)}>
        {openItem && (
          <div className="grid md:grid-cols-2">
            <img src={openItem.image} alt={openItem.name[lang]} className="h-full w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{openItem.name[lang]}</h3>
              <p className="mt-2 text-neutral-700">{openItem.desc[lang]}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={CIVITATIS_LINK} target="_blank" rel="noreferrer" className="rounded-full bg-neutral-900 text-white px-5 py-3 text-sm hover:bg-neutral-800">{lang === "es" ? "Reservar en Civitatis" : "Book on Civitatis"}</a>
                <a href={VIATOR_LINK} target="_blank" rel="noreferrer" className="rounded-full border px-5 py-3 text-sm hover:bg-neutral-100">{lang === "es" ? "Reservar en Viator" : "Book on Viator"}</a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}


