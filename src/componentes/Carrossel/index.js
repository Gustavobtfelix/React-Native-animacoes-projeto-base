import React, { useEffect, useRef } from "react";
import { FlatList, Image, View } from "react-native";
import styles from './styles';

export function Carrossel({ data }){
    const carrosselRef = useRef(); // faz referencia a flatList
    
    function alteraPosicaoObjeto(){
        const [indice, setIndice] = useState(0);
        if(indice < data.length -1){
            setIndice(indice +1);
        }
        else {
            setIndice(0);
        }
    }

    useEffect(() => {
        carrosselRef.current.scrollToIndex({ index: 0 })

        const intervalo = setInterval
    }, [])
    
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
              ref={carrosselRef}
            />
        </View>
    )
}