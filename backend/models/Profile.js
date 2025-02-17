const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true, 
    unique: true 
  },
  dateOfBirth : {
    type : String,
    default : new Date().toISOString().split('T')[0],
  },
  ph_num: { 
    type: String, 
    maxlength: 10, 
    default: null 
  },
  about : {
    type : String,
    trim : true,
  },
  gender: {
		type: String,
	},
  course: {
		type: String,
	},
  addr: { 
    type: String, 
    default: null 
  },
  sem: { 
    type: String, 
    maxlength: 10, 
    default: null 
  },

  rollNo: {
    type: Number,
    // default: true,
  },

  isPlaced : {
      type: Boolean,
      default: false,
  },
  
  brch: { 
    type: String, 
    default: null 
  },
  
  cgpa: { 
    type: Number, 
    default: null 
  },
  
  bklgs: { 
    type: Number, 
    default: null 
  },
  
  bklgs: { 
    type: String, 
    default: null 
  },
  
  github: { 
    type: String, 
    default: null 
  },
  
  linkedin: { 
    type: String, 
    default: null 
  },
  
  stkoflw: { 
    type: String, 
    default: null 
  },
  
  codechef: { 
    type: String, 
    default: null 
  },
  
  leetcode: { 
    type: String, 
    default: null 
  },

  website: { 
    type: String, 
    default: null 
  },

  jobEnrolled: [
		{
			type: mongoose.Schema.Types.ObjectId,
			// required: true,
			ref: "job",
		},
	],
  
  resume: { 
    type: String, 
    default: null 
  }, // Store URL to the uploaded document
});

module.exports = mongoose.model('Profile', ProfileSchema);
