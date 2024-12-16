const express = require('express');
const router = express.Router();
const Record = require('../models/record'); // Adjust path as per your folder structure

router.post('/save-record', async (req, res) => {
    const {
        track,
        drivername,
        date,
        salesman,
        receiptNumber,
        amount,
        city,
        remark,
        name,
        partyCode
    } = req.body;
    try {
        // Create a new record object (ID will be auto-incremented)
        let newRecord = new Record({
            track,
            drivername,
            date,
            salesman,
            receiptNumber,
            amount,
            city,
            remark,
            name,
            partyCode,
        });

        // Save the record to the database
        let data = await newRecord.save();

        // Log the saved data
        console.log(data);

        // Respond with the saved data
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});


// POST API to filter records
router.post('/filter-records', async (req, res) => {
    const filters = req.body;
    try {
        // Find records matching the filter criteria
        let filterLocal = {
            salesman: filters.salesman,
            date: { $gte: req.body.start, $lte: req.body.end }
        }
        console.log(filterLocal);
        const records = await Record.find(filterLocal);

        // Respond with the matching records
        res.status(200).json(records);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post('/delete-records', async (req, res) => {
    try {
        const result = await Record.deleteMany(req.body); // Delete records based on filters
        res.status(200).json({ deletedCount: result.deletedCount });
        console.log("hello");
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = router;
