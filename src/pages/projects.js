import React from 'react';
// import { Container } from './styles';
import Header from '../components/Header'
import InputSearch from '../components/InputSearch';
import Proposal from '../components/Proposal';


function Projects() {
 
  return (
    <div>
      <Header />
      <InputSearch />
      <Proposal 
        title='Preciso de um editor de videos para cortes' 
        description='Sou aprendiz de copy e apesar de ser iniciante, já realizei trabalhos como copy para site institucional, landing page, copy para whatsapp, email, sms e campanhas para feed no instagram' 
        category='Design'
        subcategory='Motion'
      />
      <Proposal 
        title='Procuro Social Media iniciante para parceria' 
        description='Olá, preciso de um editor de videos para editar um curso completo, são 22 aulas por agora que tem média de 1 a 5 minutos no nicho de auto maquiagem. Cortes, ajuste de áudio e imagem. As aulas foram gravadas através do iphone em 4k.' 
        category='Videomaker'
        subcategory='Edição de anúncios & Vídeo de vendas & Outros'
      />
      <Proposal 
        title='Criar um QUIZ em Wordpress' 
        description='Sou designer iniciante e estou procurando social media que também esteja iniciando e que realmente tenha o intuito de crescer no digita, para fazer uma parceria.' 
        category='Social media'
        subcategory='Outros'
      />
      <Proposal 
        title='Redator - Escrever Ebooks' 
        description='Preciso que seja feita a criação de uma página de QUIZ (pressell) para rodar um produto do nicho black (vou enviar modelo para seguir). Contato pelo whatsapp 51999314931' 
        category='Programador'
        subcategory='Site'
      />
      <Proposal 
        title='Copywriter Junior' 
        description='Contrato profissional para pesquisar, planejar e escrever EBOOKS sobre temas empresariais. Experiência no trabalho é um diferencial, enviar orçamento e portfolio para eu@albertoliveira.com' 
        category='Copywriter'
        subcategory='Produção de conteúdo'
      />
    </div>
  )
}

export default Projects