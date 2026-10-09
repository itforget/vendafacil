import Link from 'next/link'
import { Pressable, Reveal } from '@/components/motion'

const workflow = [
  ['01', 'Receba', 'Seu link próprio para divulgar no Instagram, WhatsApp e balcão.'],
  ['02', 'Organize', 'Pedidos entram numa fila visual para a equipe não perder nada.'],
  ['03', 'Venda mais', 'Veja o que gira, o que está parado e quais horários pedem reforço.'],
]

export default function Home() {
  return <main className="landing-shell">
    <nav className="topbar"><Link href="/" className="brand"><span className="brand-mark">VF</span> Venda<em>Fácil</em></Link><div className="nav-links"><a href="#como-funciona">Como funciona</a><a href="#para-quem">Para sua loja</a><Link className="nav-login" href="/admin">Abrir painel ↗</Link></div></nav>
    <section className="hero">
      <Reveal className="hero-copy"><p className="kicker"><i /> operação leve para quem vende todos os dias</p><h1>Menos bagunça.<br /><em>Mais pedidos.</em></h1><p className="hero-lead">O VendaFácil coloca cardápio, pedidos e rotina da sua loja no mesmo lugar — simples para a equipe, gostoso para o cliente.</p><div className="actions"><Link className="button button-dark" href="/menu/demo">Ver cardápio demo <span>→</span></Link><Link className="text-link" href="/admin">Conhecer o painel <span>↗</span></Link></div><div className="trust-row"><span className="avatar-stack"><b>J</b><b>M</b><b>A</b></span><span>feito para restaurantes, açaí e lojas locais</span></div></Reveal>
      <div className="hero-visual"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="phone-card"><div className="phone-notch" /><div className="mini-brand">sabor da casa <span>•••</span></div><div className="mini-banner"><small>boa tarde</small><strong>O que vai ser hoje?</strong></div><div className="mini-tabs"><b>Mais pedidos</b><span>Combos</span><span>Bebidas</span></div><div className="mini-product"><div className="food-orb purple">VF</div><div><b>Açaí 500ml</b><small>cremoso + 3 adicionais</small></div><strong>R$ 18,90</strong></div><div className="mini-product"><div className="food-orb pink">VF</div><div><b>Milkshake morango</b><small>o queridinho da casa</small></div><strong>R$ 16,00</strong></div><div className="mini-cart">2 itens no carrinho <b>R$ 34,90&nbsp; →</b></div></div><div className="float-note note-top"><span>●</span> pedido confirmado <b>agora</b></div><div className="float-note note-bottom"><strong>+ 18%</strong><span>ticket médio este mês</span></div></div>
    </section>
    <section className="ticker"><span>feito para o corre real</span><b>delivery</b><b>balcão</b><b>retirada</b><b>mesa</b><b>loja local</b></section>
    <section id="como-funciona" className="workflow"><div className="section-intro"><p className="kicker"><i /> do primeiro clique ao pedido pronto</p><h2>Uma operação que<br /><em>se explica sozinha.</em></h2></div><div className="workflow-list">{workflow.map(([num, title, text]) => <Pressable key={num} className="workflow-item"><span className="step-num">{num}</span><div><h3>{title}</h3><p>{text}</p></div><span className="step-arrow">↗</span></Pressable>)}</div></section>
    <section id="para-quem" className="bottom-cta"><div><p className="kicker"><i /> sua loja, seu ritmo</p><h2>Comece pequeno.<br /><em>Controle tudo.</em></h2></div><Link className="button button-orange" href="/admin">Abrir meu painel <span>→</span></Link></section>
    <footer><span>VendaFácil © 2026</span><span>interface de demonstração — dados do painel são simulados.</span></footer>
  </main>
}
