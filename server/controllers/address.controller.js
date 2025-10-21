import AddressModel from "../models/address.model.js";
import UserModel from "../models/user.model.js";

export const addAddressController = async (req, res) => {
  try {
    const { address_line, city, state, country, pincode, mobile, status } =
      req.body;

    const userId = req.userId;

    if (!address_line || !city || !state || !country || !pincode || !mobile) {
      return res.status(400).json({
        message: "Please Provide All the fields",
        error: true,
        success: false,
      });
    }

    const address = new AddressModel({
      address_line,
      city,
      state,
      country,
      pincode,
      mobile,
      status,
      userId,
    });

    const savedAddress = await address.save();

    const updateAddress = await UserModel.updateOne(
      {
        _id: userId,
      },
      {
        $push: {
          address_deatils: savedAddress?._id,
        },
      }
    );

    return res.status(200).json({
      message: "Add Address Successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
