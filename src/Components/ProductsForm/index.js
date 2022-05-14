import * as S from './styles';
import React from 'react';

export default function ProductsForm(){
    const [brand, setBrand] = React.useState('');
    const [model, setModel] = React.useState('');
    const [image, setImage] = React.useState('');
    const [size, setSize] = React.useState(0);
    const [amount, setAmount] = React.useState(0);
    const [price, setPrice] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [color, setColor] = React.useState('');
    let regex = /(https?:\/\/.*\.(?:png|jpg|svg|jpeg))/i;
    function sendForm(){
        if(brand !== '' && model !== '' && image !== '' && size !== '' && amount !== '' && price !== '' && regex.test(image) && color !== ''){
            let obj = {
                brand: brand,
                model: model,
                price: price,
                description: description,

                amount:{
                    
                }
            };
            console.log(obj);
        } else {
            alert("Preencha corretamente todos os campos");
        }
    }
    return(
        <S.Content>
            <h1>Informe os dados do produto</h1>
            <h2>Adicione a marca:</h2>
            <input placeholder='Marca' value={brand} onChange={e => setBrand(e.target.value)}/>
            <h2>Adicione o modelo:</h2>
            <input placeholder='Modelo' value={model} onChange={e => setModel(e.target.value)}/>
            <h2>Adicione a cor:</h2>
            <input placeholder='Cor' value={color} onChange={e => setColor(e.target.value)}/>
            <h2>Adicione a descrição:</h2>
            <input placeholder='Descrição' value={description} onChange={e => setDescription(e.target.value)}/>
            <h2>Adicione a imagem:</h2>
            <input placeholder='Imagem' value={image} onChange={e => setImage(e.target.value)}/>
            <h2>Adicione o preço:</h2>
            <input placeholder='Preço' value={price} onChange={e => setPrice(e.target.value)}/>
            <h2>Adicione o tamanho e quantidade:</h2>
            <div class="sizes">
                <input placeholder='Número' value={size} onChange={e => setSize(e.target.value)}/>
                <input placeholder='Quantidade' value={amount} onChange={e => setAmount(e.target.value)}/>
            </div>
            <button onClick={sendForm}>Enviar os dados</button>
        </S.Content>
    );
}