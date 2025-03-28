'use client';

export default function PriceExamples() {
  const orderServiceItems = [
    { name: 'Аренда кофемашины', price: 9000 },
    { name: 'Бариста', price: 6500 },
    { name: 'Логистика', price: 5500 },
    { name: 'Кофе', price: 4400, note: '2200 × 2' },
    { name: 'Вода', price: 1000, note: '2 × 500' },
    { name: 'Молоко', price: 3600 },
    { name: 'Стаканы и расходники', price: 2000, note: '100 × 20' }
  ];

  const orderServiceTotal = orderServiceItems.reduce((sum, item) => sum + item.price, 0);
  const orderServiceWithTax = orderServiceTotal * 1.1;

  const directSalesExample = {
    guests: 600,
    revenue: 200000,
    commission: { min: 20000, max: 40000 }
  };

  return (
    <section className="section-container section-padding gradient-section">
      <div className="container">
        <div className="section-title mb-8">
          <h2>Примеры расчета</h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Мы предлагаем прозрачные цены и гибкие условия сотрудничества
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Заказное обслуживание */}
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-brown-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-1">Заказное обслуживание</h3>
              <p className="text-sm text-gray-600">Расчет на 100 человек</p>
            </div>

            <div className="space-y-3 flex-grow">
              {orderServiceItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div>
                    <span className="text-sm font-medium">{item.name}</span>
                    {item.note && (
                      <span className="text-xs text-gray-500 ml-2">({item.note})</span>
                    )}
                  </div>
                  <span className="text-sm font-medium">{item.price.toLocaleString()} ₽</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-sm">Итого:</span>
                <span className="font-bold text-lg">{orderServiceTotal.toLocaleString()} ₽</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>При оплате по счету (+10%):</span>
                <span>{orderServiceWithTax.toLocaleString()} ₽</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700 text-center">
                У нас все прозрачно! Каждый пункт расчета можно обсудить и скорректировать под ваши потребности.
              </p>
            </div>
          </div>

          {/* Прямые продажи */}
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-brown-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-1">Прямые продажи</h3>
              <p className="text-sm text-gray-600">Пример расчета для мероприятия на {directSalesExample.guests} человек</p>
            </div>

            <div className="space-y-3 flex-grow">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium">Выручка с мероприятия</span>
                <span className="text-sm font-medium">{directSalesExample.revenue.toLocaleString()} ₽</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium">Доплата организаторам</span>
                <span className="text-sm font-medium">
                  {directSalesExample.commission.min.toLocaleString()} - {directSalesExample.commission.max.toLocaleString()} ₽
                </span>
              </div>
              <div className="text-xs text-gray-500">
                (10-20% от выручки)
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700 text-center">
                Работаем строго по кассе! Все расчеты прозрачны и фиксируются документально.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 