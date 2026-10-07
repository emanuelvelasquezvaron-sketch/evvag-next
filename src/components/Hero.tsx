import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-neutral-50/50 py-12 lg:py-20 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Columna Izquierda: Contenido Editorial */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Tag / Badge en vivo */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1 text-xs font-semibold tracking-wider text-neutral-800 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>ARCHIVE 2026 // MANIFIESTO VISUAL</span>
            </div>

            {/* Título Principal */}
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white leading-[1.1]">
              SILUETAS Y MATERIA <br />
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 bg-clip-text text-transparent dark:from-white dark:via-neutral-300 dark:to-neutral-500">
                LO AUTÉNTICO SE NOTA.
              </span>
            </h1>

            {/* Descripción */}
            <p className="mt-6 max-w-2xl text-base text-neutral-600 sm:text-lg dark:text-neutral-400 font-light leading-relaxed">
              Objetos esenciales y piezas seleccionadas desde la pureza de la forma y la precisión técnica.
              Una exploración entre la arquitectura del diseño y la indumentaria contemporánea en Colombia.
            </p>

            {/* Botones de Acción */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#catalogo"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                <span>Explorar Colección</span>
                <svg className="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="#confianza"
                className="inline-flex items-center rounded-full border border-neutral-300 bg-transparent px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-neutral-800 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
              >
                Manifiesto de Marca
              </Link>
            </div>

            {/* Fila de Confianza Editorial */}
            <div className="mt-12 grid grid-cols-1 gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-3 dark:border-neutral-800">
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div className="text-xs">
                  <strong className="block font-semibold text-neutral-900 dark:text-white">Curaduría Auténtica</strong>
                  <span className="text-neutral-500 dark:text-neutral-400">Garantía de origen y diseño</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                <div className="text-xs">
                  <strong className="block font-semibold text-neutral-900 dark:text-white">Despacho Nacional</strong>
                  <span className="text-neutral-500 dark:text-neutral-400">Envíos rápidos asegurados</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div className="text-xs">
                  <strong className="block font-semibold text-neutral-900 dark:text-white">Atención de Estudio</strong>
                  <span className="text-neutral-500 dark:text-neutral-400">Acompañamiento directo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Composición Visual */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl bg-neutral-100 shadow-2xl lg:max-w-none dark:bg-neutral-900">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop"
                  alt="Colección EVVAG Siluetas y Materia Contemporánea"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/80 p-4 backdrop-blur-md dark:border-neutral-700/50 dark:bg-neutral-950/80">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" />
                  <span className="text-[11px] font-bold tracking-wider text-neutral-900 uppercase dark:text-white">
                    Colección Permanente
                  </span>
                </div>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  Piezas de confección y diseño seleccionadas con despacho asegurado a toda Colombia.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}