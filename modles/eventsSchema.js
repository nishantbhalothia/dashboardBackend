const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  action: String,
  gid: Number,
  signature_id: Number,
  rev: Number,
  signature: String,
  category: String,
  severity: Number
}, { _id: false });

const eventSchema = new mongoose.Schema({
  timestamp: Date,
  flow_id: Number,
  in_iface: String,
  event_type: String,
  src_ip: String,
  src_port: Number,
  dest_ip: String,
  dest_port: Number,
  proto: String,
  alert: alertSchema
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
