import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='27' cy='7' r='2'/%3E%3Ccircle cx='47' cy='7' r='2'/%3E%3Ccircle cx='7' cy='27' r='2'/%3E%3Ccircle cx='27' cy='27' r='2'/%3E%3Ccircle cx='47' cy='27' r='2'/%3E%3Ccircle cx='7' cy='47' r='2'/%3E%3Ccircle cx='27' cy='47' r='2'/%3E%3Ccircle cx='47' cy='47' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-500/20 p-4 rounded-full">
              <Icon name="Crosshair" size={48} className="text-orange-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Oswald'] tracking-tight">
            COUNTER-STRIKE 1.6
            <span className="block text-orange-400 text-4xl md:text-5xl mt-2">
              ЛЕГЕНДАРНЫЕ СКИНЫ
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Самая большая коллекция редких скинов и оружия для Counter-Strike
            1.6. Проверенные товары, мгновенная доставка, лучшие цены.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
            >
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">1000+</div>
              <div className="text-sm text-slate-400">Товаров</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">24/7</div>
              <div className="text-sm text-slate-400">Поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">5★</div>
              <div className="text-sm text-slate-400">Рейтинг</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
