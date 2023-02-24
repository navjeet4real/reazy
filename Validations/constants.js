exports.full_name = "^[a-z_A-Z]+$";
// exports.last_name = "^[a-z_A-Z]+$";
exports.password = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).*$/;
// exports.repeat_password = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).*$/;
// exports.min = 2;
// exports.minPassword = 8;
// exports.max = 30;
// exports.minAge = 13;