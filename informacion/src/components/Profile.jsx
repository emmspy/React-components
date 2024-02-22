// const imageUrl = require(`../assets/perfil-${props.img}.svg`);
// import imageUrl from '../assets/react.svg';

function Profile(props) {
    console.log(props)
  return (
    <div className='contenedor-perfil'>
        <img className='imagen-perfil'
            src={props.imagen}
            alt='Foto de desarrollador' />
        <div className='contenedor-texto-perfil'>
            <p className='nombre-perfil'>
            <strong>{   props.nombre}</strong> en {props.pais}
            </p>
        <p className='cargo-perfil'>
            {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-perfil'>{props.perfil}</p>
        </div>
    </div>
    );
}

export default Profile;
