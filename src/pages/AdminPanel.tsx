import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const AdminPanel = () => {
  const [stats] = useState({
    totalUsers: 1567,
    totalProducts: 234,
    totalOrders: 4521,
    revenue: 2847650,
  });

  const [users] = useState([
    {
      id: 1,
      name: "ProGamer",
      email: "pro@example.com",
      status: "active",
      orders: 15,
    },
    {
      id: 2,
      name: "SkinCollector",
      email: "collector@example.com",
      status: "active",
      orders: 8,
    },
    {
      id: 3,
      name: "Cheater123",
      email: "cheater@example.com",
      status: "banned",
      orders: 0,
    },
  ]);

  const [products] = useState([
    { id: 1, name: "AK-47 Redline", price: 2500, stock: 12, status: "active" },
    {
      id: 2,
      name: "AWP Dragon Lore",
      price: 15000,
      stock: 3,
      status: "active",
    },
    { id: 3, name: "M4A4 Howl", price: 8000, stock: 0, status: "inactive" },
  ]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 font-['Oswald']">
            АДМИН ПАНЕЛЬ
          </h1>
          <p className="text-lg text-slate-600">
            Управление сайтом, пользователями и товарами
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Icon name="Users" size={32} className="text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600">
                    Пользователи
                  </p>
                  <p className="text-2xl font-bold text-slate-900">
                    {stats.totalUsers}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Icon name="Package" size={32} className="text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600">Товары</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {stats.totalProducts}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Icon
                  name="ShoppingCart"
                  size={32}
                  className="text-purple-500"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600">Заказы</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {stats.totalOrders}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Icon name="DollarSign" size={32} className="text-orange-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600">Доход</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {stats.revenue.toLocaleString("ru-RU")} ₽
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Основные функции */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users">Пользователи</TabsTrigger>
            <TabsTrigger value="products">Товары</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          {/* Управление пользователями */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Управление пользователями</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="font-medium">{user.name}</h3>
                          <p className="text-sm text-slate-600">{user.email}</p>
                        </div>
                        <Badge
                          variant={
                            user.status === "active" ? "default" : "destructive"
                          }
                        >
                          {user.status === "active"
                            ? "Активен"
                            : "Заблокирован"}
                        </Badge>
                        <span className="text-sm text-slate-500">
                          {user.orders} заказов
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button
                          variant={
                            user.status === "active" ? "destructive" : "default"
                          }
                          size="sm"
                        >
                          <Icon
                            name={
                              user.status === "active" ? "Ban" : "UserCheck"
                            }
                            size={16}
                          />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Управление товарами */}
          <TabsContent value="products">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Управление товарами</CardTitle>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить товар
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="text-sm text-slate-600">
                            {product.price.toLocaleString("ru-RU")} ₽
                          </p>
                        </div>
                        <Badge
                          variant={
                            product.status === "active"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {product.status === "active"
                            ? "Активен"
                            : "Неактивен"}
                        </Badge>
                        <span className="text-sm text-slate-500">
                          Склад: {product.stock}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button variant="destructive" size="sm">
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Настройки сайта */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Настройки сайта</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium">Название сайта</label>
                  <Input defaultValue="CS 1.6 SHOP" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Описание</label>
                  <Input defaultValue="Легендарные скины" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email поддержки</label>
                  <Input defaultValue="support@cs16shop.ru" className="mt-1" />
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Сохранить настройки
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPanel;
