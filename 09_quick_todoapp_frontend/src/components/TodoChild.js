import React from 'react';
import { Button, Box } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import {DictionaryStorageContext} from '../hooks/DictionaryCookieContext'
const Todo_child = ({title, content, id}) => {
  const value = useContext(DictionaryStorageContext)

  return <div>
      {value}
  </div>;
};
//{title, content, id}
export default Todo_child;
