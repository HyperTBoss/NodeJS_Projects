function deleteItem(keyToGet){
  if (localStorage.getItem(keyToGet) === null){
    console.log(`Key: ${keyToGet} doesn't exist.`)
  }
  else{
    localStorage.removeItem(keyToGet)
  }
}
function checkStorageItem(keyToGet) {
    if (typeof window !== 'undefined') {
      //console.log('we are running on the client')

      if (localStorage.getItem(keyToGet) === null) {
        return false
      } else {
        return true
      }
      
    } else {
      //console.log('we are running on the server');
    }
    
}
function setStorageItem(keyToSet, keyValue) {
  if (typeof window !== 'undefined') {
    //console.log('we are running on the client')
    localStorage.setItem(keyToSet, keyValue)
  } else {
    //console.log('we are running on the server');
  }
  
}
function getStorageItem(keyToGet){
  if (typeof window !== 'undefined') {
    //console.log('we are running on the client')
    if (localStorage.getItem(keyToGet) == null){
      console.log(`Key: ${keyToGet} does not exist, or has not value.`);
      return null
    }else{
      return localStorage.getItem(keyToGet)
    }
    
  } else {
    //console.log('we are running on the server');
  }
}


export default {getStorageItem, setStorageItem, checkStorageItem, deleteItem}