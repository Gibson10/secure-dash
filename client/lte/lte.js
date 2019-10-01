Template.LTE.onCreated(function(){
    Meteor.call('getLTE', (err, connections) => {
        // console.log(connections);

        Session.set('connect4',connections);
	
        }); 
});
// var results = [];


Template.LTE.helpers({
	connect(){
        
        var session=Session.get('connect4').content;
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
