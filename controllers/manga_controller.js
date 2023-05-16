// getAllManga, 
// getUserMangaCollection, addUserManga,
// getUserManga, deleteUserManga, updateUserManga,
// queryManga

const asyncHandler = require('express-async-handler');
const Manga = require('../models/manga_model');
const User = require('../models/user_model');
const axios = require('axios');
const { set } = require('mongoose');

// @desc Get all manga
// @route GET /api/manga
// @access Private
async function getAllManga(req, res){
    const placeholder = [
        {id: 0, name: 'one piece'},
        {id: 1, name: 'one piece 2'}
    ];
    res.status(200).json(JSON.stringify(placeholder));
    return;
    const manga = await Manga.find();
    var returnManga = [];
    manga.forEach( m => returnManga.push(m.toJSON()));
    
    for(var i=0; i<games.length; i++){
        const owner = await User.findById(manga[i].owner);
        if(!owner){
            res.status(500).json({reason: 'internal server error'});
            console.log(`[MangaController::getAllManga] manga object ${m.id} has no owner`);
        }

        if(manga[i].lentTo){
            const lentTo = await User.findById(manga[i].lentTo);
            if(lentTo){
                returnManga[i].lentTo = lentTo.name;
            }
        }

        returnManga[i].owner = owner.name;
        if(returnManga[i].reservedDate)
            returnManga[i].reservedDate = returnManga[i].reservedDate.toLocaleDateString('es-ES');
    }
    res.status(200).json(returnManga);
}

module.exports = {
    getAllManga
}