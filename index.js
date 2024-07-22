//var state = {
//    taskList: [
//        {
//            imageURL:"",
//            taskTitle:"",
//            taskType:"",
//            taskDesc:"",
//        },
//        {
//            imageURL:"",
//            taskTitle:"",
//            taskType:"",
//            taskDesc:"",
//        },
//        {
//            imageURL:"",
//            taskTitle:"",
//            taskType:"",
//            taskDesc:"",
//        },
//        {
//            imageURL:"",
//            taskTitle:"",
//            taskType:"",
//            taskDesc:"",
//        },
//        {
//            imageURL:"",
//            taskTitle:"",
//            taskType:"",
//            taskDesc:"",
//        },
//    ]
//};

const state = {
    taskList: [],
};

const taskContents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body");

//console.log(taskContents);
//console.log(taskModal);

const htmlTaskContent=({title, description,type,url})=>{};