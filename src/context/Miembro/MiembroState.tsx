import React, { useReducer } from 'react'

import { v4 as uuid } from 'uuid';

import { InitStateMiembro, KEY_STORAGE, Miembro } from '../../model/Miembro.interface';
import { ACTION_MIEMBRO } from '../types';
import MiembroContext from './MiembroContext';
import MiemrbroReducer from './MiemrbroReducer'

type PropsMrbState = {
  children: any
}

const MiembroState = (props: PropsMrbState) => {

  const initialState: InitStateMiembro = {
    miembros: [],
    miembroSeleccionado: null,
    addMiembro: null
  }

  const [state, dispatch] = useReducer(MiemrbroReducer, initialState)

  //  Consuslta de miembros
  const getMiembros = async () => {
    const local = localStorage.getItem(KEY_STORAGE)
    const data = JSON.parse(local != null ? local : "[]") as Miembro[]
    dispatch({
      type: ACTION_MIEMBRO.GET_MIEMBROS,
      payload: {
        miembros: data,
        miembroSeleccionado: null,
        addMiembro: null
      }
    })
  }

  const getMiembro = (id: string) => {
    const local = localStorage.getItem(KEY_STORAGE)
    const data = JSON.parse(local != null ? local : "[]") as Miembro[]
    const m = data.find(d => d.id === id);
    console.log('EDIT => ', m)
    dispatch({
      type: ACTION_MIEMBRO.GET_MIEMBROS,
      payload: {
        miembros: [],
        miembroSeleccionado: m!,
        addMiembro: null
      }
    })

    return m!;
  }

  const addMiembro = async(newMiembro: Miembro) => {
    newMiembro.id = uuid()
    const local = localStorage.getItem(KEY_STORAGE)
    const data = JSON.parse(local != null ? local : "[]") as Miembro[]
    data.push(newMiembro);
    localStorage.setItem(KEY_STORAGE, JSON.stringify(data));
    dispatch({
      type: ACTION_MIEMBRO.ADD_MIEMBRO,
      payload: {
        miembros: [],
        miembroSeleccionado: null,
        addMiembro: newMiembro
      }
    })
  }

  const editMiembro = async(miembro: Miembro) => {
    const local = localStorage.getItem(KEY_STORAGE)
    const data = JSON.parse(local != null ? local : "[]") as Miembro[]
    const idx = data.findIndex(d => d.id === miembro.id);
    data[idx] = miembro
    localStorage.setItem(KEY_STORAGE, JSON.stringify(data));
    dispatch({
      type: ACTION_MIEMBRO.EDIT_MIEMBRO,
      payload: {
        miembros: [],
        miembroSeleccionado: null,
        addMiembro: miembro
      }
    })
  }

  return (
    <MiembroContext.Provider value={{
      miembros: state.miembros,
      miembroSeleccionado: state.miembroSeleccionado,
      getMiembros,
      getMiembro,
      addMiembro,
      editMiembro
    }}>
      {props.children}
    </MiembroContext.Provider>
  )
}

export default MiembroState