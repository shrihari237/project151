AFRAME.registerComponent('base',{
    schema:{
        radius:{type:'number',default:20},
        height:{type:'number',default:2}
    },

    init:function(){
        this.el.setAttribute('geometry',{
            primitive:'cylinder',
            radius : this.data.radius,
            height: this.data.height
        })

       console.log('Hello world')

        this.el.setAttribute('material',{color:'#1769aa'})
    }
})