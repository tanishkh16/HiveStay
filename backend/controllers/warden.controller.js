
import HolidaysApplication from "../models/HolidaysApplication.js";
import mongoose from "mongoose";

export const holidaysApplicationStatus = async (req, res, next) => {
    const { userId } = req.params;
    const { status } = req.body;
    console.log(userId);
    console.log(status);

    try {
        const application = await HolidaysApplication.findOneAndUpdate(
            { userId: userId }, // Corrected syntax
            { $set: { status: status } },
            { new: true }
        );

        console.log(application);

        if (!application) {
            return res.status(404).json({ error: 'holidaysApplication not found' });
        }

        return res.json({ message: 'holidaysApplication status updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}