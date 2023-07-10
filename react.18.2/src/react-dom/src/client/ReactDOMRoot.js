import {createContainer} from 'react-reconciler/src/ReactFiberReconciler'
function ReactDOMRoot(internalRoot){
  this.internalRoot = internalRoot
}
export function createRoot(contaniner){//div#root
  const root =createContainer(contaniner)
  return new ReactDOMRoot(root)
}