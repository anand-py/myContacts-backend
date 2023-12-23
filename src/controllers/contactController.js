//@desc Get all contacts
//@route GET/api/contacts
//@access public

const getContacts = (req,res)=>{
    return res.status(200).json(req.params.id)
}
//@desc create contacts
//@route POST/api/contacts
//@access public
const createContact = (req,res)=>{
    console.log("req body:", req.body)
    const {name, email, phone} = req.body;
    if(!name || email || phone){
        res.status(400);
        throw new Error("All Fields are mandatory")
    }
    res.status(201).json({message : "Create Contacts"})
}

//@desc Get  contact by id
//@route GET/api/contacts:id
//@access public

const getContact = (req,res)=>{
    res.status(200).json({message : `Get contact for ${req.params.id}`})
}

//@desc update contacts
//@route PUT/api/contacts/:id
//@access public
const updateContact = (req,res)=>{
    res.status(200).json({message : `update contact for ${req.params.id}`})
}

//@desc delete contact
//@route delete/api/contacts/:id
//@access public
const deleteContact = (req,res)=>{
    res.status(200).json({message : `Delete contact for ${req.params.id}`})
}



module.exports = {getContacts,createContact, getContact, deleteContact,updateContact}


