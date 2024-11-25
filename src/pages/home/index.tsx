import { CardItem } from "@/components/card-item"
import { Intro } from "@/components/intro"

import { coffee } from "@/mocks/coffees"

export const Home = () => {

   
   const data = coffee
  return (
  <>
  <Intro />
  <h3 className=" font-baloo text-title-l text-base-title lg:ml-40 p-3 mt-8">Nossos cafés</h3>
  <section className="lg:ml-40 p-3 flex flex-wrap  gap-8">
  {
    data.map((item) => {
      return(
        <CardItem  {...item}/>
      )
    })
  }
  </section>
  </>
  )
}
