export interface SpeakerContract
{
  data?:{name?:string,value?:string}[]
  href?:string
  links?:{href?:string,rel?:string}[]
  description?:string//ui use only
  sessions?:SessionContract[]//ui use only
}
export interface SessionContract
{
  data?:{name?:string,value?:string}[]
  href?:string
  links?:{href?:string,rel?:string}[]
}
