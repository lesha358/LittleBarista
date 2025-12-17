export default function WhyUs() {
  const advantages = [
    {
      title: 'Специализация',
      description: 'Растем и специализируемся только в кофейном направлении. Наш бизнес включает кофейни на мероприятия, сеть кофеен самообслуживания, кофейню TO-GO в Москве.',
      icon: (
        <svg className="w-12 h-12 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Скорость',
      description: 'Быстро рассчитаем стоимость в день обращения.',
      icon: (
        <svg className="w-12 h-12 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Персонал',
      description: 'Проверенные и опытные бариста - специалисты своего дела.',
      icon: (
        <svg className="w-12 h-12 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Опыт',
      description: 'Более трех лет в данной нише. Более 50 мероприятий в год.',
      icon: (
        <svg className="w-12 h-12 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const clients = [
    'Проект "Декларация" М.Гребенюка',
    'Ярмарка "Волшебница" на 2500 человек',
    'Правительство г. Москва (парад ретро-трамваев)',
    'Конференция крупного банка страны'
  ];

  const additionalServices = [
    'Брендирование стаканов',
    'Брендирование стойки',
    'Дополнительное оборудование',
    'Персонал'
  ];

  return (
    <section className="section-container section-padding gradient-section">
      <div className="container">
        <div className="section-title">
          <h2>Наши преимущества</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="card card-hover text-center flex flex-col items-center justify-between h-full p-6">
              <div className="flex flex-col items-center">
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          <div className="card card-hover p-6">
            <h3 className="text-2xl font-bold mb-6">Наши проекты</h3>
            <ul className="space-y-4">
              {clients.map((client, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-brown-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                  </svg>
                  {client}
                </li>
              ))}
            </ul>
          </div>

          <div className="card card-hover">
            <h3 className="text-2xl font-bold mb-6">Дополнительные услуги</h3>
            <ul className="space-y-4">
              {additionalServices.map((service, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-brown-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 