import React, { useEffect, useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import { VictoryChart, VictoryLine } from 'victory-native';
import SensorItem from '../components/SensorItem';
import mockData from '../data/mockData.json';

export default function SensorListScreen({ navigation }) {
  const [sensores, setSensores] = useState([]);

  useEffect(() => {
    // Simula fetch inicial
    setSensores(mockData.sensores);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={sensores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          // Converte o array de histórico em pontos x/y para o gráfico
          const dadosGrafico = item.historico.map((valor, index) => ({
            x: index + 1,
            y: valor
          }));

          return (
            <View style={{ margin: 10 }}>
              <SensorItem
                sensor={item}
                onPress={() => navigation.navigate('Detalhes', { sensor: item })}
              />
              <VictoryChart>
                <VictoryLine data={dadosGrafico} />
              </VictoryChart>
            </View>
          );
        }}
      />
      <Button title="Configurações" onPress={() => navigation.navigate('Configurações')} />
    </View>
  );
}


