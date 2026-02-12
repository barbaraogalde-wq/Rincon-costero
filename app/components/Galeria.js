export default function Galeria() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Conoce tu próximo descanso</h2>
      <div className="grid md:grid-cols-3 gap-4 px-6">
        <img src="/images/1.jpg" className="rounded-xl" />
        <img src="/images/2.jpg" className="rounded-xl" />
        <img src="/images/3.jpg" className="rounded-xl" />
      </div>
    </section>
  );
}
