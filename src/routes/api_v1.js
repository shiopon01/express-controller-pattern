import {
  Router
} from 'express';
import Ctrlrs from '../controllers'

const routes = Router();

routes.get('/example/say', Ctrlrs('App/ExampleController@say'))
routes.get('/example/ping', Ctrlrs('App/ExampleController@ping'))

module.exports = routes;