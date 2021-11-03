var mongoose=require("mongoose");
var Campground=require("./models/campground");
var Comment=require("./models/comment");


var data=[{
	name:"Minnewaska State Park Reserve, New York",
	image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2018%2F05%2Fminnewaska-state-park-reserve-new-	york-SCENICCAMP0118.jpg",
	description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at semper dui. Aenean a mauris pulvinar, auctor lectus a, tincidunt risus. Sed sodales magna purus, eget mattis odio maximus id. Donec sodales pellentesque felis, sed tempus quam imperdiet quis. Fusce egestas elit eros, non varius risus fermentum vel. Nam auctor scelerisque nisi, euismod rhoncus arcu volutpat non. Morbi nec mauris vitae mauris scelerisque maximus. Sed cursus nisi a lorem."
	},
	{
		name:"Minnewaska State Park Reserve, New Yfnfssk",
	image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2018%2F05%2Fshenandoah-national-park-virginia-SCENICCAMP0118.jpg",
	description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at semper dui. Aenean a mauris pulvinar, auctor lectus a, tincidunt risus. Sed sodales magna purus, eget mattis odio maximus id. Donec sodales pellentesque felis, sed tempus quam imperdiet quis. Fusce egestas elit eros, non varius risus fermentum vel. Nam auctor scelerisque nisi, euismod rhoncus arcu volutpat non. Morbi nec mauris vitae mauris scelerisque maximus. Sed cursus nisi a lorem."
	
	},
	{
		name:"Minnewaska State Park Reserve, New fjf",
	image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2018%2F05%2Fdry-tortugas-national-park-florida-SCENICCAMP0118.jpg",
	description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at semper dui. Aenean a mauris pulvinar, auctor lectus a, tincidunt risus. Sed sodales magna purus, eget mattis odio maximus id. Donec sodales pellentesque felis, sed tempus quam imperdiet quis. Fusce egestas elit eros, non varius risus fermentum vel. Nam auctor scelerisque nisi, euismod rhoncus arcu volutpat non. Morbi nec mauris vitae mauris scelerisque maximus. Sed cursus nisi a lorem."
	
	}	 ]

function seedDB(){
	//REMOVE all camprounds
	Campground.remove({},function(err){
	/*if(err)
		{
			console.log(err);
		}
	console.log("removed campgrounds");
		
	data.forEach(function(seed)
	{
		Campground.create(seed,function(err,campground)
		{
			if(err)
				{
					console.log(err)
				}
			else{
				console.log("added a campground");
				//create a coment
				Comment.create({
					text:"This is a great,but I wish it had internet",
					author:"Ian"				
				},function(err,comment)
				{	if(err)
					{
						console.log(err);
					}
				 else{
					campground.comments.push(comment);
					campground.save();
					console.log("Created new comment"); 
				 }
				})
			}
		})
	})	
	*/
	});
	
}



module.exports=seedDB;