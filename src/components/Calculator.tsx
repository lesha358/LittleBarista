"use client";

import { useState } from 'react';

type CalculatorVariant = 'light' | 'dark';

type CalculatorProps = {
  variant?: CalculatorVariant;
};

export default function Calculator({ variant = 'light' }: CalculatorProps) {
  const [days, setDays] = useState(1);
  const [cups, setCups] = useState(100);
  const logistics = 5000; // Фиксированное значение

  const baristaCost = days * 6500;
  const coffeePacks = Math.ceil(cups / 100);
  const coffeeCost = coffeePacks * 4400;
  const waterBottles = Math.max(2, Math.ceil(cups / 100) + 1);
  const waterCost = waterBottles * 500;
  const consumablesCost = cups * 20;
  const milkLiters = Math.ceil(cups / 3);
  const milkCost = milkLiters * 120;

  const totalCost = baristaCost + logistics + coffeeCost + waterCost + consumablesCost + milkCost;

  const isDark = variant === 'dark';

  const shell = isDark
    ? 'rounded-[28px] border border-[#7b5230]/35 bg-[linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.02)),linear-gradient(180deg,rgba(29,19,14,.96),rgba(15,10,8,.98))] p-6 shadow-[0_18px_40px_rgba(0,0,0,.28)] sm:p-8'
    : 'bg-white rounded-2xl shadow-lg p-8';

  const title = isDark
    ? 'text-2xl font-semibold text-[#f5e8d3] mb-6'
    : 'text-2xl font-bold text-brown-900 mb-6';

  const label = isDark ? 'text-sm font-medium text-[#d4b896]' : 'text-sm font-medium text-brown-700';
  const valueHint = isDark ? 'text-sm font-medium text-[#b89a72]' : 'text-sm font-medium text-brown-600';
  const range = isDark
    ? 'w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/10 accent-[#d4a574]'
    : 'w-full h-2 bg-brown-100 rounded-lg appearance-none cursor-pointer accent-brown-600';

  const rowBorder = isDark ? 'border-b border-white/10' : 'border-b border-brown-100';
  const rowLabel = isDark ? 'text-[#c7a679]' : 'text-brown-700';
  const rowAmount = isDark ? 'font-semibold text-[#f5e8d3]' : 'font-semibold';

  const totalBox = isDark
    ? 'rounded-xl border border-[#7b5230]/40 bg-black/25 p-4'
    : 'bg-brown-50 rounded-xl p-4';

  const totalLabel = isDark ? 'text-lg font-semibold text-[#f5e8d3]' : 'text-lg font-semibold text-brown-900';
  const totalValue = isDark ? 'text-2xl font-bold text-[#f0dcc0]' : 'text-2xl font-bold text-brown-900';

  return (
    <div className={shell}>
      <h3 className={title}>Заказное обслуживание</h3>

      <div className="space-y-8 mb-8">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className={label}>
              Количество дней: {days}
            </label>
            <span className={valueHint}>{days} дней</span>
          </div>
          <input
            type="range"
            min="1"
            max="7"
            value={days}
            onChange={(e) => setDays(parseInt(e.target.value))}
            className={range}
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className={label}>
              Количество чашек: {cups}
            </label>
            <span className={valueHint}>{cups} чашек</span>
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
            className={range}
          />
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className={`flex justify-between items-center py-2 ${rowBorder}`}>
          <span className={rowLabel}>Бариста ({days} дней)</span>
          <span className={rowAmount}>{baristaCost.toLocaleString()} ₽</span>
        </div>
        <div className={`flex justify-between items-center py-2 ${rowBorder}`}>
          <span className={rowLabel}>Кофе ({coffeePacks} пачек)</span>
          <span className={rowAmount}>{coffeeCost.toLocaleString()} ₽</span>
        </div>
        <div className={`flex justify-between items-center py-2 ${rowBorder}`}>
          <span className={rowLabel}>Вода ({waterBottles} бутылей)</span>
          <span className={rowAmount}>{waterCost.toLocaleString()} ₽</span>
        </div>
        <div className={`flex justify-between items-center py-2 ${rowBorder}`}>
          <span className={rowLabel}>Расходники ({cups} чашек)</span>
          <span className={rowAmount}>{consumablesCost.toLocaleString()} ₽</span>
        </div>
        <div className={`flex justify-between items-center py-2 ${rowBorder}`}>
          <span className={rowLabel}>Молоко ({milkLiters} л)</span>
          <span className={rowAmount}>{milkCost.toLocaleString()} ₽</span>
        </div>
        <div className={`flex justify-between items-center py-2 ${rowBorder}`}>
          <span className={rowLabel}>Логистика</span>
          <span className={rowAmount}>{logistics.toLocaleString()} ₽</span>
        </div>
      </div>

      <div className={totalBox}>
        <div className="flex justify-between items-center">
          <span className={totalLabel}>Итого:</span>
          <span className={totalValue}>{totalCost.toLocaleString()} ₽</span>
        </div>
      </div>
    </div>
  );
}
