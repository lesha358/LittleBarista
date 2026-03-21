export default function Advantages() {
  const advantages = [
    {
      title: 'Качество',
      description: 'Профессиональное оборудование и отборные сорта кофе'
    },
    {
      title: 'Скорость',
      description: 'Быстрое обслуживание и подготовка к мероприятию'
    },
    {
      title: 'Опыт',
      description: 'Более 50 мероприятий в год и сотни довольных клиентов'
    },
    {
      title: 'Гибкость',
      description: 'Индивидуальный подход к каждому мероприятию'
    }
  ];

  return (
    <section className="section-container section-padding gradient-section">
      <div className="container">
        <div className="section-title">
          <h2>Наши преимущества</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-brown-800">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 