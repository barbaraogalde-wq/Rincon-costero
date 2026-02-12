export default function Ubicacion() {
  return (
    <section className="py-16 text-center bg-white">
      <h2 className="text-3xl font-bold mb-6">Ubicación privilegiada</h2>
      <iframe
        src="https://www.google.com/maps/embed?..."
        className="w-full h-96 rounded-xl"
        loading="lazy"
      ></iframe>
    </section>
  );
}
