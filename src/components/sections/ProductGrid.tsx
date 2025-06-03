import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  category: "weapon" | "skin";
  inStock: boolean;
}

const ProductGrid = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "AK-47 Redline",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rarity: "legendary",
      category: "weapon",
      inStock: true,
    },
    {
      id: 2,
      name: "AWP Dragon Lore",
      price: 15000,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      rarity: "legendary",
      category: "weapon",
      inStock: true,
    },
    {
      id: 3,
      name: "M4A4 Howl",
      price: 8000,
      image:
        "https://images.unsplash.com/photo-1566577134631-1e22fe21b8a2?w=400&h=300&fit=crop",
      rarity: "epic",
      category: "weapon",
      inStock: false,
    },
    {
      id: 4,
      name: "Knife Karambit",
      price: 12000,
      image:
        "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=400&h=300&fit=crop",
      rarity: "legendary",
      category: "weapon",
      inStock: true,
    },
    {
      id: 5,
      name: "Desert Eagle Blaze",
      price: 3500,
      image:
        "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400&h=300&fit=crop",
      rarity: "rare",
      category: "weapon",
      inStock: true,
    },
    {
      id: 6,
      name: "Glock-18 Fade",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      rarity: "rare",
      category: "weapon",
      inStock: true,
    },
  ]);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-500";
      case "rare":
        return "bg-blue-500";
      case "epic":
        return "bg-purple-500";
      case "legendary":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  const getRarityLabel = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "Обычный";
      case "rare":
        return "Редкий";
      case "epic":
        return "Эпический";
      case "legendary":
        return "Легендарный";
      default:
        return "Обычный";
    }
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-['Oswald']">
            ПОПУЛЯРНЫЕ ТОВАРЫ
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Самые востребованные скины и оружие в нашем магазине
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-200 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge
                  className={`absolute top-3 left-3 ${getRarityColor(product.rarity)} text-white`}
                >
                  {getRarityLabel(product.rarity)}
                </Badge>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold">НЕТ В НАЛИЧИИ</span>
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-500">
                    {product.price.toLocaleString("ru-RU")} ₽
                  </span>
                  <div className="flex items-center space-x-1 text-slate-500">
                    <Icon
                      name="Star"
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span className="text-sm">4.8</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                    disabled={!product.inStock}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />В
                    корзину
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-slate-300 hover:bg-slate-100"
                  >
                    <Icon name="Heart" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-slate-300 hover:bg-slate-100"
          >
            Показать все товары
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
