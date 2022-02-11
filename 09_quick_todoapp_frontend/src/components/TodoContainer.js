import { v4 as uuidv4 } from 'uuid';
import { Container, Box, Button, Input, FormControl, FormHelperText, InputLabel } from '@mui/material'
import LocalStorage from "../LocalStorage";

import {useState, useMemo, useEffect} from 'react'

import useLocalStorage from '../hooks/useLocalStorage';
import {DictionaryStorageContext} from '../hooks/DictionaryCookieContext';

import TodoChild from './TodoChild';

const headerStyle = {
    padding: '10px'
}

function ContainerHeader(){
    return (
        <Box sx={{ 
            bgcolor: 'primary.main',
            width: '100%',
            height: '100px' }}>
            <header style = {headerStyle}>
                <h1>TODO</h1>
            </header>
        </Box>
    )
}
//Make sure each name is unique
function CombineStringToID(RandomArrayOfStrings = null){//name, group ='', tag=''
  let combination

  if (RandomArrayOfStrings !== null || RandomArrayOfStrings !== undefined){
    RandomArrayOfStrings.forEach(stringToAttach => {
      combination += `${stringToAttach}-`
    });
  }

  combination += `${uuidv4()}`
  return combination
}

//This function will interate through values and functions. And another array that will iterate through args.
function renderFormInputs(name, inputLabelName, UseStateArray, [ //Array of Arguments starts.
  htmlForText = "Text Input", 
  autoFocusBool = false, 
  width = 100, 
  height = 50, 
  fullWidthBool = false, 
  ariaDescribedByName = "Untitled Area", 
  helperTextVal = "", 
  helperTextID = ""]){ //End of Function
  
  // The empty array will contain an array with objects with {setValue, setValueFunction} from useState or any other varient
  UseStateArray.forEach(UseStateArrayMember => {
    let setValue = UseStateArrayMember[0]
    let setValueFunction = UseStateArrayMember[1]
    return(
      <FormControl id = {CombineStringToID([name])} name={name}>
        <InputLabel htmlFor={htmlForText}>{inputLabelName}</InputLabel>
        <Input
          autoFocus={autoFocusBool}
          fullWidth={fullWidthBool}
          aria-describedby={ariaDescribedByName}
          value={setValue}
          onChange={e => setValueFunction(e.target.value)}
        />
        <FormHelperText id={helperTextID}>{helperTextVal}</FormHelperText>
      </FormControl>
    );
  })
}

function CheckDictionaryStorageTodo_Return(){
  if (LocalStorage.checkStorageItem("DictionaryStorageTodo")) {
      //Get Cookie, Give to Context
      return LocalStorage.getStorageItem("DictionaryStorageTodo")
  } else {
      //Return Empty Object
      return {}
  }
}

function ContainerFooter(){
    return (
        <>
            <Button variant="contained"></Button>
        </>
    )
}

const TodoContainer = (props) => {
  const [cacheTitle, setCacheTitle] = useLocalStorage('cacheTitle', '')
  const [cacheContent, setCacheContent] = useLocalStorage('cacheContent', '')
  const [cacheID, setCacheID] = useLocalStorage('cacheID', '')
  const [cacheTag, setCacheTag] = useLocalStorage('cacheTag', '')
  const [cacheGroup, setCacheGroup] = useLocalStorage('cacheGroup', '')

  let buttonClicked = false

  const HandleSubmit = () => {
    console.log("Handled Input")
    //Validate all for Empty Inputs.

    //Validate Input of Title
    if (cacheTitle){

    }

    //Validate Input of Content
    if (cacheContent){
      
    }

    //Validate Input of ID, because, why not. 
    if (cacheID){
      
    }

    //Validate Input of Tag
    if (cacheTag){
      
    }

    //Validate Input of Group
    if (cacheGroup){
      
    }


    //This function will send data to a cookie dictionary. And apply that to 
    // Dictionary Storeage Context Provider

    buttonClicked = true
    setCacheTitle('')
    setCacheContent('')
    setCacheID(null)
    setCacheTag('')
    setCacheGroup('')
  }

  function addTask(groupId){
    if (buttonClicked == true){
      buttonClicked = false
      return(
        <TodoChild title={cacheTitle} content={cacheContent} id={cacheID}/>
      )
    }
  }

  function removeTask(id){

  }

  function modifyTaskProperties(id, Title = null, Content = null, Tag = null, Group = null, Location = null){
    
  }

  function modifyGroupValues(groupId, Title = null, Content = null, Tag = null, Group = null){
    
  }

  function modifyTagValues(TagName, Title = null, Content = null, Tag = null, Group = null, Location = null){
    
  }

  function Untitled(){
    
  }
  return (
    <DictionaryStorageContext.Provider value="Fapichino">
      <Container maxWidth="sm">
      {ContainerHeader()}
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input
          autoFocus={false}
          fullWidth={true}
          aria-describedby="Group Name"
          value={cacheGroup}
          onChange={e => setCacheGroup(e.target.value)}
        />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

      </FormControl>
      <FormControl>
        <Input
          autoFocus={false}
          fullWidth={true}
          aria-describedby="Tag Name"
          value={cacheTag}
          onChange={e => setCacheTag(e.target.value)}
        />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

      </FormControl>
      <FormControl>
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        <Input
          autoFocus={true}
          fullWidth={true}
          aria-describedby="Tag Title"
          value={cacheTitle}
          onChange={e => setCacheTitle(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        <Input
          autoFocus={false}
          fullWidth={true}
          aria-describedby="Tag Content"
          value={cacheContent}
          onChange={e => setCacheContent(e.target.value)}
        />
      </FormControl>
      <Button variant="contained" onClick={HandleSubmit}>Add Task</Button>
      <Box sx={{ 
        bgcolor: 'primary.secoundary',
        width: '100%',
        height: '800px' }}>
        {addTask()}
      </Box>
      {ContainerFooter()}
      </Container>
      {props.children}
    </DictionaryStorageContext.Provider>
  )
};

export default TodoContainer;

/** JUNK AREA
 *    <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input
          autoFocus={false}
          fullWidth={true}
          aria-describedby="Group Name"
          value={cacheGroup}
          onChange={e => setCacheGroup(e.target.value)}
        />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

      </FormControl>
      <FormControl>
        <Input
          autoFocus={false}
          fullWidth={true}
          aria-describedby="Tag Name"
          value={cacheTag}
          onChange={e => setCacheTag(e.target.value)}
        />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

      </FormControl>
      <FormControl>
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        <Input
          autoFocus={true}
          fullWidth={true}
          aria-describedby="Tag Title"
          value={cacheTitle}
          onChange={e => setCacheTitle(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        <Input
          autoFocus={false}
          fullWidth={true}
          aria-describedby="Tag Content"
          value={cacheContent}
          onChange={e => setCacheContent(e.target.value)}
        />
      </FormControl>
 * **/