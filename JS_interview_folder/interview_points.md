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