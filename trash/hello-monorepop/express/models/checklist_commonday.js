const mongoose = require('mongoose');


const Checklist_commondaySchema = new mongoose.Schema({
    

    kya_halcal: String,
    
    healthy_sleep: {
        type: Boolean,
        default: false
    },
    
    early_morning_rising: {
        type: Boolean,
        default: false
    },
    
    first_hygiegn: {
        type: Boolean,
        default: false
    },
    
    first_prayer: {
        type: Boolean,
        default: false
    },
    
    
    starting_work: {
        type: Boolean,
        default: false
    },
    
    first_eating: {
        type: Boolean,
        default: false
    },
    
    
    booring_stuff: {
        type: Boolean,
        default: false
    },
    
   
    second_prayer: {
        type: Boolean,
        default: false
    },
    
    second_eating: {
        type: Boolean,
        default: false
    },
    
    
    third_prayer: {
        type: Boolean,
        default: false
    },
    
    second_hygiegn: {
        type: Boolean,
        default: false
    },
    
    forth_prayer: {
        type: Boolean,
        default: false
    },
    
    
    fifth_prayer: {
        type: Boolean,
        default: false
    },
    
    
    third_eating: {
        type: Boolean,
        default: false
    },
    third_hygiegn: {
        type: Boolean,
        default: false
    },
    
    ending_work: {
        type: Boolean,
        default: false
    },
    
    
});





module.exports = mongoose.model('Checklist_commonday', Checklist_commondaySchema);