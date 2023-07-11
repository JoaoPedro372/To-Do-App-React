
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
logoImage: {
    height: 250,
    width: 250,
    marginTop: 50
  },
  containerlogo: {
    backgroundColor: 'black',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: '#333333',
    flex: 1,
  },
  input: {
    height: 56,
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 5,
    color: 'black',
    fontSize: 16,
    justifyContent: 'center',
    margin: 10,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    borderWidth: 4,
    borderColor: 'black'
  },
  inputForm: {
    flexDirection: 'row',
    position: 'absolute',
    top: 180,
  },
  buttonAdd: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#FFF'
  },
  textButtonAdd: {
    fontSize: 40,
    color: '#FFF',
    bottom: 2
  },
  containerText: {
    backgroundColor: '#262626',
    color: '#F2F2F2',
    marginBottom: 8,
    flexDirection: 'row',
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00BFFF'
    
  },
  flatlist: {
    marginTop: 40,
    marginBottom: 40,
    
  },
  tarefaConcluida: {
    backgroundColor: 'red'
  },
  removerButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    margin: 10
  },
  removerButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30,
    textAlignVertical: 'center',
  },
  checkboxSt: {
    
  },
  textBox: {
    color: '#FFF',
    flex: 1,
    justifyContent: 'center'
  },
  textStyle: {
    color: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16
  },
  caixaCriada: {
    flexDirection: 'row',
    flex: 1
  },
  qtdTarefas: {
    top: 30,
    margin: 10,
    marginRight: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BFFF',
    fontFamily: 'Verdana'
  },
  qtdTarefasNumber: {
    top: 30,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BFFF',
    fontFamily: 'Verdana',
    backgroundColor: '#262626',
    height: 27,
    width: 25,
    paddingTop: 2,
    textAlign: 'center',
    borderRadius: 10,
    overflow: 'hidden'
  },
  caixaConcluida: {
    flexDirection: 'row',
    marginRight: 10
  },
  qtdTarefasConcluidas: {
    top: 30,
    margin: 10,
    marginRight: 5,
    fontSize: 16,
    justifyContent: 'flex-end',
    fontWeight: 'bold',
    color: '#FF1493',
    fontFamily: 'Verdana'
  },
  qtdTarefasConcluidasNumber: {
    top: 30,
    marginTop: 10,
    justifyContent: 'flex-end',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF1493',
    fontFamily: 'Verdana',
    backgroundColor: '#262626',
    height: 27,
    width: 25,
    paddingTop: 2,
    textAlign: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  tarefasDados: {
    flexDirection: 'row',
  }
});
