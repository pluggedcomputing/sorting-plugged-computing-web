import LevelScreen from '../../../Components/LevelScreen/levelScreen';
import level4_1 from '../../../assets/images/levels/level4/level4_1.png';

const level4_page1 = () => {
    return (
        <LevelScreen
            previousLevel="/LevelSelection"
            level={4}
            image={level4_1}
            description="O Merge Sort é um algoritmo que segue a ideia de dividir para conquistar. Ele começa com uma lista de elementos, separa em partes menores e depois junta tudo novamente em ordem, por meio da intercalação."
            nextLevel="/level4-2"
        />
    )
}

export default level4_page1;
