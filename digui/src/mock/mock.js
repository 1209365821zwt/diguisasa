import Mock from "mockjs"
let data= [
    {
        "filename":"级别1",
        "flag":false,
        "children":[
            {"filename":"级别1-2",
            "flag":false,

                "children":[{"filename":"级别1-3",}]
            }
        ]
    },
    {
        "filename":"级别2",
        "flag":false,

        "children":[
            {"filename":"级别2-2",
            "flag":false,

            "children":[{"filename":"级别2-3",}]
            }
        ]
    }

]
Mock.mock("/list","get",{
    list:data
})