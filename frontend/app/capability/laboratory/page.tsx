import Banner from '@/components/banner/banner';
import Capability from '@/components/capability/capability';

export default function LaboratoryPage() {
  const laboratoryData = [
    {
      id: '01',
      title: 'Сырье',
      facts: ['Подбор', 'Заказ'],
      description: 'Подбор и заказ необходимого сырья у российских и зарубежных дистрибьюторов в рамках разработок.',
      background: '#9574CC',
    },
    {
      id: '02',
      title: 'Тестирование',
      facts: ['Совместимость', 'Старение'],
      description: 'Тестирование формул декоративной косметики на старение, замораживание и совместимость с упаковкой.',
      background: '#9574CC',
    },
    {
      id: '03',
      title: 'Декоративная косметика',
      facts: ['Лицо', 'Тело'],
      description: 'Разработка и тестирование формул декоративной косметики для лица, тела, включая доработку существующих по необходимым критериям.',
      background: '#9574CC',
    },
    {
      id: '04',
      title: 'Колористика',
      facts: ['Подбор', 'Разработка'],
      description: 'Разработка цветов декоративной косметики.',
      background: '#9574CC',
    },
  ];

  return(
    <>
      <Banner title={'Лаборатория COSMOMIX'}/>
      <Capability items={laboratoryData} bgImage={'/capability/production.jpg'}/>
    </>
  );
}
