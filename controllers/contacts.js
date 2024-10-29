let ContactModel = require('../models/contacts');

module.exports.create = async function (req, res, next) {
    try {
        let newContact = new ContactModel(req.body);

        let result = await ContactModel.create(newContact);
        res.json(
            {
                success: true,
                message: 'Contact created successfully.'
            }
        )
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.list = async function (req, res, next) {

    try {
        const items = await ContactModel.find();
        res.status(200).json(items); 
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.contactGet = async function (req, res, next) {
    try {
        let uID = req.params.contactID;

        req.contact = await ContactModel.findOne({ _id: uID });
        next();

    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.contactByID = async function (req, res, next) {
    res.json(req.contact);
}

module.exports.update = async function (req, res, next) {
    try {
        let uID = req.params.contactID;

        let updateContact = new ContactModel(req.body);
        updateContact._id = uID;

        let result = await ContactModel.updateOne({ _id: uID }, updateContact);
        console.log(result);

        if (result.modifiedCount > 0) {
            res.json(
                {
                    success: true,
                    message: 'Contact updated successfully.'
                }
            );
        } else {
            // Express will catch this on its own.
            throw new Error('Contact not updated. Are you sure it exists?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.remove = async function (req, res, next) {
    try {
        let uID = req.params.contactID;

        let result = await ContactModel.deleteOne({ _id: uID });
        console.log(result);

        if (result.deletedCount > 0) {
            res.json(
                {
                    success: true,
                    message: 'Contact deleted successfully.'
                }
            );
        } else {
            // Express will catch this on its own.
            throw new Error('Contact not deleted. Are you sure it exists?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}