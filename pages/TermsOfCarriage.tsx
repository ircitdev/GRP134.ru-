
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { IconShield, IconAlert, IconTruck, IconAnchor } from '../components/Icons';

const TermsOfCarriage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 container mx-auto px-4 animate-fadeIn transition-colors">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-[var(--fluid-h2)] font-bold text-nautical dark:text-white mb-4 leading-tight tracking-tight">Условия перевозки</h1>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium text-lg">
            Правила нахождения на судне и порядок перевозки транспортных средств на паромной переправе ООО «Грузовая переправа».
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          <ScrollReveal stagger={1}>
            <div className="bg-white dark:bg-gray-800/60 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 p-8 md:p-10 transition-colors">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-xl text-blue-600 dark:text-blue-400 mr-4">
                  <IconAnchor className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-nautical dark:text-white">1. Общие правила</h2>
              </div>
              <div className="prose prose-blue dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4">
                <p>Перевозка осуществляется в соответствии с Кодексом внутреннего водного транспорта РФ и правилами перевозок пассажиров и их багажа на внутреннем водном транспорте.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Посадка и высадка пассажиров, а также въезд и выезд автотранспорта производятся только по команде экипажа.</li>
                  <li>Пассажиры обязаны соблюдать общественный порядок и правила пожарной безопасности на судне.</li>
                  <li>Нахождение на судне в состоянии алкогольного или наркотического опьянения категорически запрещено.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={2}>
            <div className="bg-white dark:bg-gray-800/60 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 p-8 md:p-10 transition-colors">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-xl text-orange-600 dark:text-orange-400 mr-4">
                  <IconTruck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-nautical dark:text-white">2. Правила для водителей</h2>
              </div>
              <div className="prose prose-blue dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4">
                <p>Водители транспортных средств при нахождении на пароме обязаны:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Заглушить двигатель, поставить транспортное средство на стояночный тормоз и включить передачу.</li>
                  <li>Обеспечить отсутствие течи топлива или масла из транспортного средства.</li>
                  <li>Высадить пассажиров из салона автомобиля перед въездом на аппарель (по требованию экипажа в целях безопасности).</li>
                  <li>Соблюдать дистанцию и интервал, указанные дежурным по погрузке.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={3}>
            <div className="bg-white dark:bg-gray-800/60 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 p-8 md:p-10 transition-colors">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-xl text-red-600 dark:text-red-400 mr-4">
                  <IconAlert className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-nautical dark:text-white">3. Запрещается</h2>
              </div>
              <div className="prose prose-blue dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Перевозка взрывоопасных, легковоспламеняющихся и токсичных веществ без специального разрешения.</li>
                  <li>Курение в неустановленных местах и бросание мусора за борт.</li>
                  <li>Самовольное открытие ворот (аппарели) судна до полной швартовки.</li>
                  <li>Загромождение проходов и доступа к спасательным средствам.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={4}>
            <div className="bg-white dark:bg-gray-800/60 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 p-8 md:p-10 transition-colors">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-xl text-green-600 dark:text-green-400 mr-4">
                  <IconShield className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-nautical dark:text-white">4. Ответственность</h2>
              </div>
              <div className="prose prose-blue dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4">
                <p>Перевозчик несет ответственность за безопасность пассажиров и сохранность принятого к перевозке груза в соответствии с действующим законодательством РФ.</p>
                <p>Пассажир/водитель несет материальную ответственность за ущерб, причиненный имуществу судна или третьим лицам вследствие нарушения настоящих правил.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-6 text-center transition-colors">
          <p className="text-nautical dark:text-blue-200 font-medium italic">
            Соблюдение данных правил — залог безопасности и комфорта вашей поездки.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfCarriage;
