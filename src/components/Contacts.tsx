import Image from 'next/image';

export default function Contacts() {
  return (
    <section id="contacts" className="py-32 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка с контактами */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-brown-900 mb-4">Контакты</h2>
              <p className="text-brown-700 text-lg">Свяжитесь с нами для обсуждения деталей вашего мероприятия</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brown-900 mb-1">Телефон</h3>
                  <a href="tel:+79624429794" className="text-brown-600 hover:text-brown-700 transition-colors">
                    +7 (962) 442-97-94
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brown-900 mb-1">Email</h3>
                  <a href="mailto:Misha310@mail.ru" className="text-brown-600 hover:text-brown-700 transition-colors">
                    Misha310@mail.ru
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка с фотографией */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/contacts.jpg"
              alt="Наша команда"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 