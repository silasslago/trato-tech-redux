import styles from './item.module.scss';
import {
  AiOutlineHeart,
  AiFillHeart,
} from 'react-icons/ai';
import {
  FaCartPlus
} from 'react-icons/fa';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { atualizarFavorito } from 'Store/reducers/itens';

const iconeProps = {
  size: 24,
  color: '#041833',
};

export default function Item(props) {

  const dispatch = useDispatch();

  const {
    titulo,
    foto,
    preco,
    descricao,
    favorito,
    id,
    carrinho,
  } = props;

  function atualizarCurFavorito() {
    dispatch(atualizarFavorito(id));
  }

  return (
    <div className={classNames(styles.item, {
      [styles.itemNoCarrinho]: carrinho,
    })}>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>
            R$ {preco.toFixed(2)}
          </div>
          <div className={styles['item-acoes']}>
            {favorito ? (
              <AiFillHeart {...iconeProps} color='#ff0000' className={styles['item-acao']} onClick={atualizarCurFavorito} />
            ) : (
              <AiOutlineHeart {...iconeProps} className={styles['item-acao']} onClick={atualizarCurFavorito} />
            )}
            <FaCartPlus
              {...iconeProps}
              color={true ? '#1875E8' : iconeProps.color}
              className={styles['item-acao']}
            />
          </div>
        </div>
      </div>
    </div>
  )
}