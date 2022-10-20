export default () => ({
	app_port: process.env.APP_PORT || 4200,
	mongo_connector_url: process.env.MONGO_CONNECTOR_URL,
})
