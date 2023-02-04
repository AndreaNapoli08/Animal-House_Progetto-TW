#!/bin/sh

mongoimport --host mongodb --db animalhouse --collection users  	  --type json --file /mongo-seed/users.json    		 	--jsonArray
mongoimport --host mongodb --db animalhouse --collection animals 	  --type json --file /mongo-seed/animals.json  		 	--jsonArray
mongoimport --host mongodb --db animalhouse --collection products 	  --type json --file /mongo-seed/products.json 		 	--jsonArray
mongoimport --host mongodb --db animalhouse --collection scores		  --type json --file /mongo-seed/scores.json 	 		--jsonArray
mongoimport --host mongodb --db animalhouse --collection headquarters --type json --file /mongo-seed/headquarters.json 	  	--jsonArray
mongoimport --host mongodb --db animalhouse --collection services 	  --type json --file /mongo-seed/servicesCalendar.json 	--jsonArray
mongoimport --host mongodb --db animalhouse --collection threads 	  --type json --file /mongo-seed/threads.json 			--jsonArray
