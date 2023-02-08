import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const row = [
  { company: "Alfreds Futterkiste", contact: "Maria Anders", country: "Germany" },
	{ company: "Centro comercial Moctezuma", contact: "Francisco Chang", country: "Mexico" },
	{ company: "Ernst Handel", contact: "Roland Mendel", country: "Austria" },
	{ company: "Island Trading", contact: "Helen Bennett", country: "UK" },
	{ company: "Laughing Bacchus Winecellars", contact: "Yoshi Tannamuri", country: "Canada" },
	{ company: "Magazzini Alimentari Riuniti", contact: "Giovanni Rovelli", country: "Italy" },
];

const column:{ title: string, keyIndex: "company"|"contact"|"country"}[] = [
	{ title: "Company", keyIndex: "company" },
	{ title: "Contanct", keyIndex: "contact" },
	{ title: "Country", keyIndex: "country" },
];

const initialData = { row, column }

const tableReducer = createSlice({
	name: "table",
	initialState: {
		data: initialData,
	},
	reducers: {
		data: (state, action: PayloadAction<any>) => {
			state.data = action.payload;
		},
	},
});

export const TableReducer = tableReducer.reducer;
export const tableAction = tableReducer.actions;