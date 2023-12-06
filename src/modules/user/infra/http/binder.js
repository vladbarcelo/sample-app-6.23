export function bindUserHTTPRoutes(router, controllers) {
  router.put('/users/:id/balance', (req, res) => controllers.updateBalance.wrap(req, res));
}
