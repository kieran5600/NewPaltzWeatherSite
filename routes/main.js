
module.exports=function(app)
{
	
app.get('/',function(req,res){
res.render('pages/index', {
	author: 'Automated Answering Services 2016',
	page: 'Home'
	});
});

//examples of adding more pages :p

// app.get('/about',function(req,res){
// res.render('pages/about',{
// 	author: "Automated Answering Services 2016",
// 	page: 'Company-Background'
// 	});
// });

// app.get('/solutions',function(req,res){
// res.render('pages/solutions',{
// 	author: "Automated Answering Services 2016",
// 	page: 'Solutions'
// 	});
// });



}