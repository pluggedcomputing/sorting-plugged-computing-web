import LevelScreen from '../../../Components/LevelScreen/levelScreen';
import level5_2 from '../../../assets/images/levels/level5/level5_2.png';

const level5_page2 = () => {
    return (
        <LevelScreen
            previousLevel="/level5-1"
            level={5}
            image={level5_2}
            description="O Merge Sort segue passos bem definidos para colocar os elementos na ordem correta. Ele garante que, ao final de cada etapa, tudo esteja mais próximo do resultado ideal."
            nextLevel="/level5-3"
        />
    )
}

export default level5_page2;
