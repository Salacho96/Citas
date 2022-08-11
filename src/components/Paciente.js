import React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { formatearFecha } from '../helpers'

const Paciente = ( { item, setModalVisible, pacienteEditar,pacienteEliminar, setModalPaciente,setPaciente } ) => {

    const {paciente,fecha,id} = item

    // const formatearFecha= fecha => {
    //     const nuevaFecha = new Date(fecha)
    //     const opciones = {
    //         weekday: 'long',
    //         year: 'numeric',
    //         month: 'long',
    //         day: 'numeric'
    //     }
    //     return nuevaFecha.toLocaleDateString('es-ES',opciones)
    // }


  return (
    <Pressable
        onPress={ ()=> {
            setModalPaciente(true)
            setPaciente(item)
        }}
        
    >
        <View style={styles.contenedor}>
            <Text style={styles.label}>Paciente: </Text>
            <Text style={styles.texto}>{paciente}</Text>
            <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

            <View style={styles.contenedorBotones}>
                <Pressable 
                    style={[styles.btn,styles.btnEditar]}
                    onPress={ ()=> {
                        setModalVisible(true)
                        pacienteEditar(id)
                    }}
                >
                    <Text style={styles.btnTexto}>Editar</Text>
                </Pressable>

                <Pressable 
                    style={[styles.btn,styles.btnEliminar]}
                    onPress={ ()=> pacienteEliminar(id) }
                >
                    <Text style={styles.btnTexto}>Eliminar</Text>
                </Pressable>

            </View>

        </View>
    </Pressable>
    
  )
}

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor:'#FFF',
        padding: 20,
        borderBottomColor: '#3A6FCF',
        borderBottomWidth: 1
    },
    label:{
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: 10,
    },
    texto:{
        color: '#3A6FCF',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
    },
    fecha:{
        color: '#374151'
    },
    contenedorBotones:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    btn:{
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    btnEditar:{
        backgroundColor: '#F59E0B'
    },
    btnEliminar:{
        backgroundColor: '#EF4444'
    },
    btnTexto:{
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 12,
        color: '#FFF'
    }
})

export default Paciente
