import LevelScreen from '../../../Components/LevelScreen/levelScreen';
import level5_1 from '../../../assets/images/levels/level5/level5_1.png';

const level5_page1 = () => {
    return (
        <LevelScreen
            previousLevel="/LevelSelection"
            level={5}
            image={level5_1}
            description="O Merge Sort é um algoritmo que segue a ideia de dividir para conquistar. Ele começa com uma lista de elementos, separa em partes menores e depois junta tudo novamente em ordem, por meio da intercalação."
            nextLevel="/level5-2"
        />
    )
}

export default level5_page1;
