import { CardItem } from "@/components/card-item"
import { Intro } from "@/components/intro"

import { coffee } from "@/mocks/coffees"

export const Home = () => {

   
   const data = coffee
  return (
  <>
  <Intro />
  <h3 className=" font-baloo text-title-l text-base-title text-center p-3 mt-8">Nossos cafés</h3>
  <section className="flex flex-wrap gap-8 justify-center mb-12">
  {
    data.map((item) => {
      return(
        <CardItem key={item.id} {...item}/>
      )
    })
  }
  </section>
  </>
  )
}
