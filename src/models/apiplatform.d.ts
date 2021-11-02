export interface ApiPlatform<T>{
  'hydra:member' : Array<T>;
  'hydra:View' : Array<{
    'hydra:first': string;
    'hydra:last': string;
    'hydra:next': string;
  }>
}
