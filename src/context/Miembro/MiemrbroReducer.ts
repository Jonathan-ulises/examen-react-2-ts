import { ACTION, InitStateMiembro } from "../../model/Miembro.interface";
import { ACTION_MIEMBRO } from '../types';

export default (state: InitStateMiembro, action: ACTION<InitStateMiembro>) => {
    const {payload, type} = action;
    console.log('ACTION ', action)
    switch (type) {
        case ACTION_MIEMBRO.GET_MIEMBROS:
            return {
                ...state,
                miembros: payload.miembros
            };
        case ACTION_MIEMBRO.GET_MIEMBRO:
            return {
                ...state,
                miembroSeleccionado: payload.miembroSeleccionado
            };
        case ACTION_MIEMBRO.ADD_MIEMBRO:
            return {
                ...state,
                miembros: [...state.miembros, payload.addMiembro!],
                addMiembro: payload.addMiembro
            };
        case ACTION_MIEMBRO.EDIT_MIEMBRO:
            return {
                ...state,
                miembros: [...state.miembros, payload.addMiembro!],
                addMiembro: payload.addMiembro
            };
        default:
            return {
                ...state,
                miembroSeleccionado: payload.miembroSeleccionado
            };
    }
}