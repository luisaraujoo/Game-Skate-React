import { useState, useEffect } from "react";
import "./Challenge.css";

const Challenge = ({}) => {
  const [challenge1, setChallenge1] = useState("");
  const [prenda1, setPrenda1] = useState("");
  const [challenge2, setChallenge2] = useState("");
  const [prenda2, setPrenda2] = useState("");

  // Desafios da parte azul
  class Challenge1 {
    constructor(challenge, prenda) {
      this.challenge = challenge;
      this.prenda = prenda;
    }

    exibirChallenge() {
      return `${this.challenge}`;
    }

    exibirPrenda() {
      return `${this.prenda}`;
    }
  }

  // Populando os desafios
  let challenges = [
    new Challenge1("Flip", "fazer 10 flexões"),
    new Challenge1("HeelFlip", "peteleco na orelha"),
    new Challenge1("Heel sem mãos", "cantar uma musica"),
    new Challenge1("360° Flip", "dancinha TikTok"),
    new Challenge1("Hard Flip", "bebê chorando"),
    new Challenge1("360° shovt", "falar igual mineiro"),
    new Challenge1("Front e Back", "colocar a camisa ao contrario"),
    new Challenge1("360° Shovit", "postar selfie zuada"),
    new Challenge1("Flip vendado", "equilibrar o skate na cabeça"),
    new Challenge1("3 seguidas", "imitar um animal 20s"),
    new Challenge1("Varial Flip", "10 polichinelos"),
    new Challenge1("Impossible", "congela 1 min"),
    new Challenge1("Swicth Shovit", "andar caranguejo"),
    new Challenge1("Alguma / Nollie", "peteleco na orelha"),
  ];

  // Função para gerar o desafio
  function gerarChallenge() {
    const indiceAleatorio = Math.floor(Math.random() * challenges.length);
    const desafioSelecionado = challenges[indiceAleatorio];

    setChallenge1(desafioSelecionado.challenge);
    setPrenda1(desafioSelecionado.prenda);
  }

  class Challenge2 {
    constructor(challenge, prenda) {
      this.challenge = challenge;
      this.prenda = prenda;
    }

    exibirChallenge2() {
      return `${this.challenge}`;
    }

    exibirPrenda2() {
      return `${this.prenda}`;
    }
  }

  // Populando os desafios
  let challenges2 = [
    new Challenge1("Flip", "fazer 10 flexões"),
    new Challenge1("HeelFlip", "peteleco na orelha"),
    new Challenge1("Heel sem mãos", "cantar uma musica"),
    new Challenge1("360° Flip", "dancinha TikTok"),
    new Challenge1("Hard Flip", "bebê chorando"),
    new Challenge1("360° shovt", "falar igual mineiro"),
    new Challenge1("Front e Back", "colocar a camisa ao contrario"),
    new Challenge1("360° Shovit", "postar selfie zuada"),
    new Challenge1("Flip vendado", "equilibrar o skate na cabeça"),
    new Challenge1("3 seguidas", "imitar um animal 20s"),
    new Challenge1("Varial Flip", "10 polichinelos"),
    new Challenge1("Impossible", "congela 1 min"),
    new Challenge1("Swicth Shovit", "andar caranguejo"),
    new Challenge1("Alguma / Nollie", "peteleco na orelha"),
  ];

  // Função para gerar o desafio
  function gerarChallenge2() {
    const indiceAleatorio = Math.floor(Math.random() * challenges2.length);
    const desafioSelecionado = challenges2[indiceAleatorio];

    setChallenge2(desafioSelecionado.challenge);
    setPrenda2(desafioSelecionado.prenda);
  }

  useEffect(() => {
    gerarChallenge();
    gerarChallenge2();
  });

  const goMenuPrincipal = () => {
    window.location.reload();
  };

  return (
    <>
      <h2 id="challenge1">{challenge1}</h2>
      <p>{prenda1}</p>
      <button
        id="btn-challenge"
        onClick={() => {
          gerarChallenge();
          gerarChallenge2();
        }}
      >
        next challenge
      </button>
      <h2 id="challenge2">{challenge2}</h2>
      <p>{prenda2}</p>
      <button id="btn-menuPrincipal" onClick={goMenuPrincipal}>
        Menu Principal
      </button>
    </>
  );
};

export default Challenge;
