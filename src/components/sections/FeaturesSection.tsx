import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Shield",
      title: "Гарантия качества",
      description:
        "Все товары проверены и имеют гарантию. Возврат в течение 14 дней.",
    },
    {
      icon: "Zap",
      title: "Мгновенная доставка",
      description:
        "Получайте свои покупки сразу после оплаты. Автоматическая система доставки.",
    },
    {
      icon: "Lock",
      title: "Безопасные платежи",
      description:
        "Все платежи защищены SSL-шифрованием. Поддержка карт и электронных кошельков.",
    },
    {
      icon: "Headphones",
      title: "Круглосуточная поддержка",
      description:
        "Наша команда готова помочь в любое время. Ответим в течение 5 минут.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-['Oswald']">
            ПОЧЕМУ ВЫБИРАЮТ НАС
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Мы предоставляем лучший сервис для игроков CS 1.6
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-orange-500"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
