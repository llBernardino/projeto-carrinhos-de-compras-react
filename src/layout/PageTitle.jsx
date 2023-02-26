import React from 'react';

const PageTitle = ({ data }) => {
  return <div className='page-title'>{data || 'Carrinho2'}</div>; //pode ser qualquer nome data/title/qualquercoisa
  //return <div className='page-title'>{data || 'TEXTO QUALQUER'}</div>; USAR ? OU || E A MSM COISA
  //return <div className='page-title'>{data ? data:'Carrinho2'}</div>; SE "DATA" EXISTE EXIBA DATA MAS SE NAO EXISTIR EXIBA CARRINHO2 ENTENDEU???/
};

export default PageTitle;
