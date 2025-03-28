'use client';
import { useState } from 'react';

export default function PriceExamples() {
  const [guestCount, setGuestCount] = useState(100);
  const [activeTab, setActiveTab] = useState<'order' | 'direct'>('order');
  
  const calculateOrderService = (guests: number) => {
    const coffeeMachine = 9000;
    const barista = 6500;
    const logistics = 5500;
    const coffee = 22 * guests;
    const water = 5 * guests;
    const milk = 36 * guests;
    const cups = 20 * guests;
    
    const total = coffeeMachine + barista + logistics + coffee + water + milk + cups;
    const withTax = total * 1.1;
    
    return {
      items: [
        { name: 'Аренда кофемашины', price: coffeeMachine },
        { name: 'Бариста', price: barista },
        { name: 'Логистика', price: logistics },
        { name: 'Кофе', price: coffee, note: `${22} × ${guests}` },
        { name: 'Вода', price: water, note: `${5} × ${guests}` },
        { name: 'Молоко', price: milk, note: `${36} × ${guests}` },
        { name: 'Стаканы и расходники', price: cups, note: `${20} × ${guests}` }
      ],
      total,
      withTax
    };
  };

  const orderService = calculateOrderService(guestCount);
  const directSales = {
    revenue: 200000,
    commission: { min: 20000, max: 40000 }
  };

  return (
    <section className="section-container section-padding gradient-section">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <h2>Пример расчета стоимости</h2>
        </div>

        {/* Табы */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-white/50 backdrop-blur-sm rounded-full p-1 inline-flex flex-col sm:flex-row gap-2 sm:gap-0">
            <button
              onClick={() => setActiveTab('order')}
              className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${
                activeTab === 'order'
                  ? 'bg-brown-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-brown-600'
              }`}
            >
              Заказное обслуживание
            </button>
            <button
              onClick={() => setActiveTab('direct')}
              className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${
                activeTab === 'direct'
                  ? 'bg-brown-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-brown-600'
              }`}
            >
              Прямые продажи
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Заказное обслуживание */}
          <div className={`space-y-6 ${activeTab === 'order' ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold">Заказное обслуживание</h3>
                <div className="text-left sm:text-right">
                  <span className="text-2xl sm:text-3xl font-bold text-brown-800">
                    {orderService.total.toLocaleString()} ₽
                  </span>
                  <span className="text-sm text-gray-600 block">
                    При оплате по счету: {orderService.withTax.toLocaleString()} ₽
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Количество гостей: {guestCount}
                </label>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="50"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full h-2 bg-brown-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>100</span>
                  <span>1000</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {orderService.items.map((item, index) => (
                  <div key={index} className="bg-brown-50/50 rounded-xl p-3 sm:p-4">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm sm:text-base text-gray-700 font-medium">{item.name}</span>
                      <span className="font-semibold text-sm sm:text-base">{item.price.toLocaleString()} ₽</span>
                    </div>
                    {item.note && (
                      <span className="text-xs sm:text-sm text-gray-500">{item.note}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Прямые продажи */}
          <div className={`space-y-6 ${activeTab === 'direct' ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold">Прямые продажи</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-brown-50/50 rounded-xl p-3 sm:p-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm sm:text-base text-gray-700 font-medium">Выручка</span>
                    <span className="font-semibold text-sm sm:text-base">{directSales.revenue.toLocaleString()} ₽</span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">Ожидаемая выручка с мероприятия</span>
                </div>
                <div className="bg-brown-50/50 rounded-xl p-3 sm:p-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm sm:text-base text-gray-700 font-medium">Доплата организаторам</span>
                    <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
                      {directSales.commission.min.toLocaleString()} - {directSales.commission.max.toLocaleString()} ₽
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">10-20% от выручки</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 