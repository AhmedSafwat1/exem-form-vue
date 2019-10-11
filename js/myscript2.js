
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
    // Vue.use(SimpleVueValidation);
    //  vue component 

    // question component
    Vue.component("question", {
        props:{
            question:{type:Object, required:true, default:{}},
            index:{type:Number}
        },
        methods:{
            delteSelf:function (){
                this.$emit("delte",this.index)
            }
        },
        watch:{
            question:{
                handler(val){
                  this.$emit("update:question",val)
                  },
                deep: true
            }
        },
        computed:{
            questionValidation:function(){
                if(this.question.question.length == 0) return "مطلوب * "
                else return ""
            },
            
        }
        ,
        template:`
        <div class="test add">
        <div class="test-txt"><a class="default remove-test" @click.prevent="delteSelf" ><i class="fas fa-trash"></i></a></div>
        <div class="form-group question">
          <label class="purpleColor" for=""> السؤال {{index+1}} </label>
          <input class="form-control"  v-model="question.question"  type="text" placeholder="مثال : من هو مؤسس جامعة الدول العربية ؟"/>
          <span class='error'>{{questionValidation}}</span>
          </div >
        <div class="form-group">
          <label class="purpleColor" for="">الإجابات</label>

          <ul class="answer">
            <answer v-for="(answer, index) in question.answers" :key="index"  :index="index" :answer.sync="answer" />
          </ul>

          <!-- <a class="site-btn grey default add-answer" onclick="newQuestion(this)">إضافة إجابة</a> -->
        </div>
        <div class="form-group right-answer">
          <label class="purpleColor" for="">الإجابة الصحيحة</label>
          <ul class="choose-answer">

            <li v-for="(answar, index) in question.answers" :key="index" >
              <label class="answer-title"> 
                <input type="radio" v-model="question.correct" :checked="question.correct == index" :value="index" /><span class="checkmark"></span>
              </label>
            </li>
            
          </ul>
        </div>
      </div>
        `
    })

    //componet answar
    Vue.component("answer", {
        props:{
            answer:{type:Object, required:true, default:{}},
            index:{type:Number}
        },
        methods:{
            
        },
        watch:{
            answer:{
                handler(val){
                  this.$emit("update:answer",val)
                  },
                deep: true
            }
        },
        computed:{
            validationAnswarer:function(){
                if(this.answer.answer.length == 0) return "مطلوب * "
                else return ""
            }
        }
        ,
        template:`
       
        <li >
            <input class="form-control"  v-model='answer.answer' type="text" :placeholder=" ' الإجابة' + ' '+  (index + 1).toString() " />
            <span class='error'>{{validationAnswarer}}</span>
        </li>
    
        `
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
            addQuestion:function(){
                this.questions.push(new Question)
            },
            delteQuestion : function(index){
                this.questions.splice(index,1)
            }
        },
        computed: {
            nameQuizeValiation:function(){
                if(this.quizeName.length == 0) return "مطلوب * "
                else return ""
            },
            courseValdation:function(){
                if(! this.courseId  > 0) return "مطلوب * "
                else return ""
            },
            coursesListValidation:function(){
                if(this.coursesList.length == 0) return "ليس لديك اى كورسات"
                else return ""
            }
        },
        watch: {
            
        },
    })
    
};