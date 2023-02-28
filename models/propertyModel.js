const mongoose = require("mongoose");

const propertyDetail = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    // ---------------------property address------------
    street_address: {
      type: String,
    },
    unit_no: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    postcode: {
      type: String,
    },
    representingAs: {
      type: String,
    },
    //----------------property information----------------
    property_type: {
      type: String,
    },
    media: {
      type: Object,
    },
    price: {
      type: String,
    },
    bond: {
      type: String,
    },
    bed_room: {
      type: String,
    },
    bathroom: {
      type: String,
    },
    car_spaces: {
      type: String,
    },
    select_features: {
      type: String,
    },
    description: {
      type: String,
    },
    date_available: {
      type: String,
    },
    lease_duration: {
      type: String,
    },
    //----------------property media----------------
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PropertyDetail", propertyDetail);
