import LevelScreen from '../../../Components/LevelScreen/levelScreen';
import level4_2 from '../../../assets/images/levels/level4/level4_2.png';

const level4_page2 = () => {
    return (
        <LevelScreen
            previousLevel="/level4-1"
            level={4}
            image={level4_2}
            description="O Merge Sort segue passos bem definidos para colocar os elementos na ordem correta. Ele garante que, ao final de cada etapa, tudo esteja mais próximo do resultado ideal."
            nextLevel="/level4-3"
        />
    )
}

export default level4_page2;
