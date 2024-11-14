import "./MenuPrincipal.css";

const MenuPrincipal = ({ onClick }) => {
  return (
    <>
      <h2>Game Of Desafio</h2>
      <p id="pMenuPrincipal">edição skate</p>
      <button id="btn-start" onClick={onClick}>
        START
      </button>
    </>
  );
};

export default MenuPrincipal;
