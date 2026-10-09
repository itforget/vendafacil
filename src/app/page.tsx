import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <header>
        <p className="eyebrow">VENDAFÁCIL</p>
        <h1>Seu cardápio online, simples e rápido.</h1>
        <p>Catálogo, pedidos e operação para restaurantes, lojas, açaí e sorveterias.</p>
        <div className="actions">
          <Link className="button" href="/menu/demo">Ver cardápio demo</Link>
          <Link className="button secondary" href="/admin">Abrir painel</Link>
        </div>
      </header>
      <section className="panel">
        <h2>Comece pelo cardápio</h2>
        <p>O exemplo já está carregado com produtos de açaí e sorvete. Depois, o painel permite cadastrar os produtos da sua empresa.</p>
      </section>
    </main>
  )
}
