import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-shadow to-dark-red text-parchment">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/img/6365973a-a2b6-465b-98b8-daf270c6bf5c.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-shadow/50 to-shadow/80" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <h1 className="font-gothic text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow-lg">
            Арендуй логово.
            <br />
            Собери партию.
            <br />
            <span className="text-blood-red animate-pulse-slow">
              Умри славно.
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-parchment/90 font-gothic leading-relaxed">
            Стабильный хостинг для D&D мастеров с атмосферой настоящего
            подземелья. Foundry VTT с премиум модулями ждёт твоей партии.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blood-red hover:bg-blood-red/80 text-parchment font-gothic text-lg px-8 py-6 border-2 border-dark-gold hover:border-parchment transition-all duration-300"
            >
              <Icon name="Server" className="mr-2" />
              Выбрать сервер
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-parchment text-parchment hover:bg-parchment/10 font-gothic text-lg px-8 py-6 transition-all duration-300"
            >
              <Icon name="BookOpen" className="mr-2" />
              Посмотреть приключения
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-gothic text-4xl md:text-5xl font-bold mb-6 text-dark-gold">
              О сервисе
            </h2>
            <p className="text-lg md:text-xl text-parchment/90 max-w-3xl mx-auto leading-relaxed">
              RollForRent предоставляет стабильный хостинг серверов для D&D с
              полной интеграцией Foundry VTT. Тысячи премиум модулей, надёжное
              соединение и техническая поддержка создают идеальную атмосферу для
              незабываемых приключений в духе Bloodborne.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-shadow/50 to-dark-red/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-gothic text-4xl md:text-5xl font-bold text-center mb-16 text-dark-gold">
            Преимущества
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-gradient-to-br from-parchment/10 to-parchment/5 border-2 border-dark-gold/50 hover:border-dark-gold transition-all duration-300 hover:shadow-2xl hover:shadow-blood-red/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-dark-gold/20 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Calendar" size={32} className="text-dark-gold" />
                </div>
                <CardTitle className="font-gothic text-2xl text-parchment">
                  Календарь сессий
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-parchment/80 text-center font-gothic">
                  Планируй встречи партии с интегрированным календарем. Никто не
                  пропустит решающую битву с драконом.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-gradient-to-br from-parchment/10 to-parchment/5 border-2 border-dark-gold/50 hover:border-dark-gold transition-all duration-300 hover:shadow-2xl hover:shadow-blood-red/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-dark-gold/20 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Package" size={32} className="text-dark-gold" />
                </div>
                <CardTitle className="font-gothic text-2xl text-parchment">
                  Готовые модули
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-parchment/80 text-center font-gothic">
                  Тысячи лицензированных модулей для Foundry VTT. От
                  классических кампаний до авторских подземелий.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-gradient-to-br from-parchment/10 to-parchment/5 border-2 border-dark-gold/50 hover:border-dark-gold transition-all duration-300 hover:shadow-2xl hover:shadow-blood-red/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-dark-gold/20 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Shield" size={32} className="text-dark-gold" />
                </div>
                <CardTitle className="font-gothic text-2xl text-parchment">
                  Техподдержка DM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-parchment/80 text-center font-gothic">
                  Поддержка мастеров игры 24/7. Опытные DM помогут с настройкой
                  и решением технических проблем.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-dark-red/50 to-blood-red/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-gothic text-4xl md:text-5xl font-bold mb-6 text-parchment">
            Готов к приключению?
          </h2>
          <p className="text-xl mb-8 text-parchment/90 font-gothic">
            Создай свой сервер и окунись в мир тёмного фэнтези с твоей партией
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-dark-gold hover:bg-dark-gold/80 text-shadow font-gothic text-xl px-12 py-8 border-2 border-parchment hover:border-blood-red transition-all duration-300"
            >
              <Icon name="Zap" className="mr-2" />
              Начать сейчас
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-parchment text-parchment hover:bg-parchment/10 font-gothic text-xl px-12 py-8 transition-all duration-300"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-2 border-dark-gold/30 bg-shadow">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-gothic text-2xl font-bold text-dark-gold mb-2">
                RollForRent
              </h3>
              <p className="text-parchment/70 font-gothic">
                Хостинг для мастеров подземелий
              </p>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-parchment/70 hover:text-parchment transition-colors"
              >
                <Icon name="Mail" size={24} />
              </a>
              <a
                href="#"
                className="text-parchment/70 hover:text-parchment transition-colors"
              >
                <Icon name="MessageSquare" size={24} />
              </a>
              <a
                href="#"
                className="text-parchment/70 hover:text-parchment transition-colors"
              >
                <Icon name="Github" size={24} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-dark-gold/20 text-center">
            <p className="text-parchment/60 font-gothic text-lg italic">
              "Здесь ваши кости станут легендой"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
