const students = [
 {
  name:'samuel',
  class:'year1',
  id:099787,
 },
 {
  name:'Rapheal',
  class:'year2',
  id:0978587,
 },
 {
  name:'Gabriel',
  class:'year3',
  id:0997688787,
 }
 ,
 {
  name:'Michael',
  class:'year3',
  id:09898227,
 }
 ,
]



const filteredStudents = students.map(student=>{
 return student.id === 099787 ?({...student,id:'passed'}) :('')} 
)

const seniorStudents = students.map((student)=>student.class==="year3" ?student.name==="Gabriel"?({...student,name:"Angel Gabriel"}) : ({...student,name:'undefined'}):student)
console.log(filteredStudents)
console.log(seniorStudents)

const shop = new Promise ((resolve,reject)=>{
 isShopOpen = true;

 if(isShopOpen){
  resolve('The shop is open yaay!')
 }
 else{
  reject('the shop is closed')
 }
})

.then (setTimeout(()=>{
 console.log('what a happy day')
}),11000)

.then(error=>{
 throw error
})