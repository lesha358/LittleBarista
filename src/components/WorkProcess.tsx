export default function WorkProcess() {
  const steps = [
    {
      title: 'Заявка',
      description: 'Вы делаете заявку на сайте или звоните нам',
      icon: (
        <svg className="w-12 h-12 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
        </svg>
      )
    },
    {
      title: 'Детали',
      description: 'Мы перезваниваем Вам, обговариваем детали, составляем договор',
      icon: (
        <svg className="w-12 h-12 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Оплата по договору',
      description: 'Вы вносите предоплату в любой удобной форме',
      icon: (
        <svg className="w-12 h-12 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Радуем кофе',
      description: 'Мы приезжаем, устанавливаем оборудование, наши бариста радуют гостей мероприятия вкусным кофе!',
      icon: (
        <svg className="w-12 h-12 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
          
          <div className="grid md:grid-cols-4 gap-8 relative">
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
                  <div className="hidden md:block absolute top-1/2 -right-4 z-20 transform -translate-y-1/2">
                    <div className="w-8 h-8 bg-white rounded-full border-2 border-brown-200 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                      <svg 
                        className="w-5 h-5 text-brown-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M9 5l7 7-7 7"
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