const Property = require("../models/propertyModel");
const User = require("../models/user");

const propertyController = {
  // creating proprty details
  createProperty: async (req, res) => {
    try {
      const {
        user_id,
        street_address,
        unit_no,
        city,
        state,
        postcode,
        representing,
      } = req.body;

      // validating user by id
      const user = await User.findOne({
        _id: user_id,
      });


      if (!user) {
        res.status(400).json({
          staus: "error",
          message: "user not exsist",
        });
        return;
      }

      let newProperty = new Property({
        user_id,
        street_address,
        unit_no,
        city,
        state,
        postcode,
        representing,
      });


      await newProperty.save();
      res.status(200).json({
        status: "Success",
        message: "Property Created.",
      });

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  propertyInformation: async (req, res) => {
    // updating property details
    
    try {
      const {
        user_id,
        id,
        property_type,
        media,
        price,
        bond,
        bed_room,
        bathroom,
        car_spaces,
        select_features,
        description,
        date_available,
        lease_duration,
      } = req.body;

    // validating user by id
      const user = await User.findOne({ user_id });


      if (!user) {
        res.status(400).json({
          staus: "error",
          message: "user not exsist",
        });
        return;
      }

      //find by id and update field
      await Property.findOneAndUpdate(
        { _id: id },
        {
          property_type,
          media,
          price,
          bond,
          bed_room,
          bathroom,
          car_spaces,
          select_features,
          description,
          date_available,
          lease_duration,
        }
      );

      res.status(200).json({
        status: "Success",
        message: "Property Details Updated",
      });
      return;

    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = propertyController;
