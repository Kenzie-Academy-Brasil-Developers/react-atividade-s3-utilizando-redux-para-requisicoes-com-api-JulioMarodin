import { useSelector } from 'react-redux';
import './styles.css';

const Digimons = () => {
  const { digimons } = useSelector((state) => state);
  console.log(digimons);

  return (
    <div className="digimon__container">
      <ul>
        {digimons.map((digimon, index) => (
          <li key={index}>
            <p>{digimon.name}</p>
            <img alt={digimon.name} src={digimon.img} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Digimons;
