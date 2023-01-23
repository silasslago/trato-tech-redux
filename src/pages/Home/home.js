import Header from "components/Header/header";
import styles from "./home.module.scss";
import relogio from "assets/inicial.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const categorias = useSelector(state => state.categorias);
  const navigate = useNavigate();
  return (
    <div>
      <Header
        titulo="Classificados Tech"
        descricao="Compre diversos tipos de produto no melhor site do Brasil"
        className={styles.header}
        imagem={relogio}
      />
      <div className={styles.categorias}>
        <div className={styles["categorias-title"]}>
          <h1>
            Categorias
          </h1>
        </div>
        <div className={styles["categorias-container"]}>
          {categorias.map(categoria => (
            <div key={categoria.id} onClick={() => navigate(`/categoria/${categoria.id}/`)} >
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}