import requireDirectory from 'require-directory'
import {
  namespace,
  slashNotation
} from '../core/utils'

/**
 * Formats every controller inside the directory 'controllers' into an object.
 * folder:
 *  - app
 *    - auth.controller
 *
 *  output:
 *  {
 *    App: {
 *      AuthController: (file exports)
 *    }
 *  }
 */

export const controllers = requireDirectory(module, './', {
  rename: namespace
})

/**
 * Transform slash notation to the controller's method, appending/prepending any middleware required
 *
 * @export
 * @param {any} ctrllr
 * @returns
 */
export default function (ctrllr) {
  const [controllerName, methodName] = ctrllr.split('@')
  const controller = slashNotation(controllerName, controllers)
  const method = controller[methodName]

  const { middleware:ctrlrmiddleware = [] } = controller
  const {
    middleware = [], posmiddleware = []
  } = method

  return [...ctrlrmiddleware, ...middleware, method, ...posmiddleware]
}