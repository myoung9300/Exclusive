// LocationContext.js

import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Assuming AsyncStorage is used for storage

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
	const [selectedLocation, setSelectedLocation] = useState(null);

	useEffect(() => {
		const fetchLocation = async () => {
			try {
				const storedLocation = await AsyncStorage.getItem("selectedLocation");
				if (storedLocation) {
					setSelectedLocation(storedLocation);
				}
			} catch (error) {
				console.error("Error fetching location from storage:", error);
			}
		};

		fetchLocation();
	}, []);

	const setLocation = async (location) => {
		try {
			await AsyncStorage.setItem("selectedLocation", location);
			setSelectedLocation(location);
			console.log("LocationContext: setLocation - location set to", location);
		} catch (error) {
			console.error("Error setting location to storage:", error);
		}
	};

	return (
		<LocationContext.Provider value={{ selectedLocation, setLocation }}>
			{children}
		</LocationContext.Provider>
	);
};

export const useLocation = () => useContext(LocationContext);
