import cupCoffee from '@/assets/cup-intro.png';
import cart from '@/assets/cart-white.svg';
import caixa from '@/assets/caixa.svg';
import xicara from '@/assets/xicara.svg';
import clock from '@/assets/clock.svg';
import { useMediaQuery } from '@/hooks/use-media-query';
import { FeaturedList } from '@/components/featured-list/featured-list';


export const Intro = () => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    return (
        <>
            <div className="relative bg-intro-background bg-cover bg-center h-[450px] xl:h-[500px] md:h-[400px] md:pt-24 w-full bg-no-repeat lg:pt-24">
                <div className="absolute inset-0 bg-white opacity-0  "></div>
                <div className="relative z-10 px-3  sm:px-3  md:px-3 sm:max-w-[700px] lg:max-w-[588px] xl:max-w-[800px] lg:pl-40">
                    <h3 className="text-title-l font-baloo text-base-title md:text-title-l ">
                        Encontre o café perfeito para qualquer hora do dia
                    </h3>
                    <p className="font-roboto text-text-s md:text-text-l ">
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </p>
                </div>
                <div className="relative max-w-72 top-16 mx-auto sm:mr-0 sm:max-w-56 md:absolute md:top-56 md:right-[20px] xl:right-[120px] xl:w-[700px] md:w-[350px] lg:w-[500px] lg:max-w-[600px] xl:max-w-[900px]  lg:top-6">
                    <img src={cupCoffee} alt="Xícara de café" className="w-full sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[600px]" />
                </div>
                {
                    !isSmallScreen && (
                        <div className='flex absolute gap-10 top-44 sm:max-w-96 md:max-w-96 sm:ml-3 lg:bottom-28 lg:pl-[147px] lg:min-w-[700px] md:top-64 xl:top-80'>
                            <ul className="gap-4 ">
                                <FeaturedList bgColor='bg-yellow-dark' icon={cart} text='Compra simples e segura' />
                                <FeaturedList bgColor='bg-yellow' icon={clock} text='Entrega rápida e rastreada' />
                            </ul>
                            <ul className=" gap-4">
                                <FeaturedList bgColor='bg-base-text' icon={caixa} text='Embalagem mantém o café intacto' />
                                <FeaturedList bgColor='bg-purple' icon={xicara} text='O café chega fresquinho até você' />
                            </ul>
                        </div>
                    )
                }
            </div>
            {
                //para mobile
                isSmallScreen && (
                    <ul className="p-4 flex flex-row space-x-4 overflow-x-auto lg:overflow-x-hidden whitespace-nowrap gap-3 lg:ml-40  z-20">
                        <FeaturedList bgColor='bg-yellow-dark' icon={cart} text='Compra simples e segura' />
                        <FeaturedList bgColor='bg-yellow' icon={clock} text='Entrega rápida e rastreada' />
                        <FeaturedList bgColor='bg-base-text' icon={caixa} text='Embalagem mantém o café intacto' />
                        <FeaturedList bgColor='bg-purple' icon={xicara} text='O café chega fresquinho até você' />
                    </ul>

                )
            }

        </>
    );
};
