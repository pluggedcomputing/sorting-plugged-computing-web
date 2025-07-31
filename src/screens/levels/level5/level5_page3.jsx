import LevelScreen from '../../../Components/LevelScreen/levelScreen';
import level5_3 from '../../../assets/images/levels/level5/level5_3.png';

const level5_page3 = () => {
    return (
        <LevelScreen
            previousLevel="/level5-2"
            level={5}
            image={level5_3}
            description="Na etapa final, o Merge Sort compara os elementos de dois grupos e organiza tudo em uma nova lista. Ele sempre escolhe o menor primeiro, garantindo que tudo fique em ordem."
            nextLevel="/level5-4"
        />
    )
}

export default level5_page3;
