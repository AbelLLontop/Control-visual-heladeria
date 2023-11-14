export const obtenerNumeroAleatorio=(valorAnterior:number)=> {
    const numeroAleatorio = Math.random();
    const numeroEnRango = Math.floor(numeroAleatorio * 11) - 5;  
    if(numeroEnRango + valorAnterior>=100){
      return 100;
    }
    return (numeroEnRango + valorAnterior)<0?0:numeroEnRango + valorAnterior;
  }