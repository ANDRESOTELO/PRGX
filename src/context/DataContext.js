import React, { useState, createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

	const [token, setToken] = useState('');
	console.log(token)

	return (
		<DataContext.Provider value={{ token, setToken }}>
			{ children }
		</DataContext.Provider>
	)
}
