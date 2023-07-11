
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { CheckBox, ListItem } from 'react-native-elements';
import { styles } from './styles';

export default function Home() {
  const [tarefas, setTarefas] = useState<{ nome: string; concluida: boolean }[]>([]);
  const [nomeTarefa, setNomeTarefa] = useState('');

  function addTarefa() {
    setTarefas(prevState => [...prevState, { nome: nomeTarefa, concluida: false }]);
    setNomeTarefa('');
    console.log('funcionou');
  }

  function toggleConcluida(index: number) {
    setTarefas(prevState =>
      prevState.map((tarefa, i) => {
        if (i === index) {
          return { ...tarefa, concluida: !tarefa.concluida };
        }
        return tarefa;
      })
    );
  }

  function removerTarefa(index: number) {
    setTarefas(prevState => prevState.filter((_, i) => i !== index));
  }

  function renderTarefa({ item, index }: { item: { nome: string; concluida: boolean }; index: number }) {
    return (
        <View style={[ styles.containerText ]}>
          <View style={styles.checkboxSt}> 
            <CheckBox
              checked={item.concluida}
              onPress={() => toggleConcluida(index)}
              checkedColor="green"
              containerStyle={styles.checkboxSt}
            />
          </View>

          <View style={styles.textBox}>
            <Text style={styles.textStyle}>
              {item.nome}
            </Text>
          </View>

          <View style={styles.removerButton}>
            <TouchableOpacity
              onPress={() => removerTarefa(index)}
            >
              <Image source={require('./../../../assets/deletelogo.png')} style={styles.removerButton} />
            </TouchableOpacity>
          </View>
      </View>
      
    );
  }

  function getQtdTarefas() {
    return tarefas.length
  }

  function getQtdTarefasConluidas() {
    return tarefas.filter(tarefa => tarefa.concluida).length
  }

  return (
    <>
        <View style={styles.containerlogo}>
          <Image source={require('./../../../assets/todologo.png')} style={styles.logoImage} />
        </View>

        <View style={styles.form}>

          <View style={styles.tarefasDados}>
            <View style={styles.caixaCriada}>
              <Text style={styles.qtdTarefas}>Criadas: </Text>
              <Text style={styles.qtdTarefasNumber}>{getQtdTarefas()}</Text>
            </View>

            <View style={styles.caixaConcluida}>
              <Text style={styles.qtdTarefasConcluidas}>Concluídas: </Text>
              <Text style={styles.qtdTarefasConcluidasNumber}>{getQtdTarefasConluidas()}</Text>
            </View>
          </View>

        <FlatList
          style={styles.flatlist}
          data={tarefas}
          renderItem={renderTarefa}
          keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.inputForm}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#333333"
            onChangeText={setNomeTarefa}
            value={nomeTarefa}
            maxLength={86}
          />

          <TouchableOpacity style={styles.buttonAdd} onPress={addTarefa}>
            <Text style={styles.textButtonAdd}>+</Text>
          </TouchableOpacity>
        </View>
    </>
  );
}
