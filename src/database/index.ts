import "reflect-metadata";
import { createConnection, getConnectionOptions } from 'typeorm';
import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Spacification";

interface IOptions {
  host: string;
  entities: any;
}

getConnectionOptions().then(options => {

  const newOptions = options as IOptions;
  
  newOptions.host = 'datanase_ignore'; 
  newOptions.entities = [Category, Specification]
  
  createConnection({
    ...options,
  })
  
});