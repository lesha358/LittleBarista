"use client";

import { useEffect, useMemo, useState } from "react";
import { reachGoalAll } from "@/lib/analytics";

type EventType = "conference" | "corporate" | "expo" | "private" | "other";

type GuestsRange = "lt50" | "50_100" | "100_300" | "300plus";

type BarOption = "coffee" | "classic" | "soft" | "signature";

interface StepOptionProps {
  label: string;
  description?: string;
  icon?: string;
  isActive: boolean;
  onClick: () => void;
}

function StepOption({
  label,
  description,
  icon,
  isActive,
  onClick,
}: StepOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-2xl border px-4 py-3 sm:px-5 sm:py-4 transition-all flex items-start gap-3 ${
        isActive
          ? "border-amber-400 bg-amber-400/10 shadow-lg shadow-amber-500/20"
          : "border-white/10 bg-white/5 hover:border-amber-300/60 hover:bg-white/10"
      }`}
    >
      {icon && (
        <span className="mt-0.5 text-lg sm:text-xl shrink-0">{icon}</span>
      )}
      <span>
        <span className="block text-sm sm:text-base font-semibold text-amber-50">
          {label}
        </span>
        {description && (
          <span className="mt-0.5 block text-xs sm:text-sm text-amber-100/70">
            {description}
          </span>
        )}
      </span>
    </button>
  );
}

const BASE_PRICE = 25000;

function guestsToCount(range: GuestsRange): number {
  switch (range) {
    case "lt50":
      return 30;
    case "50_100":
      return 80;
    case "100_300":
      return 200;
    case "300plus":
      return 350;
    default:
      return 50;
  }
}

function barOptionsSurcharge(options: BarOption[]): number {
  let percent = 0;
  if (options.includes("coffee")) percent += 5;
  if (options.includes("classic")) percent += 10;
  if (options.includes("soft")) percent += 7;
  if (options.includes("signature")) percent += 10;
  return Math.min(percent, 30);
}

function formatPrice(value: number): string {
  const safeValue = Number.isFinite(value) ? value : BASE_PRICE + 3000;
  const rounded = Math.round(safeValue / 1000) * 1000;
  return rounded.toLocaleString("ru-RU");
}

export default function BarCalculatorQuiz() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  const [eventType, setEventType] = useState<EventType | null>(null);
  const [guests, setGuests] = useState<GuestsRange | null>(null);
  const [barOptions, setBarOptions] = useState<BarOption[]>(["coffee"]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    reachGoalAll("calc_open");
  }, []);

  useEffect(() => {
    if (!eventType && !guests && !barOptions.length) return;
    reachGoalAll("calc_use");
  }, [eventType, guests, barOptions]);

  const { approxPrice, surchargePercent, guestsCount } = useMemo(() => {
    if (!guests) {
      return {
        approxPrice: BASE_PRICE + 3000,
        surchargePercent: 0,
        guestsCount: 30,
      };
    }
    const guestsCountInner = guestsToCount(guests);
    const perGuest = 100;
    const base = BASE_PRICE + guestsCountInner * perGuest;
    const surcharge = barOptionsSurcharge(barOptions);
    const total = base * (1 + surcharge / 100);

    reachGoalAll("calc_sum", {
      guests: guestsCountInner,
      surcharge,
      total,
    });

    return {
      approxPrice: total,
      surchargePercent: surcharge,
      guestsCount: guestsCountInner,
    };
  }, [guests, barOptions]);

  const handleToggleOption = (option: BarOption) => {
    setBarOptions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const canGoNext =
    (currentStep === 1 && eventType) ||
    (currentStep === 2 && guests) ||
    (currentStep === 3 && barOptions.length > 0) ||
    currentStep >= 4;

  const goNext = () => {
    if (!canGoNext) return;
    setCurrentStep((prev) => (prev < 4 ? ((prev + 1) as 1 | 2 | 3 | 4 | 5) : prev));
  };

  const goPrev = () => {
    setCurrentStep((prev) => (prev > 1 ? ((prev - 1) as 1 | 2 | 3 | 4 | 5) : prev));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventType || !guests || barOptions.length === 0) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const { sendTelegramClient } = await import("../lib/telegram");

      const payloadLines = [
        "🎯 Онлайн‑калькулятор выездного бара",
        "",
        `Тип мероприятия: ${
          {
            conference: "Конференция / форум",
            corporate: "Корпоратив / офис",
            expo: "Выставка / промостенд",
            private: "Приватное",
            other: "Другое",
          }[eventType]
        }`,
        `Гостей: ${
          {
            lt50: "до 50",
            "50_100": "50–100",
            "100_300": "100–300",
            "300plus": "300+",
          }[guests]
        } (≈ ${guestsCount} чел.)`,
        `Наполнение бара: ${barOptions
          .map((o) => {
            switch (o) {
              case "coffee":
                return "Кофе и горячие напитки";
              case "classic":
                return "Классические коктейли";
              case "soft":
                return "Безалкогольные / лимонады";
              case "signature":
                return "Авторские под бренд";
              default:
                return "";
            }
          })
          .join(", ")}`,
        `Надбавка за наполнение: ${surchargePercent}%`,
        `Примерная стоимость: от ${formatPrice(approxPrice)} ₽ / день`,
        "",
        comment && `Комментарий клиента: ${comment}`,
      ]
        .filter(Boolean)
        .join("\n");

      const tg = await sendTelegramClient({
        name,
        phone,
        message: payloadLines,
        source: "Онлайн‑калькулятор выездного бара",
      });

      if (!tg.ok) {
        throw new Error(tg.error || "Не удалось отправить данные");
      }

      reachGoalAll("calc_submit", {
        approxPrice,
        guests: guestsCount,
      });

      setIsSubmitted(true);
      setName("");
      setPhone("");
      setComment("");
      setCurrentStep(5);
    } catch (error: any) {
      setIsSubmitted(true);
      setCurrentStep(5);
      setErrorMessage(
        error?.message ||
          "Произошла ошибка при отправке. Стоимость рассчитана, попробуйте отправить заявку ещё раз или свяжитесь с нами по телефону."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="online-calculator"
      className="container px-4 sm:px-6 lg:px-8 pb-10"
    >
      <div className="rounded-3xl border border-amber-400/40 bg-black/40 backdrop-blur-sm shadow-2xl shadow-amber-500/15 overflow-hidden">
        <div className="border-b border-amber-400/20 bg-gradient-to-r from-amber-500/20 via-yellow-400/10 to-transparent px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-amber-200/80">
              Онлайн‑калькулятор
            </p>
            <h2 className="mt-1 text-xl sm:text-2xl md:text-3xl font-semibold text-amber-50">
              Рассчитайте смету выездного бара за 1 минуту
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-100/80">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              Москва и МО • Работаем по договору • Документы для юрлиц
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] gap-6 lg:gap-8">
          {/* Левая колонка — шаги */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-100/70">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`flex-1 h-1.5 rounded-full ${
                    currentStep >= step ? "bg-amber-400" : "bg-white/10"
                  }`}
                />
              ))}
              <span className="ml-2">Шаг {Math.min(currentStep, 4)} из 4</span>
            </div>

            {currentStep === 1 && (
              <div className="space-y-3">
                <p className="text-xs sm:text-sm font-medium text-amber-200/90">
                  Шаг 1. Тип мероприятия
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <StepOption
                    label="Конференция / форум"
                    description="Форумы, митапы, саммиты, образовательные события"
                    icon="🎤"
                    isActive={eventType === "conference"}
                    onClick={() => setEventType("conference")}
                  />
                  <StepOption
                    label="Корпоратив / офис"
                    description="Корпоративы, тимбилдинги, офисные праздники"
                    icon="🏢"
                    isActive={eventType === "corporate"}
                    onClick={() => setEventType("corporate")}
                  />
                  <StepOption
                    label="Выставка / промостенд"
                    description="Стенды, промо‑стойки, презентации бренда"
                    icon="📊"
                    isActive={eventType === "expo"}
                    onClick={() => setEventType("expo")}
                  />
                  <StepOption
                    label="Приватное / другое"
                    description="Свадьбы, дни рождения, квартиры, частные вечеринки"
                    icon="🎉"
                    isActive={
                      eventType === "private" || eventType === "other"
                    }
                    onClick={() =>
                      setEventType(
                        eventType === "private" ? "other" : "private"
                      )
                    }
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-3">
                <p className="text-xs sm:text-sm font-medium text-amber-200/90">
                  Шаг 2. Количество гостей
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <StepOption
                    label="до 50"
                    description="Камерное событие"
                    icon="👥"
                    isActive={guests === "lt50"}
                    onClick={() => setGuests("lt50")}
                  />
                  <StepOption
                    label="50–100"
                    description="Средний формат"
                    icon="👨‍👩‍👧‍👦"
                    isActive={guests === "50_100"}
                    onClick={() => setGuests("50_100")}
                  />
                  <StepOption
                    label="100–300"
                    description="Большое мероприятие"
                    icon="🎪"
                    isActive={guests === "100_300"}
                    onClick={() => setGuests("100_300")}
                  />
                  <StepOption
                    label="300+"
                    description="Масштабное событие"
                    icon="🏟️"
                    isActive={guests === "300plus"}
                    onClick={() => setGuests("300plus")}
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-3">
                <p className="text-xs sm:text-sm font-medium text-amber-200/90">
                  Шаг 3. Наполнение бара
                  <span className="ml-1 text-amber-200/60">
                    (можно выбрать несколько вариантов)
                  </span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <StepOption
                    label="Кофе и горячие напитки"
                    description="Эспрессо, альтернативы, чай"
                    icon="☕"
                    isActive={barOptions.includes("coffee")}
                    onClick={() => handleToggleOption("coffee")}
                  />
                  <StepOption
                    label="Классические коктейли"
                    description="Мохито, Апероль, спритцы и др."
                    icon="🍸"
                    isActive={barOptions.includes("classic")}
                    onClick={() => handleToggleOption("classic")}
                  />
                  <StepOption
                    label="Безалкогольные / лимонады"
                    description="Моктейли, лимонады, холодные чаи"
                    icon="🍹"
                    isActive={barOptions.includes("soft")}
                    onClick={() => handleToggleOption("soft")}
                  />
                  <StepOption
                    label="Авторские под бренд"
                    description="Фирменные рецепты под вашу компанию"
                    icon="✨"
                    isActive={barOptions.includes("signature")}
                    onClick={() => handleToggleOption("signature")}
                  />
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <p className="text-xs sm:text-sm font-medium text-amber-200/90">
                  Шаг 4. Расчёт стоимости
                </p>
                <div className="rounded-2xl border border-amber-300/40 bg-black/30 p-4 sm:p-5 space-y-3 text-amber-100/90 text-sm sm:text-base">
                  <p>Мы считали примерную стоимость по формуле:</p>
                  <p className="font-mono text-xs sm:text-sm bg-black/40 rounded-lg px-3 py-2">
                    25 000 ₽ + (гости × 100–150 ₽) + надбавка за наполнение
                    0–30%
                  </p>
                  <p className="text-amber-100/80">
                    После отправки формы мы свяжемся с вами удобным способом и
                    подскажем, как оптимизировать бюджет под ваш формат
                    события.
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={goPrev}
                disabled={currentStep === 1}
                className="text-xs sm:text-sm text-amber-100/70 hover:text-amber-100 disabled:opacity-40 disabled:cursor-default flex items-center gap-1"
              >
                <span className="text-base">←</span>
                Назад
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={!canGoNext || currentStep >= 4}
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-[#0d0a08] shadow hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Далее
                <span className="text-base">→</span>
              </button>
            </div>
          </div>

          {/* Правая колонка — итог и форма */}
          <div className="space-y-4 lg:space-y-5">
            <div className="rounded-2xl border border-amber-300/40 bg-black/40 p-4 sm:p-5 space-y-3">
              <p className="text-xs sm:text-sm font-medium text-amber-200/90">
                Примерная стоимость
              </p>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-sm text-amber-200/80">
                    от{" "}
                    <span
                      id="calc-sum"
                      className="text-2xl sm:text-3xl font-semibold text-amber-200"
                    >
                      {formatPrice(approxPrice)} ₽
                    </span>{" "}
                    / день
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-amber-200/70">
                    Точная смета будет рассчитана менеджером в течение{" "}
                    <span className="font-semibold">15 минут</span>.
                  </p>
                </div>
                <div className="text-right text-xs sm:text-sm text-amber-200/70">
                  {guests && <p>≈ {guestsCount} гостей</p>}
                  {barOptions.length > 0 && (
                    <p>Надбавка за формат: {surchargePercent}%</p>
                  )}
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-amber-200/60">
                Стоимость пересчитывается в реальном времени по вашим ответам и
                носит ориентировочный характер.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-400/40 bg-black/40 p-4 sm:p-5">
              {isSubmitted ? (
                <div className="space-y-2">
                  <p className="text-lg sm:text-xl font-semibold text-emerald-300">
                    Спасибо!
                  </p>
                  <p className="text-sm sm:text-base text-amber-100/80">
                    Мы свяжемся с вами в течение 15 минут, уточним детали и
                    пришлём точную смету и варианты меню.
                  </p>
                  {errorMessage && (
                    <p className="text-xs text-red-300 mt-1">{errorMessage}</p>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <p className="text-base sm:text-lg font-semibold text-amber-50">
                    Почти готово!
                  </p>
                  <p className="text-xs sm:text-sm text-amber-100/80">
                    Оставьте контакты — мы пришлём точную смету и варианты меню
                    в течение 15 минут.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label
                        htmlFor="calc-name"
                        className="block text-xs sm:text-sm text-amber-100/80 mb-1"
                      >
                        Имя
                      </label>
                      <input
                        id="calc-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full rounded-lg border border-amber-400/40 bg-[#0f0d0b] px-3 py-2 text-sm text-amber-50 placeholder:text-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        placeholder="Иван"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="calc-phone"
                        className="block text-xs sm:text-sm text-amber-100/80 mb-1"
                      >
                        Телефон
                      </label>
                      <input
                        id="calc-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full rounded-lg border border-amber-400/40 bg-[#0f0d0b] px-3 py-2 text-sm text-amber-50 placeholder:text-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="calc-comment"
                        className="block text-xs sm:text-sm text-amber-100/80 mb-1"
                      >
                        Комментарий
                      </label>
                      <textarea
                        id="calc-comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={3}
                        className="w-full rounded-lg border border-amber-400/40 bg-[#0f0d0b] px-3 py-2 text-sm text-amber-50 placeholder:text-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                        placeholder="Формат площадки, дата, пожелания по меню"
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-red-300">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-4 py-2.5 text-sm sm:text-base font-semibold text-[#0d0a08] shadow-lg shadow-amber-500/30 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    📋 Получить точную смету за 15 минут
                  </button>

                  <p className="mt-2 text-[11px] sm:text-xs text-amber-200/60 text-center">
                    Москва и МО • Работаем по договору • Документы для юрлиц
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


