import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Icon name="Target" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-['Oswald']">
                  CS 1.6 SHOP
                </h3>
                <p className="text-sm text-slate-400">Легендарные скины</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Крупнейший магазин скинов и оружия для Counter-Strike 1.6. Более
              10 лет на рынке, тысячи довольных клиентов.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-orange-400 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-orange-400 transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-orange-400 transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Помощь
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/delivery"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Доставка
                </Link>
              </li>
              <li>
                <Link
                  to="/payment"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Оплата
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Возврат
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Условия
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 CS 1.6 Shop. Все права защищены.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-slate-400 text-sm">
                Принимаем к оплате:
              </span>
              <div className="flex space-x-2">
                <div className="bg-slate-800 px-3 py-1 rounded text-xs">
                  VISA
                </div>
                <div className="bg-slate-800 px-3 py-1 rounded text-xs">MC</div>
                <div className="bg-slate-800 px-3 py-1 rounded text-xs">
                  QIWI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
