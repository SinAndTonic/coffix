Orders.permit(['remove','update','insert']).ifHasRole('admin').apply();

Orders.permit('insert').ifLoggedIn().apply();

ItemNames.permit(['remove','insert','update']).ifHasRole('admin').apply();

Books.permit(['remove','insert','update']).ifLoggedIn().apply();