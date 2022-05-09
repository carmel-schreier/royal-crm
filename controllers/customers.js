const database = require('./database');

module.exports = {
    // list: [],

    addCustomer: function (name, phone, email, country_id) {
        // const name = process.argv.slice(2);

        if (!name || name.length === 0) {
            throw ('ERROR: name is empty');
        }


        database.pool.getConnection(function (connErr, connection) {
            if (connErr) throw connErr; // not connected!


            const sql = "INSERT INTO customers(name, phone, email, country_id)" +
                " VALUES(?,?,?,?);";

            connection.query(
                sql,
                [name, phone, email, country_id],
                function (sqlErr, result, fields) {
                    if (sqlErr) throw sqlErr;

                    console.log(result);
                });
        });
    },

    customersList: async function (req, res) {
        const sql = "SELECT customers.name,customers.phone,customers.email,countries.name AS country FROM customers INNER JOIN countries ON countries.id = customers.country_id ORDER BY customers.name;";

        try {
            const connection = await database.getConnection();
            const result = await database.runQuery(connection, sql);
            res.send(result);
        } catch (err) {
            console.log(err);
        }

        // customersList: function (req, res) {
        //     const sql = "SELECT * FROM customers";
        //
        //     database.getConnection()
        //         .then(connection => database.runQuery(connection, sql))
        //         .then(result => res.send(result))
        //         .catch(err => console.log(err));
        //
        //
        // database.pool.getConnection(function (connErr, connection) {
        //     if (connErr) throw connErr; // not connected!

        //     const sql = "SELECT * FROM customers";

        //     connection.query(sql, function (sqlErr, result, fields) {
        //         if (sqlErr) throw sqlErr;

        //         res.send(result);
        //     });
        // });
    }
}