import { FlatList, Image, View } from "react-native";
import styles from './styles';

export function Carrossel({ data }){
    return (
        <View style={styles.container} >
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Image
                  source={item.imagem}
                  style={styles.image}
                  resizeMode="contain"
                />
              )}
            />
        </View>
    )
}