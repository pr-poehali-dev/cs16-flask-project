import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [cartCount] = useState(3);
  const [isLoggedIn] = useState(false);

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <Icon name="Target" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white font-['Oswald']">
                CS 1.6 SHOP
              </h1>
              <p className="text-xs text-slate-400">Легендарные скины</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-slate-300 hover:text-orange-400 transition-colors"
            >
              Каталог
            </Link>
            <Link
              to="/weapons"
              className="text-slate-300 hover:text-orange-400 transition-colors"
            >
              Оружие
            </Link>
            <Link
              to="/skins"
              className="text-slate-300 hover:text-orange-400 transition-colors"
            >
              Скины
            </Link>
            <Link
              to="/cases"
              className="text-slate-300 hover:text-orange-400 transition-colors"
            >
              Кейсы
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            {isLoggedIn ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative text-slate-300 hover:text-orange-400"
                >
                  <Icon name="ShoppingCart" size={20} />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1 min-w-[20px] h-5">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-300 hover:text-orange-400"
                >
                  <Icon name="User" size={20} />
                </Button>
              </>
            ) : (
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  Вход
                </Button>
                <Button
                  size="sm"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Регистрация
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
