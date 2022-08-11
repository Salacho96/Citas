import React, { useState, useEffect } from 'react'
import {
    Text,
    Modal,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    Alert,
    Pressable,
    Button
  } from 'react-native';
 
import DatePicker from 'react-native-date-picker';


const Formulario = ({ cerrarModal, modalVisible, setPacientes, pacientes, paciente: pacienteObj, setPaciente:setPacienteApp})=>{

    const [paciente,setPaciente]=useState('')//valor state,fun que modifica el state
    const [id,setId]=useState('')
    const [propietario,setPropietario]=useState('')
    const [email,setEmail]=useState('')   
    const [telefono,setTelefono]=useState('')
    const [fecha,setFecha]=useState(new Date())
    const [sintomas,setSintomas]=useState('') 

    useEffect(()=>{
      if(Object.keys(pacienteObj).length > 0){
        setPaciente(pacienteObj.paciente)
        setPropietario(pacienteObj.propietario)
        setEmail(pacienteObj.email)
        setTelefono(pacienteObj.telefono)
        setFecha(pacienteObj.fecha)
        setSintomas(pacienteObj.sintomas)
        setId(pacienteObj.id)
      }
      

    }, [pacienteObj])

    //console.log(pacienteObj)
    

    const handleCita =()=> {
      if([paciente,propietario,email,fecha,sintomas].includes('')){
        Alert.alert(
          'Error',
          'Todos los Campos son Obligatorios',
          [{text: 'Entendido'}]
        )
        return 
      }

      const nuevoPaciente={
        //id: Date.now(),
         paciente,
         propietario,
         email,
         telefono,
         fecha,
         sintomas
      }

      //revisa si es un registro nuevo o edicion
      if(id){
        //editando
        nuevoPaciente.id=id
        const pacientesActualizados =pacientes.map( pacienteState => 
          pacienteState.id===nuevoPaciente.id ? nuevoPaciente :
          pacienteState )
          setPacientes(pacientesActualizados)
          setPacienteApp({})
        // console.log('id',id)
        // console.log('edicion',nuevoPaciente)
        // return
      }else{
        //registrando
        nuevoPaciente.id=Date.now()
        setPacientes( [...pacientes,nuevoPaciente] )
      }




      //console.log(nuevoPaciente)
      
      cerrarModal()
      setId('')
      setPaciente('')
      setPropietario('')
      setEmail('')
      setTelefono('')
      setFecha(new Date())
      setSintomas('')

      //console.log(pacientes)
      
    }

    //console.log(pacienteObj)


    return(
      <Modal
       animationType='slide'
       visible={modalVisible}>
        <SafeAreaView style={styles.contenido}>
          <ScrollView>

            <Text style={styles.titulo}>{pacienteObj.id ? 'Editar Cita' : 'Nueva Cita'}</Text>

            <Pressable 
              style={styles.btnCancelar}
              onPress={ ()=> {
                cerrarModal()
                setId('')
                setPacienteApp({})
                setPaciente('')
                setPropietario('')
                setEmail('')
                setTelefono('')
                setFecha(new Date())
                setSintomas('')
              }}
            > 
              <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
            </Pressable>

            <View style={styles.campo}>
              <Text style={styles.label}>Nombre del Paciente</Text>
              <TextInput
              style={styles.input} 
              placeholder='Ingrese el Nombre del Paciente'
              placeholderTextColor={'#666'}
              keyboardType='email-address'
              value={paciente}
              onChangeText={setPaciente}
              />
            </View>

            <View style={styles.campo}>
              <Text style={styles.label}>Nombre del Propietario</Text>
              <TextInput
              style={styles.input}
              placeholder='Ingrese el Email del Propietario'
              placeholderTextColor={'#666'}
              keyboardType='email-address'
              value={propietario}
              onChangeText={setPropietario}
              />
            </View>

            <View style={styles.campo}>
              <Text style={styles.label}>Correo del Propietario</Text>
              <TextInput
              style={styles.input}
              placeholder='Ingrese el Nombre del Propietario'
              placeholderTextColor={'#666'}
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}
              />
            </View>

            <View style={styles.campo}>
              <Text style={styles.label}>Telefono del Propietario</Text>
              <TextInput
              style={styles.input}
              placeholder='Ingrese el Telefono del Propietario'
              placeholderTextColor={'#666'}
              keyboardType='number-pad'
              value={telefono}
              onChangeText={setTelefono}
              maxLength={10}
              />
            </View>

            <View style={styles.campo}>
              <Text style={styles.label}>Fecha de Alta</Text>
              <View
              style={styles.fechaContenedor}>
                <DatePicker
                date={fecha}
                locale='es'
                onDateChange={ (date)=> setFecha(date)}
                />
              </View>
            </View>

            <View style={styles.campo}>
              <Text style={styles.label}>Sintomas del Paciente</Text>
              <TextInput  
              style={[styles.input,styles.sintomasInput]}
              placeholder='Ingrese los Sintomas del Paciente'
              placeholderTextColor={'#666'}
              keyboardType='number-pad'
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
              />
            </View>

            <Pressable 
              style={styles.btnNuevaCita}
              onPress={handleCita}
            > 
              <Text style={styles.btnNuevaCitaTexto}>{pacienteObj.id ? 'Editar Paciente' : 'Agregar Paciente'}</Text>
            </Pressable>


          </ScrollView>
        </SafeAreaView>
       </Modal>
    );
}

const styles = StyleSheet.create({
    contenido:{
        backgroundColor: '#3A6FCF',
        flex: 1,
    },
    titulo: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: '600',
      marginTop: 30,
      color:'#FFF',
    },
    tituloBold:{
      fontWeight: '900',
      color: '#FFF'
    },
    campo:{
        marginTop: 10,
        marginHorizontal: 30,
    },
    label:{
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600',
        
    },
    input:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
    },
    sintomasInput:{
        height: 100,
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
    },
    fechaContenedor:{
        backgroundColor: '#FFF',
        borderRadius: 15,
    },
    btnCancelar:{
      marginVertical: 30,
      backgroundColor: '#5827A4',
      marginHorizontal: 30,
      borderRadius: 10,
      padding: 15,
      borderWidth: 1,
      borderColor: '#FFF',
      marginBottom: 10
    },
    btnCancelarTexto:{
      textAlign: 'center',
      color: '#FFF',
      fontSize: 20,
      fontWeight: '900',
      textTransform: 'uppercase'
    },
    btnNuevaCita:{
        marginVertical: 50,
        backgroundColor: '#F59E0B',
        paddingVertical: 18,
        marginHorizontal: 30,
        borderRadius: 10
    },
    btnNuevaCitaTexto:{
        textAlign: 'center',
        color: '#5827A4',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 15
    },
  });

export default Formulario