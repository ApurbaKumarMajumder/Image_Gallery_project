    Interview Preparation

* Every code in Java Script is located in a bubble known as execution context.

* Execution context in JS:
    * global object
    * this
    * your own code

* Execution context for Browser:
    * windows object
    * this object
    * your own code

* The code that is outside every function area is in global area and for that gloabl execution context is created. [GLOBAL EXECUTION CONTEXT is the default EXECUTION CONTEXT]

* It is always the first Execution Context to be created.

* Execution context in created whenever a function is called.

* Memory is allocated for your code & then code is executed accordingly.

* Execution Context:
    * Creation Phase
        * Global Object
        * this Object
        * code -> memory allocation
            * variables -> undefined
            * function -> memory allocation
    * Execution Phase
        * left -> right
        * top -> bottom

* first Creation Phase will complete and then only then Execution Phase (i.e. actual code execution) will start.

* Execution context is always created when a function is invoked.

* When a function doesn't have the called variable in the function, it will look outside the function defination.

* This is known as Lescical scope.

* Function Defination: It is the block of code which is defiend under the function reserved word enclosed in {} brackets.

* Function Invokation: When a function is called within the function or in the G.E.C it is knows as Function Invokation.

* Global Execution Context is also known as anonymous in browser.

## Scope:

* area till which a given variable is available.

    * var -> function{}
    * let/const -> block()

* <b>Scope Chain</b>: When a variable isn't available inside your current scope then we will look outside our scope till you are not able to find that variable.

## Let Variable:

* let have a <b>block scope</b>.

* <b>hoisting</b> for let variable is done when a block is encountered.

* if no variable associated with is not present in a block then it will see variable outside that block.

* variables cannot be accessed before initialization -> undefiend set was done -> Present in <b>Temporal Dead Zone</b>.