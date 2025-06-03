import { useEffect, useState } from "react";

const StatsSection = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    products: 0,
    orders: 0,
    rating: 0,
  });

  const finalStats = {
    customers: 15000,
    products: 1200,
    orders: 45000,
    rating: 4.9,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCounters((prev) => ({
        customers: Math.min(
          prev.customers + Math.ceil(finalStats.customers / steps),
          finalStats.customers,
        ),
        products: Math.min(
          prev.products + Math.ceil(finalStats.products / steps),
          finalStats.products,
        ),
        orders: Math.min(
          prev.orders + Math.ceil(finalStats.orders / steps),
          finalStats.orders,
        ),
        rating: Math.min(
          prev.rating + finalStats.rating / steps,
          finalStats.rating,
        ),
      }));
    }, stepDuration);

    setTimeout(() => clearInterval(timer), duration);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-['Oswald']">
            НАШИ ДОСТИЖЕНИЯ
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Цифры, которые говорят о качестве нашего сервиса
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
              {counters.customers.toLocaleString("ru-RU")}+
            </div>
            <div className="text-slate-300 text-lg">Довольных клиентов</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
              {counters.products.toLocaleString("ru-RU")}+
            </div>
            <div className="text-slate-300 text-lg">Товаров в каталоге</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
              {counters.orders.toLocaleString("ru-RU")}+
            </div>
            <div className="text-slate-300 text-lg">Выполненных заказов</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
              {counters.rating.toFixed(1)}★
            </div>
            <div className="text-slate-300 text-lg">Средний рейтинг</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
