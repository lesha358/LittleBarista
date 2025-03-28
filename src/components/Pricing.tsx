import Calculator from './Calculator';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-brown-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-4">Примеры расчета</h2>
          <p className="text-brown-700 text-lg max-w-2xl mx-auto">
            Рассчитайте стоимость вашего мероприятия с помощью нашего калькулятора
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Calculator />
          
          {/* Прямые продажи */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-brown-900 mb-4 text-center">Прямые продажи</h3>
            
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-brown-600 mb-8 text-center">Пример расчета для мероприятия на 600 человек</p>
              
              <div className="space-y-8">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-brown-900 mb-2">Выручка с мероприятия</h4>
                  <p className="text-2xl font-bold text-brown-900">200 000 ₽</p>
                </div>

                <div className="text-center">
                  <h4 className="text-lg font-semibold text-brown-900 mb-2">Доплата организаторам</h4>
                  <p className="text-2xl font-bold text-brown-900">20 000 - 40 000 ₽</p>
                  <p className="text-brown-600">(10-20% от выручки)</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <p className="text-green-700 text-sm text-center">
                  Работаем строго по кассе! Все расчеты прозрачны и фиксируются документально.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 