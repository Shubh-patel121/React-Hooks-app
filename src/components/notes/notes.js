/*  

NOTE:- Below notes are just for my revision purpose, it contains syntex errors and incomplete implementation

1. useState.
2.useEffect.
3.useReducer.
4. useCallback.
5.useMemo
6.useRef
7.useContext.

1.useState - used to manage the state of the functional component;
        [ state, setState] =  useState();

2. useEffect - used to manage or cause side effects in functional components as 
               because we don't have life cycle methods in fun compo.

               useEffect(()=>{
                  callback fun.
               },[dependency array]);

3. useReducer : - to handle complex logic inside the component we use this.
                  its a alternative of useState.

           const  reducerFunction = (actionObj, stateOfComponent) => {
              switch(action.type){
                case 1 : {
                  return {updated state };
                case 2 : {
                  return {updated state} ;
                default : 
                     return {state }  
                }
              }
            

            dispatch( state, {type:"actionType", payload: payload})
            const [state, dispatch] = useReducer(reducerFunction, initial state)

  4.useCallback :- special hook it react which returns the memoized version of the callback function.
                       it increases the performance of the callback fun.
              const fun =  useCallback(()=>{
              }, [dependency items array])         
              
   5. useMemo :- to memoized the value of the complex calculation in between the multiple re-render this hook is used;
               const memoizedValue = useMemo(()=>{
                            return expensiveCalculation()
                    },[]);

    6. useContext - this is used with context api;
          context api - feature which is used to share data to child component without passing it through prop;
          now context is created by  myContext = react.createContext() ;
          contextProvider component wraps the child components & in provider component we have value prop in which we pass the value of the context.
          inside child components we consume this provided context by 

      7.useRef - in uncontrolled component, get tha value of the input or element current state we use this hook
      as we know in uncontrolled components, DOM holds the state of the input elements;
      to get that we use useRef;

      const inputRef = useRef(null);

      then attach with <element ref={inputRef}/>
   
*/

/* 
    # Debouncing:-  to limit the rate at which a function is invoked;

    function debounce( fn, wait){
        let timeout;

        return function(...arg){
            claearTimeout(timeout);
            timeout = setTimeout((..arg)=>{ fn.apply(this,arg)}, wait);
        }

    }

    #Throtalling :- it ensures that function will be invoked only once in given time interval ;
              
             function throttle(fn, limit) {
                      let inThrottle = false;

                       return function(...args) {
                         if (!inThrottle) {
                           fn.apply(this, args);
                           inThrottle = true;
                           setTimeout(() => inThrottle = false, limit);
                         }
                       };
                     }

     # memomization :- to improve the performance of a function.
     
              function memomization(fn){
                 
                let cache = {};

                return function(...arg){
                     let key = JSON.Stringify(...arg);
                     if(cache[key]]){
                        return cache[key]
                     }

                     let result = fn(arg);
                     cache[key] = result ;
                     return result ;
                }
              }

*/
