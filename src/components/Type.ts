// types.ts
export interface Size {
    value: number;
    unit: string;
  }
  
  export interface WriteUp {
    author: string;
    url: string;
    language: string;
    _id: string;
  }
  
  export interface Machine {
    _id: string;
    name: string;
    size: Size;
    difficulty: number;
    downloadUrl: string;
    writeUps: WriteUp[];
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    owner: {
      _id: string;
      name: string;
    };
  }
  
  export interface MachinesData {
    data: Machine[];
    msg: string;
  }
  