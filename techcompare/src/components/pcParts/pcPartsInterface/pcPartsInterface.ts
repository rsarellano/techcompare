export interface Processor {
  id: string;
  brand: string;
  name: string;
  generation: string;
  cores: number;
  threads: number;
  clockSpeed: number;
  tdp: number;
  memorySupport: string;
  socket: string;
  price: string;
  performance: string;
}

export interface Gpu {
  id: string;
  vram: number;
  name: string;
  fp32: number;
  memoryBandwidth: number;
  clockSpeed: number;
}

// API Response Interface
export interface ApiResponseProcessor {
  data: Processor[];
  message: string;
}

export interface ApiResponseGpu {
  data: Gpu[];
  message: string;
}
