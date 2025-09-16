

import Banner from '@/components/banner/banner';
import Capability from '@/components/capability/capability';

export default function ProductionPage() {
  const capabilitiesData = [
    {
      id: '01',
      title: 'Продакшн',
      facts: ['Варка', 'Фасовка'],
      description: 'Варка и фасовка любых категорий косметических масс: кремовых, жидких и пенообразующих продуктов.',
      background: '#DDDBEA',
    },
    {
      id: '02',
      title: 'Упаковка',
      facts: ['Первичная', 'Вторичная'],
      description: 'Фасовка в первичную и вторичную упаковку: саше, монодозы, мини-форматы, пластиковые и алюминиевые тубы, все виды флаконов, банки.',
      background: '#CCB6EC',
    },
    {
      id: '03',
      title: 'Контрактное производство',
      facts: ['Этапы', 'Отдельные операции'],
      description: 'Все этапы производства или отдельные операции, в том числе на основе давальческого сырья.',
      background: '#9574CC',
    },
    {
      id: '04',
      title: 'Сопровождение',
      facts: ['Подбор', 'Заказ'],
      description: 'Помощь в подборе и заказе первичной упаковки в рамках full service.',
      background: '#5A368E',
    },
  ];

  return(
    <>
      <Banner title={'Производство COSMOMIX'}/>
      <Capability items={capabilitiesData} bgImage={'/capability/production.jpg'}/>
    </>
  );

}
