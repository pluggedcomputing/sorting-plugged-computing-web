import LevelScreen from '../../../Components/LevelScreen/levelScreen';
import level5_1 from '../../../assets/images/levels/level5/level5_1.png';

const level5_page1 = () => {
    return (
        <LevelScreen
            previousLevel="/LevelSelection"
            level={5}
            image={level5_1}
            description="Agora vamos comparar três métodos de ordenação: Insertion Sort, Quicksort e Merge Sort."
            nextLevel="/level5-2"
        />
    )
}

export default level5_page1;