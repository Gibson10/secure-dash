Template.WIFI.onCreated(function(){
    Meteor.call('getWIFI', (err, connections) => {
        // console.log(connections);

        Session.set('connect3',connections);
	
        }); 
});
// var results = [];


Template.WIFI.helpers({
	connect(){
        
        var session=Session.get('connect3').content;
        session = JSON.parse(session);
        console.log(session);

        for (let i =0; i< session.length; i++){
        }
        // results.push(session)


        // console.log(results);
        // for(i=0;i<results.length; i++){
        //     console.log(results[i]);
        // }
        // console.log(results.length);

		return session;
	}
});

// Template.WIFI.events({
//     "click .shopping-list":function(event){
//         if(event.target.contains('.shopping-list')){
//             event.target.addClass('working');
//         }
        
//         console.log("Hello");
//     }

// })
