import { HtmlIcon, CssIcon, ExpressIcon, JavaScriptIcon, LaravelIcon, MongoDbIcon, MySqlIcon, NodeJsIcon, PhpIcon, ReactIcon, PythonIcon, PytorchIcon, TypescriptIcon, ReduxIcon, BootstrapIcon, AngularIcon, NestJsIcon, FlaskIcon, FlutterIcon } from './Icons'

export function TechList ({ techs }) {
  return (
    <div className='project-tecnology'>
      {
        techs.map((tech, index) => {
          switch (tech.toLowerCase()) {
            case 'html':
              return <HtmlIcon key={index} width='30px' />
            case 'css':
              return <CssIcon key={index} width='30px' />
            case 'javascript':
              return <JavaScriptIcon key={index} width='30px' />
            case 'laravel':
              return <LaravelIcon key={index} width='30px' />
            case 'react':
              return <ReactIcon key={index} width='30px' />
            case 'node':
              return <NodeJsIcon key={index} width='30px' />
            case 'express':
              return <ExpressIcon key={index} width='30px' />
            case 'mongodb':
              return <MongoDbIcon key={index} width='30px' />
            case 'mysql':
              return <MySqlIcon key={index} width='30px' />
            case 'php':
              return <PhpIcon key={index} width='30px' />
            case 'python':
              return <PythonIcon key={index} width='30px' />
            case 'pytorch':
              return <PytorchIcon key={index} width='30px' />
            case 'typescript':
              return <TypescriptIcon key={index} width='30px' />
            case 'redux':
              return <ReduxIcon key={index} width='30px' />
            case 'bootstrap':
              return <BootstrapIcon key={index} width='30px' />
            case 'angular':
              return <AngularIcon key={index} width='30px' />
            case 'nestjs':
              return <NestJsIcon key={index} width='30px' />
            case 'flask':
              return <FlaskIcon key={index} width='30px' />
            case 'flutter':
              return <FlutterIcon key={index} width='30px' />
            default:
              return null
          }
        })
      }
    </div>
  )
}
