import "reflect-metadata";
import { createConnection, getConnectionOptions } from 'typeorm';
import { User } from "../modules/accounts/entities/User";
import { Category } from "../modules/cars/entities/Category";
import { Specifications } from "../modules/cars/entities/Spacifications";

interface IOptions {
  host: string;
  entities: any;
}

getConnectionOptions().then(options => {

  const newOptions = options as IOptions;
  
  newOptions.host = 'datanase_ignore'; 
  newOptions.entities = [Category, Specifications, User]
  
  createConnection({
    ...options,
  })
  
});