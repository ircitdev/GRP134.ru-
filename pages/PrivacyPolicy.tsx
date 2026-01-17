
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-16 md:py-24 container mx-auto px-4 animate-fadeIn transition-colors">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-[var(--fluid-h2)] font-black text-nautical dark:text-white mb-4 leading-tight tracking-tight">Политика конфиденциальности</h1>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </ScrollReveal>

        <div className="bg-white dark:bg-gray-800/60 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 p-8 md:p-12 prose prose-blue dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 transition-colors">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-nautical dark:text-white mb-4">1. Общие положения</h2>
            <p className="leading-relaxed mb-4">
              Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных ООО «Грузовая переправа» (далее — Оператор).
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных.</li>
              <li>Настоящая политика Оператора в отношении обработки персональных данных применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта <span className="font-semibold text-blue-600 dark:text-blue-400">https://grp34.ru</span>.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-nautical dark:text-white mb-4">2. Реквизиты оператора</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/30 transition-colors">
              <p className="font-bold text-nautical dark:text-blue-200 mb-2">ООО «Грузовая переправа»</p>
              <p className="mb-1"><span className="font-semibold">ОГРН:</span> 1153443009345</p>
              <p className="mb-1"><span className="font-semibold">ИНН:</span> 3461056233</p>
              <p><span className="font-semibold">Адрес:</span> 403870, Волгоградская обл., г. Камышин, ул. Нижняя, д.1, пом. 8</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-nautical dark:text-white mb-4">3. Какие данные мы собираем</h2>
            <p className="mb-4">Оператор может обрабатывать следующие персональные данные Пользователя:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Фамилия, имя, отчество;</li>
              <li>Номер телефона;</li>
              <li>Адрес электронной почты;</li>
              <li>Обезличенные данные о посетителях (в т.ч. файлы «cookie») с помощью сервисов интернет-статистики.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-nautical dark:text-white mb-4">4. Цели обработки персональных данных</h2>
            <p className="mb-4">Цель обработки персональных данных Пользователя:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Информирование Пользователя посредством отправки электронных писем или звонков;</li>
              <li>Заключение, исполнение и прекращение гражданско-правовых договоров;</li>
              <li>Предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на веб-сайте.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-nautical dark:text-white mb-4">5. Срок обработки</h2>
            <p>
              Обработка персональных данных осуществляется на неограниченный срок. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на адрес <a href="mailto:info@grp34.ru" className="text-blue-600 dark:text-blue-400 hover:underline">info@grp34.ru</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nautical dark:text-white mb-4">6. Заключительные положения</h2>
            <p>
              Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm italic">Последнее обновление: {new Date().toLocaleDateString('ru-RU')}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
