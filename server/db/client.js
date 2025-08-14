const pg = require('pg')
const client = new pg.Client(
    process.env.DATABASE_URL || 'postgres://megan.boczar:password@localhost:5432/fav_products'
)

module.exports = client