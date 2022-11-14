export interface InitStateMiembro {
    miembros: Miembro[],
    miembroSeleccionado: Miembro|null,
    addMiembro: Miembro|null
}

export interface MbrContext {
    miembros?: Miembro[],
    miembroSeleccionado: Miembro|null,
    getMiembros?: () => {},
    getMiembro?: (id: string) => Miembro,
    addMiembro?: (m: Miembro) => {}, 
    editMiembro?: (m: Miembro) => {}, 
}

export interface Miembro {
    id?:          string;
    nombre:      string;
    apellidoP:   string;
    apellidoM:   string;
    email:       string;
    avatar:      string;
    twitter:     string;
    isTermAccept:boolean;
}

export type ACTION<T> = {
    type: string,
    payload: T
}

export const KEY_STORAGE: string = 'miembros';