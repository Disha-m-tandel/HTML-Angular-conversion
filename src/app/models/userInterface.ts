export interface User{
  id: number,
  name : string,
  email : string,
  role : string,
  team : string,
  status : string,
  joined : string,//y we keep it as string means we are hardcoding it if it is from backend we can directly 
  profile : string,
}