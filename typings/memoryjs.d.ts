declare module 'memoryjs' {

  type DataType = 'int' | 'dword' | 'short' | 'long' | 'float' | 'double' | 'bool' | 'boolean' | 'ptr' | 'pointer' | 'str' | 'string' | 'vec3' | 'vector3' | 'vec4' | 'vector4';

  export interface Process {
    cntThreads: number;
    szExeFile: string;
    th32ProcessID: number;
    th32ParentProcessID: number;
    pcPriClassBase: number;
  }

  export interface ProcessObject extends Process {
    dwSize: number;
    handle: number;
  }

  export interface Module {
    modBaseAddr: number;
    modBaseSize: number;
    szExePath: string;
    szModule: string;
    th32ProcessID: number;
  }


  export const openProcess: (processIdentifier: string | number, callback?: (err: string, processObject: ProcessObject) => void) => ProcessObject;

  export const closeProcess: (handle: number) => void;

  export const getProcesses: (callback?: (err: string, processes: Process[]) => void) => Process[];

  export const findModule: (moduleName: string, processId: number, callback?: (err: string, memoryModule: Module) => void) => Module;

  export const getModules: (processId: number, callback?: (err: string, modules: Module[]) => void) => Module[];

  export const readMemory: (handle: number, address: number, dataType: DataType, callback?: (err: string, value: any) => void) => any;

  export const readBuffer: (handle: number, address: number, size: number, callback?: (err: string, value: any) => void) => any;

  export const findPattern: (handle: number, moduleName: string, signature: string, signatureType: number, patternOffset: number, addressOffset: number, callback?: (err: string, offset: number) => void) => number

}
