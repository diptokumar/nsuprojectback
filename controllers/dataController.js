const catchAsync = require('./../utils/catchAsync');
const DataModel = require('./../models/userdataModel')
const Category = require('./../models/categoryModel')

exports.createdata = catchAsync(async (req, res, next) => {
    const data = await DataModel.create(req.body);
    res.status(201).json({
        message: 'success',
        data
    })
})


exports.createcategorydata = catchAsync(async (req, res, next) => {
    const data = await Category.create(req.body);
    res.status(201).json({
        message: 'success',
        data
    })
})


exports.getalldata = catchAsync(async (req, res, next) => {
    const data = await DataModel.find();
    res.status(201).json({
        message: 'success',
        length: data.length,
        data
    })
})

exports.filterddata = catchAsync(async (req, res, next) => {
    const {catid, studentid} = req.params;
    const catname = await Category.findOne({
        _id: catid
    });
    // if(catname.)
    if(catname.catName === 'education'){
        const studentInfo = await DataModel.findOne({
            nsuid: studentid
        }).select('-');
        res.status(201).json({
            message: 'success',
            length: data.length,
            data
        })
    }else if(catname.catName === 'education'){
        const studentInfo = await DataModel.findOne({
            nsuid: studentid
        }).select('-');
        res.status(201).json({
            message: 'success',
            length: data.length,
            data
        })
    }else if(catname.catName === ''){
        const studentInfo = await DataModel.findOne({
            nsuid: studentid
        }).select('-');
        res.status(201).json({
            message: 'success',
            length: data.length,
            data
        })
    }
})