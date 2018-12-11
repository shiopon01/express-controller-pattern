/**
 *
 *
 * @param {any} req
 * @param {any} res
 */
export async function say(req, res, next) {
  res.status(200).send({
    message: 'Hello, World.'
  })
}

/**
 *
 *
 * @param {any} req
 * @param {any} res
 */
export async function ping(req, res, next) {
  res.status(200).send({
    response: 'pong'
  })
}