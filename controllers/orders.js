const database = require('./database');


module.exports = {

    addOrder: function (customer_id, product_id, price, quantity) {
        if (!quantity || quantity.length === 0) {
            throw ('ERROR: name is empty');
        }

        database.pool.getConnection(function (connErr, connection) {
            if (connErr) throw connErr; // not connected!

            const sql = "INSERT INTO orders(customer_id,product_id,price,quantity)" +
                " VALUES(?,?,?,?);";

            connection.query(
                sql,
                [customer_id, product_id, price, quantity],
                function (sqlErr, result, fields) {
                    if (sqlErr) throw sqlErr;

                    console.log(result);
                });
        });
    },

    ordersList: async function (req, res, next) {

        const sql = "SELECT * FROM orders";

        try {
            //const connection = await database.getConnection();
            const result = await database.query(sql);
            res.send(result[0]);
        } catch (err) {
            console.log(err);
        }

        //database.pool.getConnection(function (connErr, connection) {
        //    if (connErr) throw connErr; // not connected!
        //
        //    const sql = "SELECT * FROM orders";
        //
        //    connection.query(sql, function (sqlErr, result, fields) {
        //        if (sqlErr) throw sqlErr;
        //
        //        res.send(result);
        //    });
        //});
    }
}