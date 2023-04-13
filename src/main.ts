import { NestFactory } from '@nestjs/core';
import { CatModule } from './cat/cat.module';

async function bootstrap() {
  const app = await NestFactory.create(CatModule);
  await app.listen(3000);
}
bootstrap();
// provider s is meaning that we all servces for help like factories and repositories
// and load all class and file  and session and databases ,..... for run application
// and this load and run do provider

// module =?The module encapsulates providers by default ,,1)providers,2)controllers ,3) imports , 4) export
// design in module is singleton that mean export just one time
//  you can share the same instance of any provider between multiple modules effortlessly.
// and Every module is automatically a shared module Becase it is singleton
// Once created it can be reused by any module
//  for create module you can handle it with mkdir or nest generate module test

// controller is a place for handel requesr parameter , responsome , query ,...
//  can make file with mkdir or nest generate controller test/test --flat
// test first is in file && test second is class messages
// --flat dont create an extra class name is controller
