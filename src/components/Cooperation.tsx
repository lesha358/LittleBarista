export default function Cooperation() {
  return (
    <section className="section-container section-padding gradient-section">
      <div className="container">
        <div className="section-title">
          <h2>Варианты сотрудничества</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <div className="card card-hover">
            <div className="flex items-center mb-6">
              <span className="text-5xl font-bold text-brown-600 mr-4">1</span>
              <h3 className="text-2xl font-bold">Заказное обслуживание</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Заранее оплачиваются все расходы. Гости наслаждаются вкусным продуктом
            </p>
          </div>
          
          <div className="card card-hover">
            <div className="flex items-center mb-6">
              <span className="text-5xl font-bold text-brown-600 mr-4">2</span>
              <h3 className="text-2xl font-bold">Прямые продажи</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Устанавливаем выездную кофейню с едой и напитками на мероприятии. 
              Оплачиваем фиксированную сумму либо процент от выручки
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="card card-hover">
            <h3 className="text-2xl font-bold mb-4">Долгосрочное сотрудничество</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              С площадками, организаторами мероприятий и ивент-агентствами - условия обсуждаются индивидуально
            </p>
          </div>

          <div className="card card-hover">
            <h3 className="text-2xl font-bold mb-4">Дополнительные услуги</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Аренда оборудования, отдельная работа персонала
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 