import React from 'react'
import {
    Pressable,
    SafeAreaView,
    Text,
    View,
    StyleSheet
} from 'react-native'

import { formatearFecha } from '../helpers'

const InformacionPaciente = ({paciente, setModalPaciente, setPaciente}) => {
    //console.log(paciente)

  return(
    <SafeAreaView
    style={styles.contenedor}>
        <View>

            <Text style={styles.titulo}>Informacion Paciente</Text>

            <View>
                <Pressable
                    style={styles.btnCerrar}
                    onPress={ ()=> {
                        setModalPaciente(false)
                        setPaciente({})
                    }}
                >
                    <Text style={styles.btnCerrarTexto}>X Cerrar</Text>
                </Pressable>
            </View>

            <View style={styles.contenido}>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Paciente: </Text>
                    <Text style={styles.valor}>{paciente.paciente}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre propietario: </Text>
                    <Text style={styles.valor}>{paciente.propietario}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Email: </Text>
                    <Text style={styles.valor}>{paciente.email}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Paciente: </Text>
                    <Text style={styles.valor}>{paciente.telefono}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha Alta: </Text>
                    <Text style={styles.valor}>{formatearFecha(paciente.fecha )}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Paciente: </Text>
                    <Text style={styles.valor}>{paciente.sintomas}</Text>
                </View>

            </View>
            
        </View>
        
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor: '#3A6FCF',
        flex: 1,
    },
    contenido:{
        marginTop: 30,
        backgroundColor:'#FFF',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    titulo: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: '600',
      marginTop: 30,
      color:'#FFF',
    },
    
    btnCerrar:{
      marginVertical: 30,
      backgroundColor: '#5827A4',
      marginHorizontal: 30,
      borderRadius: 10,
      padding: 15,
      borderWidth: 1,
      borderColor: '#FFF',
      marginBottom: 10
    },
    btnCerrarTexto:{
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
    campo:{
        marginBottom: 10
    },
    label:{
        textTransform: 'uppercase',
        color: '#37',
        fontWeight: '600',
        fontSize: 12
    },
    valor:{
        fontWeight: '700',
        fontSize: 20,
        color: '#9CA6F3'
    }
  });

export default InformacionPaciente