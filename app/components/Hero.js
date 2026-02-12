export default function Hero() {
  return (
    <section className="h-screen bg-[url('/images/hero.jpg')] bg-cover bg-center flex items-center justify-center text-white text-center">
      <div className="bg-black/40 p-8 rounded-xl">
        <h1 className="text-5xl font-bold mb-4">Tu escape perfecto frente al mar en La Serena</h1>
        <p className="mb-6 text-lg">Descansa, desconéctate y vive la experiencia Rincón Costero</p>
        <a href="#reservas" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold">
          Reservar Ahora
        </a>
      </div>
    </section>
  );
}
