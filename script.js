// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================


const elementos = document.querySelectorAll(".reveal");


function revelar(){

    const alturaTela = window.innerHeight;


    elementos.forEach(elemento => {

        const distanciaTopo =
        elemento.getBoundingClientRect().top;


        if(distanciaTopo < alturaTela - 100){

            elemento.style.opacity = "1";
            elemento.style.transform =
            "translateY(0)";

        }

    });


}


window.addEventListener(
"scroll",
revelar
);


revelar();





// ===============================
// EFEITO DE ENTRADA SUAVE
// ===============================


window.addEventListener(
"load",
()=>{

document.body.style.opacity="1";

}

);





// ===============================
// FECHAR VIDEO INTRO (OPCIONAL)
// ===============================


const video =
document.querySelector(".intro video");


if(video){

video.play().catch(()=>{

console.log(
"Autoplay bloqueado pelo navegador"
);

});

}
