export default function Beneficios() {
  const items = [
    "Ubicación privilegiada cerca de la playa",
    "Vista al mar desde el departamento",
    "Totalmente equipado",
    "Ideal para parejas y familias"
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">¿Por qué elegir Rincón Costero?</h2>
      <div className="grid md:grid-cols-4 gap-6 px-6">
        {items.map((item, i) => (
          <div key={i} className="p-6 shadow-lg rounded-xl">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
