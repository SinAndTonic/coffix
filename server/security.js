Orders.permit(['remove','update','insert']).ifHasRole('admin').apply();

Orders.permit('insert').ifLoggedIn().apply();

ItemNames.permit(['remove','insert','update']).ifHasRole('admin').apply();

ExtraItems.permit(['remove','insert','update']).ifHasRole('admin').apply();

OpenTimes.permit(['remove','insert','update']).ifHasRole('admin').apply();