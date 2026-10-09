import { prisma } from '@/lib/prisma'
import MenuClient from '../MenuClient'

export default async function Menu({params}:{params:{slug:string}}){
  try {
    const shop=await prisma.shop.findUnique({where:{slug:params.slug},include:{products:{where:{available:true},orderBy:{createdAt:'desc'}}}})
    if(!shop)return <main className="menu-shell"><div className="empty-menu"><p className="kicker"><i/> cardápio</p><h1>Loja não encontrada</h1><p>Confira o link recebido ou peça ao estabelecimento para compartilhar o cardápio correto.</p><a className="button button-dark" href="/">Voltar ao início</a></div></main>
    return <MenuClient shop={{name:shop.name,slug:shop.slug}} products={shop.products.map(p=>({id:p.id,name:p.name,description:p.description,priceCents:p.priceCents}))}/>
  } catch {
    return <main className="menu-shell"><div className="empty-menu"><p className="kicker"><i/> conexão interrompida</p><h1>O cardápio está descansando.</h1><p>Não foi possível carregar os itens agora. Tente novamente em alguns instantes.</p><a className="button button-dark" href={`/menu/${params.slug}`}>Tentar novamente</a><p className="demo-label">estado de erro da API — nenhum pedido foi criado</p></div></main>
  }
}
