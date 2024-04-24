import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "R$";
  return (
    <div className="bannerContent">
      <h3>Oi Kawan e Arthur,</h3>
      <p>
          Já que o BK deu lanche pra os calvos , integrantes do senai ganha Pizza aqui
      </p>
      <a href={more}>Saiba mais</a>
    </div>
  );
}

export default BannerName;
