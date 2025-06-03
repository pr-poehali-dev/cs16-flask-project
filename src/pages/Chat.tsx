import { useState, useRef, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ChatMessage {
  id: number;
  user: string;
  message: string;
  time: string;
  avatar: string;
  isOnline: boolean;
}

interface OnlineUser {
  name: string;
  avatar: string;
  status: "online" | "away" | "busy";
}

const Chat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      user: "ProGamer",
      message: "Кто хочет поиграть в команде?",
      time: "14:23",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
      isOnline: true,
    },
    {
      id: 2,
      user: "SkinCollector",
      message: "Продаю редкий скин AK-47, кто интересуется?",
      time: "14:25",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop&crop=face",
      isOnline: true,
    },
    {
      id: 3,
      user: "NewPlayer",
      message: "Подскажите, как лучше настроить прицел?",
      time: "14:27",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      isOnline: false,
    },
  ]);

  const [onlineUsers] = useState<OnlineUser[]>([
    {
      name: "ProGamer",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
      status: "online",
    },
    {
      name: "SkinCollector",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop&crop=face",
      status: "online",
    },
    {
      name: "AdminCS",
      avatar:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=40&h=40&fit=crop&crop=face",
      status: "busy",
    },
    {
      name: "Trader2024",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      status: "away",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: messages.length + 1,
        user: "Вы",
        message: newMessage,
        time: new Date().toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        avatar:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=40&h=40&fit=crop&crop=face",
        isOnline: true,
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      case "busy":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Онлайн пользователи */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Users"
                    size={20}
                    className="mr-2 text-orange-500"
                  />
                  Онлайн ({onlineUsers.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {onlineUsers.map((user, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div
                          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(user.status)}`}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-700">
                        {user.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Основной чат */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="mr-2 text-orange-500"
                  />
                  Общий чат CS 1.6
                  <Badge variant="secondary" className="ml-2">
                    {messages.length} сообщений
                  </Badge>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                {/* Сообщения */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="flex space-x-3">
                      <div className="relative flex-shrink-0">
                        <img
                          src={message.avatar}
                          alt={message.user}
                          className="w-10 h-10 rounded-full"
                        />
                        {message.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-slate-900">
                            {message.user}
                          </span>
                          <span className="text-xs text-slate-500">
                            {message.time}
                          </span>
                        </div>
                        <p className="text-slate-700">{message.message}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Форма отправки */}
                <div className="border-t p-4">
                  <form onSubmit={handleSendMessage} className="flex space-x-2">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Введите сообщение..."
                      className="flex-1"
                    />
                    <Button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600"
                      disabled={!newMessage.trim()}
                    >
                      <Icon name="Send" size={16} />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Chat;
