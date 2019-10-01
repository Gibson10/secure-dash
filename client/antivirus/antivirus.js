Template.Antivirus.onCreated(function(){
    Meteor.call('getAntivirus', (err, connections) => {
        // console.log(connections);

        Session.set('connect5',connections);
	
        }); 
});
var results = [];

// Artist Helpers
Template.Antivirus.helpers({
	connect(){
        
        var session=Session.get('connect5').content;
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