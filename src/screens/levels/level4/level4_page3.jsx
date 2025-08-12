import LevelScreen from '../../../Components/LevelScreen/levelScreen';
import level4_3 from '../../../assets/images/levels/level4/level4_3.png';

const level4_page3 = () => {
    return (
        <LevelScreen
            previousLevel="/level4-2"
            level={4}
            image={level4_3}
            description="Na etapa final, o Merge Sort compara os elementos de dois grupos e organiza tudo em uma nova lista. Ele sempre escolhe o menor primeiro, garantindo que tudo fique em ordem."
            nextLevel="/level4-4"
        />
    )
}

export default level4_page3;
