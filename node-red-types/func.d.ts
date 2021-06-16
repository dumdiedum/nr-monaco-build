
interface NodeMessage {
    topic?: string;
    payload?: any;
    _msgid?: string;
    [other: string]: any; //permit other properties
}

/** @type {NodeMessage} the `msg` object */
declare var msg: NodeMessage;
/** @type {string} the id of the incoming `msg` (alias of msg._msgid) */
declare const __msgid__:string;

/**
 * @typedef NodeStatus
 * @type {object}
 * @property {string} [fill] The fill property can be: red, green, yellow, blue or grey.
 * @property {string} [shape] The shape property can be: ring or dot.
 * @property {string} [text] The text to display
 */
interface NodeStatus {
    /** The fill property can be: red, green, yellow, blue or grey */
    fill?: string,
    /** The shape property can be: ring or dot */
    shape?: string,
    /** The text to display */
    text?: string|boolean|number
}

declare class node {
    /** 
    * Send 1 or more messages asynchronously 
    * @param {object | object[]} msg  The msg object 
    * @param {Boolean} [clone=true]  Flag to indicate the `msg` should be cloned. Default = `true`   
    * @see node-red documentation [writing-functions: sending messages asynchronously](https://nodered.org/docs/user-guide/writing-functions#sending-messages-asynchronously) 
    */ 
    static send(msg:object|object[], clone?:Boolean): void;
    /** Inform runtime this instance has completed its operation */
    static done();
    /** Send an error to the console and debug side bar. Include `msg` in the 2nd parameter to trigger the catch node.  */
    static error(err:string|Error, msg?:object);
    /** Log a warn message to the console and debug sidebar */
    static warn(warning:string|object);
    /** Log an info message to the console (not sent to sidebar)' */
    static log(info:string|object);
    /** Sets the status icon and text underneath the node.
    * @param {NodeStatus} status - The status object `{fill, shape, text}`
    * @see node-red documentation [writing-functions: adding-status](https://nodered.org/docs/user-guide/writing-functions#adding-status)
    */
    static status(status:NodeStatus);
    /** Sets the status text underneath the node.
    * @param {string} status - The status to display
    * @see node-red documentation [writing-functions: adding-status](https://nodered.org/docs/user-guide/writing-functions#adding-status)
    */
    static status(status:string|boolean|number);
    /** the id of this node */
    public readonly id:string;
    /** the name of this node */
    public readonly name:string;
    /** the number of outputs of this node */
    public readonly outputCount:number;
}
declare class context {
    /** Get a value from context */
    static get(name:string, store?:string);
    /** Store a value in context */
    static set(name:string, value:any, store?:string);
    /** Get an array of the keys in the context store */
    static keys(store?:string):Array<string> ;
}
declare class flow {
    /** Get a value from flow context */
    static get(name:string, store?:string);
    /** Store a value in flow context */
    static set(name:string, value:any, store?:string);
    /** Get an array of the keys in the flow context store */
    static keys(store?:string):Array<string> ;
}
//@ts-ignore
declare class global {
    /** Get a value from global context */
    static get(name:string, store?:string);
    /** Store a value in global context */
    static set(name:string, value:any, store?:string);
    /** Get an array of the keys in the global context store */
    static keys(store?:string):Array<string> ;
}
declare class env {
    /** Get an environment variable value */
    static get(name:string);
}
