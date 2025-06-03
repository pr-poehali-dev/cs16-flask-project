import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ForumSection {
  id: number;
  title: string;
  description: string;
  topicsCount: number;
  postsCount: number;
  lastPost: {
    author: string;
    time: string;
    topic: string;
  };
  icon: string;
}

const Forum = () => {
  const [forumSections] = useState<ForumSection[]>([
    {
      id: 1,
      title: "Общее обсуждение CS 1.6",
      description: "Обсуждение игры, тактики, команд",
      topicsCount: 156,
      postsCount: 2341,
      lastPost: {
        author: "ProGamer",
        time: "2 часа назад",
        topic: "Лучшие карты для тренировки",
      },
      icon: "MessageSquare",
    },
    {
      id: 2,
      title: "Торговля скинами",
      description: "Покупка, продажа и обмен скинов",
      topicsCount: 89,
      postsCount: 1205,
      lastPost: {
        author: "Trader2024",
        time: "30 минут назад",
        topic: "Продаю AK-47 Redline",
      },
      icon: "ShoppingBag",
    },
    {
      id: 3,
      title: "Техническая поддержка",
      description: "Помощь с настройкой и проблемами",
      topicsCount: 67,
      postsCount: 890,
      lastPost: {
        author: "Support",
        time: "1 час назад",
        topic: "Проблемы с запуском игры",
      },
      icon: "HelpCircle",
    },
    {
      id: 4,
      title: "Турниры и соревнования",
      description: "Анонсы турниров и результаты",
      topicsCount: 34,
      postsCount: 567,
      lastPost: {
        author: "TournamentAdmin",
        time: "4 часа назад",
        topic: "Регистрация на зимний турнир",
      },
      icon: "Trophy",
    },
    {
      id: 5,
      title: "Конфигурации и настройки",
      description: "Делимся конфигами и настройками",
      topicsCount: 45,
      postsCount: 432,
      lastPost: {
        author: "ConfigMaster",
        time: "6 часов назад",
        topic: "Мой конфиг для aim тренировок",
      },
      icon: "Settings",
    },
  ]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 font-['Oswald']">
            ФОРУМ CS 1.6
          </h1>
          <p className="text-lg text-slate-600">
            Общайтесь с игроками, делитесь опытом и находите товарищей по
            команде
          </p>
        </div>

        <div className="grid gap-4">
          {forumSections.map((section) => (
            <Card
              key={section.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Icon
                        name={section.icon as any}
                        size={28}
                        className="text-orange-500"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {section.title}
                      </h3>
                      <p className="text-slate-600 mb-2">
                        {section.description}
                      </p>
                      <div className="flex space-x-4 text-sm text-slate-500">
                        <span>{section.topicsCount} тем</span>
                        <span>{section.postsCount} сообщений</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right min-w-[200px]">
                    <div className="text-sm text-slate-600 mb-1">
                      Последнее сообщение:
                    </div>
                    <div className="font-medium text-slate-900">
                      {section.lastPost.topic}
                    </div>
                    <div className="text-sm text-slate-500">
                      от{" "}
                      <span className="text-orange-500">
                        {section.lastPost.author}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">
                      {section.lastPost.time}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Icon name="Plus" size={16} className="mr-2" />
            Создать новую тему
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Forum;
