// components/ProductPage.tsx
import Gallery from '@/components/ProductPage/gallery/gallery';
import styles from './page.module.css';
import LavaScene from '@/components/LavaScene/LavaScene';
import Advantages from '@/components/ProductPage/advanatages/advantages';
import IngredientsCard from '@/components/ProductPage/ingredients/ingredients';
import Usage from '@/components/ProductPage/usage/usage';
import CollapsibleAccordion from '@/components/ProductPage/accordion/accordion';
import Customization from '@/components/ProductPage/сastomization/customization';


export default function ProductPage() {
  const images = [
    '/product/img1.jpg',
    '/product/img2.jpg',
    '/product/img3.jpg',
    '/product/img4.jpg',
    '/product/img5.jpg',
  ];
  const title = 'Maximizer';
  const advantages = [
    {advantage: 'Мгновенный объём губ', image: '/product/ad1.png'},
    {advantage: 'Защита губ', image: '/product/ad2.png'},
    {advantage: 'Стимулирует кровообращение', image: '/product/ad3.png'},
    {advantage: 'Возможность кастомизации', image: '/product/ad4.png'},
  ];
  const ingredients = [
    {
      name: 'Красный перец',
      description: 'Стимулирует кровообращение, придаёт губам естественный объем и деликатный румянец.',
      image: '/product/ingredients/1.png',
    },
    {
      name: 'Мята',
      description: 'Освежает, придаёт лёгкое охлаждающее ощущение и делает губы мягкими и гладкими.',
      image: '/product/ingredients/2.png',
    },
    {
      name: 'Витамин E',
      description: 'Защищает губы от сухости и старения, питает и восстанавливает их естественную эластичность.',
      image: '/product/ingredients/3.png',
    },
  ];

  const usage = [
    {
      item: 'Нанесение — лёгкий блеск комфортно ложится на губы',
    },
    {
      item: 'Стимуляция — ментол и перец активизируют микроциркуляцию',

    },
    {
      item: 'Результат — естественный объём и ухоженный вид',
    }
  ];

  const customization = [
    {title: 'Прозрачный блеск'},
    {title: 'Полупрозрачный с оттенками'},
    {title: 'С шиммером для сияния'},
  ];



  return (
    <>
      <Gallery images={images} title={title}/>
      <div className={styles.productPageWrapper}> {/* Add a wrapper div */}



        <Advantages items={advantages}/>
        <IngredientsCard ingredients={ingredients}/>
        <Usage items={usage} image="/product/usage/usage.jpg" />


        <div className={styles.background}>
          <LavaScene/>
          <div className={styles.liquidGlass}></div>
        </div>

        <div className={styles.accordion_wrapper}>
          <CollapsibleAccordion
            title="Текстура и финиш"
            content="Текстура лёгкая, не липкая. Финиш — глянцевый, с возможностью добавить цвет или свечение."
            imageSrc="/product/texture/1.png"
            imageAlt="Текстура Maximizer"
            defaultOpen={true}
          />
          <CollapsibleAccordion
            title="Важно знать"
            content="Блеск-плампер с экстрактом красного перца может вызвать лёгкое покалывание — это естественный эффект, который стимулирует микроциркуляцию и усиливает объём губ. Мята дарит приятную свежесть, а витамин Е заботится о мягкости и защите от сухости. Для устойчивого результата используйте регулярно."
            defaultOpen={false}
          />
        </div>

        <Customization customization={customization} />
      </div>
    </>
  );
}
