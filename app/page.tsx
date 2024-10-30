import { Hero } from '@/components/home-page/Hero'
import Services from '@/components/services/Services'

export default function Home() {
  return (
    <main className="mainBg">
      <Hero />
      <Services/>
      <h1>О НАС</h1>
      <h1>ЧТО МЫ ПРЕДЛАГАЕМ?</h1>
      <h1>ОТ СОЗДАТЕЛЕЙ</h1>
      <h1>ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</h1>
    </main>
  )
}
