import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время!');
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      title: 'Греко-римская борьба',
      description: 'Классическая борьба для развития силы и техники. Подходит для начинающих от 8 лет.',
      icon: 'Trophy',
      color: 'bg-primary'
    },
    {
      title: 'Вольная борьба',
      description: 'Динамичный стиль с захватами ног. Улучшает координацию и выносливость.',
      icon: 'Flame',
      color: 'bg-secondary'
    },
    {
      title: 'Дзюдо',
      description: 'Искусство бросковой техники и борьбы в партере. Развивает баланс и дисциплину.',
      icon: 'Target',
      color: 'bg-accent'
    },
    {
      title: 'Самбо',
      description: 'Российская система борьбы. Включает броски, болевые приемы и самооборону.',
      icon: 'Award',
      color: 'bg-primary'
    }
  ];

  const team = [
    {
      name: 'Александр Петров',
      role: 'Главный тренер',
      experience: '15 лет опыта, мастер спорта по греко-римской борьбе',
      image: 'https://cdn.poehali.dev/projects/1caccb44-81ca-4fc8-8732-103590549749/files/7e406e5a-cf0c-4bb3-b318-9378a41c721d.jpg'
    },
    {
      name: 'Елена Соколова',
      role: 'Тренер по дзюдо',
      experience: '10 лет опыта, КМС по дзюдо, специализация на работе с детьми',
      image: 'https://cdn.poehali.dev/projects/1caccb44-81ca-4fc8-8732-103590549749/files/91a6c4c0-7c1e-4be6-8ab7-5597246fa6c7.jpg'
    },
    {
      name: 'Дмитрий Волков',
      role: 'Тренер по самбо',
      experience: '8 лет опыта, чемпион региона по самбо',
      image: 'https://cdn.poehali.dev/projects/1caccb44-81ca-4fc8-8732-103590549749/files/4d7e5bd1-9b58-44c8-9ed2-0a893d0408a8.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-accent/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Dumbbell" className="text-white" size={28} />
            </div>
            <span className="text-2xl font-bold text-white">БОРЕЦ</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-white hover:text-primary transition-colors">Услуги</a>
            <a href="#team" className="text-white hover:text-primary transition-colors">Команда</a>
            <a href="#contact" className="text-white hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-accent via-accent to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-shadow">
              СТАНЬ<br />СИЛЬНЕЕ!
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Профессиональные тренировки по борьбе для начинающих и любителей. 
              Развивай силу, выносливость и характер вместе с нами!
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 hover-scale">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Записаться на пробное занятие
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-accent">Наши направления</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выбери свой путь к победе</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover-scale group cursor-pointer">
                <CardContent className="p-6">
                  <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-accent">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-accent">Наша команда</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Опытные профессионалы своего дела</p>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover-scale border-2 hover:border-primary transition-all">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-accent">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-accent">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Ответим на все ваши вопросы</p>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">Форма обратной связи</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-2"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="border-2"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="border-2"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-accent">Контактная информация</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-accent">Адрес</p>
                        <p className="text-muted-foreground">г. Москва, ул. Спортивная, д. 15</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-accent">Телефон</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-accent">Email</p>
                        <p className="text-muted-foreground">info@borec.ru</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=37.617635%2C55.755819&z=15&l=map"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    className="w-full"
                    title="Карта"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-accent py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Dumbbell" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-white">БОРЕЦ</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="bg-primary/20 p-3 rounded-lg hover:bg-primary/30 transition-colors">
                <Icon name="Instagram" size={20} className="text-white" />
              </a>
              <a href="#" className="bg-primary/20 p-3 rounded-lg hover:bg-primary/30 transition-colors">
                <Icon name="Youtube" size={20} className="text-white" />
              </a>
              <a href="#" className="bg-primary/20 p-3 rounded-lg hover:bg-primary/30 transition-colors">
                <Icon name="MessageCircle" size={20} className="text-white" />
              </a>
            </div>
            <p className="text-white/70">© 2024 БОРЕЦ. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
