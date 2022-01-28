import { createContext } from "react";
import LocalStorage from "../LocalStorage";

function CheckDictionaryStorageTodo_Return(){
    if (LocalStorage.checkStorageItem("DictionaryStorageTodo")) {
        //Get Cookie, Give to Context
        return LocalStorage.getStorageItem("DictionaryStorageTodo")
    } else {
        //Return Empty Object
        return {}
    }
}


export const DictionaryStorageContext = createContext(CheckDictionaryStorageTodo_Return())