import Notes from "../model/nodesModel.js";

export const create = async (req, res) => {
  try {
    const noteData = new Notes(req.body);
    if (!noteData) {
      return res.status(404).json({ msg: "Notes data not found" });
    }
    const savedData = await noteData.save();
    res.status(200).json(savedData);
    console.log(savedData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//Fetch all notes
export const getAll = async (req, res) => {
  try {
    const noteExist = await User.find();
    if(!noteExist){
        return res.status(404).json({ msg: "note data not found" });
    }
    res.status(200).json(noteExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//fetch single one for UPDATE
export const getOne = async(req,res)=>{
  try{
    const id = req.params.id;
    const noteExist = await User.findById(id);
    if(!noteExist){
      return res.status(404).json({ msg: "Note not found" });
  }
  res.status(200).json(noteExist);
}
  catch(err){
    res.status(500).json({error: err});
  }
}

//update
export const update = async(req, res)=>{
  try{
    const id = req.params.id;
    const noteExist = await User.findById(id);
    if(!noteExist){
      return res.status(404).json({ msg: "note not found" });
    }
    const updatedData = await User.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(updatedData);

  }catch(err){
    res.status(500).json({error: err});
  }
}


//Delete
export const deletes = async(req,res)=>{
  try{
    const id = req.params.id;
    const noteExist = await User.findById(id);
    if(!noteExist){
      return res.status(404).json({ msg: "Notes not found" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({msg:"note deleted Successfully"});
  }
  catch(err){
    res.status(500).json({error:err})
  }
}