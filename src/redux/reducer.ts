import state from './state'
export default (prevState=state,action:any)=>{
  let newData = JSON.parse(JSON.stringify(prevState))
   
  let {type,payload} = action 
  switch (type) {
    case 'CHANGE_NAME':
       newData.name = payload
      break;
    case 'CHANGE_AGE':
      newData.age = payload
      break;
    default:
      break;
  } 
  return newData
}