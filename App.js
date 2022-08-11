import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  Modal,
  Alert 
} from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/InformacionPaciente';

const App = () => {

  //zona de hooks  
  const [modalVisible,setModalVisible] = useState(false)

  const [pacientes,setPacientes]=useState([])

  const [paciente,setPaciente] = useState({})

  const [modalPaciente,setModalPaciente] = useState(false)


  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id )
    setPaciente(pacienteEditar[0])
    //console.log(pacienteEditar)
  }

  const pacienteEliminar = id =>{
    console.log('eliminando',id)
    Alert.alert(
      'Esta Seguro de Realizar Esta Accion?',
      'Esta Accion no se Puede Deshacer',
      [
        { text: 'Cancelar'},
        { text: 'Eliminar', onPress: ()=> {
          
          const pacientesActualizados = pacientes.filter( 
            pacientesState =>  pacientesState.id !== id
            )

            setPacientes(pacientesActualizados)

      }},
      ]
    )
  }

  const cerrarModal=()=>{
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.containter}>

       <Text style={styles.titulo}>Administrador de Citas {''}
          <Text style={styles.tituloBold}>Medicas</Text>
       </Text>

       <Pressable
       style={styles.btnNuevaCita}
       onPress={()=>setModalVisible(!modalVisible)}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
       </Pressable>


       {pacientes.length === 0 ? 
       <Text style={styles.noPacientes}>No hay pacientes</Text> : 
       <FlatList
       style={styles.listado}
       data={pacientes}
       keyExtractor={(item) => item.id}
       renderItem={({item}) =>{
        return(
          <Paciente
            item={item}
            setModalVisible={setModalVisible}

            setPaciente={setPaciente}

            pacienteEditar={pacienteEditar}
            pacienteEliminar={pacienteEliminar}
            setModalPaciente={setModalPaciente}
          />
        )
       }}
       />
       }


       {modalVisible && (
        <Formulario
          cerrarModal={cerrarModal}
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
       )}

       <Modal
        visible={modalPaciente}
        animationType='fade'
        >
        <InformacionPaciente
          paciente={paciente}
          setModalPaciente={setModalPaciente}
          setPaciente={setPaciente}
        />
       </Modal>
       

    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  FlatlistTitulo:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  tituloBold:{
    fontWeight: '900',
    color: '#3A6FCF'
  },
  containter: {
    backgroundColor: '#FFF'
  },
  btnNuevaCita:{
    backgroundColor: '#3A6FCF',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoNuevaCita:{
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  noPacientes:{
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  listado:{
    marginTop: 50,
    marginHorizontal: 30,
  }
});

export default App;
