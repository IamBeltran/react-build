
//	──[	EXPORT MODULE ]─────────────────────────────────────────────────────────────────
	module.exports = {
		"/api/*": "/$1",
		"/:resource/:id/show": "/:resource/:id"
	};