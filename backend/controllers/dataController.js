const DataModel = require('../models/dataModel');

class DataController {
    constructor(dataModel) {
        this.dataModel = dataModel;
    }

    async saveData(req, res) {
        try {
            const newData = new this.dataModel(req.body);
            await newData.save();
            res.status(201).json({ message: 'Data saved successfully', data: newData });
        } catch (error) {
            console.error('Error saving data:', error); // Log the error details
            res.status(500).json({ message: 'Error saving data', error: error.message });
        }
    }

    async getData(req, res) {
        try {
            const data = await this.dataModel.find();
            res.status(200).json(data);
        } catch (error) {
            console.error('Error retrieving data:', error); // Log the error details
            res.status(500).json({ message: 'Error retrieving data', error: error.message });
        }
    }
}

module.exports = DataController;