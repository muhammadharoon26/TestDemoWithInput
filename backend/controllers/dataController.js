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












// // testing mockup data for frontend-backend communication
// class DataController {
//     constructor(dataModel) {
//         this.dataModel = dataModel;
//     }

//     async saveData(req, res) {
//         try {
//             // Mock a successful save response without touching the database
//             const mockData = { data: req.body.data, _id: 'mock-id-123', __v: 0 };
//             console.log('Mock saving data:', mockData);
//             res.status(201).json({ message: 'Data saved successfully', data: mockData });
//         } catch (error) {
//             console.error('Error in saveData:', error);
//             res.status(500).json({ message: 'Error saving data', error: error.message });
//         }
//     }

//     async getData(req, res) {
//         try {
//             // Mock a successful retrieval response
//             const mockData = [
//                 { data: 'mock data 1', _id: 'mock-id-1', __v: 0 },
//                 { data: 'mock data 2', _id: 'mock-id-2', __v: 0 }
//             ];
//             console.log('Mock retrieving data:', mockData);
//             res.status(200).json(mockData);
//         } catch (error) {
//             console.error('Error in getData:', error);
//             res.status(500).json({ message: 'Error retrieving data', error: error.message });
//         }
//     }
// }

// module.exports = DataController;