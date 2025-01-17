/* eslint-disable no-unused-vars */
// Produtos.jsx
import React from 'react';
import '../../styles/Produtos.css';

const Produtos = () => {
  // Simulação de dados de produtos
  const produtos = [
    { id: 1, nome: 'Shampoo', imagem: 'https://i.pinimg.com/736x/68/c2/aa/68c2aa3e71e904ee44f1a7b721c81c12.jpg', quantidade: 20 },
    { id: 2, nome: 'Condicionador', imagem: 'https://i.pinimg.com/736x/3e/73/1f/3e731f30e8694af197c3f3d8a21e70bb.jpg', quantidade: 15 },
    { id: 3, nome: 'Óleo Capilar', imagem: 'https://i.pinimg.com/564x/cf/bd/d1/cfbdd1c6018de455dce01acc0cea8a91.jpg', quantidade: 10 },
    { id: 4, nome: 'Máscara de Hidratação', imagem: 'https://i.pinimg.com/564x/95/1d/f6/951df62898a5987f1242819a01f73024.jpg', quantidade: 5 }
  ];

  return (
    <div className="container-fluid produtos-container py-5">
      <div className="row">
        {produtos.map(produto => (
          <div key={produto.id} className="col-md-3 mb-4">
            <div className="card produtos-card h-100">
              <img src={produto.imagem} className="card-img-top" alt={produto.nome} />
              <div className="card-body">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text">Quantidade em Estoque: {produto.quantidade}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
