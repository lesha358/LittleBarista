export default function WorkProcess() {
  const steps = [
    {
      title: 'Заявка',
      description: 'Оставьте заявку на сайте или свяжитесь с нами по телефону',
      icon: (
        <svg className="w-8 h-8 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: 'Расчет',
      description: 'Мы подготовим детальный расчет стоимости с учетом всех ваших пожеланий',
      icon: (
        <svg className="w-8 h-8 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Подготовка',
      description: 'Согласование деталей, подписание договора и подготовка к мероприятию',
      icon: (
        <svg className="w-8 h-8 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: 'Реализация',
      description: 'Профессиональное обслуживание вашего мероприятия нашей командой',
      icon: (
        <svg className="w-8 h-8 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="section-container section-padding gradient-section">
      <div className="container">
        <div className="section-title">
          <h2>Как мы работаем</h2>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Линия, соединяющая все этапы */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-brown-200 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col">
                <div className="card card-hover text-center relative z-10 flex-1 flex flex-col">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-brown-50 rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 flex-1">{step.description}</p>
                  </div>
                </div>
                
                {/* Стрелочка */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 z-20 transform -translate-y-1/2">
                    <div className="w-10 h-10 bg-white rounded-full border-2 border-brown-200 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                      <svg 
                        className="w-6 h-6 text-brown-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2.5" 
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 