export interface CountryState{
    regions : any;
    countries : any;
    
}

export const initialState : CountryState={
    regions:[],
    countries : []
}

export function getInitialState() : CountryState {
    return initialState;
}