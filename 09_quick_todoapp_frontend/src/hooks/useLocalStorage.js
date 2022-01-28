import React, {useState, useEffect} from 'react'
import LocalStorage from '../LocalStorage'


export default function useLocalStorage(keyName, initialValue){
    const [value, setValue] = useState(() => {
		if (LocalStorage.getStorageItem(keyName) === null){
			LocalStorage.setStorageItem(keyName, initialValue)
		}
		else{
			return LocalStorage.getStorageItem(keyName);
		}
	});

	useEffect(() => {
		LocalStorage.setStorageItem(keyName, value)
	  }, [value]);

    return[value, setValue]
}