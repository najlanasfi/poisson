import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  poissons:[
     { nom:'Loche tigrée à queue rouge',
     description:'La loche tigrée à queue rouge est un poisson vivant en petits groupes qui réside naturellement sur le fond '
     ,prix:100,imageP:'https://www.fishipedia.fr/wp-content/uploads/2016/10/Aborichthys-elongatus-low-725x483.jpg',rating:5 },
     { nom:'Abramites marbré',
     description:'La loche tigrée à queue rouge est un poisson vivant en petits groupes qui réside naturellement sur le fond '
     ,prix:100,imageP:'https://www.fishipedia.fr/wp-content/uploads/2015/03/Abramites-hypselonotus-725x483.jpg',rating:5 },
     { nom:'Sergent major des caraibes',
     description:'Le Sergent-major à queue en ciseaux (Abudefduf sexfasciatus) est un poisson appartenant à la famille des Pomacentridae. '
     ,prix:100 , imageP:'https://www.fishipedia.fr/wp-content/uploads/2018/10/Abudefduf-saxatilis-Akumal-Mexico-725x483.jpg' ,rating:5},
    
    ],

}

export const poissonSlice = createSlice({
  name: 'poissons',
  initialState,
  reducers: {
    
    },
    
  })
  
  // Action creators are generated for each case reducer function
  export const {  } = poissonSlice.actions
  
  export default poissonSlice.reducer