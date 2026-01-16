
import React, { useState } from 'react';
import { CONTACT_PHONES, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import { 
  IconLocation, 
  IconPhone, 
  IconUser, 
  IconMail, 
  IconCheck, 
  IconArrowLeft, 
  IconSend, 
  IconAlert, 
  IconShield 
} from '../components/Icons';

const Contacts: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Form states
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{name?: string, message?: string, phone?: string}>({});

  // Phone mask helper
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    // Handle the leading 7 or 8
    if (value.length > 0) {
      if (value[0] === '8' || value[0] === '7') {
        value = value.substring(1);
      }
    }

    let formatted = '+7';
    if (value.length > 0) {
      formatted += ' (' + value.substring(0, 3);
    }
    if (value.length >= 4) {
      formatted += ') ' + value.substring(3, 6);
    }
    if (value.length >= 7) {
      formatted += '-' + value.substring(6, 8);
    }
    if (value.length >= 9) {
      formatted += '-' + value.substring(8, 10);
    }
    
    // Limit to the max length of +7 (XXX) XXX-XX-XX
    if (value.length <= 10) {
      setPhone(formatted === '+7' && e.target.value === '' ? '' : formatted);
    }
    
    // Clear phone error on change if it exists
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    
    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') as string).trim();
    const message = (formData.get('message') as string).trim();
    
    // Validation
    const newErrors: {name?: string, message?: string, phone?: string} = {};
    
    if (!name) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }
    
    if (!message) {
      newErrors.message = 'Пожалуйста, напишите ваш вопрос';
    }

    // Phone validation: must be not empty and must be full length (+7 (XXX) XXX-XX-XX = 18 chars)
    if (!phone || phone === '+7') {
      newErrors.phone = 'Пожалуйста, введите номер телефона';
    } else if (phone.length < 18) {
      newErrors.phone = 'Введите номер полностью';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    const text = `<b>🚢 Новая заявка с сайта grp34.ru</b>\n\n` +
                 `<b>Имя:</b> ${name}\n` +
                 `<b>Телефон:</b> ${phone}\n` +
                 `<b>Вопрос:</b>\n${message}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: text, parse_mode: 'HTML' }),
      });
      if (!response.ok) throw new Error('Ошибка при отправке');
      setIsSubmitted(true);
      setPhone('');
    } catch (error) {
      setErrorMessage('Не удалось отправить сообщение. Пожалуйста, попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-16 md:py-24 container mx-auto px-4 animate-fadeIn transition-colors duration-300">
      <div className="text-center mb-16">
        <h1 className="text-[var(--fluid-h2)] font-black text-nautical dark:text-white mb-4 tracking-tight leading-tight">Контакты ООО «Грузовая переправа»</h1>
        <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-700 dark:text-gray-400 max-w-2xl mx-auto font-medium">
          Свяжитесь с нами для уточнения графика работы или стоимости перевозки.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-6xl mx-auto">
        <ScrollReveal className="h-full">
          <div className="bg-white/70 dark:bg-gray-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-white dark:border-white/5 h-full flex flex-col">
            <address className="not-italic space-y-10 flex-grow">
              <div className="flex items-start group">
                <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 p-4 rounded-2xl mr-6 shadow-sm group-hover:scale-110 transition-transform">
                  <IconLocation className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-gray-400 dark:text-gray-500 uppercase text-[10px] tracking-[0.2em] mb-2">Адрес офиса</h4>
                  <p className="text-nautical dark:text-white text-lg font-bold leading-snug">403870, Волгоградская область, г. Камышин, ул. Нижняя, д.1, пом. 8</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-4 rounded-2xl mr-6 shadow-sm group-hover:scale-110 transition-transform">
                  <IconPhone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-gray-400 dark:text-gray-500 uppercase text-[10px] tracking-[0.2em] mb-2">Телефоны диспетчера</h4>
                  <div className="space-y-1">
                    {CONTACT_PHONES.map(phone => (
                      <a key={phone} href={`tel:${phone.replace(/\D/g,'')}`} className="block text-xl sm:text-2xl font-black text-nautical dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-4 rounded-2xl mr-6 shadow-sm group-hover:scale-110 transition-transform">
                  <IconMail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-gray-400 dark:text-gray-500 uppercase text-[10px] tracking-[0.2em] mb-2">Email</h4>
                  <a href="mailto:info@grp34.ru" className="text-xl font-black text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors">info@grp34.ru</a>
                </div>
              </div>
            </address>

            <div className="mt-12 rounded-[2rem] overflow-hidden border border-nautical/10 dark:border-white/5 shadow-inner h-[300px] relative group">
              <iframe 
                src="https://yandex.ru/map-widget/v1/-/CKuAZ4nG" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen={true}
                title="Офис ООО Грузовая переправа"
                className="relative z-0 filter dark:invert dark:hue-rotate-180 dark:brightness-75"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 dark:ring-white/5 rounded-[2rem]"></div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={1} className="h-full">
          <div className="bg-nautical dark:bg-[#080c14] p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-white min-h-[600px] flex flex-col justify-center h-full relative overflow-hidden border border-white/5">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
            
            {isSubmitted ? (
              <div className="text-center py-10 animate-fadeIn relative z-10">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-900/40">
                  <IconCheck className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4">Готово!</h3>
                <p className="text-blue-200 text-lg mb-10 max-w-sm mx-auto font-medium">
                  Сообщение отправлено. Мы свяжемся с вами в ближайшее время.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black py-4 px-10 rounded-2xl transition-all uppercase tracking-widest text-xs"
                >
                  <IconArrowLeft className="w-4 h-4 mr-3" />
                  Вернуться назад
                </button>
              </div>
            ) : (
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Напишите нам</h3>
                <p className="text-blue-300 font-medium mb-10 leading-relaxed">Задайте вопрос по работе переправы через онлайн-форму.</p>
                
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black text-blue-400 uppercase mb-3 tracking-widest">Имя *</label>
                      <input 
                        name="name" 
                        required 
                        type="text" 
                        onChange={() => setErrors(prev => ({ ...prev, name: undefined }))}
                        className={`w-full bg-white/5 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-blue-500'} rounded-2xl px-6 py-4 focus:ring-2 focus:outline-none focus:bg-white/10 transition-all text-white font-bold`} 
                        placeholder="Как вас зовут?" 
                      />
                      {errors.name && <span className="text-[10px] text-red-400 mt-2 block font-bold">{errors.name}</span>}
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-blue-400 uppercase mb-3 tracking-widest">Телефон *</label>
                      <input 
                        name="phone" 
                        type="tel" 
                        value={phone}
                        onChange={handlePhoneChange}
                        className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-blue-500'} rounded-2xl px-6 py-4 focus:ring-2 focus:outline-none focus:bg-white/10 transition-all text-white font-bold`} 
                        placeholder="+7 (___) ___-__-__" 
                      />
                      {errors.phone && <span className="text-[10px] text-red-400 mt-2 block font-bold">{errors.phone}</span>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-blue-400 uppercase mb-3 tracking-widest">Ваш вопрос *</label>
                    <textarea 
                      name="message" 
                      required 
                      rows={4} 
                      onChange={() => setErrors(prev => ({ ...prev, message: undefined }))}
                      className={`w-full bg-white/5 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-blue-500'} rounded-2xl px-6 py-4 focus:ring-2 focus:outline-none focus:bg-white/10 transition-all text-white font-bold resize-none`} 
                      placeholder="Опишите суть вашего вопроса..."
                    ></textarea>
                    {errors.message && <span className="text-[10px] text-red-400 mt-2 block font-bold">{errors.message}</span>}
                  </div>
                  
                  {errorMessage && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center gap-3">
                      <IconAlert className="w-5 h-5 text-red-400 shrink-0" />
                      <p className="text-xs text-red-200 font-bold">{errorMessage}</p>
                    </div>
                  )}

                  <button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase tracking-[0.2em] text-xs flex items-center justify-center group active:scale-95 disabled:opacity-50">
                    {isLoading ? "Обработка..." : "Отправить сообщение"}
                  </button>
                  
                  <div className="flex items-center justify-center gap-2 opacity-40">
                    <IconShield className="w-4 h-4" />
                    <span className="text-[9px] uppercase tracking-widest font-bold">Ваши данные защищены</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Contacts;
