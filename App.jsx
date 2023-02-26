/*
? DESAFIO - Shopping Cart:

Você deve desenvolver um carrinho de compras funcional.
Funcionalidades que esperamos que você desenvolva:

todo - inserção de novos produtos no carrinho
todo - remoção de produtos já inseridos
todo - alteração de quantidade de cada item 
todo - cálculo do preço total dos itens inseridos

todo - FUNCIONALIDADE EXTRA: aplicação de cupom de desconto
*/
import './styles.scss';

import PageHeader from './src/layout/PageHeader';
import PageTitle from './src/layout/PageTitle';
import Summary from './src/Summary';
import TableRow from './src/TableRow';
import { useState } from 'react';
import { useEffect } from 'react';

import { api } from './src/provider';

function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}
function App() {
  
  const [cart, setCart] = useState ([]);
  //tem outra maneira de fazer esse bglh sem a instancia do axios e so colocar a url no lugar do cart ali o cart e tipo uma class que foi criado ni provider 
  
  const productObject = {
    name: 'produto',
    category:"categoria",
    price: randomNumber(90, 1200),
    quantity: 1,
  };


  const fetchData = () => {
    api.get('/cart').then((response) => setCart(response.data));
  };
   
   useEffect(()=>{
    fetchData ();
   },[]);

   const handleAddItem = () => {
    //inserçao
    console.log('handleAddItem disparou')
    api.post('/cart', productObject).then(data => console.log(data));

   };

   const handleRemoveItem = (item) => {
    console.log('handleRemoveItem disparou')
    console.log({item});
    api.delete(`/cart/${item._id}`).then(response => {
      console.log(response);
      fetchData();
    });
    //remoçao
    
   };
   const handleUpdateItem = (item, action) => {
    //alteraçao
    let newQuantity = item.quantity;

    if (action === 'decrease'){
      if( newQuantity === 1){
        return;
      }
      newQuantity -= 1;

    }
    if (action === 'increase'){

      newQuantity += 1;

    }
    console.log(newQuantity);

    const newData = {...item, quantity: newQuantity}
    delete newData._id;
    console.log({newData});
    api.put(`/cart/${item._id}`, newData).then((response) => {
      console.log(response);
      fetchData();
    });


   };

  return (
    <>
      <PageHeader />
      <main>
        <PageTitle data = 'Seu carrinho'/>
        <div className="content">
          <section>
            <button onClick={handleAddItem} className='py-2 px-4 mb-4'>add to cart</button>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item =>
                  <TableRow handleRemoveItem= {handleRemoveItem} handleUpdateItem= {handleUpdateItem} key ={item._id} data = {item} />
                )}
                {cart.length === 0 &&
                 <tr>
                    <td className ="text-center text-secondary"colSpan='5'>
                      Carrinho de compras vazio.
                    </td>
                 </tr>
                } 
                
              </tbody>
            </table>
          </section>
          <aside>
            <Summary/>
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
