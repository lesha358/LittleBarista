"use client";

import { useState } from 'react';

export default function Calculator() {
  const [days, setDays] = useState(1);
  const [cups, setCups] = useState(100);
  const logistics = 5000; // Фиксированное значение

  // Расчеты
  const baristaCost = days * 6500;
  const coffeePacks = Math.ceil(cups / 100);
  const coffeeCost = coffeePacks * 4400;
  const waterBottles = Math.max(2, Math.ceil(cups / 100) + 1);
  const waterCost = waterBottles * 500;
  const consumablesCost = cups * 20;
  const milkLiters = Math.ceil(cups / 3);
  const milkCost = milkLiters * 120;

  const totalCost = baristaCost + logistics + coffeeCost + waterCost + consumablesCost + milkCost;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-brown-900 mb-6">Заказное обслуживание</h3>
      
      {/* Входные параметры */}
      <div className="space-y-8 mb-8">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-brown-700">
              Количество дней: {days}
            </label>
            <span className="text-sm font-medium text-brown-600">{days} дней</span>
          </div>
          <input
            type="range"
            min="1"
            max="7"
            value={days}
            onChange={(e) => setDays(parseInt(e.target.value))}
            className="w-full h-2 bg-brown-100 rounded-lg appearance-none cursor-pointer accent-brown-600"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-brown-700">
              Количество чашек: {cups}
            </label>
            <span className="text-sm font-medium text-brown-600">{cups} чашек</span>
          </div>
          <input
            type="range"
            min="100"
            max="1000"
            step="50"
            value={cups}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              setCups(value >= 100 ? value : 100);
            }}
            className="w-full h-2 bg-brown-100 rounded-lg appearance-none cursor-pointer accent-brown-600"
          />
        </div>
      </div>

      {/* Детали расчета */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center py-2 border-b border-brown-100">
          <span className="text-brown-700">Бариста ({days} дней)</span>
          <span className="font-semibold">{baristaCost.toLocaleString()} ₽</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-brown-100">
          <span className="text-brown-700">Кофе ({coffeePacks} пачек)</span>
          <span className="font-semibold">{coffeeCost.toLocaleString()} ₽</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-brown-100">
          <span className="text-brown-700">Вода ({waterBottles} бутылей)</span>
          <span className="font-semibold">{waterCost.toLocaleString()} ₽</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-brown-100">
          <span className="text-brown-700">Расходники ({cups} чашек)</span>
          <span className="font-semibold">{consumablesCost.toLocaleString()} ₽</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-brown-100">
          <span className="text-brown-700">Молоко ({milkLiters} л)</span>
          <span className="font-semibold">{milkCost.toLocaleString()} ₽</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-brown-100">
          <span className="text-brown-700">Логистика</span>
          <span className="font-semibold">{logistics.toLocaleString()} ₽</span>
        </div>
      </div>

      {/* Итоговая сумма */}
      <div className="bg-brown-50 rounded-xl p-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-brown-900">Итого:</span>
          <span className="text-2xl font-bold text-brown-900">{totalCost.toLocaleString()} ₽</span>
        </div>
      </div>
    </div>
  );
} 