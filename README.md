# nestjs-cli_does_not_load_config_yaml_as_asset
This demonstrates a potentional bug in NestJS (Version 7.5.4). 

It follows the [documentation on how to use a config.yaml file for configuration via the NestJS ConfigModule and ConfigService](https://docs.nestjs.com/techniques/configuration#custom-configuration-files) - the version I used and didn't work was viewed on 22.January 2021.

The configuration.ts isn't exactly according to the documentation, because the code in the documentation doesn't work. However, the changes made are small, commented and are in no way part of the bug.

## How to reproduce the bug

npm i

npm start # this should result in an error

## output: 

> nest start

```
[Nest] 1932   - 22/01/2021, 20:29:20   [NestFactory] Starting Nest application...
[Nest] 1932   - 22/01/2021, 20:29:20   [ExceptionHandler] ENOENT: no such file or directory, open 'C:\Users\Sebastian\Repos\nestjs-cli_does_not_load_config_yaml_as_asset\bug-demonstration\dist\config\config.yml' +24ms
Error: ENOENT: no such file or directory, open 'C:\Users\Sebastian\Repos\nestjs-cli_does_not_load_config_yaml_as_asset\bug-demonstration\dist\config\config.yml'
    at Object.openSync (fs.js:476:3)
    at Object.readFileSync (fs.js:377:35)
    at InstanceWrapper.exports.default [as metatype] (C:\Users\Sebastian\Repos\nestjs-cli_does_not_load_config_yaml_as_asset\bug-demonstration\dist\config\configuration.js:8:35)
    at Injector.instantiateClass (C:\Users\Sebastian\Repos\nestjs-cli_does_not_load_config_yaml_as_asset\bug-demonstration\node_modules\@nestjs\core\injector\injector.js:289:55)
    at callback (C:\Users\Sebastian\Repos\nestjs-cli_does_not_load_config_yaml_as_asset\bug-demonstration\node_modules\@nestjs\core\injector\injector.js:42:41)
    at async Injector.resolveConstructorParams (C:\Users\Sebastian\Repos\nestjs-cli_does_not_load_config_yaml_as_asset\bug-demonstration\node_modules\@nestjs\core\injector\injector.js:114:24)
    at async Injector.loadInstance (C:\Users\Sebastian\Repos\nestjs-cli_does_not_load_config_yaml_as_asset\bug-demonstration\node_modules\@nestjs\core\injector\injector.js:46:9)
    at async Injector.loadProvider (C:\Users\Sebastian\Repos\nestjs-cli_does_not_load_config_yaml_as_asset\bug-demonstration\node_modules\@nestjs\core\injector\injector.js:68:9)
    at async Promise.all (index 4)
    at async InstanceLoader.createInstancesOfProviders (C:\Users\Sebastian\Repos\nestjs-cli_does_not_load_config_yaml_as_asset\bug-demonstration\node_modules\@nestjs\core\injector\instance-loader.js:43:9)
```
## Other information:

These commands were executed to **set up** this NestJS app:


```
nest new bug_demonstration

npm i @nestjs/config

npm i js-yaml

npm i -D @types/js-yaml

npm i

```