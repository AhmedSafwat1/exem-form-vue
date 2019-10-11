window.onload = function () {
    // helper 

    // class question 
    class Question {

        constructor(question="", answers=[new Answar ,new Answar, new Answar, new Answar], correct=0 ) {
          this.question = question;
          this.answers   = answers;
          this.correct  = correct
        }
      }

      // answer 
      class Answar {

        constructor(answer ="") {
          this.answer   = answer;
        }
      }

      // course 
      class Course {
        constructor(id =0,name='') {
            this.id   = id;
            this.name = name;
          }
      }

    // ***************************
    
    // ***********************************************************
    //  vue component 
    Vue.component("question", {
        props:{
            question:{type:Object, required:true, default:{}}
        },
        methods:{

        }
    })
    // vue main app
    var vm  = new Vue({
        el:"#quize",
        data:{
            questions:[
                new Question()
            ],
            quizeName:"",
            courseId:1,
            coursesList:[new Course('1','arabic'), new Course('2','History')]
        },
        methods: {
            
        },
        computed: {
            
        },
        watch: {
            
        },
    })
    
};